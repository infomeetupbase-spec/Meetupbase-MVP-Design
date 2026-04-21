'use client';

import { 
  Users, 
  Video, 
  MessageSquare, 
  TrendingUp, 
  Plus,
  ArrowUpRight,
  Clock,
  Calendar
} from 'lucide-react';
import { cn } from '@/lib/utils';


const stats = [
  { label: 'Active Collabs', value: '12', icon: Users, color: 'text-blue-500', bg: 'bg-blue-50' },
  { label: 'Pending Invites', value: '5', icon: MessageSquare, color: 'text-orange-500', bg: 'bg-orange-50' },
  { label: 'Total Views', value: '2.4M', icon: TrendingUp, color: 'text-emerald-500', bg: 'bg-emerald-50' },
  { label: 'Published', value: '34', icon: Video, color: 'text-purple-500', bg: 'bg-purple-50' },
];

const activeCollaborations = [
  {
    id: '1',
    title: 'Modern Tech Setup Unboxing',
    partner: 'Linus Media Tech',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Linus',
    status: 'In Progress',
    deadline: '2 days left',
    progress: 65,
  },
  {
    id: '2',
    title: 'AI Productivity Masterclass',
    partner: 'Ali Abdaal',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ali',
    status: 'Planning',
    deadline: '1 week left',
    progress: 20,
  },
  {
    id: '3',
    title: 'The Future of Web Dev',
    partner: 'Fireship',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Fireship',
    status: 'Finalizing',
    deadline: 'Tomorrow',
    progress: 90,
  },
];

const recentActivity = [
  { id: 1, text: 'Sent message to Ali Abdaal', time: '2 hours ago', type: 'message' },
  { id: 2, text: 'Uploaded draft for Tech Unboxing', time: '5 hours ago', type: 'upload' },
  { id: 3, text: 'New invitation from MKBHD', time: 'Yesterday', type: 'invite' },
];

export default function Dashboard() {
  return (
    <div className="space-y-8 pb-12">
      {/* Welcome Header */}
      <section className="relative overflow-hidden bg-vibrant rounded-3xl p-10 text-white">
        <div className="relative z-10">
          <h1 className="text-4xl font-bold mb-2">Welcome back, Alex! 👋</h1>
          <p className="text-white/80 text-lg max-w-lg font-medium leading-relaxed">
            You have <span className="text-white font-bold">3 active collaborations</span> and <span className="text-white font-bold">5 pending invitations</span> today.
          </p>
          <div className="mt-8 flex gap-4">
            <button className="px-6 py-3 bg-white text-primary font-bold rounded-2xl shadow-lg hover:scale-105 transition-all flex items-center gap-2">
              <Plus className="w-5 h-5" />
              New Collaboration
            </button>
            <button className="px-6 py-3 bg-white/20 backdrop-blur-md text-white font-bold rounded-2xl border border-white/30 hover:bg-white/30 transition-all">
              Explore Creators
            </button>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/2 w-60 h-60 bg-purple-500/20 rounded-full blur-3xl" />
      </section>

      {/* Stats Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div 
            key={stat.label} 
            className="bg-white p-6 rounded-3xl border border-border shadow-sm hover:shadow-md transition-shadow group animate-in fade-in slide-in-from-bottom-4 duration-500"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={cn("p-3 rounded-2xl", stat.bg)}>
                <stat.icon className={cn("w-6 h-6", stat.color)} />
              </div>
              <ArrowUpRight className="w-5 h-5 text-slate-300 group-hover:text-primary transition-colors" />
            </div>
            <div>
              <p className="text-slate-500 text-sm font-medium">{stat.label}</p>
              <h3 className="text-3xl font-bold text-slate-900 mt-1">{stat.value}</h3>
            </div>
          </div>
        ))}
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Active Collaborations */}
        <section className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-slate-900">Active Collaborations</h2>
            <button className="text-sm font-semibold text-primary hover:underline">View all</button>
          </div>
          <div className="space-y-4">
            {activeCollaborations.map((collab) => (
              <div key={collab.id} className="bg-white p-5 rounded-3xl border border-border shadow-sm flex items-center gap-6 group hover:border-primary/30 transition-all">
                <img src={collab.avatar} alt={collab.partner} className="w-16 h-16 rounded-2xl bg-slate-50 object-cover border border-border" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-primary bg-primary/5 px-2 py-0.5 rounded-full">
                      {collab.status}
                    </span>
                    <span className="text-[11px] font-medium text-slate-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {collab.deadline}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 truncate">{collab.title}</h4>
                  <p className="text-sm text-slate-500 font-medium">with {collab.partner}</p>
                </div>
                <div className="hidden md:block w-32">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-slate-600">Progress</span>
                    <span className="text-xs font-bold text-primary">{collab.progress}%</span>
                  </div>
                  <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-vibrant rounded-full transition-all duration-1000" 
                      style={{ width: `${collab.progress}%` }} 
                    />
                  </div>
                </div>
                <button className="p-3 rounded-2xl bg-slate-50 text-slate-400 group-hover:bg-primary group-hover:text-white transition-all">
                  <ArrowUpRight className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Activity Feed */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-slate-900">Recent Activity</h2>
          </div>
          <div className="bg-white p-6 rounded-3xl border border-border shadow-sm space-y-6">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex gap-4 relative">
                <div className="relative z-10 flex-shrink-0 w-10 h-10 bg-slate-50 rounded-xl border border-border flex items-center justify-center">
                  {activity.type === 'message' && <MessageSquare className="w-5 h-5 text-blue-500" />}
                  {activity.type === 'upload' && <Video className="w-5 h-5 text-purple-500" />}
                  {activity.type === 'invite' && <Users className="w-5 h-5 text-orange-500" />}
                </div>
                <div className="flex-1 pt-1">
                  <p className="text-sm font-semibold text-slate-900">{activity.text}</p>
                  <p className="text-[12px] text-slate-400 mt-0.5 font-medium">{activity.time}</p>
                </div>
              </div>
            ))}
            <button className="w-full py-3 text-sm font-bold text-slate-500 hover:text-primary transition-colors border-t border-slate-50 pt-6">
              See complete history
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
