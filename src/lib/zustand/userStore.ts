import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface UserState {
  user: any | null;
  isAuthenticated: boolean;
  setUser: (userData: any) => void;
  logout: () => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      setUser: (userData) => set({ user: userData, isAuthenticated: true }),
      logout: () => set({ user: null, isAuthenticated: false }),
    }),
    {
      name: "user-storage", // Tên key trong localStorage
      storage: createJSONStorage(() => localStorage), // Tự động lưu và đồng bộ với localStorage
    },
  ),
);
