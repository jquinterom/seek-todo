export interface Task {
  id: number;
  text: string;
  completed: boolean;
}

export type TaskProcess = "create" | "update" | "delete";