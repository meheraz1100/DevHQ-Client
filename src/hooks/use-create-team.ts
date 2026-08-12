import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

import { teamService } from '@/src/services/team.service';

export function useCreateTeam() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: teamService.createTeam,

    onSuccess: () => {
      toast.success('Team created successfully.');

      queryClient.invalidateQueries({
        queryKey: ['teams'],
      });
    },

    onError: (error: any) => {
      toast.error(
        error.response?.data?.message ??
          'Failed to create team.',
      );
    },
  });
}