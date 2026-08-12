import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

import { taskService } from '@/src/services/task.service';
import { UpdateTaskPayload } from '@/src/types/task';

export function useUpdateTask(
  teamId: string,
  projectId: string,
  onSuccess?: () => void,
) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      taskId,
      payload,
    }: {
      taskId: string;
      payload: UpdateTaskPayload;
    }) => taskService.updateTask(taskId, payload),

    onSuccess: () => {
      toast.success('Task updated');

      queryClient.invalidateQueries({
        queryKey: ['board', teamId, projectId],
      });

      onSuccess?.();
    },
  });
}