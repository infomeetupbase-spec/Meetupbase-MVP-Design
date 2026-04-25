'use client';

import { Users, Clock, Undo2, Gift, CheckCircle2, XCircle, AlertCircle, Coins } from 'lucide-react';
import { cn } from '@/lib/utils';

const pendingRequests = [
  {
    id: 'req1',
    creatorName: 'Marques Brownlee',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Marques',
    date: '2026-04-24',
    cost: 10,
    daysLeft: 6,
    status: 'pending',
  },
  {
    id: 'req2',
    creatorName: 'Graham Stephan',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Graham',
    date: '2026-04-20',
    cost: 5,
    daysLeft: 2,
    status: 'pending',
  }
];

const incomingRequests = [
  {
    id: 'inc1',
    senderName: 'Sarah J. (Tech Reviewer)',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
    date: '2026-04-25',
    reward: 4, // 80% of 5 credits (example reward share)
    status: 'new',
  }
];

export default function Collaborations() {
  return (
    <div className="max-w-5xl mx-auto space-y-10">
      <header>
        <h1 className="text-3xl font-bold text-slate-900">Collaborations</h1>
        <p className="text-slate-500 mt-1">Manage your requests and active projects</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Outgoing Requests */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-3">
              <Undo2 className="w-5 h-5 text-primary" />
              Outgoing Requests
            </h2>
            <span className="bg-primary/5 text-primary px-3 py-1 rounded-full text-xs font-bold">
              {pendingRequests.length} Pending
            </span>
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
                      <Coins className="w-4 h-4" />
                      -{req.cost}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl">
                  <Clock className="w-4 h-4 text-orange-500" />
                  <div className="flex-1">
                    <p className="text-xs font-bold text-slate-700">Auto-refund in {req.daysLeft} days</p>
                    <p className="text-[10px] text-slate-400 font-medium">Refund: {req.cost * 0.9} Credits (10% platform fee applies)</p>
                  </div>
                  <AlertCircle className="w-4 h-4 text-slate-300" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Incoming Requests (Creator Rewards) */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-3">
              <Gift className="w-5 h-5 text-emerald-500" />
              Incoming Requests
            </h2>
            <span className="bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full text-xs font-bold">
              Creator Rewards Active
            </span>
          </div>

          <div className="space-y-4">
            {incomingRequests.map((req) => (
              <div key={req.id} className="bg-white rounded-[32px] p-6 shadow-sm border-l-4 border-l-emerald-500">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <img src={req.avatar} alt={req.senderName} className="w-12 h-12 rounded-2xl bg-slate-100" />
                    <div>
                      <h3 className="font-bold text-slate-900">{req.senderName}</h3>
                      <p className="text-xs text-slate-500 font-medium">Received today</p>
                    </div>
                  </div>
                  <div className="bg-emerald-50 text-emerald-600 px-4 py-2 rounded-2xl">
                    <div className="flex items-center gap-1.5 font-black text-sm">
                      <Gift className="w-3.5 h-3.5" />
                      +{req.reward} Credits
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
