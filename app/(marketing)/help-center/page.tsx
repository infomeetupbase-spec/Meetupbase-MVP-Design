import { Search, Book, User, Shield, CreditCard, MessageCircle, ArrowRight, Zap } from 'lucide-react';

export default function HelpCenterPage() {
  const categories = [
    { icon: <Book className="w-8 h-8 text-emerald-600" />, title: "Getting Started", count: 12, desc: "Everything you need to know to get up and running." },
    { icon: <User className="w-8 h-8 text-emerald-600" />, title: "Account & Profile", count: 8, desc: "Manage your settings, privacy, and preferences." },
    { icon: <Shield className="w-8 h-8 text-emerald-600" />, title: "Safety & Security", count: 15, desc: "Best practices for a secure collaboration environment." },
    { icon: <CreditCard className="w-8 h-8 text-emerald-600" />, title: "Billing & Plans", count: 6, desc: "Information about our pricing, invoices, and upgrades." },
    { icon: <MessageCircle className="w-8 h-8 text-emerald-600" />, title: "Collaborations", count: 24, desc: "How to manage projects, contracts, and payments." },
    { icon: <Zap className="w-8 h-8 text-emerald-600" />, title: "Features", count: 18, desc: "Deep dives into our powerful creator tools." }
  ];

  return (
    <div className="pt-24 pb-32">
      {/* Search Hero */}
      <div className="bg-emerald-950 py-24 mb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 to-emerald-950"></div>
        <div className="max-w-[800px] mx-auto px-8 relative z-10 text-center">
          <h1 className="text-5xl font-bold text-white mb-8">How can we help?</h1>
          <div className="relative">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 w-6 h-6" />
            <input 
              type="text" 
              placeholder="Search for articles (e.g. how to start a collab)" 
              className="w-full pl-16 pr-8 py-6 bg-white rounded-2xl text-lg shadow-2xl focus:outline-none focus:ring-4 focus:ring-emerald-500/20 transition-all"
            />
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-emerald-300/80">
            <span>Popular:</span>
            <button className="underline hover:text-emerald-300">Setting up payments</button>
            <button className="underline hover:text-emerald-300">Finding partners</button>
            <button className="underline hover:text-emerald-300">Contract templates</button>
          </div>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="max-w-[1200px] mx-auto px-8 mb-32">
        <h2 className="text-3xl font-bold text-slate-900 mb-12">Browse by Category</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, index) => (
            <div key={index} className="p-8 rounded-[2rem] bg-white border border-slate-100 hover:shadow-xl hover:border-emerald-100 transition-all cursor-pointer group">
              <div className="mb-6 p-4 bg-emerald-50 w-fit rounded-2xl group-hover:bg-emerald-600 transition-colors">
                {cat.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{cat.title}</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">{cat.desc}</p>
              <div className="flex items-center justify-between text-sm font-bold">
                 <span className="text-emerald-600">{cat.count} Articles</span>
                 <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Articles */}
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-12">Popular Articles</h2>
            <div className="space-y-6">
              {[
                "How to verify your YouTube channel",
                "Understanding our service fees",
                "How to invite a collaborator",
                "Best practices for secure messaging",
                "Withdrawing your earnings"
              ].map((article, i) => (
                <div key={i} className="flex items-center justify-between p-6 rounded-2xl border border-slate-100 hover:bg-slate-50 transition-colors cursor-pointer group">
                  <span className="text-lg font-medium text-slate-700 group-hover:text-emerald-600 transition-colors">{article}</span>
                  <ArrowRight className="w-5 h-5 text-slate-300" />
                </div>
              ))}
            </div>
          </div>
          <div className="bg-slate-50 rounded-[3rem] p-12 flex flex-col items-center justify-center text-center">
            <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-8">
              <MessageCircle className="w-10 h-10 text-emerald-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Still need help?</h3>
            <p className="text-slate-600 mb-8 max-w-xs mx-auto">
              Can't find the answer you're looking for? Our support team is here to help you.
            </p>
            <button className="px-8 py-4 bg-emerald-950 text-white font-bold rounded-2xl hover:bg-emerald-900 transition-colors">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
