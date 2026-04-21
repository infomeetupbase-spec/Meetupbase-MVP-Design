import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UIState {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  setSidebarOpen: (open: boolean) => void;
}

export const useUIStore = create<UIState>((set) => ({
  isSidebarOpen: true,
  toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
  setSidebarOpen: (open) => set({ isSidebarOpen: open }),
}));

interface AuthState {
  isAuthenticated: boolean;
  user: {
    id: string;
    name: string;
    avatar: string;
    role: string;
  } | null;
  login: (email: string) => void;
  logout: () => void;
  setUser: (user: any) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      user: null,
      login: (email: string) => set({
        isAuthenticated: true,
        user: {
          id: 'u1',
          name: 'Collab User',
          avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Test',
          role: 'Content Creator',
        }
      }),
      logout: () => set({ isAuthenticated: false, user: null }),
      setUser: (user) => set({ user }),
    }),
    {
      name: 'auth-storage',
    }
  )
);
