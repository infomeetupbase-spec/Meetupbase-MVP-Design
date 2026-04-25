'use client';

import { User, Mail, Globe, Video, Camera, AtSign, Edit3, Settings, Shield, Bell, Calendar, Clock, CheckCircle2, Coins, Zap } from 'lucide-react';
import { useState } from 'react';
import { useAuthStore } from '@/lib/store';
import { cn } from '@/lib/utils';

export default function Profile() {
  const { user, addCredits } = useAuthStore();
  const [isAvailable, setIsAvailable] = useState(true);
  const [availableDates, setAvailableDates] = useState('June 2026 - July 2026');
  const [isBuying, setIsBuying] = useState<number | null>(null);

  const handleBuyCredits = (amount: number) => {
    setIsBuying(amount);
    setTimeout(() => {
      addCredits(amount);
      setIsBuying(null);
    }, 1000);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Profile Header */}
      <div className="bg-white rounded-[40px] overflow-hidden shadow-sm">
        <div className="h-40 bg-vibrant" />
        <div className="px-10 pb-10 relative">
          <div className="absolute -top-16 left-10">
            <img 
              src={user?.avatar} 
              alt={user?.name} 
              className="w-32 h-32 rounded-[32px] border-8 border-white bg-white shadow-lg"
            />
          </div>
          
          <div className="pt-20 flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold text-slate-900">{user?.name}</h1>
              <p className="text-slate-500 font-medium mt-1">{user?.role}</p>
            </div>
            <button className="flex items-center gap-2 px-6 py-3 bg-slate-900 text-white font-bold rounded-2xl hover:scale-105 active:scale-95 transition-all">
              <Edit3 className="w-4 h-4" />
              Edit Profile
            </button>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-100 rounded-xl text-sm font-semibold text-slate-600">
              <Video className="w-4 h-4 text-red-500" />
              2.4M Subscribers
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-100 rounded-xl text-sm font-semibold text-slate-600">
              <Globe className="w-4 h-4 text-blue-500" />
              tech-alex.com
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-100 rounded-xl text-sm font-semibold text-slate-600">
              <Mail className="w-4 h-4 text-purple-500" />
              hello@alex.com
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Account Settings */}
        <section className="bg-white rounded-[40px] p-10 shadow-sm space-y-8">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-3">
            <Settings className="w-5 h-5 text-primary" />
            Account Settings
          </h2>
          
          <div className="space-y-4">
            <button className="w-full flex items-center justify-between p-4 rounded-2xl hover:bg-slate-50 transition-all group">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
                  <User className="w-5 h-5 text-blue-600" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-bold text-slate-900">Personal Info</p>
                  <p className="text-[11px] text-slate-500 font-medium">Update your details</p>
                </div>
              </div>
              <Edit3 className="w-4 h-4 text-slate-300 group-hover:text-primary transition-colors" />
            </button>

            <button className="w-full flex items-center justify-between p-4 rounded-2xl hover:bg-slate-50 transition-all group">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center">
                  <Shield className="w-5 h-5 text-orange-600" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-bold text-slate-900">Security</p>
                  <p className="text-[11px] text-slate-500 font-medium">Password and 2FA</p>
                </div>
              </div>
              <Edit3 className="w-4 h-4 text-slate-300 group-hover:text-primary transition-colors" />
            </button>

            <button className="w-full flex items-center justify-between p-4 rounded-2xl hover:bg-slate-50 transition-all group">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center">
                  <Bell className="w-5 h-5 text-purple-600" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-bold text-slate-900">Notifications</p>
                  <p className="text-[11px] text-slate-500 font-medium">Email and push settings</p>
                </div>
              </div>
              <Edit3 className="w-4 h-4 text-slate-300 group-hover:text-primary transition-colors" />
            </button>
          </div>
        </section>

        {/* Social Connections */}
        <section className="bg-white rounded-[40px] p-10 shadow-sm space-y-8">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-3">
            <Globe className="w-5 h-5 text-primary" />
            Connections
          </h2>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl">
              <div className="flex items-center gap-4">
                <Video className="w-5 h-5 text-red-500" />
                <span className="text-sm font-bold text-slate-900">YouTube</span>
              </div>
              <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">Connected</span>
            </div>
            
            <div className="flex items-center justify-between p-4 border border-slate-100 rounded-2xl">
              <div className="flex items-center gap-4">
                <AtSign className="w-5 h-5 text-blue-400" />
                <span className="text-sm font-bold text-slate-900">Twitter</span>
              </div>
              <button className="text-xs font-bold text-primary hover:underline">Connect</button>
            </div>

            <div className="flex items-center justify-between p-4 border border-slate-100 rounded-2xl">
              <div className="flex items-center gap-4">
                <Camera className="w-5 h-5 text-pink-500" />
                <span className="text-sm font-bold text-slate-900">Instagram</span>
              </div>
              <button className="text-xs font-bold text-primary hover:underline">Connect</button>
            </div>
          </div>
        </section>
      </div>
      {/* Collaboration Availability */}
      <section className="bg-white rounded-[40px] p-10 shadow-sm space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-3">
              <User className="w-5 h-5 text-primary" />
              Collaboration Availability
            </h2>
            <p className="text-slate-500 text-sm font-medium">
              Let other creators know if you're open for new projects and when you're available.
            </p>
          </div>
          
          <div className="flex items-center gap-3 bg-slate-50 p-2 rounded-2xl shadow-inner">
            <span className={cn(
              "text-sm font-bold px-4 py-2 rounded-xl transition-all",
              isAvailable ? "text-slate-400" : "bg-white text-slate-900 shadow-sm"
            )}>
              Unavailable
            </span>
            <button 
              onClick={() => setIsAvailable(!isAvailable)}
              className={cn(
                "relative w-14 h-8 rounded-full transition-colors duration-200 focus:outline-none",
                isAvailable ? "bg-emerald-500" : "bg-slate-200"
              )}
            >
              <div className={cn(
                "absolute top-1 left-1 bg-white w-6 h-6 rounded-full transition-transform duration-200",
                isAvailable ? "translate-x-6" : "translate-x-0"
              )} />
            </button>
            <span className={cn(
              "text-sm font-bold px-4 py-2 rounded-xl transition-all",
              isAvailable ? "bg-white text-emerald-600 shadow-sm" : "text-slate-400"
            )}>
              Available
            </span>
          </div>
        </div>

        {isAvailable && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-in fade-in slide-in-from-top-4 duration-500">
            <div className="space-y-4">
              <label className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-primary" />
                Available Dates
              </label>
              <input 
                type="text" 
                value={availableDates}
                onChange={(e) => setAvailableDates(e.target.value)}
                placeholder="e.g. Next month, weekends only, etc."
                className="w-full px-6 py-4 bg-slate-50 shadow-inner rounded-2xl outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 text-sm font-medium transition-all"
              />
            </div>
            <div className="space-y-4">
              <label className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                Preferred Timeframe
              </label>
              <select className="w-full px-6 py-4 bg-slate-50 shadow-inner rounded-2xl outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 text-sm font-medium transition-all appearance-none">
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
            <Coins className="w-5 h-5 text-[#0B3022]" />
            Buy Connect Credits
          </h2>
          <p className="text-slate-500 text-sm font-medium">
            Credits allow you to send collaboration requests to premium creators and protect the community from spam.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { amount: 10, price: '$5', icon: Coins, color: 'text-blue-600', bg: 'bg-blue-50' },
            { amount: 50, price: '$19', icon: Zap, color: 'text-[#0B3022]', bg: 'bg-[#0B3022]/10', popular: true },
            { amount: 150, price: '$49', icon: CheckCircle2, color: 'text-purple-600', bg: 'bg-purple-50' },
          ].map((tier) => (
            <div 
              key={tier.amount}
              className={cn(
                "relative p-8 rounded-[32px] transition-all flex flex-col items-center text-center",
                tier.popular ? "bg-[#0B3022]/5 shadow-md ring-2 ring-[#0B3022] ring-offset-2" : "bg-slate-50 shadow-sm"
              )}
            >
              {tier.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#0B3022] text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest">
                  Best Value
                </span>
              )}
              <div className={cn("w-16 h-16 rounded-3xl flex items-center justify-center mb-6", tier.bg)}>
                <tier.icon className={cn("w-8 h-8", tier.color)} />
              </div>
              <h3 className="text-2xl font-black text-slate-900">{tier.amount} Credits</h3>
              <p className="text-sm font-medium text-slate-500 mb-8">{tier.price} USD</p>
              <button 
                onClick={() => handleBuyCredits(tier.amount)}
                disabled={isBuying !== null}
                className={cn(
                  "w-full py-4 rounded-2xl font-bold text-sm transition-all active:scale-95 disabled:opacity-50",
                  tier.popular ? "bg-[#0B3022] text-white shadow-lg shadow-[#0B3022]/20 hover:bg-[#166534]" : "bg-slate-900 text-white hover:bg-slate-800"
                )}
              >
                {isBuying === tier.amount ? 'Processing...' : 'Buy Now'}
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
