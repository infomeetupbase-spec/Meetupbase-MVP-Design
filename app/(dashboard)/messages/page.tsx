'use client';

import { Search, MoreHorizontal, Send, Phone, Video, Info, Check, CheckCheck, Image as ImageIcon, Paperclip, Smile, User, Settings, Shield, Bell, Calendar, Clock, CheckCircle2, Coins, Zap, Star, TrendingUp, Award, Eye, ThumbsUp, MessageCircle, ExternalLink, MapPin, Briefcase, FileText, Download, AtSign } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState, useEffect, useRef, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

const contacts = [
  { id: '1', name: 'Marques Brownlee', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Marques', lastMsg: 'Sounds like a plan for the iPhone 16 review!', time: '2m ago', unread: 2, online: true, role: 'Tech Reviewer' },
  { id: '2', name: 'Ali Abdaal', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ali', lastMsg: 'The productivity script is ready.', time: '1h ago', unread: 0, online: true, role: 'Productivity' },
  { id: '3', name: 'MrBeast', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jimmy', lastMsg: 'Can we move the shoot to Thursday?', time: '3h ago', unread: 0, online: false, role: 'Entertainment' },
  { id: '4', name: 'iJustine', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Justine', lastMsg: 'Sent you the b-roll link.', time: 'Yesterday', unread: 0, online: false, role: 'Tech / Lifestyle' },
  { id: '5', name: 'Fireship', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Fireship', lastMsg: 'Next.js 14 video is live!', time: '2d ago', unread: 0, online: true, role: 'Dev / Code' },
  { id: '6', name: 'Graham Stephan', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Graham', lastMsg: 'Did you see the new tax law?', time: '3d ago', unread: 0, online: false, role: 'Finance' },
  { id: '7', name: 'Peter McKinnon', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Peter', lastMsg: 'That transition was clean!', time: '1w ago', unread: 0, online: true, role: 'Photography' },
  { id: '8', name: 'Emma Wilson', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emma', lastMsg: 'Thanks for the feedback!', time: '1w ago', unread: 0, online: false, role: 'Education' },
];

const initialMessages = [
  { id: 1, senderId: '1', text: 'Hey Alex! Hope you are doing well.', time: '10:00 AM' },
  { id: 2, senderId: 'me', text: 'I am good Marques! Ready to discuss the collab?', time: '10:05 AM', status: 'read' },
  { id: 3, senderId: '1', text: 'Yes! I have some ideas for the mobile tech setup we talked about. Thinking of focusing on ecosystem integration.', time: '10:06 AM' },
  { id: 4, senderId: 'me', text: 'That is a great angle. I can cover the Mac + iPad side if you handle the mobile + wearables.', time: '10:10 AM', status: 'read' },
  { id: 5, senderId: '1', text: 'Sounds like a plan for the iPhone 16 review!', time: '10:12 AM' },
  { id: 6, senderId: 'me', text: 'Perfect. I will start drafting the script tonight.', time: '10:15 AM', status: 'read' },
  { id: 7, senderId: '1', text: 'Great. Let me know when the first draft is ready. I can help with the b-roll list.', time: '10:20 AM' },
];

const sharedMedia = [
  'https://images.unsplash.com/photo-1555212697-194d41bbe7f5?q=80&w=150&h=150&fit=crop',
  'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?q=80&w=150&h=150&fit=crop',
  'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=150&h=150&fit=crop',
  'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=150&h=150&fit=crop',
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=150&h=150&fit=crop',
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=150&h=150&fit=crop',
];

const sharedFiles = [
  { name: 'iPhone_16_Collab_Draft.docx', size: '2.4 MB', date: 'Oct 12' },
  { name: 'B-Roll_List_v1.xlsx', size: '1.1 MB', date: 'Oct 14' },
  { name: 'Thumbnail_Concepts.pdf', size: '8.5 MB', date: 'Oct 15' },
];

function MessagesContent() {
  const searchParams = useSearchParams();
  const [localContacts, setLocalContacts] = useState(contacts);
  const [activeContact, setActiveContact] = useState(contacts[0]);
  const [messages, setMessages] = useState(initialMessages);
  const [inputValue, setInputValue] = useState('');
  const [showInfo, setShowInfo] = useState(true);
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    const contactId = searchParams.get('contactId');
    const name = searchParams.get('name');
    const avatar = searchParams.get('avatar');
    const role = searchParams.get('role');

    if (contactId && name) {
      // Check if contact already exists in the list
      const existing = localContacts.find(c => c.id === contactId);
      if (existing) {
        setActiveContact(existing);
        setMessages([]);
      } else {
        const newContact = {
          id: contactId,
          name: name,
          avatar: avatar || `https://api.dicebear.com/7.x/avataaars/svg?seed=${name}`,
          lastMsg: 'Collaboration accepted! Say hello 👋',
          time: 'Just now',
          unread: 1,
          online: true,
          role: role || 'Creator Partner'
        };
        const updated = [newContact, ...localContacts];
        setLocalContacts(updated);
        setActiveContact(newContact);
        setMessages([{
          id: 1,
          senderId: contactId,
          text: `Hi! I accepted your collaboration request. Looking forward to working together! 🎉`,
          time: 'Just now'
        }]);
      }
    }
  }, []);

  // Reset messages when switching contacts (sidebar click)
  const prevContactId = useRef(contacts[0].id);
  useEffect(() => {
    if (prevContactId.current === activeContact.id) return;
    prevContactId.current = activeContact.id;
    // Don't reset if it was just set by the URL init effect
    if (activeContact.id === '1') {
      setMessages(initialMessages);
    } else if (activeContact.id.startsWith('inc')) {
      // new collab contact - messages already set by init
    } else {
      setMessages([]);
    }
  }, [activeContact.id]);

  const handleSend = () => {
    if (!inputValue.trim()) return;
    const newMsg = {
      id: messages.length + 1,
      senderId: 'me',
      text: inputValue,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: 'sent'
    };
    setMessages([...messages, newMsg]);
    setInputValue('');
  };

  return (
    <div className="h-[calc(100vh-120px)] flex bg-white rounded-[40px] shadow-sm overflow-hidden">
      {/* Contact List */}
      <aside className="w-[320px] lg:w-[360px] flex flex-col shadow-[4px_0_24px_rgba(0,0,0,0.02)] z-10 border-r border-slate-50">
        <div className="p-8 pb-4">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-2xl font-bold text-slate-900">Messages</h1>
            <button className="p-2 bg-slate-50 text-slate-500 rounded-xl hover:bg-slate-100 transition-all">
              <MoreHorizontal className="w-5 h-5" />
            </button>
          </div>
          
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search conversations..." 
              className="w-full pl-10 pr-4 py-3 bg-slate-50 border-none rounded-2xl text-sm outline-none focus:ring-2 focus:ring-[#0B3022]/10"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto no-scrollbar py-4 px-4 space-y-1">
          {localContacts.map((contact) => (
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
              <div className="relative shrink-0">
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
                <div className="w-5 h-5 bg-[#0B3022] rounded-full flex items-center justify-center text-[10px] font-bold text-white shadow-sm shrink-0">
                  {contact.unread}
                </div>
              )}
            </button>
          ))}
        </div>
      </aside>

      {/* Chat Area */}
      <main className="flex-1 flex flex-col min-w-0 bg-slate-50/20">
        <header className="h-20 px-8 flex items-center justify-between bg-white backdrop-blur-md relative z-10 shadow-sm border-b border-slate-50">
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
            <button className="p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-all hidden md:block"><Phone className="w-5 h-5" /></button>
            <button className="p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-all hidden md:block"><Video className="w-5 h-5" /></button>
            <div className="w-[1px] h-8 bg-slate-100 mx-1 hidden md:block" />
            <button 
              onClick={() => setShowInfo(!showInfo)}
              className={cn("p-2 rounded-xl transition-all", showInfo ? "text-[#0B3022] bg-slate-100" : "text-slate-400 hover:text-slate-900 hover:bg-slate-100")}
            >
              <Info className="w-5 h-5" />
            </button>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-8 space-y-6 no-scrollbar">
          {messages.map((msg) => {
            const isMe = msg.senderId === 'me';
            return (
              <div key={msg.id} className={cn("flex flex-col max-w-[75%]", isMe && "ml-auto items-end")}>
                <div className={cn(
                  "p-4 rounded-[26px] text-sm leading-relaxed shadow-sm",
                  isMe 
                    ? "bg-[#0B3022] text-white rounded-tr-none font-medium" 
                    : "bg-white text-slate-700 border border-slate-100 rounded-tl-none font-medium"
                )}>
                  {msg.text}
                </div>
                <div className="mt-2 flex items-center gap-2">
                  <span className="text-[10px] font-bold text-slate-400">{msg.time}</span>
                  {isMe && (
                    <span className="text-[#0B3022]">
                      {msg.status === 'read' ? <CheckCheck className="w-3.5 h-3.5" /> : <Check className="w-3.5 h-3.5" />}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="p-8 pt-4">
          <div className="bg-white rounded-[32px] p-2 flex items-center group shadow-md focus-within:shadow-lg transition-all border border-slate-100">
            <div className="flex items-center gap-1 px-2">
              <button className="p-2.5 text-slate-400 hover:text-[#0B3022] hover:bg-slate-50 rounded-full transition-all"><Paperclip className="w-5 h-5" /></button>
              <button className="p-2.5 text-slate-400 hover:text-[#0B3022] hover:bg-slate-50 rounded-full transition-all"><ImageIcon className="w-5 h-5" /></button>
            </div>
            <input 
              type="text" 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type your message here..." 
              className="flex-1 bg-transparent px-4 py-4 text-sm outline-none font-medium"
            />
            <div className="flex items-center gap-1 pr-2">
              <button className="p-2.5 text-slate-400 hover:text-[#0B3022] hover:bg-slate-50 rounded-full transition-all"><Smile className="w-5 h-5" /></button>
              <button 
                onClick={handleSend}
                className="w-12 h-12 bg-[#0B3022] rounded-full flex items-center justify-center text-white shadow-md hover:bg-[#166534] transition-colors"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Info Sidebar */}
      {showInfo && (
        <aside className="w-[300px] lg:w-[340px] flex flex-col bg-white border-l border-slate-50 overflow-y-auto no-scrollbar animate-in slide-in-from-right duration-300">
          <div className="p-8 text-center border-b border-slate-50">
            <div className="relative inline-block mb-4">
              <img src={activeContact.avatar} className="w-24 h-24 rounded-[32px] mx-auto shadow-lg" />
              {activeContact.online && <div className="absolute bottom-0 right-0 w-6 h-6 bg-emerald-500 rounded-full border-4 border-white" />}
            </div>
            <h3 className="text-xl font-bold text-slate-900">{activeContact.name}</h3>
            <p className="text-xs font-bold text-[#0B3022] mt-1 uppercase tracking-widest">{activeContact.role}</p>
            
            <div className="flex justify-center gap-3 mt-6">
              <button className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-500 hover:bg-slate-100 transition-all"><AtSign className="w-4 h-4" /></button>
              <button className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-500 hover:bg-slate-100 transition-all"><Video className="w-4 h-4" /></button>
              <button className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-500 hover:bg-slate-100 transition-all"><Star className="w-4 h-4" /></button>
            </div>
          </div>

          <div className="p-8 space-y-8">
            {/* About */}
            <div className="space-y-3">
              <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">About</h4>
              <p className="text-xs text-slate-500 font-medium leading-relaxed">
                Professional tech content creator specializing in consumer electronics and ecosystem deep-dives.
              </p>
            </div>

            {/* Shared Media */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Shared Media</h4>
                <button className="text-[10px] font-bold text-[#0B3022] hover:underline">View All</button>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {sharedMedia.map((url, i) => (
                  <div key={i} className="aspect-square rounded-xl overflow-hidden cursor-pointer hover:opacity-80 transition-opacity bg-slate-100">
                    <img src={url} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>

            {/* Shared Files */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Shared Files</h4>
                <button className="text-[10px] font-bold text-[#0B3022] hover:underline">View All</button>
              </div>
              <div className="space-y-2">
                {sharedFiles.map((file, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-all cursor-pointer group">
                    <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center text-[#0B3022] shadow-sm">
                      <FileText className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[11px] font-bold text-slate-900 truncate">{file.name}</p>
                      <p className="text-[9px] text-slate-400 font-bold">{file.size} · {file.date}</p>
                    </div>
                    <Download className="w-3.5 h-3.5 text-slate-300 group-hover:text-[#0B3022] transition-colors" />
                  </div>
                ))}
              </div>
            </div>

            {/* Common Projects */}
            <div className="space-y-4">
              <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Common Projects</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  <p className="text-xs font-bold text-slate-700">Tech Review 2026</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                  <p className="text-xs font-bold text-slate-700">Ecosystem Deep Dive</p>
                </div>
              </div>
            </div>
          </div>
        </aside>
      )}
    </div>
  );
}

export default function Messages() {
  return (
    <Suspense fallback={<div className="h-full flex items-center justify-center text-slate-400 font-medium">Loading messages...</div>}>
      <MessagesContent />
    </Suspense>
  );
}
