'use client';

import { useAuthStore } from '@/lib/store';
import { 
  TrendingUp, 
  Users, 
  ShieldCheck, 
  Target, 
  ArrowUpRight,
  Clock
} from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

// Mock data matching the layout
const stats = [
  { label: 'Collab Trending', value: '24+', sub: 'Categories', icon: TrendingUp, dark: true },
  { label: 'Total Creators', value: '1.2k', sub: 'Verified', icon: Users, dark: false },
  { label: 'Secure Deals', value: '14+', sub: 'Active', icon: ShieldCheck, dark: false },
  { label: 'Success Rate', value: '98%', sub: 'Completed', icon: Target, dark: false },
];

const topCreators = [
  { id: 1, name: 'Marques Brownlee', niche: 'Tech Reviewer', img: 'https://images.unsplash.com/photo-1555212697-194d41bbe7f5?q=80&w=400&h=300&fit=crop' },
  { id: 2, name: 'Sarah Jenkins', niche: 'Lifestyle Vlog', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&h=300&fit=crop' },
  { id: 3, name: 'David Chen', niche: 'Gaming', img: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=400&h=300&fit=crop' },
  { id: 4, name: 'Emma Wilson', niche: 'Education', img: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=400&h=300&fit=crop' },
  { id: 5, name: 'Alex Rivera', niche: 'Fitness', img: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=400&h=300&fit=crop' },
  { id: 6, name: 'Mia Wong', niche: 'Finance', img: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff0f?q=80&w=400&h=300&fit=crop' },
];

const newsUpdates = [
  { id: 1, title: 'Structured Collab Programs to Improve Audience Retention', tag: 'Strategy', time: '10 min read', img: 'https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=150&h=100&fit=crop' },
  { id: 2, title: 'Comprehensive Approaches to Brand Deals for Long Term Growth', tag: 'Monetization', time: '20 min read', img: 'https://images.unsplash.com/photo-1556761175-5973dc0f32d7?q=80&w=150&h=100&fit=crop' },
  { id: 3, title: 'Improving Overall Video Quality Through Evidence Based Practices', tag: 'Production', time: '15 min read', img: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=150&h=100&fit=crop' },
  { id: 4, title: 'Understanding YouTube Algorithm Changes This Month', tag: 'Analytics', time: '5 min read', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=150&h=100&fit=crop' },
];

export default function DashboardPage() {
  const { user } = useAuthStore();

  return (
    <div className="max-w-[1600px] mx-auto pb-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-1">Welcome Back,</h1>
        <h2 className="text-3xl font-bold text-slate-900">{user?.name || 'Creator'}</h2>
      </div>

      {/* STATS ROW */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {stats.map((stat, idx) => (
          <div 
            key={idx} 
            className={cn(
              "p-6 rounded-[24px] shadow-sm flex flex-col justify-between h-[160px] transition-transform hover:-translate-y-1",
              stat.dark ? "bg-[#0B3022] text-white" : "bg-white text-slate-900"
            )}
          >
            <div className="flex justify-between items-start">
              <span className={cn("font-semibold", stat.dark ? "text-white/90" : "text-slate-500")}>
                {stat.label}
              </span>
              <div className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center",
                stat.dark ? "bg-[#84CC16] text-[#0B3022]" : "bg-slate-50 text-slate-400 border border-slate-100"
              )}>
                <stat.icon className="w-4 h-4" />
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-1">{stat.value}</div>
              <div className={cn("text-xs font-medium", stat.dark ? "text-white/60" : "text-slate-400")}>
                {stat.sub}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* MAIN CONTENT: TOP CREATORS */}
        <div className="xl:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-slate-900">Top Creators</h3>
            <Link href="/discover" className="text-sm font-semibold text-slate-400 hover:text-slate-600">
              Show all (12)
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {topCreators.map((creator) => (
              <div key={creator.id} className="bg-white rounded-[24px] overflow-hidden shadow-sm hover:shadow-md transition-shadow group relative">
                <div className="h-40 w-full overflow-hidden">
                  <img src={creator.img} alt={creator.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                {/* Expand icon on hover */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="w-4 h-4 text-slate-900" />
                </div>
                <div className="p-5">
                  <h4 className="font-bold text-slate-900 mb-1">{creator.name}</h4>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold px-2 py-1 bg-slate-50 text-slate-500 rounded-md">
                      {creator.niche}
                    </span>
                    <div className="flex -space-x-2">
                      {[1,2,3].map(i => (
                        <img key={i} src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${creator.id}${i}`} className="w-6 h-6 rounded-full border-2 border-white bg-slate-100" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDEBAR: NEWS UPDATE */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-slate-900">News Update</h3>
            <button className="text-sm font-semibold text-slate-400 hover:text-slate-600">
              Show all (8)
            </button>
          </div>
          
          <div className="space-y-4">
            {newsUpdates.map((news) => (
              <div key={news.id} className="flex gap-4 p-3 bg-white rounded-[20px] shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                <img src={news.img} alt={news.title} className="w-24 h-24 rounded-[16px] object-cover" />
                <div className="flex-1 flex flex-col justify-center py-1 pr-2">
                  <h4 className="text-sm font-bold text-slate-900 leading-snug line-clamp-2 mb-3">
                    {news.title}
                  </h4>
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-bold px-2 py-1 bg-[#84CC16]/20 text-[#166534] rounded-md">
                      {news.tag}
                    </span>
                    <div className="flex items-center gap-1 text-[10px] font-semibold text-slate-400">
                      <Clock className="w-3 h-3" />
                      {news.time}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
