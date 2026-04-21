'use client';

import { Search, Filter, Video, Users, Star, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';


const categories = ['All', 'Tech', 'Lifestyle', 'Gaming', 'Education', 'Vlog', 'ASMR', 'Comedy'];

const creators = [
  {
    id: '1',
    name: 'Marques Brownlee',
    handle: '@mkbhd',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Marques',
    subscribers: '18.5M',
    niche: 'Tech / Gadgets',
    rating: 4.9,
    recentCollabs: 12,
  },
  {
    id: '2',
    name: 'MrBeast',
    handle: '@mrbeast',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jimmy',
    subscribers: '240M',
    niche: 'Entertainment / Stunts',
    rating: 5.0,
    recentCollabs: 45,
  },
  {
    id: '3',
    name: 'Graham Stephan',
    handle: '@grahamstephan',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Graham',
    subscribers: '4.2M',
    niche: 'Finance / Real Estate',
    rating: 4.8,
    recentCollabs: 8,
  },
  {
    id: '4',
    name: 'Casey Neistat',
    handle: '@casey',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Casey',
    subscribers: '12.6M',
    niche: 'Lifestyle / Vlogs',
    rating: 4.9,
    recentCollabs: 15,
  },
  {
    id: '5',
    name: 'iJustine',
    handle: '@ijustine',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Justine',
    subscribers: '7.1M',
    niche: 'Tech / Lifestyle',
    rating: 4.7,
    recentCollabs: 20,
  },
  {
    id: '6',
    name: 'Veritasium',
    handle: '@veritasium',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Derek',
    subscribers: '14.8M',
    niche: 'Education / Science',
    rating: 4.9,
    recentCollabs: 5,
  },
];

export default function Discover() {
  const [activeCategory, setActiveCategory] = useState('All');

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Discover Creators</h1>
          <p className="text-slate-500 mt-1">Find the perfect partner for your next collaboration</p>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search by name or niche..." 
              className="pl-10 pr-4 py-2 bg-white border border-border rounded-xl text-sm focus:ring-2 focus:ring-primary/20 outline-none w-[240px]"
            />
          </div>
          <button className="p-2 border border-border bg-white rounded-xl hover:bg-slate-50 transition-colors">
            <Filter className="w-5 h-5 text-slate-500" />
          </button>
        </div>
      </div>

      {/* Categories */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 -mx-1 px-1 no-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={cn(
              "px-5 py-2 rounded-full text-sm font-semibold transition-all whitespace-nowrap",
              activeCategory === cat 
                ? "bg-slate-900 text-white shadow-lg shadow-slate-200" 
                : "bg-white border border-border text-slate-500 hover:border-slate-300"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Creators Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {creators.map((creator) => (
          <div
            key={creator.id}
            className="group bg-white rounded-[32px] p-6 border border-border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden animate-in zoom-in-95 duration-500"
          >
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-full -mr-16 -mt-16 group-hover:bg-primary/5 transition-colors" />

            <div className="flex items-start justify-between mb-6 relative z-10">
              <div className="relative">
                <img 
                  src={creator.avatar} 
                  alt={creator.name} 
                  className="w-20 h-20 rounded-3xl bg-slate-100 object-cover border-4 border-white shadow-sm"
                />
                <div className="absolute -bottom-1 -right-1 p-1 bg-white rounded-lg shadow-sm">
                  <Video className="w-4 h-4 text-red-500 fill-red-500" />
                </div>
              </div>
              <div className="flex flex-col items-end">
                <div className="flex items-center gap-1 text-amber-500 bg-amber-50 px-2 py-1 rounded-lg text-xs font-bold">
                  <Star className="w-3 h-3 fill-amber-500" />
                  {creator.rating}
                </div>
                <p className="text-[11px] font-bold text-slate-400 mt-2 uppercase tracking-tighter">
                  {creator.recentCollabs} Collabs Finished
                </p>
              </div>
            </div>

            <div className="space-y-1 relative z-10">
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors">
                {creator.name}
              </h3>
              <p className="text-sm text-slate-500 font-medium">{creator.handle}</p>
            </div>

            <div className="mt-4 flex items-center gap-4 text-slate-400">
              <div className="flex items-center gap-1.5">
                <Users className="w-4 h-4" />
                <span className="text-xs font-bold text-slate-600">{creator.subscribers}</span>
              </div>
              <div className="w-1.5 h-1.5 bg-slate-200 rounded-full" />
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-bold text-primary bg-primary/5 px-2 py-0.5 rounded-full">
                  {creator.niche}
                </span>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-50 flex items-center gap-3">
              <button className="flex-1 bg-vibrant text-white font-bold py-3 rounded-2xl shadow-lg shadow-purple-200 hover:scale-[1.02] active:scale-95 transition-all">
                Collaboration Request
              </button>
              <button className="p-3 bg-slate-50 text-slate-400 rounded-2xl hover:bg-slate-100 transition-colors">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Placeholder */}
      <div className="flex items-center justify-center pt-8">
        <div className="flex items-center gap-2">
          <button className="w-10 h-10 flex items-center justify-center rounded-xl border border-border text-slate-400 disabled:opacity-50">1</button>
          <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-primary text-white font-bold">2</button>
          <button className="w-10 h-10 flex items-center justify-center rounded-xl border border-border text-slate-400">3</button>
          <span className="mx-2 text-slate-300">...</span>
          <button className="w-10 h-10 flex items-center justify-center rounded-xl border border-border text-slate-400">12</button>
        </div>
      </div>
    </div>
  );
}
