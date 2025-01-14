export type TaskStatus = "pending" | "in-progress" | "completed";

export interface TaskModel {
  id: number;
  text: string;
  status: TaskStatus;
}

export type TaskProcess = "create" | "update" | "delete";