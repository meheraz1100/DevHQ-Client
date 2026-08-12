import { api } from '@/src/lib/axios';

export const columnService = {
  create: async (
    teamId: string,
    projectId: string,
    payload: {
      name: string;
      color?: string;
    },
  ) => {
    const { data } = await api.post(
      `/teams/${teamId}/projects/${projectId}/columns`,
      payload,
    );

    return data;
  },
};