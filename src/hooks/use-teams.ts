import { useQuery } from '@tanstack/react-query';

import { teamService } from '@/src/services/team.service';

export function useTeams() {
  return useQuery({
    queryKey: ['teams'],
    queryFn: teamService.getTeams,
  });
}