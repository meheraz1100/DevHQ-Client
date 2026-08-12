import { useQuery } from '@tanstack/react-query';

import { adminMemberService } from '@/src/services/admin-member.service';

export function useAdminMembers() {
  return useQuery({
    queryKey: ['admin-members'],

    queryFn: async () => {
      const res =
        await adminMemberService.getMembers();

      return res?.data ?? [];
    },
  });
}