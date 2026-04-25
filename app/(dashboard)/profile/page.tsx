'use client';

import { User, Mail, Globe, Video, Camera, AtSign, Edit3, Settings, Shield, Bell, Calendar, Clock, CheckCircle2, Coins, Zap, Star, TrendingUp, Award, Eye, ThumbsUp, MessageCircle, ExternalLink, MapPin, Briefcase } from 'lucide-react';
import { useState } from 'react';
import { useAuthStore } from '@/lib/store';
import { cn } from '@/lib/utils';

const recentCollabs = [
  { id: 1, title: 'Budget Build Challenge', partner: 'Linus Tech Tips', date: 'Mar 28', views: '3.2M', rating: 4.9, img: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?q=80&w=300&h=170&fit=crop' },
  { id: 2, title: 'AI Tools Deep Dive', partner: 'Fireship', date: 'Feb 28', views: '5.1M', rating: 5.0, img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=300&h=170&fit=crop' },
  { id: 3, title: 'Camera Comparison', partner: 'iJustine', date: 'Feb 10', views: '1.8M', rating: 4.8, img: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=300&h=170&fit=crop' },
];

const reviews = [
  { id: 1, name: 'Marques Brownlee', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Marques', rating: 5, text: 'Incredible to work with. Super professional and creative. Would love to collab again!', date: '2 weeks ago' },
  { id: 2, name: 'Ali Abdaal', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ali', rating: 5, text: 'The editing quality was top-notch and deadlines were always met. Highly recommend.', date: '1 month ago' },
  { id: 3, name: 'Graham Stephan', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Graham', rating: 4, text: 'Great communication throughout the project. The final video exceeded expectations.', date: '2 months ago' },
];

const achievements = [
  { label: 'First Collab', icon: '🎬', unlocked: true },
  { label: '10 Collabs', icon: '🔥', unlocked: true },
  { label: '50 Collabs', icon: '⭐', unlocked: false },
  { label: '1M Views', icon: '👁️', unlocked: true },
  { label: 'Top Rated', icon: '🏆', unlocked: true },
  { label: '100 Collabs', icon: '💎', unlocked: false },
];

const skills = ['Video Editing', 'Scripting', 'Thumbnail Design', 'SEO', 'Audio Production', 'Motion Graphics', 'Color Grading', 'Storytelling'];

export default function Profile() {
  const { user, addCredits } = useAuthStore();
  const [isAvailable, setIsAvailable] = useState(true);
  const [availableDates, setAvailableDates] = useState('June 2026 - July 2026');
  const [isBuying, setIsBuying] = useState<number | null>(null);

  const handleBuyCredits = (amount: number) => {
    setIsBuying(amount);
    setTimeout(() => { addCredits(amount); setIsBuying(null); }, 1000);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-20">
      {/* Profile Header */}
      <div className="bg-white rounded-[40px] overflow-hidden shadow-sm">
        <div className="h-40 bg-vibrant" />
        <div className="px-10 pb-10 relative">
          <div className="absolute -top-16 left-10">
            <img src={user?.avatar} alt={user?.name} className="w-32 h-32 rounded-[32px] border-8 border-white bg-white shadow-lg" />
          </div>
          <div className="pt-20 flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold text-slate-900">{user?.name}</h1>
              <p className="text-slate-500 font-medium mt-1">{user?.role}</p>
              <div className="flex items-center gap-4 mt-3 text-xs text-slate-400 font-medium">
                <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> San Francisco, CA</span>
                <span className="flex items-center gap-1"><Briefcase className="w-3 h-3" /> Creator since 2022</span>
                <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> Joined Apr 2024</span>
              </div>
            </div>
            <button className="flex items-center gap-2 px-6 py-3 bg-slate-900 text-white font-bold rounded-2xl hover:scale-105 active:scale-95 transition-all">
              <Edit3 className="w-4 h-4" /> Edit Profile
            </button>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-100 rounded-xl text-sm font-semibold text-slate-600">
              <Video className="w-4 h-4 text-red-500" /> 2.4M Subscribers
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-100 rounded-xl text-sm font-semibold text-slate-600">
              <Globe className="w-4 h-4 text-blue-500" /> tech-alex.com
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-100 rounded-xl text-sm font-semibold text-slate-600">
              <Mail className="w-4 h-4 text-purple-500" /> hello@alex.com
            </div>
          </div>
        </div>
      </div>

      {/* Profile Stats */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {[
          { label: 'Total Collabs', value: '47', icon: Award, color: 'text-blue-500', bg: 'bg-blue-50' },
          { label: 'Avg Rating', value: '4.9', icon: Star, color: 'text-amber-500', bg: 'bg-amber-50' },
          { label: 'Total Views', value: '42M', icon: Eye, color: 'text-purple-500', bg: 'bg-purple-50' },
          { label: 'Engagement', value: '8.2%', icon: ThumbsUp, color: 'text-pink-500', bg: 'bg-pink-50' },
          { label: 'Credits', value: `${user?.credits || 0}`, icon: Coins, color: 'text-emerald-500', bg: 'bg-emerald-50' },
        ].map((stat, i) => (
          <div key={i} className="bg-white rounded-[20px] p-5 shadow-sm text-center">
            <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3", stat.bg)}>
              <stat.icon className={cn("w-5 h-5", stat.color)} />
            </div>
            <p className="text-xl font-black text-slate-900">{stat.value}</p>
            <p className="text-[11px] text-slate-400 font-medium">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Bio + Skills */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-[32px] p-8 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900 mb-4">About Me</h2>
          <p className="text-slate-500 font-medium text-sm leading-relaxed mb-6">
            Passionate tech creator focused on making complex technology accessible to everyone. 
            I specialize in in-depth reviews, comparison videos, and educational content about the 
            latest consumer tech, smart home setups, and productivity workflows. Always looking for 
            creative collaborations that push boundaries and deliver real value to audiences.
          </p>
          <h3 className="text-sm font-bold text-slate-900 mb-3">Skills & Expertise</h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, i) => (
              <span key={i} className="text-xs font-semibold px-3 py-1.5 bg-slate-50 text-slate-600 rounded-full">{skill}</span>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-[32px] p-8 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900 mb-4">Achievements</h2>
          <div className="grid grid-cols-3 gap-4">
            {achievements.map((a, i) => (
              <div key={i} className={cn(
                "text-center p-4 rounded-2xl transition-all",
                a.unlocked ? "bg-slate-50" : "bg-slate-50/50 opacity-40"
              )}>
                <div className="text-3xl mb-2">{a.icon}</div>
                <p className="text-[11px] font-bold text-slate-700">{a.label}</p>
                {a.unlocked && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mx-auto mt-1" />}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Account Settings + Social Connections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section className="bg-white rounded-[40px] p-10 shadow-sm space-y-8">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-3">
            <Settings className="w-5 h-5 text-primary" /> Account Settings
          </h2>
          <div className="space-y-4">
            {[
              { icon: User, color: 'bg-blue-50 text-blue-600', label: 'Personal Info', desc: 'Update your details' },
              { icon: Shield, color: 'bg-orange-50 text-orange-600', label: 'Security', desc: 'Password and 2FA' },
              { icon: Bell, color: 'bg-purple-50 text-purple-600', label: 'Notifications', desc: 'Email and push settings' },
              { icon: Globe, color: 'bg-teal-50 text-teal-600', label: 'Privacy', desc: 'Profile visibility settings' },
            ].map((item, i) => (
              <button key={i} className="w-full flex items-center justify-between p-4 rounded-2xl hover:bg-slate-50 transition-all group">
                <div className="flex items-center gap-4">
                  <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center", item.color.split(' ')[0])}>
                    <item.icon className={cn("w-5 h-5", item.color.split(' ')[1])} />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-bold text-slate-900">{item.label}</p>
                    <p className="text-[11px] text-slate-500 font-medium">{item.desc}</p>
                  </div>
                </div>
                <Edit3 className="w-4 h-4 text-slate-300 group-hover:text-primary transition-colors" />
              </button>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-[40px] p-10 shadow-sm space-y-8">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-3">
            <Globe className="w-5 h-5 text-primary" /> Connections
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl">
              <div className="flex items-center gap-4"><Video className="w-5 h-5 text-red-500" /><span className="text-sm font-bold text-slate-900">YouTube</span></div>
              <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">Connected</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl">
              <div className="flex items-center gap-4"><AtSign className="w-5 h-5 text-blue-400" /><span className="text-sm font-bold text-slate-900">Twitter / X</span></div>
              <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">Connected</span>
            </div>
            <div className="flex items-center justify-between p-4 border border-slate-100 rounded-2xl">
              <div className="flex items-center gap-4"><Camera className="w-5 h-5 text-pink-500" /><span className="text-sm font-bold text-slate-900">Instagram</span></div>
              <button className="text-xs font-bold text-primary hover:underline">Connect</button>
            </div>
            <div className="flex items-center justify-between p-4 border border-slate-100 rounded-2xl">
              <div className="flex items-center gap-4"><Video className="w-5 h-5 text-black" /><span className="text-sm font-bold text-slate-900">TikTok</span></div>
              <button className="text-xs font-bold text-primary hover:underline">Connect</button>
            </div>
          </div>
        </section>
      </div>

      {/* Recent Collaborations Showcase */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900">Recent Collaborations</h2>
          <button className="text-sm font-semibold text-slate-400 hover:text-slate-600 flex items-center gap-1">View All <ExternalLink className="w-3 h-3" /></button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recentCollabs.map((collab) => (
            <div key={collab.id} className="bg-white rounded-[24px] overflow-hidden shadow-sm hover:shadow-md transition-all group cursor-pointer">
              <div className="h-40 overflow-hidden">
                <img src={collab.img} alt={collab.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-slate-900 mb-1 text-sm">{collab.title}</h3>
                <p className="text-[11px] text-slate-400 font-medium mb-3">with {collab.partner} · {collab.date}</p>
                <div className="flex items-center gap-4 text-xs font-semibold text-slate-400">
                  <span className="flex items-center gap-1"><Eye className="w-3.5 h-3.5" /> {collab.views}</span>
                  <span className="flex items-center gap-1"><Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" /> {collab.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-white rounded-[32px] p-8 shadow-sm space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <Star className="w-5 h-5 text-amber-400" /> Reviews ({reviews.length})
          </h2>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black text-slate-900">4.9</span>
            <div className="flex gap-0.5">{[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />)}</div>
          </div>
        </div>
        <div className="space-y-6 divide-y divide-slate-50">
          {reviews.map((review) => (
            <div key={review.id} className="pt-6 first:pt-0">
              <div className="flex items-center gap-4 mb-3">
                <img src={review.avatar} className="w-10 h-10 rounded-xl bg-slate-100" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{review.name}</h4>
                  <div className="flex items-center gap-2">
                    <div className="flex gap-0.5">{Array.from({length: review.rating}).map((_, i) => <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />)}</div>
                    <span className="text-[10px] text-slate-400 font-medium">{review.date}</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-slate-500 font-medium leading-relaxed pl-14">{review.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Availability */}
      <section className="bg-white rounded-[40px] p-10 shadow-sm space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-3">
              <User className="w-5 h-5 text-primary" /> Collaboration Availability
            </h2>
            <p className="text-slate-500 text-sm font-medium">Let other creators know if you're open for new projects.</p>
          </div>
          <div className="flex items-center gap-3 bg-slate-50 p-2 rounded-2xl shadow-inner">
            <span className={cn("text-sm font-bold px-4 py-2 rounded-xl transition-all", isAvailable ? "text-slate-400" : "bg-white text-slate-900 shadow-sm")}>Unavailable</span>
            <button onClick={() => setIsAvailable(!isAvailable)} className={cn("relative w-14 h-8 rounded-full transition-colors duration-200", isAvailable ? "bg-emerald-500" : "bg-slate-200")}>
              <div className={cn("absolute top-1 left-1 bg-white w-6 h-6 rounded-full transition-transform duration-200", isAvailable ? "translate-x-6" : "translate-x-0")} />
            </button>
            <span className={cn("text-sm font-bold px-4 py-2 rounded-xl transition-all", isAvailable ? "bg-white text-emerald-600 shadow-sm" : "text-slate-400")}>Available</span>
          </div>
        </div>
        {isAvailable && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-in fade-in slide-in-from-top-4 duration-500">
            <div className="space-y-4">
              <label className="text-sm font-bold text-slate-900 flex items-center gap-2"><Calendar className="w-4 h-4 text-primary" /> Available Dates</label>
              <input type="text" value={availableDates} onChange={(e) => setAvailableDates(e.target.value)} className="w-full px-6 py-4 bg-slate-50 shadow-inner rounded-2xl outline-none focus:ring-4 focus:ring-primary/5 text-sm font-medium transition-all" />
            </div>
            <div className="space-y-4">
              <label className="text-sm font-bold text-slate-900 flex items-center gap-2"><Clock className="w-4 h-4 text-primary" /> Preferred Timeframe</label>
              <select className="w-full px-6 py-4 bg-slate-50 shadow-inner rounded-2xl outline-none text-sm font-medium transition-all appearance-none">
                <option>Short-term (1-2 weeks)</option>
                <option>Medium-term (1 month)</option>
                <option>Long-term (3+ months)</option>
                <option>Ongoing partnership</option>
              </select>
            </div>
          </div>
        )}
      </section>

      {/* Credit Top-up */}
      <section className="bg-white rounded-[40px] p-10 shadow-sm space-y-8">
        <div className="space-y-2 text-center md:text-left">
          <h2 className="text-xl font-bold text-slate-900 flex items-center justify-center md:justify-start gap-3">
            <Coins className="w-5 h-5 text-[#0B3022]" /> Buy Connect Credits
          </h2>
          <p className="text-slate-500 text-sm font-medium">Credits allow you to send collaboration requests to premium creators.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { amount: 10, price: '$5', icon: Coins, color: 'text-blue-600', bg: 'bg-blue-50' },
            { amount: 50, price: '$19', icon: Zap, color: 'text-[#0B3022]', bg: 'bg-[#0B3022]/10', popular: true },
            { amount: 150, price: '$49', icon: CheckCircle2, color: 'text-purple-600', bg: 'bg-purple-50' },
          ].map((tier) => (
            <div key={tier.amount} className={cn(
              "relative p-8 rounded-[32px] transition-all flex flex-col items-center text-center",
              tier.popular ? "bg-[#0B3022]/5 shadow-md ring-2 ring-[#0B3022] ring-offset-2" : "bg-slate-50 shadow-sm"
            )}>
              {tier.popular && <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#0B3022] text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest">Best Value</span>}
              <div className={cn("w-16 h-16 rounded-3xl flex items-center justify-center mb-6", tier.bg)}>
                <tier.icon className={cn("w-8 h-8", tier.color)} />
              </div>
              <h3 className="text-2xl font-black text-slate-900">{tier.amount} Credits</h3>
              <p className="text-sm font-medium text-slate-500 mb-8">{tier.price} USD</p>
              <button onClick={() => handleBuyCredits(tier.amount)} disabled={isBuying !== null} className={cn(
                "w-full py-4 rounded-2xl font-bold text-sm transition-all active:scale-95 disabled:opacity-50",
                tier.popular ? "bg-[#0B3022] text-white shadow-lg shadow-[#0B3022]/20 hover:bg-[#166534]" : "bg-slate-900 text-white hover:bg-slate-800"
              )}>
                {isBuying === tier.amount ? 'Processing...' : 'Buy Now'}
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
