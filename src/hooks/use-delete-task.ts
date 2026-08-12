import { useMutation, useQueryClient } from '@tanstack/react-query';

import { taskService } from '@/src/services/task.service';

export function useDeleteTask() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (taskId: string) =>
      taskService.deleteTask(taskId),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['board'],
      });
    },
  });
}