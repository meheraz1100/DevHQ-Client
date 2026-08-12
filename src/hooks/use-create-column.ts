import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

import { columnService } from '@/src/services/column.service';

export function useCreateColumn(
  teamId: string,
  projectId: string,
) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: {
      name: string;
      color?: string;
    }) =>
      columnService.create(
        teamId,
        projectId,
        payload,
      ),

    onSuccess: () => {
      toast.success('Column created');

      queryClient.invalidateQueries({
        queryKey: ['board', teamId, projectId],
      });
    },

    onError: () => {
      toast.error('Failed to create column');
    },
  });
}