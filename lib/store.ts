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
    credits: number;
  } | null;
  login: (email: string) => void;
  logout: () => void;
  setUser: (user: any) => void;
  addCredits: (amount: number) => void;
  deductCredits: (amount: number) => boolean;
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
          credits: 50,
        }
      }),
      logout: () => set({ isAuthenticated: false, user: null }),
      setUser: (user) => set({ user }),
      addCredits: (amount) => set((state) => ({
        user: state.user ? { ...state.user, credits: state.user.credits + amount } : null
      })),
      deductCredits: (amount) => {
        let success = false;
        set((state) => {
          if (state.user && state.user.credits >= amount) {
            success = true;
            return { user: { ...state.user, credits: state.user.credits - amount } };
          }
          return state;
        });
        return success;
      },
    }),
    {
      name: 'auth-storage',
    }
  )
);
