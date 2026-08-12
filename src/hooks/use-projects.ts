import { useQuery } from '@tanstack/react-query';

import { projectService } from '@/src/services/project.service';

export function useProjects(teamId: string) {
  return useQuery({
    queryKey: ['projects', teamId],
    queryFn: () => projectService.getProjects(teamId),
    enabled: !!teamId,
  });
}