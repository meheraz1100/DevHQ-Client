import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';

import { teamService } from '@/src/services/team.service';

export function useInviteMember(teamId: string) {
  return useMutation({
    mutationFn: (payload: {
      username: string;
      role: 'MEMBER' | 'ADMIN';
    }) =>
      teamService.inviteMember(teamId, payload),

    onSuccess() {
      toast.success('Invitation sent successfully.');
    },

    onError(error: any) {
      toast.error(
        error.response?.data?.message ??
          'Failed to send invitation.',
      );
    },
  });
}