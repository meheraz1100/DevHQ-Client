import { api } from '@/src/lib/axios';

import { ApiResponse } from '@/src/types/api';
import { DashboardData } from '@/src/types/dashboard';

export const dashboardService = {
  getStatistics: async () => {
    const { data } =
      await api.get<ApiResponse<DashboardData>>('/dashboard');

    return data;
  },
};