import { useQuery } from '@tanstack/react-query';

import { supremeAdminService } from '@/src/services/supreme-admin.service';

export function useSupremeAdminDashboard() {
  return useQuery({
    queryKey: ['supreme-admin-dashboard'],

    queryFn: async () => {
      const response =
        await supremeAdminService.getDashboard();

      return response.data;
    },

    staleTime: 30 * 1000,
  });
}