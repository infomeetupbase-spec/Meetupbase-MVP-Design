'use client';

import Link from 'next/link';
import { 
  ArrowRight,
  Lightbulb,
  BarChart,
  FileText,
  Camera,
  MonitorPlay,
  Globe,
  CheckCircle2,
  Star
} from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="relative bg-[#FDFDFD] overflow-hidden">
      
      {/* Background Organic Shapes */}
      {/* Top Right Blob */}
      <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 opacity-10 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] blur-3xl pointer-events-none -z-10 animate-pulse-slow" />
      {/* Bottom Left Blob */}
      <div className="absolute bottom-1/4 left-[-10%] w-[600px] h-[600px] bg-gradient-to-tr from-blue-500 to-purple-500 opacity-5 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] blur-3xl pointer-events-none -z-10" />

      <main className="max-w-[1400px] mx-auto px-8 relative z-10 pt-20 pb-32 space-y-40">
        
        {/* HERO SECTION */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="max-w-xl space-y-8 relative">
            {/* Small decorative dots */}
            <div className="absolute -top-10 -left-10 w-20 h-20 bg-[radial-gradient(#e2e8f0_2px,transparent_2px)] [background-size:16px_16px] opacity-50" />
            
            <h1 className="text-6xl md:text-7xl font-extrabold text-slate-900 leading-[1.05] tracking-tight">
              Not Competition <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-600">Only Collaboration</span>
            </h1>
            <p className="text-slate-500 font-medium leading-relaxed max-w-md text-lg">
              Discover the ultimate workspace linking creative minds. Connect, 
              collaborate, and elevate your digital presence together flawlessly.
            </p>
            <div className="pt-4">
              <Link 
                href="/login"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#0B3022] text-white font-bold rounded-full hover:bg-[#166534] transition-all shadow-xl shadow-[#0B3022]/20 group"
              >
                Start Collaborating
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Fake stats below button */}
            <div className="flex items-center gap-8 pt-8 opacity-80">
              <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-50 flex-1">
                <p className="text-[10px] uppercase font-bold text-slate-400 mb-1">Collabs Done</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black text-slate-900">12k+</span>
                  <span className="text-xs font-bold text-emerald-500 bg-emerald-50 px-2 py-1 rounded-md">+14%</span>
                </div>
              </div>
              <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-50 flex-1">
                <p className="text-[10px] uppercase font-bold text-slate-400 mb-1">Active Creators</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black text-slate-900">4.5k</span>
                  <span className="text-xs font-bold text-emerald-500 bg-emerald-50 px-2 py-1 rounded-md">+22%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Visuals (Matching image) */}
          <div className="relative h-[600px] w-full flex justify-end pr-10">
            {/* The large colorful gradient shape behind the images */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[80%] h-[90%] bg-gradient-to-bl from-orange-300 via-pink-400 to-purple-600 rounded-[40px] opacity-90" />
            
            <div className="flex gap-6 relative z-10 items-center justify-end w-full h-full">
              {/* Guy Portrait 1 (Left) */}
              <div className="w-[260px] h-[380px] bg-white rounded-[32px] p-2 shadow-2xl translate-y-12 transition-transform hover:-translate-y-2 duration-500">
                <div className="w-full h-full bg-slate-100 rounded-[24px] overflow-hidden relative">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&h=600&fit=crop" alt="Creator" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Guy Portrait 2 (Right, overlapping) */}
              <div className="w-[280px] h-[440px] bg-white rounded-[32px] p-2 shadow-2xl relative -translate-x-12 -translate-y-8 transition-transform hover:-translate-y-12 duration-500 z-20">
                <div className="w-full h-full bg-slate-100 rounded-[24px] overflow-hidden relative">
                  <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=400&h=600&fit=crop" alt="Creator" className="w-full h-full object-cover object-top" />
                </div>
                
                {/* Floating Notification */}
                <div className="absolute -bottom-10 right-4 bg-white p-5 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-50 w-[220px]">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Notifications</p>
                  <div className="space-y-4">
                    {[
                      { name: 'Anna', action: 'Accepted request', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Anna' },
                      { name: 'Tom', action: 'Sent a message', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Tom' },
                      { name: 'Amy', action: 'Left a review', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Amy' }
                    ].map((n, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-slate-100 overflow-hidden">
                          <img src={n.avatar} className="w-full h-full" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-slate-900">{n.name}</p>
                          <p className="text-[10px] font-medium text-slate-500">{n.action}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section className="text-center max-w-5xl mx-auto">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Features</h2>
          <p className="text-slate-500 font-medium max-w-xl mx-auto mb-20">
            Empower your creative journey with tools designed for speed, flexibility, and robust collaboration.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 px-4">
            {[
              { icon: Lightbulb, title: 'Curated Services', color: 'bg-orange-400', shadow: 'shadow-orange-200', desc: 'Handpicked solutions tailored for modern digital needs and creator workflows.' },
              { icon: BarChart, title: 'Flexible Workspace', color: 'bg-indigo-900', shadow: 'shadow-indigo-200', desc: 'Work from anywhere with full synchronicity, shared assets, and deep focus.' },
              { icon: FileText, title: 'Data Profitability', color: 'bg-blue-500', shadow: 'shadow-blue-200', desc: 'Turn collaboration data into clear growth insights and maximize your reach.' },
            ].map((f, i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                <div className="relative mb-8">
                   {/* Custom shape behind icon */}
                   <div className="absolute inset-0 bg-slate-100 rounded-full scale-150 -z-10 group-hover:scale-[1.6] transition-transform" />
                   <div className={`${f.color} text-white w-20 h-24 rounded-[32px] rounded-tl-[12px] rounded-br-[12px] flex items-center justify-center shadow-xl ${f.shadow} group-hover:-translate-y-2 transition-transform duration-300`}>
                     <f.icon className="w-8 h-8" />
                   </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{f.title}</h3>
                <p className="text-sm text-slate-500 font-medium leading-relaxed max-w-[260px]">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* WHY CHOOSE COLLABORATION */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[500px]">
            {/* Wavy line decors could go here via SVG, but we'll use a clean image layout */}
            <div className="absolute top-10 left-0 w-64 h-64 bg-yellow-100 rounded-full blur-3xl -z-10" />
            <div className="w-[80%] h-full bg-slate-100 rounded-[40px] overflow-hidden ml-10 shadow-2xl relative group">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&h=1000&fit=crop" alt="Team collaborating" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              
              {/* Floating element */}
              <div className="absolute top-1/2 -right-10 -translate-y-1/2 bg-white p-4 rounded-2xl shadow-xl w-48 border border-slate-50">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 font-bold uppercase">Our Creative Team</p>
                  </div>
                </div>
                <div className="flex -space-x-2">
                  {[1,2,3,4].map(i => (
                    <img key={i} src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}x`} className="w-8 h-8 rounded-full border-2 border-white bg-slate-100" />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-8 pl-10">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
              Why you should<br/>choose collaboration
            </h2>
            <p className="text-slate-500 font-medium text-lg max-w-md">
              Growth in the digital age isn't a solo journey. Partnering with other creators unlocks new audiences, fresh ideas, and shared resources.
            </p>
            <button className="px-8 py-4 bg-[#0B3022] text-white font-bold rounded-full hover:bg-[#166534] transition-all shadow-lg shadow-[#0B3022]/20">
              Learn more
            </button>
          </div>
        </section>

        {/* QUALITY IN EVERYTHING WE DO (Gradient Block) */}
        <section>
          <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 rounded-[40px] p-16 text-white relative overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10 items-center">
              <div className="space-y-10">
                <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
                  Quality in everything<br/>we do.
                </h2>
                
                <div className="space-y-8">
                  {[
                    { icon: Camera, title: 'Social Media Marketing', desc: 'Expand your reach across platforms effortlessly.' },
                    { icon: MonitorPlay, title: 'Design And Development', desc: 'Create stunning assets and web applications.' },
                    { icon: Globe, title: 'Search Engine Optimization', desc: 'Dominate search results with targeted growth strategies.' },
                  ].map((s, i) => (
                    <div key={i} className="flex gap-5 items-start">
                      <div className="p-3 bg-white/20 backdrop-blur-md rounded-2xl">
                        <s.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-xl mb-1">{s.title}</h4>
                        <p className="text-white/80 text-sm font-medium">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating UI Elements matching the image */}
              <div className="hidden lg:flex flex-col gap-6 items-end relative">
                <div className="w-[80%] bg-white rounded-3xl shadow-2xl p-6 relative z-20 hover:-translate-y-2 transition-transform">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Total Reach</p>
                      <h4 className="text-4xl font-extrabold text-slate-900 mt-1">3.4M</h4>
                      <p className="text-sm font-bold text-emerald-500 mt-1">+50.2%</p>
                    </div>
                    <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                      <BarChart className="w-5 h-5 text-pink-500" />
                    </div>
                  </div>
                  {/* Fake Chart Lines */}
                  <div className="flex items-end gap-2 h-20 pt-4 border-t border-slate-100">
                    {[40, 70, 30, 80, 50, 90, 60].map((h, i) => (
                      <div key={i} className="flex-1 bg-gradient-to-t from-orange-400 to-pink-500 opacity-80 rounded-t-sm" style={{ height: `${h}%` }} />
                    ))}
                  </div>
                </div>
                
                {/* Secondary floating card */}
                <div className="w-[70%] bg-white rounded-3xl shadow-2xl p-6 mr-12 relative z-10 hover:-translate-y-2 transition-transform">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Project Status</p>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                          <CheckCircle2 className="w-4 h-4 text-blue-500" />
                        </div>
                        <div className="flex-1">
                          <div className="h-2 w-full bg-slate-100 rounded-full">
                            <div className="h-full w-[80%] bg-blue-500 rounded-full" />
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SEE OUR WORKS */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center pt-10">
          <div className="lg:col-span-2 grid grid-cols-2 gap-6">
            {[
              "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=400&h=300&fit=crop",
              "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=400&h=300&fit=crop",
              "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=400&h=300&fit=crop",
              "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=400&h=300&fit=crop"
            ].map((img, i) => (
              <div key={i} className="bg-white rounded-[32px] p-4 shadow-[0_8px_30px_rgb(0,0,0,0.04)] group hover:shadow-[0_8px_30px_rgb(0,0,0,0.1)] transition-shadow">
                <div className="w-full h-40 bg-slate-100 rounded-2xl overflow-hidden mb-4">
                  <img src={img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <h4 className="font-bold text-slate-900 text-sm">Brand Software Solution</h4>
                <p className="text-[10px] text-slate-400 mt-1">Creative collaboration project</p>
              </div>
            ))}
          </div>
          <div className="space-y-6 lg:pl-10">
            <h2 className="text-4xl font-extrabold text-slate-900 leading-tight">
              See Our Works
            </h2>
            <p className="text-slate-500 font-medium text-sm">
              Explore the amazing projects born from powerful collaborations on our platform.
            </p>
            <button className="px-8 py-3 bg-[#0B3022] text-white font-bold rounded-full hover:bg-[#166534] transition-all shadow-lg shadow-[#0B3022]/20">
              Learn more
            </button>
          </div>
        </section>

        {/* REVIEWS SECTION */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center pt-20">
          <div className="relative">
            <div className="w-[80%] h-[500px] bg-slate-100 rounded-[40px] overflow-hidden ml-auto">
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&h=800&fit=crop" alt="Reviewer" className="w-full h-full object-cover" />
            </div>
            {/* Rating floating card */}
            <div className="absolute top-1/2 right-10 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 border border-slate-50">
              <div className="text-2xl font-black text-slate-900">4.9</div>
              <div className="flex gap-1">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
              </div>
            </div>
          </div>
          <div className="space-y-8">
            <h2 className="text-4xl font-extrabold text-slate-900 leading-tight">
              Let's See Our Service <br/>& Reviews
            </h2>
            <p className="text-slate-500 font-medium italic text-lg relative">
              <span className="text-6xl text-slate-200 absolute -top-6 -left-6">"</span>
              This platform completely transformed how I connect with other creators. The tools are intuitive, and the community is top-notch. I've doubled my output quality since joining.
            </p>
            <div className="flex items-center gap-4">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah" className="w-12 h-12 rounded-full bg-slate-100" />
              <div>
                <h4 className="font-bold text-slate-900">Sarah Jenkins</h4>
                <p className="text-xs text-slate-500">Tech Reviewer, 2.1M Subs</p>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
