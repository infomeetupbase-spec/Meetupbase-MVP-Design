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
  Video
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useUIStore } from '@/lib/store';

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

  return (
    <aside 
      className={cn(
        "fixed inset-y-0 left-0 z-50 flex flex-col bg-sidebar border-r border-border transition-all duration-300",
        isSidebarOpen ? "w-[260px]" : "w-[80px]"
      )}
    >
      <div className="flex h-16 items-center px-6 border-b border-border">
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
                "flex items-center gap-4 px-3 py-3 rounded-xl transition-all duration-200 group relative",
                isActive 
                  ? "bg-primary/10 text-primary font-semibold" 
                  : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
              )}
            >
              <item.icon className={cn(
                "w-5 h-5 transition-colors",
                isActive ? "text-primary" : "group-hover:text-slate-900"
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

      <div className="p-4 border-t border-border">
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
