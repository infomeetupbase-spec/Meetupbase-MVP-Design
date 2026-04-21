'use client';

import Link from 'next/link';
import { 
  Video, 
  ArrowRight,
  CheckCircle2,
  Lightbulb,
  Building2,
  LineChart,
  Camera,
  MonitorPlay,
  Globe
} from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="relative">
      <main className="max-w-[1400px] mx-auto px-8 relative z-10 pt-16">
        
        {/* HERO SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="max-w-xl space-y-8">
            <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
              Not Competition <br/>
              Only Collaboration
            </h1>
            <p className="text-slate-500 font-medium leading-relaxed max-w-md">
              Discover the ultimate workspace linking creative minds. Connect, 
              collaborate, and elevate your digital presence together flawlessly.
            </p>
            <div>
              <Link 
                href="/login"
                className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-all shadow-xl shadow-blue-200/50 group"
              >
                Digital Analytics
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Hero Visuals */}
          <div className="relative h-[600px] w-full flex items-center justify-center">
            {/* Visual Backing Gradients */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 rounded-[60px] opacity-20 rotate-3 scale-95" />
            
            <div className="flex gap-6 relative z-10 items-end">
              {/* Guy Portrait 1 */}
              <div className="w-[240px] h-[340px] bg-white rounded-3xl p-3 shadow-2xl rotate-[-2deg] hover:rotate-0 transition-transform">
                <div className="w-full h-full bg-orange-100 rounded-2xl overflow-hidden relative">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&h=600&fit=crop" alt="Collaborator" className="w-full h-full object-cover object-top mix-blend-overlay opacity-80" />
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-400/80 to-transparent mix-blend-multiply" />
                </div>
              </div>

              {/* Guy Portrait 2 */}
              <div className="w-[280px] h-[400px] bg-white rounded-3xl p-3 shadow-2xl relative translate-y-8 rotate-[2deg] hover:rotate-0 transition-transform z-20">
                <div className="w-full h-full bg-blue-50 rounded-2xl overflow-hidden relative">
                  <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=400&h=600&fit=crop" alt="Collaborator" className="w-full h-full object-cover object-top" />
                </div>
                
                {/* Floating Notification */}
                <div className="absolute -right-12 top-20 bg-white p-4 rounded-2xl shadow-xl border border-slate-50 w-[200px] animate-in slide-in-from-right-8 fade-in duration-1000 delay-500">
                  <p className="text-xs font-bold text-slate-400 uppercase mb-3">Notifications</p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center">
                        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Anna" className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-900">Anna</p>
                        <p className="text-[10px] text-slate-500">Shared a Project</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FEATURES SECTION */}
        <div className="mt-32 pb-24 text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Features</h2>
          <p className="text-slate-500 font-medium max-w-xl mx-auto mb-16">
            Empower your team with tools designed for speed, flexibility, and creative liberty.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-12">
            {[
              { icon: Lightbulb, title: 'Curated Services', color: 'bg-orange-400', desc: 'Handpicked solutions tailored for modern digital needs.' },
              { icon: Building2, title: 'Flexible Workspace', color: 'bg-blue-600', desc: 'Work from anywhere with full synchronicity and focus.' },
              { icon: LineChart, title: 'Data Profitability', color: 'bg-blue-400', desc: 'Turn collaboration data into clear growth insights.' },
            ].map((f, i) => (
              <div key={i} className="flex flex-col items-center group">
                <div className={`${f.color} text-white w-16 h-16 rounded-[20px] flex items-center justify-center mb-6 shadow-lg shadow-slate-200 group-hover:-translate-y-2 transition-transform`}>
                  <f.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{f.title}</h3>
                <p className="text-sm text-slate-500 font-medium max-w-[200px]">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* QUALITY/SERVICES SECTION */}
        <div className="mt-16 pb-32">
          <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 rounded-[40px] p-12 md:p-16 text-white relative overflow-hidden shadow-2xl">
            {/* Shapes */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-3xl -mr-20 -mt-20" />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
              <div className="space-y-8">
                <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
                  Quality in everything<br/>we do.
                </h2>
                
                <div className="space-y-6">
                  {[
                    { icon: Camera, title: 'Social Media Marketing', desc: 'Expand your reach across platforms effortlessly.' },
                    { icon: MonitorPlay, title: 'Design And Development', desc: 'Create stunning assets and web applications.' },
                    { icon: Globe, title: 'Search Engine Optimization', desc: 'Dominate search results with targeted growth strategies.' },
                  ].map((s, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <div className="p-2 bg-white/20 backdrop-blur rounded-xl mt-1">
                        <s.icon className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">{s.title}</h4>
                        <p className="text-white/80 text-sm font-medium">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Fake UI component inside gradient box */}
              <div className="hidden lg:flex items-center justify-center">
                <div className="w-[450px] bg-white rounded-3xl shadow-xl p-6 relative ml-12 rotate-2 hover:rotate-0 transition-transform">
                  <div className="flex justify-between items-start mb-8">
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Total Sales</p>
                      <h4 className="text-4xl font-extrabold text-slate-900 mt-1">340</h4>
                      <p className="text-sm font-bold text-emerald-500 mt-1">+50.2%</p>
                    </div>
                    <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                      <LineChart className="w-5 h-5 text-pink-500" />
                    </div>
                  </div>
                  
                  {/* Fake Chart Lines */}
                  <div className="flex items-end gap-2 h-24 pt-4 border-t border-slate-100">
                    {[40, 70, 30, 80, 50, 90, 60, 100].map((h, i) => (
                      <div key={i} className="flex-1 bg-gradient-to-t relative group overflow-hidden rounded-t-sm" style={{ height: `${h}%` }}>
                         <div className={`absolute inset-0 ${i % 2 === 0 ? 'bg-orange-400' : 'bg-purple-500'} opacity-80`} />
                      </div>
                    ))}
                  </div>

                  {/* Tiny Invoice popup sticking out */}
                  <div className="absolute -bottom-8 -right-8 bg-white p-4 rounded-2xl shadow-xl border border-slate-50 w-48">
                    <p className="text-xs font-bold text-slate-900 mb-2">Invoice #304</p>
                    <div className="h-2 bg-slate-100 rounded-full w-full mb-2">
                       <div className="h-full bg-emerald-500 w-[70%] rounded-full" />
                    </div>
                    <p className="text-[10px] text-slate-400">Paid successfully</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}
