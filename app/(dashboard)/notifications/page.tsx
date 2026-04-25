'use client';

import { Bell, MessageSquare, Users, Video, Star, MoreVertical, CheckCircle2, Filter, Settings, Gift, Coins, TrendingUp, Calendar, Shield, Zap, Eye } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState } from 'react';

const filterTabs = ['All', 'Invites', 'Messages', 'Updates', 'System'];

const notifications = [
  { id: 1, title: 'New Collaboration Invitation', description: 'MKBHD invited you to collaborate on "The Future of Smart Homes"', time: '5 minutes ago', type: 'invite', unread: true },
  { id: 2, title: 'Message Received', description: 'Ali Abdaal sent you 3 new messages regarding the script.', time: '1 hour ago', type: 'message', unread: true },
  { id: 3, title: 'Credits Earned!', description: 'You earned 8 credits from Sarah J. accepting your collaboration.', time: '2 hours ago', type: 'reward', unread: true },
  { id: 4, title: 'Project Update', description: 'Linus uploaded a new asset: "Thumbnail Final.v2"', time: '4 hours ago', type: 'upload', unread: false },
  { id: 5, title: 'Milestone Completed', description: 'Main shoot for Productivity Hacks is marked as done.', time: 'Yesterday', type: 'success', unread: false },
  { id: 6, title: 'New Follower', description: 'Peter McKinnon started following your profile.', time: 'Yesterday', type: 'follow', unread: false },
  { id: 7, title: 'Collaboration Review', description: 'Emma Wilson left a 5-star review: "Amazing to work with!"', time: '2 days ago', type: 'review', unread: false },
  { id: 8, title: 'Weekly Report Ready', description: 'Your weekly collaboration performance report is ready to view.', time: '2 days ago', type: 'system', unread: false },
  { id: 9, title: 'Credit Refund Processed', description: 'Auto-refund of 4.5 credits from expired request to MrBeast.', time: '3 days ago', type: 'refund', unread: false },
  { id: 10, title: 'Platform Update', description: 'New feature: You can now schedule collaboration meetings directly.', time: '3 days ago', type: 'system', unread: false },
  { id: 11, title: 'Collaboration Request Accepted', description: 'Graham Stephan accepted your collaboration request for "Finance Tips".', time: '4 days ago', type: 'success', unread: false },
  { id: 12, title: 'New Message from Fireship', description: '"Hey, the Next.js deep dive video is live! Check it out."', time: '5 days ago', type: 'message', unread: false },
];

const getIcon = (type: string) => {
  switch(type) {
    case 'invite': return { icon: Users, color: 'bg-orange-50 text-orange-500' };
    case 'message': return { icon: MessageSquare, color: 'bg-blue-50 text-blue-500' };
    case 'upload': return { icon: Video, color: 'bg-purple-50 text-purple-500' };
    case 'success': return { icon: CheckCircle2, color: 'bg-emerald-50 text-emerald-500' };
    case 'reward': return { icon: Gift, color: 'bg-amber-50 text-amber-500' };
    case 'follow': return { icon: Users, color: 'bg-pink-50 text-pink-500' };
    case 'review': return { icon: Star, color: 'bg-yellow-50 text-yellow-500' };
    case 'refund': return { icon: Coins, color: 'bg-teal-50 text-teal-500' };
    case 'system': return { icon: Settings, color: 'bg-slate-100 text-slate-500' };
    default: return { icon: Bell, color: 'bg-slate-100 text-slate-500' };
  }
};

const notifStats = [
  { label: 'Unread', value: '3', icon: Bell, color: 'text-red-500', bg: 'bg-red-50' },
  { label: 'Invitations', value: '5', icon: Users, color: 'text-blue-500', bg: 'bg-blue-50' },
  { label: 'Credits Earned', value: '+24', icon: Coins, color: 'text-emerald-500', bg: 'bg-emerald-50' },
  { label: 'This Week', value: '18', icon: Calendar, color: 'text-purple-500', bg: 'bg-purple-50' },
];

export default function Notifications() {
  const [activeTab, setActiveTab] = useState('All');

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-20">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Notifications</h1>
          <p className="text-slate-500 mt-1">Stay updated with your latest collaborations</p>
        </div>
        <button className="text-sm font-bold text-[#0B3022] hover:underline flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4" /> Mark all as read
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {notifStats.map((stat, i) => (
          <div key={i} className="bg-white rounded-[20px] p-5 shadow-sm flex items-center gap-4">
            <div className={cn("w-11 h-11 rounded-xl flex items-center justify-center", stat.bg)}>
              <stat.icon className={cn("w-5 h-5", stat.color)} />
            </div>
            <div>
              <p className="text-xl font-black text-slate-900">{stat.value}</p>
              <p className="text-[11px] text-slate-400 font-medium">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-3">
        {filterTabs.map((tab) => (
          <button key={tab} onClick={() => setActiveTab(tab)} className={cn(
            "px-5 py-2 rounded-full text-sm font-semibold transition-all",
            activeTab === tab ? "bg-[#0B3022] text-white shadow-md shadow-[#0B3022]/20" : "bg-white text-slate-500 hover:bg-slate-50 shadow-sm"
          )}>{tab}</button>
        ))}
      </div>

      {/* Notifications List */}
      <div className="bg-white rounded-[40px] shadow-sm overflow-hidden">
        <div className="divide-y divide-slate-50">
          {notifications.map((notif) => {
            const { icon: Icon, color } = getIcon(notif.type);
            return (
              <div key={notif.id} className={cn(
                "p-8 flex items-start gap-6 transition-colors hover:bg-slate-50 group cursor-pointer",
                notif.unread && "bg-blue-50/30"
              )}>
                <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0", color)}>
                  <Icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className={cn("text-base font-bold", notif.unread ? "text-slate-900" : "text-slate-700")}>
                      {notif.title}
                    </h3>
                    <span className="text-xs font-bold text-slate-400">{notif.time}</span>
                  </div>
                  <p className="text-slate-500 font-medium leading-relaxed">{notif.description}</p>
                  {notif.type === 'invite' && (
                    <div className="mt-4 flex gap-3">
                      <button className="px-5 py-2 bg-[#0B3022] text-white font-bold rounded-xl text-sm hover:bg-[#166534] hover:-translate-y-0.5 transition-all shadow-sm">Accept</button>
                      <button className="px-5 py-2 bg-slate-100 text-slate-600 font-bold rounded-xl text-sm hover:bg-slate-200 transition-all">Decline</button>
                    </div>
                  )}
                  {notif.type === 'review' && (
                    <div className="mt-3 flex items-center gap-1">
                      {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
                    </div>
                  )}
                </div>
                {notif.unread && <div className="w-2.5 h-2.5 bg-[#0B3022] rounded-full mt-2 shrink-0" />}
                <button className="p-2 text-slate-300 hover:text-slate-900 opacity-0 group-hover:opacity-100 transition-all">
                  <MoreVertical className="w-5 h-5" />
                </button>
              </div>
            );
          })}
        </div>
        <div className="p-8 bg-slate-50/50 flex justify-center border-t border-slate-50">
          <button className="text-sm font-bold text-slate-400 hover:text-slate-900 transition-colors">Load older notifications</button>
        </div>
      </div>

      {/* Notification Preferences */}
      <div className="bg-white rounded-[32px] p-8 shadow-sm">
        <h2 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
          <Settings className="w-5 h-5 text-slate-400" /> Notification Preferences
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { label: 'Collaboration Invites', desc: 'Get notified when someone invites you', enabled: true },
            { label: 'Messages', desc: 'New message notifications', enabled: true },
            { label: 'Credit Updates', desc: 'Earnings, refunds, and purchases', enabled: true },
            { label: 'Platform News', desc: 'Feature updates and announcements', enabled: false },
            { label: 'Weekly Reports', desc: 'Performance summary every Monday', enabled: true },
            { label: 'Marketing Emails', desc: 'Tips, trends, and creator spotlights', enabled: false },
          ].map((pref, i) => (
            <div key={i} className="flex items-center justify-between p-4 rounded-2xl hover:bg-slate-50 transition-colors">
              <div>
                <p className="text-sm font-bold text-slate-900">{pref.label}</p>
                <p className="text-[11px] text-slate-400 font-medium">{pref.desc}</p>
              </div>
              <div className={cn(
                "w-12 h-7 rounded-full transition-colors relative cursor-pointer",
                pref.enabled ? "bg-emerald-500" : "bg-slate-200"
              )}>
                <div className={cn(
                  "absolute top-1 left-1 bg-white w-5 h-5 rounded-full transition-transform",
                  pref.enabled && "translate-x-5"
                )} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-[#0B3022] to-[#166534] rounded-[24px] p-6 text-white shadow-lg cursor-pointer hover:-translate-y-1 transition-transform">
          <Shield className="w-8 h-8 text-[#84CC16] mb-4" />
          <h3 className="font-bold mb-1">Security Alerts</h3>
          <p className="text-sm text-white/70">Review your account security and login activity.</p>
        </div>
        <div className="bg-white rounded-[24px] p-6 shadow-sm cursor-pointer hover:-translate-y-1 transition-transform">
          <Zap className="w-8 h-8 text-amber-500 mb-4" />
          <h3 className="font-bold text-slate-900 mb-1">Quick Connect</h3>
          <p className="text-sm text-slate-400">Browse suggested creators based on your activity.</p>
        </div>
        <div className="bg-white rounded-[24px] p-6 shadow-sm cursor-pointer hover:-translate-y-1 transition-transform">
          <Eye className="w-8 h-8 text-blue-500 mb-4" />
          <h3 className="font-bold text-slate-900 mb-1">View Analytics</h3>
          <p className="text-sm text-slate-400">Check your collaboration performance metrics.</p>
        </div>
      </div>
    </div>
  );
}
