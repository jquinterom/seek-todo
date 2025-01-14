import { TaskModel } from "@/core/models/TaskModel";

const addTaskToLocalStorage = (task: TaskModel, userId: string) => {
  const keyTasks = "tasks" + userId;
  
  const tasks = JSON.parse(localStorage.getItem(keyTasks) || "[]");
  tasks.push(task);
  localStorage.setItem(keyTasks, JSON.stringify(tasks));
};

const updateTaskInLocalStorage = (tasks: TaskModel[], userId: string) => {
  const keyTasks = "tasks" + userId;
  localStorage.setItem(keyTasks, JSON.stringify(tasks));
};

const deleteTaskFromLocalStorage = (id: number, userId: string) => {
  const keyTasks = "tasks" + userId;
  const tasks = JSON.parse(localStorage.getItem(keyTasks) || "[]");
  const index = tasks.findIndex((task: { id: number; }) => task.id === id);
  tasks.splice(index, 1);
  localStorage.setItem(keyTasks, JSON.stringify(tasks));
};

const getTasksByUser = (userId: string): Promise<TaskModel[]> => {
  return new Promise<TaskModel[]>((resolve) => {
    setTimeout(() => {
      const tasksKey = "tasks" + userId;
      const tasks: TaskModel[] = localStorage.getItem(tasksKey)
        ? JSON.parse(localStorage.getItem(tasksKey) || "[]")
        : [];
      resolve(tasks);
    }, 1000);
  });
};

export const mockTaskService = {
  addTaskToLocalStorage,
  updateTaskInLocalStorage,
  deleteTaskFromLocalStorage,
  getTasksByUser,
};