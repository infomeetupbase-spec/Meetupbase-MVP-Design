'use client';

import { Search, MoreHorizontal, Send, Phone, Video, Info, Check, CheckCheck, Image as ImageIcon, Paperclip, Smile, User, Settings, Shield, Bell, Calendar, Clock, CheckCircle2, Coins, Zap, Star, TrendingUp, Award, Eye, ThumbsUp, MessageCircle, ExternalLink, MapPin, Briefcase, FileText, Download, AtSign } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState, useEffect, useRef, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { getPusherClient } from '@/lib/pusher';
import { format } from 'date-fns';

interface Message {
  id: string;
  text: string;
  senderId: string;
  createdAt: string;
  status?: string;
}

interface Collaboration {
  id: string;
  brandId: string;
  creatorId: string;
  status: string;
  brand: {
    name: string;
    image: string | null;
  };
  creator: {
    name: string;
    image: string | null;
  };
}

function MessagesContent() {
  const { data: session } = useSession();
  const searchParams = useSearchParams();
  const [collabs, setCollabs] = useState<Collaboration[]>([]);
  const [activeCollab, setActiveCollab] = useState<Collaboration | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [showInfo, setShowInfo] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [isSending, setIsSending] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (session) {
      fetchCollabs();
    }
  }, [session]);

  useEffect(() => {
    if (activeCollab) {
      fetchMessages(activeCollab.id);

      const pusher = getPusherClient();
      const channel = pusher.subscribe(`collab-${activeCollab.id}`);

      channel.bind("new-message", (data: Message) => {
        setMessages((prev) => {
          if (prev.some((m) => m.id === data.id)) return prev;
          return [...prev, data];
        });
      });

      return () => {
        pusher.unsubscribe(`collab-${activeCollab.id}`);
      };
    }
  }, [activeCollab]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const fetchCollabs = async () => {
    try {
      const res = await fetch("/api/collabs");
      if (res.ok) {
        const data = await res.json();
        setCollabs(data);
        
        const contactId = searchParams.get("contactId");
        if (contactId) {
          const found = data.find((c: Collaboration) => c.id === contactId);
          if (found) setActiveCollab(found);
          else if (data.length > 0) setActiveCollab(data[0]);
        } else if (data.length > 0) {
          setActiveCollab(data[0]);
        }
      }
    } catch (error) {
      console.error("Error fetching collabs:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchMessages = async (collabId: string) => {
    try {
      const res = await fetch(`/api/messages?collabId=${collabId}`);
      if (res.ok) {
        const data = await res.json();
        setMessages(data);
      }
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  const handleSend = async () => {
    if (!inputValue.trim() || !activeCollab || isSending) return;

    setIsSending(true);
    try {
      const res = await fetch("/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          collabId: activeCollab.id,
          text: inputValue,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        setMessages((prev) => [...prev, data]);
        setInputValue("");
      }
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setIsSending(false);
    }
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
          {collabs.map((collab) => {
            const partner = collab.brandId === session?.user?.id ? collab.creator : collab.brand;
            return (
              <button
                key={collab.id}
                onClick={() => setActiveCollab(collab)}
                className={cn(
                  "w-full flex items-center gap-4 p-4 rounded-[28px] transition-all relative group",
                  activeCollab?.id === collab.id 
                    ? "bg-slate-50" 
                    : "hover:bg-slate-50/50"
                )}
              >
                <div className="relative shrink-0">
                  <img src={partner.image || `https://api.dicebear.com/7.x/avataaars/svg?seed=${partner.name}`} className="w-12 h-12 rounded-2xl object-cover bg-slate-100" />
                  <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-white" />
                </div>
                <div className="flex-1 min-w-0 text-left">
                  <div className="flex items-center justify-between mb-0.5">
                    <h3 className="text-sm font-bold text-slate-900 truncate">{partner.name}</h3>
                    <span className="text-[10px] font-bold text-slate-400">active</span>
                  </div>
                  <p className={cn(
                    "text-xs truncate max-w-[180px]",
                    "text-slate-500 font-medium"
                  )}>
                    Tap to chat
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </aside>

      {/* Chat Area */}
      <main className="flex-1 flex flex-col min-w-0 bg-slate-50/20">
        <header className="h-20 px-8 flex items-center justify-between bg-white backdrop-blur-md relative z-10 shadow-sm border-b border-slate-50">
          {activeCollab && (
            <>
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img src={(activeCollab.brandId === session?.user?.id ? activeCollab.creator : activeCollab.brand).image || `https://api.dicebear.com/7.x/avataaars/svg?seed=${(activeCollab.brandId === session?.user?.id ? activeCollab.creator : activeCollab.brand).name}`} className="w-10 h-10 rounded-xl" />
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white" />
                </div>
                <div>
                  <h2 className="text-base font-bold text-slate-900 leading-tight">{(activeCollab.brandId === session?.user?.id ? activeCollab.creator : activeCollab.brand).name}</h2>
                  <p className="text-[11px] font-bold text-emerald-500 flex items-center gap-1">
                    Online
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
            </>
          )}
        </header>

        <div ref={scrollRef} className="flex-1 overflow-y-auto p-8 space-y-6 no-scrollbar">
          {messages.map((msg) => {
            const isMe = msg.senderId === session?.user?.id;
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
                  <span className="text-[10px] font-bold text-slate-400">{format(new Date(msg.createdAt), 'h:mm a')}</span>
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

      {showInfo && activeCollab && (
        <aside className="w-[300px] lg:w-[340px] flex flex-col bg-white border-l border-slate-50 overflow-y-auto no-scrollbar animate-in slide-in-from-right duration-300">
          <div className="p-8 text-center border-b border-slate-50">
            <div className="relative inline-block mb-4">
              <img src={(activeCollab.brandId === session?.user?.id ? activeCollab.creator : activeCollab.brand).image || `https://api.dicebear.com/7.x/avataaars/svg?seed=${(activeCollab.brandId === session?.user?.id ? activeCollab.creator : activeCollab.brand).name}`} className="w-24 h-24 rounded-[32px] mx-auto shadow-lg" />
              <div className="absolute bottom-0 right-0 w-6 h-6 bg-emerald-500 rounded-full border-4 border-white" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">{(activeCollab.brandId === session?.user?.id ? activeCollab.creator : activeCollab.brand).name}</h3>
            <p className="text-xs font-bold text-[#0B3022] mt-1 uppercase tracking-widest">Creator Partner</p>
            
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
                {[
                  'https://images.unsplash.com/photo-1555212697-194d41bbe7f5?q=80&w=150&h=150&fit=crop',
                  'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?q=80&w=150&h=150&fit=crop',
                  'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=150&h=150&fit=crop',
                ].map((url, i) => (
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
                {[
                  { name: 'iPhone_16_Collab_Draft.docx', size: '2.4 MB', date: 'Oct 12' },
                  { name: 'B-Roll_List_v1.xlsx', size: '1.1 MB', date: 'Oct 14' },
                ].map((file, i) => (
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
