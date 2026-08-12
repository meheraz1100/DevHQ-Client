import { useQuery } from '@tanstack/react-query';

import { dashboardService } from '@/src/services/dashboard.service';

export function useDashboard() {
  return useQuery({
    queryKey: ['dashboard'],
    queryFn: dashboardService.getStatistics,
  });
}