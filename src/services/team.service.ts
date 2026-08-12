import { api } from '../lib/axios';
import { Team } from '../types/team';
import { ApiResponse } from '../types/api';

export const teamService = {
  getTeams: async () => {
    const { data } = await api.get<ApiResponse<Team[]>>('/teams');
    return data;
  },

  createTeam: async (payload: {
    name: string;
    slug: string;
    description?: string;
  }) => {
    const { data } = await api.post('/teams', payload);
    return data;
  },
  getTeamById: async (id: string) => {
  const { data } = await api.get(`/teams/${id}`);
  return data;
},
inviteMember: async (
  teamId: string,
  payload: {
    username: string;
    role: 'MEMBER' | 'ADMIN';
  },
) => {
  const { data } = await api.post(
    `/teams/${teamId}/invitations`,
    payload,
  );

  return data;
},
getMyInvitations: async () => {
  const { data } = await api.get('/teams/invitations/me');

  return data;
},
acceptInvitation: async (token: string) => {
  const { data } = await api.post(
    '/teams/invitations/accept',
    {
      token,
    },
  );

  return data;
},

declineInvitation: async (
  invitationId: string,
) => {
  const { data } = await api.delete(
    `/teams/invitations/${invitationId}`,
  );

  return data;
},
};