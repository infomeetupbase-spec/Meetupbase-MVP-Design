import { Search, ArrowRight, Calendar, User } from 'lucide-react';

export default function BlogPage() {
  const posts = [
    {
      title: "How to Find the Perfect Collaboration Partner",
      excerpt: "Discover the key metrics and qualitative factors you should look for when searching for your next YouTube collaboration.",
      date: "Oct 24, 2024",
      author: "Sarah Chen",
      category: "Strategy",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "The Future of the Creator Economy in 2025",
      excerpt: "A deep dive into the trends, tools, and shifts that will define how creators build businesses in the coming year.",
      date: "Oct 20, 2024",
      author: "Marcus Thorne",
      category: "Insights",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Maximizing ROI on Brand Partnerships",
      excerpt: "Learn how to structure your brand deals to ensure long-term sustainability and higher revenue per video.",
      date: "Oct 15, 2024",
      author: "Alex Rivera",
      category: "Monetization",
      image: "https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="pt-24 pb-32">
      {/* Hero Section */}
      <div className="max-w-[1200px] mx-auto px-8 mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div className="max-w-2xl">
            <h1 className="text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Insights for the <span className="text-emerald-600">Modern Creator</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Strategies, stories, and deep dives into the world of creative collaboration and the creator economy.
            </p>
          </div>
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search articles..." 
              className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
            />
          </div>
        </div>
      </div>

      {/* Featured Post */}
      <div className="max-w-[1200px] mx-auto px-8 mb-24">
        <div className="relative group cursor-pointer overflow-hidden rounded-[2.5rem] bg-emerald-950 min-h-[500px] flex items-end">
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/40 to-transparent z-10"></div>
          <div className="relative z-20 p-8 md:p-16 max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-emerald-500 text-white text-sm font-bold rounded-full mb-6">Featured</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight group-hover:text-emerald-400 transition-colors">
              The Ultimate Guide to Scaling Your Channel Through Strategic Partnerships
            </h2>
            <p className="text-emerald-100/80 text-lg mb-8 line-clamp-2">
              Building a large audience is hard. Keeping it is harder. Discover why collaborations are the secret weapon for sustainable growth in 2024.
            </p>
            <div className="flex items-center gap-6 text-emerald-300 font-medium">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Oct 28, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>James Wilson</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Posts Grid */}
      <div className="max-w-[1200px] mx-auto px-8">
        <h3 className="text-3xl font-bold text-slate-900 mb-12">Recent Stories</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {posts.map((post, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="aspect-[16/10] bg-slate-100 rounded-3xl mb-6 overflow-hidden relative">
                <div className="absolute inset-0 bg-emerald-900/20 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-emerald-700 text-xs font-bold rounded-full">{post.category}</span>
                </div>
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-emerald-600 transition-colors leading-tight">
                {post.title}
              </h4>
              <p className="text-slate-600 mb-6 line-clamp-3 leading-relaxed">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between">
                 <div className="text-slate-400 text-sm font-medium">{post.date}</div>
                 <div className="text-emerald-600 font-bold flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                    Read More <ArrowRight className="w-4 h-4" />
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="max-w-[1200px] mx-auto px-8 mt-32">
        <div className="bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-[3rem] p-12 md:p-24 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Get creator insights delivered to your inbox</h2>
            <p className="text-emerald-100 text-lg mb-12">
              Join 50,000+ creators who receive our weekly newsletter on growth, monetization, and collaboration.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-6 py-4 rounded-2xl bg-white/10 border border-white/20 placeholder:text-emerald-200/50 text-white focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
              />
              <button className="px-8 py-4 bg-white text-emerald-900 font-bold rounded-2xl hover:bg-emerald-50 transition-colors">
                Subscribe
              </button>
            </form>
            <p className="mt-6 text-emerald-200/70 text-sm">No spam. Unsubscribe at any time.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
