/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Task, TaskProcess } from "../types/taskType";
import { useGetTasks } from "./useGetTasks";
import { mockTaskService } from "../lib/services/mockTaskService";
import { useUserStore } from "../store/taskStore";

const newTaskIsValid = (task: string) => task.trim().length > 0;

const useHandleTask = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");
  const [taskProcess, setTaskProcess] = useState<TaskProcess>("create");
  const [taskToUpdate, setTaskToUpdate] = useState<Task | null>(null);
  const [loading, setLoading] = useState(false);
  const { user } = useUserStore()

  const { fetchTasksByUser } = useGetTasks(user.email);

  const addTask = () => {
    const localTask = { id: Date.now(), text: newTask, completed: false };
    setTasks([...tasks, localTask]);
    mockTaskService.addTaskToLocalStorage(localTask, user.email)
    setNewTask("");
  };

  const handleUpdate = (id: number, text: string) => {
    const newTasks = tasks.map((task) => (task.id === id ? { ...task, text } : task))
    setTasks(newTasks);
    setNewTask("");
    setTaskProcess("create");
    mockTaskService.updateTaskInLocalStorage(newTasks, user.email)
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
      handleUpdate(id, newTask);
      return;
    }
  };

  const handleRemove = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
    mockTaskService.deleteTaskFromLocalStorage(id, user.email)
  };

  const toggleTask = (id: number) => {
    const newTasks = tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task))
    setTasks(newTasks);
    mockTaskService.updateTaskInLocalStorage(newTasks, user.email)
  };

  const handleSetTaskToUpdate = (task: Task | null) => {
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
  };
};

export default useHandleTask;
