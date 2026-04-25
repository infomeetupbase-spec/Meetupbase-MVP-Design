'use client';

import { Search, Filter, Star, ArrowRight, Coins, TrendingUp, Award, Users, Zap, Eye, Crown, Flame } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { useAuthStore } from '@/lib/store';

const categories = ['All', 'Health care', 'Environment', 'Security', 'Relationship', 'Purpose', 'Tech', 'Gaming', 'Finance', 'Education', 'Fitness', 'Lifestyle'];

const featuredCreator = {
  name: 'Marques Brownlee',
  handle: '@mkbhd',
  avatar: 'https://images.unsplash.com/photo-1555212697-194d41bbe7f5?q=80&w=800&h=400&fit=crop',
  subscribers: '18.5M',
  niche: 'Tech / Gadgets',
  rating: 4.9,
  bio: 'Quality tech reviews, unboxing, and deep dives into the latest consumer technology. Known for honest, detailed analysis.',
  totalCollabs: 156,
  avgViews: '8.2M',
};

const creators = [
  { id: '1', name: 'Marques Brownlee', handle: '@mkbhd', avatar: 'https://images.unsplash.com/photo-1555212697-194d41bbe7f5?q=80&w=400&h=300&fit=crop', subscribers: '18.5M', niche: 'Tech / Gadgets', rating: 4.9, recentCollabs: 12, isAvailable: true, creditCost: 10 },
  { id: '2', name: 'MrBeast', handle: '@mrbeast', avatar: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=400&h=300&fit=crop', subscribers: '240M', niche: 'Entertainment', rating: 5.0, recentCollabs: 4, isAvailable: false, creditCost: 25 },
  { id: '3', name: 'Graham Stephan', handle: '@grahamstephan', avatar: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff0f?q=80&w=400&h=300&fit=crop', subscribers: '4.5M', niche: 'Finance', rating: 4.8, recentCollabs: 24, isAvailable: true, creditCost: 5 },
  { id: '4', name: 'Sarah Jenkins', handle: '@sarahj', avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&h=300&fit=crop', subscribers: '2.1M', niche: 'Lifestyle', rating: 4.9, recentCollabs: 8, isAvailable: true, creditCost: 5 },
  { id: '5', name: 'Emma Wilson', handle: '@emmaw', avatar: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=400&h=300&fit=crop', subscribers: '1.2M', niche: 'Education', rating: 4.7, recentCollabs: 15, isAvailable: true, creditCost: 5 },
  { id: '6', name: 'Alex Rivera', handle: '@alexr', avatar: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=400&h=300&fit=crop', subscribers: '3.4M', niche: 'Fitness', rating: 4.8, recentCollabs: 20, isAvailable: true, creditCost: 10 },
  { id: '7', name: 'Ali Abdaal', handle: '@aliabdaal', avatar: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=400&h=300&fit=crop', subscribers: '5.8M', niche: 'Productivity', rating: 4.9, recentCollabs: 18, isAvailable: true, creditCost: 10 },
  { id: '8', name: 'Fireship', handle: '@fireship', avatar: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=400&h=300&fit=crop', subscribers: '3.2M', niche: 'Dev / Code', rating: 5.0, recentCollabs: 9, isAvailable: true, creditCost: 10 },
  { id: '9', name: 'Peter McKinnon', handle: '@petermckinnon', avatar: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=400&h=300&fit=crop', subscribers: '6.1M', niche: 'Photography', rating: 4.8, recentCollabs: 14, isAvailable: false, creditCost: 15 },
  { id: '10', name: 'Matt D\'Avella', handle: '@mattdavella', avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=400&h=300&fit=crop', subscribers: '4.0M', niche: 'Minimalism', rating: 4.7, recentCollabs: 11, isAvailable: true, creditCost: 10 },
  { id: '11', name: 'Devin Nash', handle: '@devinnash', avatar: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=400&h=300&fit=crop', subscribers: '800K', niche: 'Marketing', rating: 4.6, recentCollabs: 22, isAvailable: true, creditCost: 5 },
  { id: '12', name: 'Jessica Kobeissi', handle: '@jessicak', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&h=300&fit=crop', subscribers: '1.9M', niche: 'Photography', rating: 4.8, recentCollabs: 7, isAvailable: true, creditCost: 5 },
];

const risingStars = [
  { name: 'TechLinked', subs: '420K', growth: '+180%', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=TechLinked' },
  { name: 'CodeBullet', subs: '380K', growth: '+150%', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=CodeBullet' },
  { name: 'ZenMaster', subs: '290K', growth: '+220%', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ZenMaster' },
  { name: 'FitWithMia', subs: '510K', growth: '+95%', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=FitWithMia' },
];

export default function DiscoverPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const { deductCredits, user } = useAuthStore();
  
  const handleConnect = (creatorId: string, cost: number) => {
    if (!user) return;
    if ((user.credits || 0) < cost) {
      alert('Not enough credits. Please buy more connects in your profile.');
      return;
    }
    if (confirm(`This will deduct ${cost} credits from your balance. Proceed?`)) {
      deductCredits(cost);
      alert(`Connection request sent! ${cost} credits deducted.`);
    }
  };

  return (
    <div className="max-w-[1600px] mx-auto pb-20">
      
      {/* Header & Search */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-slate-900">Top Mentors</h1>
          <p className="text-slate-500 font-medium">Discover and connect with top creators in your niche.</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input type="text" placeholder="Search by name or niche..." className="pl-10 pr-4 py-2 bg-white rounded-xl text-sm shadow-sm focus:ring-2 focus:ring-[#0B3022]/20 outline-none w-[240px] transition-all" />
          </div>
          <button className="p-2 bg-white shadow-sm rounded-xl hover:bg-slate-50 transition-colors">
            <Filter className="w-5 h-5 text-slate-500" />
          </button>
        </div>
      </div>

      {/* Featured Creator */}
      <div className="bg-white rounded-[32px] overflow-hidden shadow-sm mb-10 group">
        <div className="relative h-56 overflow-hidden">
          <img src={featuredCreator.avatar} alt={featuredCreator.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute top-4 left-4">
            <span className="bg-amber-400 text-amber-900 text-xs font-black px-3 py-1.5 rounded-full flex items-center gap-1">
              <Crown className="w-3 h-3" /> Featured Creator
            </span>
          </div>
          <div className="absolute bottom-6 left-8 right-8 flex items-end justify-between">
            <div className="text-white">
              <h2 className="text-2xl font-bold">{featuredCreator.name}</h2>
              <p className="text-white/70 text-sm font-medium">{featuredCreator.handle} · {featuredCreator.niche}</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-center text-white">
                <p className="text-lg font-black">{featuredCreator.subscribers}</p>
                <p className="text-[10px] text-white/60 font-medium">Subscribers</p>
              </div>
              <div className="text-center text-white">
                <p className="text-lg font-black">{featuredCreator.totalCollabs}</p>
                <p className="text-[10px] text-white/60 font-medium">Collabs</p>
              </div>
              <div className="text-center text-white">
                <p className="text-lg font-black">{featuredCreator.avgViews}</p>
                <p className="text-[10px] text-white/60 font-medium">Avg Views</p>
              </div>
            </div>
          </div>
        </div>
        <div className="p-6 flex items-center justify-between">
          <p className="text-slate-500 font-medium text-sm max-w-xl">{featuredCreator.bio}</p>
          <button onClick={() => handleConnect('1', 10)} className="px-6 py-3 bg-[#0B3022] text-white font-bold rounded-xl hover:bg-[#166534] transition-colors shadow-md shadow-[#0B3022]/20 flex items-center gap-2 whitespace-nowrap">
            Connect <span className="text-white/60">(10 Credits)</span>
          </button>
        </div>
      </div>

      {/* Categories */}
      <div className="flex items-center gap-3 overflow-x-auto pb-6 scrollbar-hide">
        {categories.map((cat) => (
          <button key={cat} onClick={() => setActiveCategory(cat)} className={cn(
            "px-5 py-2 rounded-full text-sm font-semibold transition-all whitespace-nowrap",
            activeCategory === cat ? "bg-[#0B3022] text-white shadow-md shadow-[#0B3022]/20" : "bg-white text-slate-500 hover:bg-slate-50 shadow-sm"
          )}>{cat}</button>
        ))}
      </div>

      {/* Creator Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
        {creators.map((creator) => (
          <div key={creator.id} className="group bg-white rounded-[24px] overflow-hidden shadow-sm hover:shadow-md transition-shadow relative flex flex-col">
            <div className="h-44 w-full relative overflow-hidden bg-slate-100 p-2 pb-0">
               <img src={creator.avatar} alt={creator.name} className="w-full h-full object-cover rounded-t-[16px] group-hover:scale-105 transition-transform duration-500" />
               <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center gap-1 text-[10px] font-bold text-slate-900 shadow-sm">
                 <Star className="w-3 h-3 fill-amber-400 text-amber-400" /> {creator.rating}
               </div>
               {!creator.isAvailable && (
                 <div className="absolute top-4 left-4 bg-red-500/90 backdrop-blur-sm px-2 py-1 rounded-lg text-[10px] font-bold text-white">Unavailable</div>
               )}
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-slate-900 text-lg leading-tight mb-1">{creator.niche.split('/')[0].trim()}</h3>
                <p className="text-[11px] text-slate-500 font-medium mb-2">{creator.subscribers} subscribers</p>
                <p className="text-[11px] text-slate-400 font-medium bg-slate-50 inline-block px-2 py-1 rounded">{creator.recentCollabs} recent collabs</p>
              </div>
              <div className="flex items-center justify-between mt-4">
                <span className="text-xs font-semibold px-2 py-1 bg-slate-50 text-slate-500 rounded-md">{creator.name}</span>
                <div className="flex -space-x-2">
                  {[1,2,3].map(i => (
                    <img key={i} src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${creator.id}${i}`} className="w-6 h-6 rounded-full border-2 border-white bg-slate-100" />
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform bg-white/90 backdrop-blur border-t border-slate-50">
              <button onClick={() => handleConnect(creator.id, creator.creditCost)} disabled={!creator.isAvailable} className={cn(
                "w-full py-2.5 rounded-xl font-bold text-sm transition-colors flex items-center justify-center gap-2 shadow-md",
                creator.isAvailable ? "bg-[#0B3022] text-white hover:bg-[#166534] shadow-[#0B3022]/20" : "bg-slate-200 text-slate-400 cursor-not-allowed shadow-none"
              )}>
                {creator.isAvailable ? <>Connect <span className="text-white/60">({creator.creditCost} Credits)</span></> : 'Unavailable'}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Rising Stars + Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
        <div className="lg:col-span-2 bg-white rounded-[32px] p-8 shadow-sm">
          <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
            <Flame className="w-5 h-5 text-orange-500" /> Rising Stars
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {risingStars.map((star, i) => (
              <div key={i} className="text-center p-5 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer group">
                <img src={star.avatar} className="w-16 h-16 rounded-2xl mx-auto mb-3 bg-white group-hover:scale-110 transition-transform" />
                <h4 className="font-bold text-slate-900 text-sm">{star.name}</h4>
                <p className="text-xs text-slate-400 font-medium">{star.subs} subs</p>
                <span className="text-xs font-bold text-emerald-500 mt-1 inline-block">{star.growth}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#0B3022] to-[#166534] rounded-[32px] p-8 text-white shadow-xl">
          <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
            <Zap className="w-5 h-5 text-[#84CC16]" /> Platform Stats
          </h3>
          <div className="space-y-6">
            {[
              { label: 'Active Creators', value: '12,400+', icon: Users },
              { label: 'Collabs This Month', value: '3,200+', icon: Award },
              { label: 'Total Views Generated', value: '2.1B+', icon: Eye },
              { label: 'Avg Growth Rate', value: '+34%', icon: TrendingUp },
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                  <stat.icon className="w-5 h-5 text-[#84CC16]" />
                </div>
                <div>
                  <p className="text-xl font-black">{stat.value}</p>
                  <p className="text-xs text-white/60 font-medium">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center pt-6">
        <div className="flex items-center gap-2">
          <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#0B3022] text-white font-bold shadow-sm">1</button>
          <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-white shadow-sm text-slate-400">2</button>
          <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-white shadow-sm text-slate-400">3</button>
          <span className="mx-2 text-slate-300">...</span>
          <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-white shadow-sm text-slate-400">12</button>
        </div>
      </div>
    </div>
  );
}
