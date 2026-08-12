import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

import { projectService } from '@/src/services/project.service';

export function useCreateTask(
  teamId: string,
  projectId: string,
) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (
      payload: {
        title: string;
        description?: string;
        columnId: string;
        priority?: 'LOW' | 'MEDIUM' | 'HIGH' | 'URGENT';
        dueDate?: string;
        assigneeId?: string;
      },
    ) =>
      projectService.createTask(
        teamId,
        projectId,
        payload,
      ),

    onSuccess: () => {
      toast.success('Task created');

      queryClient.invalidateQueries({
        queryKey: [
          'board',
          teamId,
          projectId,
        ],
      });
    },
  });
}