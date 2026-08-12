import { api } from "@/src/lib/axios";

import { ApiResponse } from "@/src/types/api";
import { Project } from "@/src/types/project";

interface CreateProjectDto {
  name: string;
  slug: string;
  description?: string;
  color?: string;
}

export const projectService = {
  getProjects: async (teamId: string) => {
    const { data } = await api.get<ApiResponse<Project[]>>(
      `/teams/${teamId}/projects`,
    );

    return data;
  },

  createProject: async (teamId: string, payload: CreateProjectDto) => {
    const { data } = await api.post<ApiResponse<Project>>(
      `/teams/${teamId}/projects`,
      payload,
    );

    return data;
  },

  getProjectById: async (teamId: string, projectId: string) => {
    const { data } = await api.get(`/teams/${teamId}/projects/${projectId}`);

    return data.data;
  },

  updateProject: async (
    projectId: string,
    payload: Partial<CreateProjectDto>,
  ) => {
    const { data } = await api.patch<ApiResponse<Project>>(
      `/projects/${projectId}`,
      payload,
    );

    return data;
  },

  deleteProject: async (projectId: string) => {
    const { data } = await api.delete<ApiResponse<null>>(
      `/projects/${projectId}`,
    );

    return data;
  },
  
  createTask: async (
  teamId: string,
  projectId: string,
  payload: {
    title: string;
    description?: string;
    columnId: string;
    priority?: 'LOW' | 'MEDIUM' | 'HIGH' | 'URGENT';
    dueDate?: string;
    assigneeId?: string;
  },
) => {
  const { data } = await api.post(
    `/teams/${teamId}/projects/${projectId}/tasks`,
    payload,
  );

  return data.data;
},
};
