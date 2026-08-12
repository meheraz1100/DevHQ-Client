import { api } from '../lib/axios';

export interface LoginPayload {
  email: string;
  password: string;
}

export interface RegisterPayload {
  name: string;
  username: string;
  email: string;
  password: string;
}

export const authService = {
  register: async (payload: RegisterPayload) => {
    const { data } = await api.post('/auth/register', payload);
    return data;
  },

  login: async (payload: LoginPayload) => {
    const { data } = await api.post('/auth/login', payload);
    return data;
  },

  refresh: async () => {
    const { data } = await api.post('/auth/refresh');
    return data;
  },

  logout: async () => {
    const { data } = await api.post('/auth/logout');
    return data;
  },
};