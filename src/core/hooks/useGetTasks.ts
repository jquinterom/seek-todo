import { mockTaskService } from "../lib/services/mockTaskService";

export const useGetTasks = (userId: string) => {
  const fetchTasksByUser = () => mockTaskService.getTasksByUser(userId);

  return { fetchTasksByUser };
};