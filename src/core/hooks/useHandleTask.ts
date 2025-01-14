/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { TaskModel, TaskProcess, TaskStatus } from "../models/TaskModel";
import { useGetTasks } from "./useGetTasks";
import { mockTaskService } from "../lib/services/mockTaskService";
import { useUserStore } from "../store/taskStore";

const newTaskIsValid = (task: string) => task.trim().length > 0;

const useHandleTask = () => {
  const [tasks, setTasks] = useState<TaskModel[]>([]);
  const [newTask, setNewTask] = useState("");
  const [taskProcess, setTaskProcess] = useState<TaskProcess>("create");
  const [taskToUpdate, setTaskToUpdate] = useState<TaskModel | null>(null);
  const [loading, setLoading] = useState(false);
  const { user } = useUserStore();

  const { fetchTasksByUser } = useGetTasks(user.email);

  const addTask = () => {
    const localTask: TaskModel = {
      id: Date.now(),
      text: newTask,
      status: "pending",
    };
    setTasks([...tasks, localTask]);
    mockTaskService.addTaskToLocalStorage(localTask, user.email);
    setNewTask("");
  };

  const handleUpdate = (id: number, text: string, status: TaskStatus) => {
    const newTasks = tasks.map((task) =>
      task.id === id ? { ...task, text, status } : task
    );
    setTasks(newTasks);
    setNewTask("");
    setTaskProcess("create");
    mockTaskService.updateTaskInLocalStorage(newTasks, user.email);
  };

  const handleTask = (e: React.FormEvent) => {
    e.preventDefault();

    if (!newTaskIsValid(newTask)) return;

    if (taskProcess === "create") {
      addTask();
      return;
    }

    if (taskProcess === "update") {
      const id = taskToUpdate?.id ?? 0;
      handleUpdate(id, newTask, taskToUpdate?.status ?? "pending");
      return;
    }
  };

  const handleRemove = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
    mockTaskService.deleteTaskFromLocalStorage(id, user.email);
    setNewTask("")
    setTaskProcess("create");
    setTaskToUpdate(null);
  };

  const toggleTask = (id: number) => {
    const newTasks: TaskModel[] = tasks.map((task) =>
      task.id === id
        ? {
            ...task,
            status: task.status === "completed" ? "pending" : "completed",
          }
        : task
    );
    setTasks(newTasks);
    mockTaskService.updateTaskInLocalStorage(newTasks, user.email);
  };

  const toggleTaskToInProgress = (id: number) => {
    const newTasks: TaskModel[] = tasks.map((task) =>
      task.id === id
        ? {
            ...task,
            status: "in-progress",
          }
        : task
    );

    setTasks(newTasks);
    mockTaskService.updateTaskInLocalStorage(newTasks, user.email);
  };

  const handleSetTaskToUpdate = (task: TaskModel | null) => {
    setTaskToUpdate(task);
    setTaskProcess("update");
    setNewTask(task?.text ?? "");
  };

  const getTasksByUser = async () => {
    setLoading(true);
    try {
      const response = await fetchTasksByUser();
      setTasks(response);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getTasksByUser();
  }, []);

  return {
    handleTask,
    tasks,
    newTask,
    setNewTask,
    handleRemove,
    toggleTask,
    handleSetTaskToUpdate,
    loading,
    toggleTaskToInProgress
  };
};

export default useHandleTask;
