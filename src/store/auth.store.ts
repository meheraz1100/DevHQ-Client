import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { User } from '../types/auth';

interface AuthState {
  accessToken: string | null;
  user: User | null;

  setAccessToken: (token: string | null) => void;
  setUser: (user: User | null) => void;

  login: (user: User, token: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      accessToken: null,
      user: null,

      setAccessToken: (token) =>
        set({
          accessToken: token,
        }),

      setUser: (user) =>
        set({
          user,
        }),

      login: (user, token) =>
        set({
          user,
          accessToken: token,
        }),

      logout: () =>
        set({
          user: null,
          accessToken: null,
        }),
    }),
    {
      name: 'devhq-auth',
    },
  ),
);