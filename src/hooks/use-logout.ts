import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { authService } from "@/src/services/auth.service";
import { useAuthStore } from "@/src/store/auth.store";

export function useLogout() {
  const router = useRouter();

  return useMutation({
    mutationFn: authService.logout,

    onSuccess: async () => {
      useAuthStore.getState().logout();

      toast.success("Logged out successfully.");

      await authService.logout();

      useAuthStore.getState().logout();

      window.location.href = "/";
    },

    onError: (error) => {
      console.error(error);
      toast.error("Logout failed.");
    },
  });
}
