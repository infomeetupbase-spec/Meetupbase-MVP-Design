'use client';

import { Search, MoreHorizontal, Send, Phone, Video, Info, Check, CheckCheck } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState } from 'react';

const contacts = [
  { id: '1', name: 'Marques Brownlee', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Marques', lastMsg: 'Sounds like a plan for the iPhone 16 review!', time: '2m ago', unread: 2, online: true },
  { id: '2', name: 'Ali Abdaal', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ali', lastMsg: 'The productivity script is ready.', time: '1h ago', unread: 0, online: true },
  { id: '3', name: 'MrBeast', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jimmy', lastMsg: 'Can we move the shoot to Thursday?', time: '3h ago', unread: 0, online: false },
  { id: '4', name: 'iJustine', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Justine', lastMsg: 'Sent you the b-roll link.', time: 'Yesterday', unread: 0, online: false },
  { id: '5', name: 'Fireship', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Fireship', lastMsg: 'Next.js 14 video is live!', time: '2d ago', unread: 0, online: true },
];

const messages = [
  { id: 1, senderId: '1', text: 'Hey Alex! Hope you are doing well.', time: '10:00 AM' },
  { id: 2, senderId: 'me', text: 'I am good Marques! Ready to discuss the collab?', time: '10:05 AM', status: 'read' },
  { id: 3, senderId: '1', text: 'Yes! I have some ideas for the mobile tech setup we talked about. Thinking of focusing on ecosystem integration.', time: '10:06 AM' },
  { id: 4, senderId: 'me', text: 'That is a great angle. I can cover the Mac + iPad side if you handle the mobile + wearables.', time: '10:10 AM', status: 'read' },
  { id: 5, senderId: '1', text: 'Sounds like a plan for the iPhone 16 review!', time: '10:12 AM' },
];

export default function Messages() {
  const [activeContact, setActiveContact] = useState(contacts[0]);

  return (
    <div className="h-[calc(100vh-120px)] flex bg-white rounded-[40px] border border-border shadow-sm overflow-hidden">
      {/* Contact List */}
      <aside className="w-[360px] border-r border-border flex flex-col">
        <div className="p-8 pb-4">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-2xl font-bold text-slate-900">Messages</h1>
            <button className="p-2 bg-primary/10 text-primary rounded-xl hover:bg-primary/20 transition-all">
              <MoreHorizontal className="w-5 h-5" />
            </button>
          </div>
          
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search conversations..." 
              className="w-full pl-10 pr-4 py-3 bg-slate-50 border-none rounded-2xl text-sm outline-none focus:ring-2 focus:ring-primary/10"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto no-scrollbar py-4 px-4 space-y-1">
          {contacts.map((contact) => (
            <button
              key={contact.id}
              onClick={() => setActiveContact(contact)}
              className={cn(
                "w-full flex items-center gap-4 p-4 rounded-[28px] transition-all relative group",
                activeContact.id === contact.id 
                  ? "bg-slate-50" 
                  : "hover:bg-slate-50/50"
              )}
            >
              <div className="relative">
                <img src={contact.avatar} className="w-12 h-12 rounded-2xl object-cover bg-slate-100" />
                {contact.online && (
                  <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-white" />
                )}
              </div>
              <div className="flex-1 min-w-0 text-left">
                <div className="flex items-center justify-between mb-0.5">
                  <h3 className="text-sm font-bold text-slate-900 truncate">{contact.name}</h3>
                  <span className="text-[10px] font-bold text-slate-400">{contact.time}</span>
                </div>
                <p className={cn(
                  "text-xs truncate max-w-[180px]",
                  contact.unread > 0 ? "font-bold text-slate-900" : "text-slate-500 font-medium"
                )}>
                  {contact.lastMsg}
                </p>
              </div>
              {contact.unread > 0 && (
                <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center text-[10px] font-bold text-white shadow-lg shadow-blue-100">
                  {contact.unread}
                </div>
              )}
            </button>
          ))}
        </div>
      </aside>

      {/* Chat Area */}
      <main className="flex-1 flex flex-col min-w-0 bg-slate-50/20">
        <header className="h-20 px-8 border-b border-border flex items-center justify-between bg-white backdrop-blur-md relative z-10">
          <div className="flex items-center gap-4">
            <div className="relative">
              <img src={activeContact.avatar} className="w-10 h-10 rounded-xl" />
              {activeContact.online && <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white" />}
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-900 leading-tight">{activeContact.name}</h2>
              <p className="text-[11px] font-bold text-emerald-500 flex items-center gap-1">
                {activeContact.online ? 'Online' : <span className="text-slate-400 inline-block">Offline</span>}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-all"><Phone className="w-5 h-5" /></button>
            <button className="p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-all"><Video className="w-5 h-5" /></button>
            <div className="w-[1px] h-8 bg-border mx-1" />
            <button className="p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-all"><Info className="w-5 h-5" /></button>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-10 space-y-8 no-scrollbar">
          {messages.map((msg) => {
            const isMe = msg.senderId === 'me';
            return (
              <div key={msg.id} className={cn("flex flex-col max-w-[70%]", isMe && "ml-auto items-end")}>
                <div className={cn(
                  "p-4 rounded-[26px] text-sm leading-relaxed shadow-sm",
                  isMe 
                    ? "bg-slate-900 text-white rounded-tr-none font-medium" 
                    : "bg-white text-slate-700 border border-slate-100 rounded-tl-none font-medium"
                )}>
                  {msg.text}
                </div>
                <div className="mt-2 flex items-center gap-2">
                  <span className="text-[10px] font-bold text-slate-400">{msg.time}</span>
                  {isMe && (
                    <span className="text-primary">
                      {msg.status === 'read' ? <CheckCheck className="w-3.5 h-3.5" /> : <Check className="w-3.5 h-3.5" />}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="p-8 pt-4">
          <div className="bg-white border border-border rounded-[32px] p-2 flex items-center group shadow-sm focus-within:shadow-md transition-all">
            <input 
              type="text" 
              placeholder="Type your message here..." 
              className="flex-1 bg-transparent px-6 py-4 text-sm outline-none font-medium"
            />
            <button className="w-12 h-12 bg-vibrant rounded-full flex items-center justify-center text-white shadow-lg shadow-purple-100 hover:scale-105 active:scale-95 transition-all">
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
