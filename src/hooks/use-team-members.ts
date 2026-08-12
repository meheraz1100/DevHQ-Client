import { useQuery } from '@tanstack/react-query';
import { teamService } from '@/src/services/team.service';

export function useTeamMembers(teamId: string) {
  return useQuery({
    queryKey: ['team-members', teamId],
    queryFn: async () => {
      const res = await teamService.getTeamById(teamId);

      return res?.data?.members ?? [];
    },
    enabled: !!teamId,
  });
}