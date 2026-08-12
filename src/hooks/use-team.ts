import { useQuery } from '@tanstack/react-query';

import { teamService } from '@/src/services/team.service';

export function useTeam(teamId: string) {
  return useQuery({
    queryKey: ['team', teamId],
    queryFn: () => teamService.getTeamById(teamId),
    enabled: !!teamId,
  });
}