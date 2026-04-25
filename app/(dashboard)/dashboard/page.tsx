'use client';

import { useAuthStore } from '@/lib/store';
import { 
  TrendingUp, Users, ShieldCheck, Target, ArrowUpRight, Clock,
  BarChart3, Eye, ThumbsUp, MessageCircle, Calendar, Flame,
  Award, Zap, PlayCircle, ExternalLink
} from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const stats = [
  { label: 'Collab Trending', value: '24+', sub: 'Categories', icon: TrendingUp, dark: true },
  { label: 'Total Creators', value: '1.2k', sub: 'Verified', icon: Users, dark: false },
  { label: 'Secure Deals', value: '14+', sub: 'Active', icon: ShieldCheck, dark: false },
  { label: 'Success Rate', value: '98%', sub: 'Completed', icon: Target, dark: false },
];

const topCreators = [
  { id: 1, name: 'Marques Brownlee', niche: 'Tech Reviewer', img: 'https://images.unsplash.com/photo-1555212697-194d41bbe7f5?q=80&w=400&h=300&fit=crop' },
  { id: 2, name: 'Sarah Jenkins', niche: 'Lifestyle Vlog', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&h=300&fit=crop' },
  { id: 3, name: 'David Chen', niche: 'Gaming', img: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=400&h=300&fit=crop' },
  { id: 4, name: 'Emma Wilson', niche: 'Education', img: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=400&h=300&fit=crop' },
  { id: 5, name: 'Alex Rivera', niche: 'Fitness', img: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=400&h=300&fit=crop' },
  { id: 6, name: 'Mia Wong', niche: 'Finance', img: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff0f?q=80&w=400&h=300&fit=crop' },
];

const newsUpdates = [
  { id: 1, title: 'Structured Collab Programs to Improve Audience Retention', tag: 'Strategy', time: '10 min read', img: 'https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=150&h=100&fit=crop' },
  { id: 2, title: 'Comprehensive Approaches to Brand Deals for Long Term Growth', tag: 'Monetization', time: '20 min read', img: 'https://images.unsplash.com/photo-1556761175-5973dc0f32d7?q=80&w=150&h=100&fit=crop' },
  { id: 3, title: 'Improving Overall Video Quality Through Evidence Based Practices', tag: 'Production', time: '15 min read', img: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=150&h=100&fit=crop' },
  { id: 4, title: 'Understanding YouTube Algorithm Changes This Month', tag: 'Analytics', time: '5 min read', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=150&h=100&fit=crop' },
];

const weeklyData = [
  { day: 'Mon', views: 45, collabs: 2 },
  { day: 'Tue', views: 62, collabs: 3 },
  { day: 'Wed', views: 38, collabs: 1 },
  { day: 'Thu', views: 80, collabs: 5 },
  { day: 'Fri', views: 55, collabs: 4 },
  { day: 'Sat', views: 90, collabs: 6 },
  { day: 'Sun', views: 72, collabs: 3 },
];

const recentActivity = [
  { id: 1, user: 'Marques Brownlee', action: 'accepted your collaboration request', time: '2 hours ago', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Marques', type: 'accept' },
  { id: 2, user: 'Ali Abdaal', action: 'sent you a message about the script', time: '4 hours ago', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ali', type: 'message' },
  { id: 3, user: 'Emma Wilson', action: 'left a 5-star review on your collab', time: '6 hours ago', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emma', type: 'review' },
  { id: 4, user: 'Graham Stephan', action: 'invited you to join "Finance Tips 2026"', time: '1 day ago', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Graham', type: 'invite' },
  { id: 5, user: 'Fireship', action: 'uploaded new assets for "Next.js Deep Dive"', time: '1 day ago', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Fireship', type: 'upload' },
  { id: 6, user: 'iJustine', action: 'completed milestone: Final Edit Review', time: '2 days ago', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Justine', type: 'milestone' },
];

const upcomingCollabs = [
  { id: 1, title: 'Tech Ecosystem Review 2026', partner: 'Marques Brownlee', date: 'May 2, 2026', status: 'confirmed', color: 'bg-emerald-500' },
  { id: 2, title: 'Productivity Masterclass', partner: 'Ali Abdaal', date: 'May 8, 2026', status: 'planning', color: 'bg-blue-500' },
  { id: 3, title: 'Budget Build Challenge', partner: 'Linus Tech Tips', date: 'May 15, 2026', status: 'draft', color: 'bg-orange-500' },
  { id: 4, title: 'Finance for Creators Workshop', partner: 'Graham Stephan', date: 'May 22, 2026', status: 'confirmed', color: 'bg-emerald-500' },
];

const trendingTopics = [
  { tag: '#AITools', count: '12.4k collabs', growth: '+340%' },
  { tag: '#ShortForm', count: '8.9k collabs', growth: '+120%' },
  { tag: '#TechReview', count: '6.2k collabs', growth: '+85%' },
  { tag: '#FinanceTips', count: '5.1k collabs', growth: '+67%' },
  { tag: '#GamingSetup', count: '4.8k collabs', growth: '+52%' },
  { tag: '#Fitness2026', count: '3.9k collabs', growth: '+44%' },
];

const recentVideos = [
  { id: 1, title: 'Building the Ultimate Smart Home in 2026', views: '2.4M', likes: '142K', comments: '8.2K', thumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?q=80&w=400&h=225&fit=crop', duration: '18:42' },
  { id: 2, title: 'Why Every Creator Needs a Second Channel', views: '1.1M', likes: '89K', comments: '5.1K', thumbnail: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=400&h=225&fit=crop', duration: '12:15' },
  { id: 3, title: 'The Perfect Camera Setup Under $1000', views: '890K', likes: '67K', comments: '3.8K', thumbnail: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=400&h=225&fit=crop', duration: '14:33' },
];

export default function DashboardPage() {
  const { user } = useAuthStore();

  return (
    <div className="max-w-[1600px] mx-auto pb-20">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-1">Welcome Back,</h1>
        <h2 className="text-3xl font-bold text-slate-900">{user?.name || 'Creator'}</h2>
      </div>

      {/* STATS ROW */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {stats.map((stat, idx) => (
          <div 
            key={idx} 
            className={cn(
              "p-6 rounded-[24px] shadow-sm flex flex-col justify-between h-[160px] transition-transform hover:-translate-y-1",
              stat.dark ? "bg-[#0B3022] text-white" : "bg-white text-slate-900"
            )}
          >
            <div className="flex justify-between items-start">
              <span className={cn("font-semibold", stat.dark ? "text-white/90" : "text-slate-500")}>
                {stat.label}
              </span>
              <div className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center",
                stat.dark ? "bg-[#84CC16] text-[#0B3022]" : "bg-slate-50 text-slate-400 border border-slate-100"
              )}>
                <stat.icon className="w-4 h-4" />
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-1">{stat.value}</div>
              <div className={cn("text-xs font-medium", stat.dark ? "text-white/60" : "text-slate-400")}>
                {stat.sub}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ANALYTICS SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
        <div className="lg:col-span-2 bg-white rounded-[24px] p-8 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-xl font-bold text-slate-900">Weekly Performance</h3>
              <p className="text-sm text-slate-400 font-medium mt-1">Views & collaboration activity</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#0B3022]" />
                <span className="text-xs font-semibold text-slate-500">Views</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#84CC16]" />
                <span className="text-xs font-semibold text-slate-500">Collabs</span>
              </div>
            </div>
          </div>
          <div className="flex items-end justify-between gap-3 h-48">
            {weeklyData.map((d, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full flex flex-col items-center gap-1 flex-1 justify-end">
                  <div className="w-full max-w-[40px] bg-[#0B3022] rounded-t-lg transition-all hover:opacity-80" style={{ height: `${d.views}%` }} />
                  <div className="w-full max-w-[40px] bg-[#84CC16] rounded-t-lg transition-all hover:opacity-80" style={{ height: `${d.collabs * 10}%` }} />
                </div>
                <span className="text-[11px] font-bold text-slate-400">{d.day}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="space-y-4">
          <div className="bg-white rounded-[24px] p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
                <Eye className="w-5 h-5 text-blue-500" />
              </div>
              <div>
                <p className="text-2xl font-black text-slate-900">4.3M</p>
                <p className="text-xs text-slate-400 font-medium">Total Views This Month</p>
              </div>
            </div>
            <div className="flex items-center gap-1 text-xs font-bold text-emerald-500">
              <TrendingUp className="w-3 h-3" /> +18.2% from last month
            </div>
          </div>
          <div className="bg-white rounded-[24px] p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-pink-50 rounded-xl flex items-center justify-center">
                <ThumbsUp className="w-5 h-5 text-pink-500" />
              </div>
              <div>
                <p className="text-2xl font-black text-slate-900">298K</p>
                <p className="text-xs text-slate-400 font-medium">Total Engagement</p>
              </div>
            </div>
            <div className="flex items-center gap-1 text-xs font-bold text-emerald-500">
              <TrendingUp className="w-3 h-3" /> +24.5% from last month
            </div>
          </div>
          <div className="bg-white rounded-[24px] p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center">
                <Award className="w-5 h-5 text-purple-500" />
              </div>
              <div>
                <p className="text-2xl font-black text-slate-900">Top 5%</p>
                <p className="text-xs text-slate-400 font-medium">Creator Ranking</p>
              </div>
            </div>
            <div className="flex items-center gap-1 text-xs font-bold text-emerald-500">
              <Zap className="w-3 h-3" /> Rising fast!
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mb-10">
        {/* MAIN CONTENT: TOP CREATORS */}
        <div className="xl:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-slate-900">Top Creators</h3>
            <Link href="/discover" className="text-sm font-semibold text-slate-400 hover:text-slate-600">
              Show all (12)
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {topCreators.map((creator) => (
              <div key={creator.id} className="bg-white rounded-[24px] overflow-hidden shadow-sm hover:shadow-md transition-shadow group relative">
                <div className="h-40 w-full overflow-hidden">
                  <img src={creator.img} alt={creator.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="absolute top-4 right-4 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="w-4 h-4 text-slate-900" />
                </div>
                <div className="p-5">
                  <h4 className="font-bold text-slate-900 mb-1">{creator.name}</h4>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold px-2 py-1 bg-slate-50 text-slate-500 rounded-md">
                      {creator.niche}
                    </span>
                    <div className="flex -space-x-2">
                      {[1,2,3].map(i => (
                        <img key={i} src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${creator.id}${i}`} className="w-6 h-6 rounded-full border-2 border-white bg-slate-100" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDEBAR: NEWS UPDATE */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-slate-900">News Update</h3>
            <button className="text-sm font-semibold text-slate-400 hover:text-slate-600">
              Show all (8)
            </button>
          </div>
          
          <div className="space-y-4">
            {newsUpdates.map((news) => (
              <div key={news.id} className="flex gap-4 p-3 bg-white rounded-[20px] shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                <img src={news.img} alt={news.title} className="w-24 h-24 rounded-[16px] object-cover" />
                <div className="flex-1 flex flex-col justify-center py-1 pr-2">
                  <h4 className="text-sm font-bold text-slate-900 leading-snug line-clamp-2 mb-3">
                    {news.title}
                  </h4>
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-bold px-2 py-1 bg-[#84CC16]/20 text-[#166534] rounded-md">
                      {news.tag}
                    </span>
                    <div className="flex items-center gap-1 text-[10px] font-semibold text-slate-400">
                      <Clock className="w-3 h-3" />
                      {news.time}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* RECENT VIDEOS */}
      <div className="mb-10">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-slate-900">Your Recent Videos</h3>
          <button className="text-sm font-semibold text-slate-400 hover:text-slate-600 flex items-center gap-1">
            View Channel <ExternalLink className="w-3 h-3" />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recentVideos.map((video) => (
            <div key={video.id} className="bg-white rounded-[24px] overflow-hidden shadow-sm hover:shadow-md transition-all group cursor-pointer">
              <div className="relative h-48 overflow-hidden">
                <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <PlayCircle className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <span className="absolute bottom-3 right-3 bg-black/80 text-white text-xs font-bold px-2 py-1 rounded-lg">{video.duration}</span>
              </div>
              <div className="p-5">
                <h4 className="font-bold text-slate-900 mb-3 line-clamp-2 leading-snug">{video.title}</h4>
                <div className="flex items-center gap-4 text-xs font-semibold text-slate-400">
                  <span className="flex items-center gap-1"><Eye className="w-3.5 h-3.5" /> {video.views}</span>
                  <span className="flex items-center gap-1"><ThumbsUp className="w-3.5 h-3.5" /> {video.likes}</span>
                  <span className="flex items-center gap-1"><MessageCircle className="w-3.5 h-3.5" /> {video.comments}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* UPCOMING COLLABS + RECENT ACTIVITY + TRENDING */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
        {/* Upcoming Collaborations */}
        <div className="bg-white rounded-[24px] p-8 shadow-sm">
          <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-[#0B3022]" /> Upcoming Collabs
          </h3>
          <div className="space-y-4">
            {upcomingCollabs.map((collab) => (
              <div key={collab.id} className="flex items-start gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors cursor-pointer group">
                <div className={cn("w-3 h-3 rounded-full mt-1.5 shrink-0", collab.color)} />
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-bold text-slate-900 truncate">{collab.title}</h4>
                  <p className="text-xs text-slate-400 font-medium mt-0.5">{collab.partner}</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-[10px] font-bold text-slate-400">{collab.date}</span>
                    <span className={cn(
                      "text-[10px] font-bold px-2 py-0.5 rounded-full capitalize",
                      collab.status === 'confirmed' ? 'bg-emerald-50 text-emerald-600' :
                      collab.status === 'planning' ? 'bg-blue-50 text-blue-600' :
                      'bg-orange-50 text-orange-600'
                    )}>{collab.status}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-[24px] p-8 shadow-sm">
          <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
            <Flame className="w-5 h-5 text-orange-500" /> Recent Activity
          </h3>
          <div className="space-y-1">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-start gap-3 p-3 rounded-2xl hover:bg-slate-50 transition-colors cursor-pointer">
                <img src={activity.avatar} className="w-9 h-9 rounded-xl bg-slate-100 shrink-0" />
                <div className="min-w-0">
                  <p className="text-xs text-slate-700 leading-relaxed">
                    <span className="font-bold text-slate-900">{activity.user}</span> {activity.action}
                  </p>
                  <span className="text-[10px] font-bold text-slate-400 mt-1 block">{activity.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trending Topics */}
        <div className="bg-white rounded-[24px] p-8 shadow-sm">
          <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-purple-500" /> Trending Topics
          </h3>
          <div className="space-y-3">
            {trendingTopics.map((topic, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-2xl hover:bg-slate-50 transition-colors cursor-pointer group">
                <div>
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#0B3022] transition-colors">{topic.tag}</h4>
                  <p className="text-[11px] text-slate-400 font-medium">{topic.count}</p>
                </div>
                <span className="text-xs font-bold text-emerald-500 bg-emerald-50 px-2 py-1 rounded-lg">{topic.growth}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA BANNER */}
      <div className="bg-gradient-to-r from-[#0B3022] via-[#166534] to-[#0B3022] rounded-[32px] p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl shadow-[#0B3022]/20">
        <div className="space-y-3">
          <h3 className="text-2xl font-bold">Ready to scale your content?</h3>
          <p className="text-white/70 font-medium max-w-md">Join thousands of creators who've boosted their reach through strategic collaborations on our platform.</p>
        </div>
        <Link href="/discover" className="px-8 py-4 bg-white text-[#0B3022] font-bold rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-lg whitespace-nowrap">
          Find Creators →
        </Link>
      </div>
    </div>
  );
}
