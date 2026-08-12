import { api } from '@/src/lib/axios';

import { ApiResponse } from '@/src/types/api';
import { SupremeAdminDashboard } from '@/src/types/supreme-admin';

export const supremeAdminService = {
  getDashboard: async () => {
    const { data } =
      await api.get<ApiResponse<SupremeAdminDashboard>>(
        '/supreme-admin/dashboard',
      );

    return data;
  },
};