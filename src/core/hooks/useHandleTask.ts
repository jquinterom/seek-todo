import { useState } from "react";
import { Task, TaskProcess } from "../types/taskType";

const newTaskIsValid = (task: string) => task.trim().length > 0;

const useHandleTask = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");
  const [taskProcess, setTaskProcess] = useState<TaskProcess>("create");
  const [taskToUpdate, setTaskToUpdate] = useState<Task | null>(null);

  const addTask = () => {
    setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
    setNewTask("");
  };

  const handleUpdate = (id: number, text: string) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, text } : task)));
    setNewTask("");
    setTaskProcess("create");
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
  };

  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleSetTaskToUpdate = (task: Task | null) => {
    setTaskToUpdate(task);
    setTaskProcess("update");
    setNewTask(task?.text ?? "");
  };

  return {
    handleTask,
    tasks,
    newTask,
    setNewTask,
    setTaskProcess,
    handleRemove,
    toggleTask,
    handleSetTaskToUpdate,
  };
};

export default useHandleTask;
