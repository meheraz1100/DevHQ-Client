import { api } from './axios';

import { useAuthStore } from '../store/auth.store';

export async function refreshAccessToken() {
  try {
    const response =
      await api.post('/auth/refresh');

    const accessToken =
      response.data.data.accessToken;

    useAuthStore
      .getState()
      .setAccessToken(accessToken);

    return accessToken;
  } catch {
    useAuthStore.getState().logout();

    return null;
  }
}