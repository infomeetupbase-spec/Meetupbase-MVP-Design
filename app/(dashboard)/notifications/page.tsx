'use client';

import { Bell, MessageSquare, Users, Video, Star, MoreVertical, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const notifications = [
  {
    id: 1,
    title: 'New Collaboration Invitation',
    description: 'MKBHD invited you to collaborate on "The Future of Smart Homes"',
    time: '5 minutes ago',
    type: 'invite',
    unread: true,
  },
  {
    id: 2,
    title: 'Message Received',
    description: 'Ali Abdaal sent you 3 new messages regarding the script.',
    time: '1 hour ago',
    type: 'message',
    unread: true,
  },
  {
    id: 3,
    title: 'Project Update',
    description: 'Linus uploaded a new asset: "Thumbnail Final.v2"',
    time: '4 hours ago',
    type: 'upload',
    unread: false,
  },
  {
    id: 4,
    title: 'Milestone Completed',
    description: 'Main shoot for Productivity Hacks is marked as done.',
    time: 'Yesterday',
    type: 'success',
    unread: false,
  },
];

export default function Notifications() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Notifications</h1>
          <p className="text-slate-500 mt-1">Stay updated with your latest collaborations</p>
        </div>
        <button className="text-sm font-bold text-[#0B3022] hover:underline flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4" />
          Mark all as read
        </button>
      </div>

      <div className="bg-white rounded-[40px] shadow-sm overflow-hidden">
        <div className="divide-y divide-slate-50">
          {notifications.map((notif) => (
            <div 
              key={notif.id} 
              className={cn(
                "p-8 flex items-start gap-6 transition-colors hover:bg-slate-50 group cursor-pointer",
                notif.unread && "bg-blue-50/30"
              )}
            >
              <div className={cn(
                "w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0",
                notif.type === 'invite' && "bg-orange-50 text-orange-500",
                notif.type === 'message' && "bg-blue-50 text-blue-500",
                notif.type === 'upload' && "bg-purple-50 text-purple-500",
                notif.type === 'success' && "bg-emerald-50 text-emerald-500"
              )}>
                {notif.type === 'invite' && <Users className="w-6 h-6" />}
                {notif.type === 'message' && <MessageSquare className="w-6 h-6" />}
                {notif.type === 'upload' && <Video className="w-6 h-6" />}
                {notif.type === 'success' && <CheckCircle2 className="w-6 h-6" />}
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
                    <button className="px-5 py-2 bg-[#0B3022] text-white font-bold rounded-xl text-sm hover:bg-[#166534] hover:-translate-y-0.5 transition-all shadow-sm">
                      Accept
                    </button>
                    <button className="px-5 py-2 bg-slate-100 text-slate-600 font-bold rounded-xl text-sm hover:bg-slate-200 transition-all">
                      Decline
                    </button>
                  </div>
                )}
              </div>
              
              <button className="p-2 text-slate-300 hover:text-slate-900 opacity-0 group-hover:opacity-100 transition-all">
                <MoreVertical className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>
        
        <div className="p-8 bg-slate-50/50 flex justify-center border-t border-slate-50">
          <button className="text-sm font-bold text-slate-400 hover:text-slate-900 transition-colors">
            Load older notifications
          </button>
        </div>
      </div>
    </div>
  );
}
