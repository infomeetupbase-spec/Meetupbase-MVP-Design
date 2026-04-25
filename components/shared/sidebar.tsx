'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  Search, 
  Users, 
  MessageSquare, 
  Bell, 
  User, 
  Settings,
  ChevronLeft,
  ChevronRight,
  Video,
  Coins
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useUIStore, useAuthStore } from '@/lib/store';

const navItems = [
  { label: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { label: 'Discover', href: '/discover', icon: Search },
  { label: 'Collaborations', href: '/collaborations', icon: Users },
  { label: 'Messages', href: '/messages', icon: MessageSquare },
  { label: 'Notifications', href: '/notifications', icon: Bell },
  { label: 'Profile', href: '/profile', icon: User },
];

export function Sidebar() {
  const pathname = usePathname();
  const { isSidebarOpen, toggleSidebar } = useUIStore();
  const { user } = useAuthStore();

  return (
    <aside 
      className={cn(
        "fixed inset-y-0 left-0 z-50 flex flex-col bg-sidebar shadow-[4px_0_24px_rgba(0,0,0,0.02)] transition-all duration-300",
        isSidebarOpen ? "w-[260px]" : "w-[80px]"
      )}
    >
      <div className="flex h-16 items-center px-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="p-2 bg-vibrant rounded-lg">
            <Video className="w-5 h-5 text-white" />
          </div>
          {isSidebarOpen && (
            <span className="text-xl font-bold tracking-tight text-gradient">
              Studio Collab
            </span>
          )}
        </Link>
      </div>

      <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-4 px-4 py-3 transition-all duration-200 group relative",
                isActive 
                  ? "bg-primary text-white rounded-full" 
                  : "text-slate-500 hover:bg-slate-50 hover:text-slate-900 rounded-xl"
              )}
            >
              <item.icon className={cn(
                "w-5 h-5 transition-colors",
                isActive ? "text-white" : "group-hover:text-slate-900"
              )} />
              {isSidebarOpen && (
                <span className="text-[15px]">{item.label}</span>
              )}
              {!isSidebarOpen && (
                <div className="absolute left-14 bg-slate-900 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity">
                  {item.label}
                </div>
              )}
            </Link>
          );
        })}
      </nav>
      
      {isSidebarOpen && (
        <div className="px-6 py-5 mx-4 mb-4 bg-gradient-to-br from-[#0B3022] to-[#166534] rounded-[24px] text-white overflow-hidden relative group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
          <div className="relative z-10 space-y-3">
            <div className="text-white/80 uppercase tracking-widest text-[10px] font-bold">
              Upgrade to Premium
            </div>
            <p className="text-xs text-white/60 mb-4">Go Pro to unlock all features</p>
            <Link 
              href="/profile" 
              className="flex items-center justify-between w-full py-2.5 px-4 bg-[#082218] text-white text-xs font-bold rounded-full hover:bg-black/20 transition-colors border border-white/10"
            >
              <span>Upgrade Now</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}

      <div className="p-4 bg-slate-50/50 mt-auto">
        <button
          onClick={toggleSidebar}
          className="flex items-center w-full gap-4 px-3 py-3 text-slate-500 hover:bg-slate-50 hover:text-slate-900 rounded-xl transition-all duration-200"
        >
          {isSidebarOpen ? (
            <>
              <ChevronLeft className="w-5 h-5" />
              <span className="text-[15px]">Collapse</span>
            </>
          ) : (
            <ChevronRight className="mx-auto w-5 h-5" />
          )}
        </button>
      </div>
    </aside>
  );
}
