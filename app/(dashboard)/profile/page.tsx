'use client';

import { User, Mail, Globe, Video, Camera, AtSign, Edit3, Settings, Shield, Bell } from 'lucide-react';
import { useAuthStore } from '@/lib/store';
import { cn } from '@/lib/utils';

export default function Profile() {
  const { user } = useAuthStore();

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Profile Header */}
      <div className="bg-white rounded-[40px] border border-border overflow-hidden shadow-sm">
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
        <section className="bg-white rounded-[40px] border border-border p-10 shadow-sm space-y-8">
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
        <section className="bg-white rounded-[40px] border border-border p-10 shadow-sm space-y-8">
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
    </div>
  );
}
