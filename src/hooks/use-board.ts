import { useQuery } from '@tanstack/react-query';

import { boardService } from '@/src/services/board.service';

export function useBoard(
  teamId: string,
  projectId: string,
) {
  return useQuery({
    queryKey: ['board', teamId, projectId],

    queryFn: () =>
      boardService.getBoard(teamId, projectId),

    enabled: !!teamId && !!projectId,
  });
}