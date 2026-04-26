'use client';

import { Search, Filter, Star, ArrowRight, Coins, TrendingUp, Award, Users, Zap, Eye, Crown, Flame, Timer, Gavel, MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useAuthStore } from '@/lib/store';
import { getPusherClient } from '@/lib/pusher';
import { useSession } from 'next-auth/react';

interface Auction {
  id: string;
  hostId: string;
  startingBid: number;
  currentBid: number;
  endTime: string;
  status: string;
  host: {
    id: string;
    name: string;
    image: string | null;
    role: string | null;
  };
}

const risingStars = [
  { name: 'TechLinked', subs: '420K', growth: '+180%', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=TechLinked' },
  { name: 'CodeBullet', subs: '380K', growth: '+150%', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=CodeBullet' },
  { name: 'ZenMaster', subs: '290K', growth: '+220%', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ZenMaster' },
  { name: 'FitWithMia', subs: '510K', growth: '+95%', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=FitWithMia' },
];

const categories = ['All', 'Health care', 'Environment', 'Security', 'Relationship', 'Purpose', 'Tech', 'Gaming', 'Finance', 'Education', 'Fitness', 'Lifestyle'];

export default function DiscoverPage() {
  const { data: session } = useSession();
  const [activeCategory, setActiveCategory] = useState('All');
  const [auctions, setAuctions] = useState<Auction[]>([]);
  const { deductCredits, user } = useAuthStore();
  const [biddingAuction, setBiddingAuction] = useState<Auction | null>(null);
  const [bidForm, setBidForm] = useState({ amount: '', message: '' });
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [timeLeft, setTimeLeft] = useState<Record<string, string>>({});

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft: Record<string, string> = {};
      auctions.forEach(auction => {
        newTimeLeft[auction.id] = getTimeRemaining(auction.endTime);
      });
      setTimeLeft(newTimeLeft);
    }, 1000);

    return () => clearInterval(timer);
  }, [auctions]);

  function getTimeRemaining(endTime: string) {
    const total = Date.parse(endTime) - Date.now();
    if (total <= 0) return 'Expired';
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    if (days > 0) return `${days}d ${hours}h`;
    return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }

  useEffect(() => {
    fetchAuctions();
  }, []);

  useEffect(() => {
    if (auctions.length > 0) {
      const pusher = getPusherClient();
      const channels = auctions.map(a => pusher.subscribe(`auction-${a.id}`));

      channels.forEach(channel => {
        channel.bind("new-bid", (data: { auctionId: string, amount: number }) => {
          setAuctions(prev => prev.map(a => 
            a.id === data.auctionId ? { ...a, currentBid: data.amount } : a
          ));
        });
      });

      return () => {
        auctions.forEach(a => pusher.unsubscribe(`auction-${a.id}`));
      };
    }
  }, [auctions.length]);

  const fetchAuctions = async () => {
    try {
      const res = await fetch("/api/auctions");
      if (res.ok) {
        const data = await res.json();
        setAuctions(data);
      }
    } catch (error) {
      console.error("Error fetching auctions:", error);
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleConnect = (creatorId: string, cost: number) => {
    if (!session) {
      alert("Please log in to connect with creators.");
      return;
    }
    if ((user?.credits || 0) < cost) {
      alert('Not enough credits. Please buy more connects in your profile.');
      return;
    }
    if (confirm(`This will deduct ${cost} credits from your balance. Proceed?`)) {
      deductCredits(cost);
      alert(`Connection request sent! ${cost} credits deducted.`);
    }
  };

  const handleBidClick = (auction: Auction) => {
    if (!session) {
      alert("Please log in to place a bid.");
      return;
    }
    setBiddingAuction(auction);
    setBidForm({ amount: (auction.currentBid + 5).toString(), message: '' });
  };

  const submitBid = async () => {
    if (!biddingAuction || !session) return;
    const amount = parseInt(bidForm.amount);
    
    if (isNaN(amount) || amount <= biddingAuction.currentBid) {
      alert('Invalid bid. You must bid higher than the current bid.');
      return;
    }
    
    try {
      const res = await fetch("/api/auctions/bid", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          auctionId: biddingAuction.id,
          amount,
          message: bidForm.message,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        deductCredits(amount);
        setBiddingAuction(null);
        alert(`Bid of ${amount} Credits placed successfully!`);
        fetchAuctions(); // Refresh to get latest state
      } else {
        const error = await res.json();
        alert(error.error || "Failed to place bid");
      }
    } catch (error) {
      console.error("Error placing bid:", error);
    }
  };

  return (
    <div className="max-w-[1600px] mx-auto pb-20">
      
      {/* Header & Search */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-slate-900">Top Mentors</h1>
          <p className="text-slate-500 font-medium">Discover and connect with top creators in your niche.</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search by name or niche..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 bg-white rounded-xl text-sm shadow-sm focus:ring-2 focus:ring-[#0B3022]/20 outline-none w-[240px] transition-all" 
            />
          </div>
          <button className="p-2 bg-white shadow-sm rounded-xl hover:bg-slate-50 transition-colors">
            <Filter className="w-5 h-5 text-slate-500" />
          </button>
        </div>
      </div>

      {/* Featured Creator Placeholder */}
      <div className="bg-white rounded-[32px] overflow-hidden shadow-sm mb-10 group">
        <div className="relative h-56 overflow-hidden">
          <img src="https://images.unsplash.com/photo-1555212697-194d41bbe7f5?q=80&w=800&h=400&fit=crop" alt="Featured" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute top-4 left-4">
            <span className="bg-amber-400 text-amber-900 text-xs font-black px-3 py-1.5 rounded-full flex items-center gap-1">
              <Crown className="w-3 h-3" /> Featured Auction
            </span>
          </div>
          <div className="absolute bottom-6 left-8 right-8 flex items-end justify-between">
            <div className="text-white">
              <h2 className="text-2xl font-bold">Marques Brownlee</h2>
              <p className="text-white/70 text-sm font-medium">@mkbhd · Tech / Gadgets</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-center text-white">
                <p className="text-lg font-black">18.5M</p>
                <p className="text-[10px] text-white/60 font-medium">Subscribers</p>
              </div>
            </div>
          </div>
        </div>
        <div className="p-6 flex items-center justify-between">
          <p className="text-slate-500 font-medium text-sm max-max-w-xl">Quality tech reviews and deep dives into the latest consumer technology.</p>
          <button className="px-6 py-3 bg-[#0B3022] text-white font-bold rounded-xl hover:bg-[#166534] transition-colors shadow-md shadow-[#0B3022]/20 flex items-center gap-2 whitespace-nowrap">
            View Auction
          </button>
        </div>
      </div>

      {/* Categories */}
      <div className="flex items-center gap-3 overflow-x-auto pb-6 scrollbar-hide">
        {categories.map((cat) => (
          <button key={cat} onClick={() => setActiveCategory(cat)} className={cn(
            "px-5 py-2 rounded-full text-sm font-semibold transition-all whitespace-nowrap",
            activeCategory === cat ? "bg-[#0B3022] text-white shadow-md shadow-[#0B3022]/20" : "bg-white text-slate-500 hover:bg-slate-50 shadow-sm"
          )}>{cat}</button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
        {auctions
          .filter(auction => {
            const matchesCategory = activeCategory === 'All' || auction.host.role?.toLowerCase().includes(activeCategory.toLowerCase());
            const matchesSearch = auction.host.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                                  auction.host.role?.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
          })
          .map((auction) => (
          <div key={auction.id} className="group bg-white rounded-[24px] overflow-hidden shadow-sm hover:shadow-md transition-shadow relative flex flex-col">
            <div className="h-44 w-full relative overflow-hidden bg-slate-100 p-2 pb-0">
               <img src={auction.host.image || `https://api.dicebear.com/7.x/avataaars/svg?seed=${auction.host.name}`} alt={auction.host.name} className="w-full h-full object-cover rounded-t-[16px] group-hover:scale-105 transition-transform duration-500" />
               <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center gap-1 text-[10px] font-bold text-slate-900 shadow-sm">
                 <Star className="w-3 h-3 fill-amber-400 text-amber-400" /> 4.9
               </div>
               <div className="absolute top-4 left-4 bg-[#0B3022]/90 backdrop-blur-sm px-2 py-1 rounded-lg text-[10px] font-bold text-white flex items-center gap-1 shadow-sm">
                 <Gavel className="w-3 h-3 text-amber-400" /> Live Auction
               </div>
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-[10px] font-bold text-slate-900 flex items-center gap-1 shadow-sm">
                  <Timer className="w-3 h-3 text-red-500" /> {timeLeft[auction.id] || 'Calculating...'}
                </div>
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-bold text-slate-900 text-lg leading-tight">{auction.host.role || 'Creator'}</h3>
                  <div className="text-right">
                    <p className="text-[10px] font-medium text-slate-400 uppercase tracking-wider">Current Bid</p>
                    <p className="text-sm font-black text-[#0B3022]">{auction.currentBid} Credits</p>
                  </div>
                </div>
                <p className="text-[11px] text-slate-500 font-medium mb-2">1.2M subscribers</p>
                <p className="text-[11px] text-slate-400 font-medium bg-slate-50 inline-block px-2 py-1 rounded">12 recent collabs</p>
              </div>
              <div className="flex items-center justify-between mt-4">
                <span className="text-xs font-semibold px-2 py-1 bg-slate-50 text-slate-500 rounded-md">{auction.host.name}</span>
                <div className="flex -space-x-2">
                  {[1,2,3].map(i => (
                    <img key={i} src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${auction.id}${i}`} className="w-6 h-6 rounded-full border-2 border-white bg-slate-100" />
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform bg-white/90 backdrop-blur border-t border-slate-50">
              <button onClick={() => handleBidClick(auction)} className="w-full py-2.5 rounded-xl font-bold text-sm transition-colors flex items-center justify-center gap-2 shadow-md bg-amber-400 text-amber-950 hover:bg-amber-500 shadow-amber-400/20">
                <Gavel className="w-4 h-4" /> Place Bid <span className="opacity-60">(&gt;{auction.currentBid})</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Rising Stars + Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
        <div className="lg:col-span-2 bg-white rounded-[32px] p-8 shadow-sm">
          <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
            <Flame className="w-5 h-5 text-orange-500" /> Rising Stars
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {risingStars.map((star, i) => (
              <div key={i} className="text-center p-5 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer group">
                <img src={star.avatar} className="w-16 h-16 rounded-2xl mx-auto mb-3 bg-white group-hover:scale-110 transition-transform" />
                <h4 className="font-bold text-slate-900 text-sm">{star.name}</h4>
                <p className="text-xs text-slate-400 font-medium">{star.subs} subs</p>
                <span className="text-xs font-bold text-emerald-500 mt-1 inline-block">{star.growth}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#0B3022] to-[#166534] rounded-[32px] p-8 text-white shadow-xl">
          <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
            <Zap className="w-5 h-5 text-[#84CC16]" /> Platform Stats
          </h3>
          <div className="space-y-6">
            {[
              { label: 'Active Creators', value: '12,400+', icon: Users },
              { label: 'Collabs This Month', value: '3,200+', icon: Award },
              { label: 'Total Views Generated', value: '2.1B+', icon: Eye },
              { label: 'Avg Growth Rate', value: '+34%', icon: TrendingUp },
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                  <stat.icon className="w-5 h-5 text-[#84CC16]" />
                </div>
                <div>
                  <p className="text-xl font-black">{stat.value}</p>
                  <p className="text-xs text-white/60 font-medium">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center pt-6">
        <div className="flex items-center gap-2">
          <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#0B3022] text-white font-bold shadow-sm">1</button>
          <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-white shadow-sm text-slate-400">2</button>
          <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-white shadow-sm text-slate-400">3</button>
          <span className="mx-2 text-slate-300">...</span>
          <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-white shadow-sm text-slate-400">12</button>
        </div>
      </div>

      {/* Bidding Modal */}
      {biddingAuction && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <div className="bg-white rounded-[32px] p-8 w-full max-w-md shadow-2xl animate-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <Gavel className="w-5 h-5 text-amber-500" /> Place Your Bid
              </h2>
              <button onClick={() => setBiddingAuction(null)} className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 text-slate-400 hover:bg-slate-200 hover:text-slate-600 transition-colors">✕</button>
            </div>
            
            <div className="flex items-center gap-4 p-4 bg-slate-50 border border-slate-100 rounded-2xl mb-6">
              <img src={biddingAuction.host.image || `https://api.dicebear.com/7.x/avataaars/svg?seed=${biddingAuction.host.name}`} className="w-12 h-12 rounded-xl object-cover shadow-sm" alt={biddingAuction.host.name} />
              <div>
                <p className="font-bold text-slate-900 text-sm">{biddingAuction.host.name}</p>
                <p className="text-[11px] text-slate-500 font-medium">Current Highest Bid: <span className="font-bold text-[#0B3022]">{biddingAuction.currentBid} Credits</span></p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm font-bold text-slate-900 mb-1.5 block">Your Bid Amount (Credits)</label>
                <input 
                  type="number" 
                  value={bidForm.amount}
                  onChange={e => setBidForm(f => ({ ...f, amount: e.target.value }))}
                  className="w-full px-4 py-3 bg-white border-2 border-slate-100 rounded-xl outline-none focus:border-amber-400 focus:ring-4 focus:ring-amber-400/10 font-bold transition-all text-slate-900"
                  placeholder="Enter amount..."
                />
              </div>
              <div>
                <label className="text-sm font-bold text-slate-900 mb-1.5 block">Message to Creator</label>
                <textarea 
                  value={bidForm.message}
                  onChange={e => setBidForm(f => ({ ...f, message: e.target.value }))}
                  className="w-full px-4 py-3 bg-white border-2 border-slate-100 rounded-xl outline-none focus:border-amber-400 focus:ring-4 focus:ring-amber-400/10 font-medium text-sm h-28 resize-none transition-all text-slate-900"
                  placeholder="Why are you the best fit for this collaboration? Tell them about your idea!"
                />
              </div>
            </div>

            <button onClick={submitBid} className="w-full py-4 mt-8 bg-amber-400 hover:bg-amber-500 text-amber-950 font-black rounded-xl shadow-lg shadow-amber-400/20 transition-all flex items-center justify-center gap-2">
              <Gavel className="w-5 h-5" /> Confirm Bid
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
