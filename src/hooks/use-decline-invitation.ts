import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { teamService } from '@/src/services/team.service';

export function useDeclineInvitation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: teamService.declineInvitation,

    onSuccess() {
      toast.success('Invitation declined.');

      queryClient.invalidateQueries({
        queryKey: ['my-invitations'],
      });
    },

    onError(error: any) {
      toast.error(
        error.response?.data?.message ??
          'Failed to decline invitation.',
      );
    },
  });
}