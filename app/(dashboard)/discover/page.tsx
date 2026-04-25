'use client';

import { Search, Filter, Star, ArrowRight, Coins } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { useAuthStore } from '@/lib/store';


const categories = ['All', 'Health care', 'Environment', 'Security', 'Relationship', 'Purpose', 'Tech', 'Gaming'];

const creators = [
  {
    id: '1',
    name: 'Marques Brownlee',
    handle: '@mkbhd',
    avatar: 'https://images.unsplash.com/photo-1555212697-194d41bbe7f5?q=80&w=400&h=300&fit=crop',
    subscribers: '18.5M',
    niche: 'Tech / Gadgets',
    rating: 4.9,
    recentCollabs: 12,
    isAvailable: true,
    availableDates: 'Next month',
    creditCost: 10,
  },
  {
    id: '2',
    name: 'MrBeast',
    handle: '@mrbeast',
    avatar: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=400&h=300&fit=crop',
    subscribers: '240M',
    niche: 'Entertainment / Challenges',
    rating: 5.0,
    recentCollabs: 4,
    isAvailable: false,
    availableDates: 'Not available',
    creditCost: 25,
  },
  {
    id: '3',
    name: 'Graham Stephan',
    handle: '@grahamstephan',
    avatar: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff0f?q=80&w=400&h=300&fit=crop',
    subscribers: '4.5M',
    niche: 'Finance / Real Estate',
    rating: 4.8,
    recentCollabs: 24,
    isAvailable: true,
    availableDates: 'Available now',
    creditCost: 5,
  },
  {
    id: '4',
    name: 'Sarah Jenkins',
    handle: '@sarahj',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&h=300&fit=crop',
    subscribers: '2.1M',
    niche: 'Lifestyle',
    rating: 4.9,
    recentCollabs: 8,
    isAvailable: true,
    availableDates: 'Next week',
    creditCost: 5,
  },
  {
    id: '5',
    name: 'Emma Wilson',
    handle: '@emmaw',
    avatar: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=400&h=300&fit=crop',
    subscribers: '1.2M',
    niche: 'Education',
    rating: 4.7,
    recentCollabs: 15,
    isAvailable: true,
    availableDates: 'Available now',
    creditCost: 5,
  },
  {
    id: '6',
    name: 'Alex Rivera',
    handle: '@alexr',
    avatar: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=400&h=300&fit=crop',
    subscribers: '3.4M',
    niche: 'Fitness',
    rating: 4.8,
    recentCollabs: 20,
    isAvailable: true,
    availableDates: 'Available now',
    creditCost: 10,
  }
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
    <div className="max-w-[1600px] mx-auto pb-10">
      
      {/* Header & Search */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-slate-900">Top Mentors</h1>
          <p className="text-slate-500 font-medium">Discover and connect with top creators in your niche.</p>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search by name or niche..." 
              className="pl-10 pr-4 py-2 bg-white rounded-xl text-sm shadow-sm focus:ring-2 focus:ring-[#0B3022]/20 outline-none w-[240px] transition-all"
            />
          </div>
          <button className="p-2 bg-white shadow-sm rounded-xl hover:bg-slate-50 transition-colors">
            <Filter className="w-5 h-5 text-slate-500" />
          </button>
        </div>
      </div>

      {/* Categories */}
      <div className="flex items-center gap-3 overflow-x-auto pb-6 scrollbar-hide">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={cn(
              "px-5 py-2 rounded-full text-sm font-semibold transition-all whitespace-nowrap",
              activeCategory === cat 
                ? "bg-[#0B3022] text-white shadow-md shadow-[#0B3022]/20" 
                : "bg-white text-slate-500 hover:bg-slate-50 shadow-sm"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Creator Grid (Matches Top Mentor style) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {creators.map((creator) => (
          <div
            key={creator.id}
            className="group bg-white rounded-[24px] overflow-hidden shadow-sm hover:shadow-md transition-shadow relative flex flex-col"
          >
            {/* Image Section */}
            <div className="h-44 w-full relative overflow-hidden bg-slate-100 p-2 pb-0">
               <img src={creator.avatar} alt={creator.name} className="w-full h-full object-cover rounded-t-[16px] group-hover:scale-105 transition-transform duration-500" />
               <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center gap-1 text-[10px] font-bold text-slate-900 shadow-sm">
                 <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                 {creator.rating}
               </div>
            </div>

            {/* Info Section */}
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-slate-900 text-lg leading-tight mb-1">{creator.niche.split('/')[0].trim()}</h3>
                <p className="text-[11px] text-slate-500 font-medium mb-4 bg-slate-50 inline-block px-2 py-1 rounded">Specialist</p>
              </div>

              <div className="flex items-center justify-between mt-auto">
                <span className="text-xs font-semibold px-2 py-1 bg-slate-50 text-slate-500 rounded-md">
                  {creator.name}
                </span>
                <div className="flex -space-x-2">
                  {[1,2,3].map(i => (
                    <img key={i} src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${creator.id}${i}`} className="w-6 h-6 rounded-full border-2 border-white bg-slate-100" />
                  ))}
                </div>
              </div>
            </div>

            {/* Hover Connect Button */}
            <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform bg-white/90 backdrop-blur border-t border-slate-50">
              <button 
                onClick={() => handleConnect(creator.id, creator.creditCost)}
                className="w-full py-2.5 bg-[#0B3022] text-white rounded-xl font-bold text-sm hover:bg-[#166534] transition-colors flex items-center justify-center gap-2 shadow-md shadow-[#0B3022]/20"
              >
                Connect <span className="text-white/60">({creator.creditCost} Credits)</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Placeholder */}
      <div className="flex items-center justify-center pt-10">
        <div className="flex items-center gap-2">
          <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-white shadow-sm text-slate-400 disabled:opacity-50">1</button>
          <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#0B3022] text-white font-bold shadow-sm">2</button>
          <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-white shadow-sm text-slate-400">3</button>
          <span className="mx-2 text-slate-300">...</span>
          <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-white shadow-sm text-slate-400">12</button>
        </div>
      </div>
    </div>
  );
}
