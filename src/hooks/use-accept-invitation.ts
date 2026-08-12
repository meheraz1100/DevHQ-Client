import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { teamService } from '@/src/services/team.service';

export function useAcceptInvitation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: teamService.acceptInvitation,

    onSuccess() {
      toast.success('Invitation accepted.');

      queryClient.invalidateQueries({
        queryKey: ['my-invitations'],
      });

      queryClient.invalidateQueries({
        queryKey: ['teams'],
      });
    },

    onError(error: any) {
      toast.error(
        error.response?.data?.message ??
          'Failed to accept invitation.',
      );
    },
  });
}