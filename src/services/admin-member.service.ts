import { api } from '@/src/lib/axios';

import { ApiResponse } from '@/src/types/api';
import { AdminMember } from '@/src/types/admin-member';

export const adminMemberService = {
  getMembers: async () => {
    const { data } =
      await api.get<ApiResponse<AdminMember[]>>(
        '/teams/admin/members',
      );

    return data;
  },
};