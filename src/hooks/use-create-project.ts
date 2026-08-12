import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

import { projectService } from '@/src/services/project.service';

interface CreateProjectDto {
  name: string;
  slug: string;
  description?: string;
  color?: string;
}

export function useCreateProject(teamId: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: CreateProjectDto) =>
      projectService.createProject(teamId, payload),

    onSuccess: () => {
      toast.success('Project created successfully.');

      queryClient.invalidateQueries({
        queryKey: ['projects', teamId],
      });
    },

    onError: (error: any) => {
      toast.error(
        error.response?.data?.message ??
          'Failed to create project.',
      );
    },
  });
}