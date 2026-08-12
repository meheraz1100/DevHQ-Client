import { api } from "@/src/lib/axios";

import { ApiResponse } from "@/src/types/api";
import { Team } from "@/src/types/team";
import { UpdateTaskPayload } from '@/src/types/task';

export const taskService = {
  getTeams: async () => {
    const { data } = await api.get<ApiResponse<Team[]>>("/teams");

    return data;
  },

  createTeam: async (payload: {
    name: string;
    slug: string;
    description?: string;
  }) => {
    const { data } = await api.post<ApiResponse<Team>>("/teams", payload);

    return data;
  },
  getTeamById: async (teamId: string) => {
    const { data } = await api.get(`/teams/${teamId}`);

    return data;
  },
  moveTask: async (
    taskId: string,
    payload: {
      columnId: string;
      order: number;
    },
  ) => {
    const { data } = await api.patch(`/tasks/${taskId}/move`, payload);

    return data;
  },
  updateTask: async (
  taskId: string,
  payload: UpdateTaskPayload,
) => {
  const { data } = await api.patch(
    `/tasks/${taskId}`,
    payload,
  );

  return data;
},
deleteTask(taskId: string) {
  return api.delete(`/tasks/${taskId}`);
}
};
