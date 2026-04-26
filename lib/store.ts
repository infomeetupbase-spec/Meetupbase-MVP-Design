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
    accessToken?: string;
    youtubeStats?: {
      subscriberCount: string;
      viewCount: string;
      videoCount: string;
    };
  } | null;
  login: (email: string) => void;
  logout: () => void;
  setUser: (user: AuthState['user']) => void;
  updateYoutubeStats: (stats: NonNullable<AuthState['user']>['youtubeStats']) => void;
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
      updateYoutubeStats: (stats) => set((state) => ({
        user: state.user ? { ...state.user, youtubeStats: stats } : null
      })),
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

interface Auction {
  id: string;
  creatorId: string;
  creatorName: string;
  creatorAvatar: string;
  startingBid: number;
  currentBid: number;
  endTime: string;
  status: 'active' | 'ended';
  highestBidderId?: string;
}

interface AuctionState {
  activeAuctions: Auction[];
  startAuction: (auction: Omit<Auction, 'id' | 'status'>) => void;
  placeBid: (auctionId: string, bidderId: string, amount: number) => void;
  endAuction: (auctionId: string) => void;
}

export const useAuctionStore = create<AuctionState>()(
  persist(
    (set) => ({
      activeAuctions: [],
      startAuction: (auction) => set((state) => ({
        activeAuctions: [
          ...state.activeAuctions,
          { ...auction, id: Math.random().toString(36).substring(7), status: 'active' }
        ]
      })),
      placeBid: (auctionId, bidderId, amount) => set((state) => ({
        activeAuctions: state.activeAuctions.map((a) =>
          a.id === auctionId ? { ...a, currentBid: amount, highestBidderId: bidderId } : a
        )
      })),
      endAuction: (auctionId) => set((state) => ({
        activeAuctions: state.activeAuctions.filter((a) => a.id !== auctionId)
      })),
    }),
    {
      name: 'auction-storage',
    }
  )
);
