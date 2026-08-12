import { api } from '@/src/lib/axios';

import { ApiResponse } from '@/src/types/api';
import { Board } from '@/src/types/board';

export const boardService = {
  getBoard: async (
    teamId: string,
    projectId: string,
  ) => {
    const { data } = await api.get<ApiResponse<Board>>(
      `/teams/${teamId}/projects/${projectId}/board`,
    );

    return data;
  },
};