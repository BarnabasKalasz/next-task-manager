import { useMutation, useQueryClient } from "react-query"
import { updateTask } from "../lib/api";

export const useUpdateTaskStatus = () => {
  const queryClient = useQueryClient();

  return useMutation(async ({ taskId, newStatus, boardId }: any) => {
    return updateTask(taskId, newStatus, boardId)
  }, {
    onSuccess: (data, { boardId }) => {
      queryClient.invalidateQueries(['tasks', boardId]);
    }
  })
}