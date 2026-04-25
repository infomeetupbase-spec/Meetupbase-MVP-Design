'use client';

import { Users, Clock, Undo2, Gift, CheckCircle2, XCircle, AlertCircle, Coins, Star, ExternalLink, Calendar, TrendingUp, Target, BarChart3, MessageCircle, Eye } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState } from 'react';

const tabs = ['All', 'Pending', 'Active', 'Completed'];

const pendingRequests = [
  { id: 'req1', creatorName: 'Marques Brownlee', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Marques', date: '2026-04-24', cost: 10, daysLeft: 6, status: 'pending' },
  { id: 'req2', creatorName: 'Graham Stephan', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Graham', date: '2026-04-20', cost: 5, daysLeft: 2, status: 'pending' },
  { id: 'req3', creatorName: 'Linus Sebastian', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Linus', date: '2026-04-22', cost: 15, daysLeft: 4, status: 'pending' },
];

const incomingRequests = [
  { id: 'inc1', senderName: 'Sarah J. (Tech Reviewer)', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah', date: '2026-04-25', reward: 4, status: 'new' },
  { id: 'inc2', senderName: 'Emma Wilson (Education)', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emma', date: '2026-04-24', reward: 6, status: 'new' },
];

const activeProjects = [
  { id: 'ap1', title: 'Tech Ecosystem Review 2026', partner: 'Marques Brownlee', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Marques', startDate: 'Apr 10, 2026', deadline: 'May 2, 2026', progress: 72, status: 'In Progress', milestones: ['Script ✓', 'Filming ✓', 'Editing...', 'Publish'] },
  { id: 'ap2', title: 'Productivity Masterclass Series', partner: 'Ali Abdaal', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ali', startDate: 'Apr 15, 2026', deadline: 'May 8, 2026', progress: 45, status: 'In Progress', milestones: ['Planning ✓', 'Script...', 'Filming', 'Publish'] },
  { id: 'ap3', title: 'Finance for Creators Workshop', partner: 'Graham Stephan', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Graham', startDate: 'Apr 20, 2026', deadline: 'May 22, 2026', progress: 20, status: 'Planning', milestones: ['Outline ✓', 'Script...', 'Filming', 'Publish'] },
];

const completedCollabs = [
  { id: 'cc1', title: 'Budget Build Challenge', partner: 'Linus Tech Tips', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Linus', completedDate: 'Mar 28, 2026', views: '3.2M', rating: 4.9, earnings: '+$4,200' },
  { id: 'cc2', title: 'Ultimate Camera Comparison', partner: 'iJustine', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Justine', completedDate: 'Mar 15, 2026', views: '1.8M', rating: 4.8, earnings: '+$2,100' },
  { id: 'cc3', title: 'AI Tools Deep Dive', partner: 'Fireship', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Fireship', completedDate: 'Feb 28, 2026', views: '5.1M', rating: 5.0, earnings: '+$6,800' },
  { id: 'cc4', title: 'Smart Home Tour 2026', partner: 'MKBHD', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MKBHD2', completedDate: 'Feb 10, 2026', views: '2.4M', rating: 4.7, earnings: '+$3,500' },
];

const collabStats = [
  { label: 'Total Collabs', value: '47', icon: Users, color: 'text-blue-500', bg: 'bg-blue-50' },
  { label: 'Active Projects', value: '3', icon: Target, color: 'text-emerald-500', bg: 'bg-emerald-50' },
  { label: 'Avg. Rating', value: '4.9', icon: Star, color: 'text-amber-500', bg: 'bg-amber-50' },
  { label: 'Total Earnings', value: '$24.6k', icon: TrendingUp, color: 'text-purple-500', bg: 'bg-purple-50' },
];

export default function Collaborations() {
  const [activeTab, setActiveTab] = useState('All');

  return (
    <div className="max-w-[1400px] mx-auto space-y-10 pb-20">
      <header>
        <h1 className="text-3xl font-bold text-slate-900">Collaborations</h1>
        <p className="text-slate-500 mt-1">Manage your requests, active projects, and history</p>
      </header>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {collabStats.map((stat, i) => (
          <div key={i} className="bg-white rounded-[24px] p-6 shadow-sm flex items-center gap-4">
            <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center", stat.bg)}>
              <stat.icon className={cn("w-6 h-6", stat.color)} />
            </div>
            <div>
              <p className="text-2xl font-black text-slate-900">{stat.value}</p>
              <p className="text-xs text-slate-400 font-medium">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Tab Filter */}
      <div className="flex items-center gap-3">
        {tabs.map((tab) => (
          <button key={tab} onClick={() => setActiveTab(tab)} className={cn(
            "px-5 py-2 rounded-full text-sm font-semibold transition-all",
            activeTab === tab ? "bg-[#0B3022] text-white shadow-md shadow-[#0B3022]/20" : "bg-white text-slate-500 hover:bg-slate-50 shadow-sm"
          )}>{tab}</button>
        ))}
      </div>

      {/* Outgoing + Incoming */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-3">
              <Undo2 className="w-5 h-5 text-primary" /> Outgoing Requests
            </h2>
            <span className="bg-primary/5 text-primary px-3 py-1 rounded-full text-xs font-bold">{pendingRequests.length} Pending</span>
          </div>
          <div className="space-y-4">
            {pendingRequests.map((req) => (
              <div key={req.id} className="bg-white rounded-[32px] p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <img src={req.avatar} alt={req.creatorName} className="w-12 h-12 rounded-2xl bg-slate-100" />
                    <div>
                      <h3 className="font-bold text-slate-900">{req.creatorName}</h3>
                      <p className="text-xs text-slate-500 font-medium">Sent on {req.date}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1.5 text-[#0B3022] font-bold text-sm">
                      <Coins className="w-4 h-4" /> -{req.cost}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl">
                  <Clock className="w-4 h-4 text-orange-500" />
                  <div className="flex-1">
                    <p className="text-xs font-bold text-slate-700">Auto-refund in {req.daysLeft} days</p>
                    <p className="text-[10px] text-slate-400 font-medium">Refund: {req.cost * 0.9} Credits (10% platform fee)</p>
                  </div>
                  <AlertCircle className="w-4 h-4 text-slate-300" />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-3">
              <Gift className="w-5 h-5 text-emerald-500" /> Incoming Requests
            </h2>
            <span className="bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full text-xs font-bold">Creator Rewards Active</span>
          </div>
          <div className="space-y-4">
            {incomingRequests.map((req) => (
              <div key={req.id} className="bg-white rounded-[32px] p-6 shadow-sm border-l-4 border-l-emerald-500">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <img src={req.avatar} alt={req.senderName} className="w-12 h-12 rounded-2xl bg-slate-100" />
                    <div>
                      <h3 className="font-bold text-slate-900">{req.senderName}</h3>
                      <p className="text-xs text-slate-500 font-medium">Received {req.date}</p>
                    </div>
                  </div>
                  <div className="bg-emerald-50 text-emerald-600 px-4 py-2 rounded-2xl">
                    <div className="flex items-center gap-1.5 font-black text-sm">
                      <Gift className="w-3.5 h-3.5" /> +{req.reward} Credits
                    </div>
                    <p className="text-[9px] font-bold uppercase tracking-tighter opacity-70">Reward share</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <button className="py-3 bg-emerald-500 text-white font-bold rounded-2xl text-sm hover:bg-emerald-600 transition-colors flex items-center justify-center gap-2">
                    <CheckCircle2 className="w-4 h-4" /> Accept
                  </button>
                  <button className="py-3 bg-slate-50 text-slate-500 font-bold rounded-2xl text-sm hover:bg-slate-100 transition-colors flex items-center justify-center gap-2">
                    <XCircle className="w-4 h-4" /> Decline
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Active Projects */}
      <section className="space-y-6">
        <h2 className="text-xl font-bold text-slate-900 flex items-center gap-3">
          <Target className="w-5 h-5 text-[#0B3022]" /> Active Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {activeProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-[32px] p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-5">
                <img src={project.avatar} alt={project.partner} className="w-10 h-10 rounded-xl bg-slate-100" />
                <div className="min-w-0">
                  <h3 className="font-bold text-slate-900 text-sm truncate">{project.title}</h3>
                  <p className="text-[11px] text-slate-400 font-medium">with {project.partner}</p>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-slate-500">Progress</span>
                  <span className="text-xs font-black text-[#0B3022]">{project.progress}%</span>
                </div>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#0B3022] to-[#84CC16] rounded-full transition-all" style={{ width: `${project.progress}%` }} />
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.milestones.map((m, i) => (
                  <span key={i} className={cn("text-[10px] font-bold px-2 py-1 rounded-lg", m.includes('✓') ? 'bg-emerald-50 text-emerald-600' : m.includes('...') ? 'bg-blue-50 text-blue-600' : 'bg-slate-50 text-slate-400')}>{m}</span>
                ))}
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                <span className="text-[10px] text-slate-400 font-medium flex items-center gap-1">
                  <Calendar className="w-3 h-3" /> Due {project.deadline}
                </span>
                <span className={cn("text-[10px] font-bold px-2 py-1 rounded-full", project.status === 'In Progress' ? 'bg-blue-50 text-blue-600' : 'bg-orange-50 text-orange-600')}>{project.status}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Completed Collaborations */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-500" /> Completed Collaborations
          </h2>
          <button className="text-sm font-semibold text-slate-400 hover:text-slate-600">View All</button>
        </div>
        <div className="bg-white rounded-[32px] shadow-sm overflow-hidden">
          <div className="divide-y divide-slate-50">
            {completedCollabs.map((collab) => (
              <div key={collab.id} className="p-6 flex items-center gap-6 hover:bg-slate-50/50 transition-colors cursor-pointer group">
                <img src={collab.avatar} alt={collab.partner} className="w-12 h-12 rounded-2xl bg-slate-100" />
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-slate-900 truncate">{collab.title}</h3>
                  <p className="text-xs text-slate-400 font-medium">with {collab.partner} · {collab.completedDate}</p>
                </div>
                <div className="flex items-center gap-6 text-sm shrink-0">
                  <div className="text-center">
                    <p className="font-black text-slate-900 flex items-center gap-1"><Eye className="w-3.5 h-3.5 text-slate-400" /> {collab.views}</p>
                    <p className="text-[10px] text-slate-400 font-medium">Views</p>
                  </div>
                  <div className="text-center">
                    <p className="font-black text-slate-900 flex items-center gap-1"><Star className="w-3.5 h-3.5 text-amber-400" /> {collab.rating}</p>
                    <p className="text-[10px] text-slate-400 font-medium">Rating</p>
                  </div>
                  <div className="text-center">
                    <p className="font-black text-emerald-600">{collab.earnings}</p>
                    <p className="text-[10px] text-slate-400 font-medium">Earned</p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-300 group-hover:text-slate-600 transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Monthly Performance */}
      <section className="bg-white rounded-[32px] p-8 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
          <BarChart3 className="w-5 h-5 text-purple-500" /> Collaboration Performance
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            { label: 'Jan', collabs: 3, views: '1.2M' },
            { label: 'Feb', collabs: 5, views: '3.8M' },
            { label: 'Mar', collabs: 4, views: '2.9M' },
            { label: 'Apr', collabs: 6, views: '4.1M' },
          ].map((month, i) => (
            <div key={i} className="text-center p-5 rounded-2xl bg-slate-50">
              <p className="text-sm font-bold text-slate-500 mb-2">{month.label} 2026</p>
              <p className="text-3xl font-black text-slate-900">{month.collabs}</p>
              <p className="text-xs text-slate-400 font-medium">collabs · {month.views} views</p>
            </div>
          ))}
        </div>
        <div className="flex items-end justify-between gap-2 h-40">
          {[35, 58, 42, 75, 50, 88, 65, 45, 70, 55, 82, 60].map((h, i) => (
            <div key={i} className="flex-1 bg-gradient-to-t from-[#0B3022] to-[#84CC16] rounded-t-lg opacity-80 hover:opacity-100 transition-opacity cursor-pointer" style={{ height: `${h}%` }} />
          ))}
        </div>
        <div className="flex justify-between mt-3">
          {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((m) => (
            <span key={m} className="text-[10px] font-bold text-slate-400 flex-1 text-center">{m}</span>
          ))}
        </div>
      </section>

      {/* Info Card */}
      <div className="p-8 bg-[#0B3022] rounded-[40px] text-white shadow-xl shadow-[#0B3022]/20 flex flex-col md:flex-row items-center gap-8">
        <div className="w-20 h-20 bg-white/20 rounded-[32px] flex items-center justify-center shrink-0">
          <AlertCircle className="w-10 h-10" />
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-bold">Credit Protection Policy</h3>
          <p className="text-white/80 text-sm leading-relaxed">
            To ensure a healthy community, we scale credit costs based on creator reach. If a creator doesn't respond within 7 days, 
            90% of your credits are automatically refunded to your balance. As a creator, you earn a reward share for every connection you accept!
          </p>
        </div>
      </div>
    </div>
  );
}
