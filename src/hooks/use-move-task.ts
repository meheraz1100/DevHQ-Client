import { useMutation, useQueryClient } from '@tanstack/react-query';

import { taskService } from '@/src/services/task.service';

export function useMoveTask() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      taskId,
      columnId,
      order,
    }: {
      taskId: string;
      columnId: string;
      order: number;
    }) =>
      taskService.moveTask(taskId, {
        columnId,
        order,
      }),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['board'],
      });
    },
  });
}