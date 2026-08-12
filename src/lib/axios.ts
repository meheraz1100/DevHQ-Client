import axios from 'axios';

import { useAuthStore } from '../store/auth.store';
import { refreshAccessToken } from './refresh-token';

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
});


api.interceptors.response.use(
  (response) => response,

  async (error) => {
    const originalRequest = error.config;

    // refresh endpoint-এর জন্য interceptor চালাবে না
    if (originalRequest?.url?.includes('/auth/refresh')) {
      useAuthStore.getState().logout();
      return Promise.reject(error);
    }

    if (
      error.response?.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      try {
        const token = await refreshAccessToken();

        if (!token) {
          window.location.href = '/login';
          return Promise.reject(error);
        }

        originalRequest.headers.Authorization = `Bearer ${token}`;

        return api(originalRequest);
      } catch {
        useAuthStore.getState().logout();
        window.location.href = '/login';
      }
    }

    return Promise.reject(error);
  },
);

api.interceptors.request.use((config) => {
  const token =
    useAuthStore.getState().accessToken;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});