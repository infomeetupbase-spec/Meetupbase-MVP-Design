'use client';

import { Search, Bell, Settings, HelpCircle } from 'lucide-react';
import { useAuthStore, useUIStore } from '@/lib/store';
import { cn } from '@/lib/utils';

export function Navbar() {
  const { user } = useAuthStore();
  const { isSidebarOpen } = useUIStore();

  return (
    <header 
      className={cn(
        "fixed top-0 right-0 z-40 h-16 bg-navbar/80 backdrop-blur-md border-b border-border transition-all duration-300",
        isSidebarOpen ? "left-[260px]" : "left-[80px]"
      )}
    >
      <div className="flex items-center justify-between h-full px-8">
        <div className="flex-1 max-w-xl">
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-primary transition-colors" />
            <input 
              type="text" 
              placeholder="Search creators, collaborations, messages..." 
              className="w-full pl-10 pr-4 py-2 bg-slate-100/50 border-none rounded-2xl text-[14px] focus:ring-2 focus:ring-primary/20 transition-all outline-none"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-accent rounded-full border-2 border-white" />
          </button>
          
          <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors">
            <HelpCircle className="w-5 h-5" />
          </button>

          <div className="h-8 w-[1px] bg-border mx-2" />

          <div className="flex items-center gap-3 pl-2 group cursor-pointer">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-semibold text-slate-900 group-hover:text-primary transition-colors">{user?.name}</p>
              <p className="text-[11px] text-slate-500">{user?.role}</p>
            </div>
            <div className="relative">
              <img 
                src={user?.avatar} 
                alt={user?.name} 
                className="w-9 h-9 rounded-xl border border-border group-hover:border-primary transition-all object-cover"
              />
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
