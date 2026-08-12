import { useQuery } from '@tanstack/react-query';

import { projectService } from '@/src/services/project.service';

export function useProject(
  teamId: string,
  projectId: string,
) {
  return useQuery({
    queryKey: ['project', teamId, projectId],

    queryFn: () =>
      projectService.getProjectById(
        teamId,
        projectId,
      ),

    enabled: !!teamId && !!projectId,
  });
}