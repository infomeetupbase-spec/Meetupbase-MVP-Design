import { Briefcase, Heart, Rocket, Globe } from 'lucide-react';

export default function CareersPage() {
  const jobs = [
    { title: "Senior Frontend Engineer", team: "Engineering", location: "Remote / London" },
    { title: "Product Designer", team: "Design", location: "Remote / New York" },
    { title: "Creator Partnerships Manager", team: "Marketing", location: "Remote / Los Angeles" },
    { title: "Backend Engineer (Go/Node)", team: "Engineering", location: "Remote" }
  ];

  const benefits = [
    { icon: <Heart className="w-6 h-6 text-rose-500" />, title: "Health & Wellness", desc: "Comprehensive health insurance and wellness stipends." },
    { icon: <Rocket className="w-6 h-6 text-blue-500" />, title: "Growth", desc: "Learning budget for courses, books, and conferences." },
    { icon: <Globe className="w-6 h-6 text-emerald-500" />, title: "Remote First", desc: "Work from anywhere in the world with flexible hours." },
    { icon: <Briefcase className="w-6 h-6 text-amber-500" />, title: "Equity", desc: "Generous equity packages for all early team members." }
  ];

  return (
    <div className="pt-24 pb-32">
      {/* Hero Section */}
      <div className="max-w-[1200px] mx-auto px-8 text-center mb-24">
        <h1 className="text-6xl font-extrabold text-slate-900 mb-8 tracking-tight">
          Shape the Future of the <span className="text-emerald-600">Creator Economy</span>
        </h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          We're building the infrastructure that powers the next generation of creative collaborations. 
          Join a mission-driven team dedicated to empowering creators worldwide.
        </p>
      </div>

      {/* Benefits Section */}
      <div className="max-w-[1200px] mx-auto px-8 mb-32">
        <h2 className="text-4xl font-bold text-slate-900 mb-16 text-center">Why Join Us?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="p-8 rounded-2xl bg-white border border-slate-100 hover:border-emerald-200 transition-all duration-300">
              <div className="mb-6">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{benefit.title}</h3>
              <p className="text-slate-600 leading-relaxed">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Open Roles */}
      <div className="bg-emerald-950 py-24 rounded-[3rem] mx-4 md:mx-8">
        <div className="max-w-[1000px] mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Open Positions</h2>
            <p className="text-emerald-400 text-lg">Come build with us</p>
          </div>
          
          <div className="space-y-4">
            {jobs.map((job, index) => (
              <div key={index} className="flex flex-col md:flex-row md:items-center justify-between p-8 rounded-2xl bg-emerald-900/50 border border-emerald-800/50 hover:border-emerald-500/50 transition-all cursor-pointer group">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">{job.title}</h3>
                  <div className="flex gap-4 text-emerald-500/70 text-sm">
                    <span>{job.team}</span>
                    <span>•</span>
                    <span>{job.location}</span>
                  </div>
                </div>
                <button className="mt-6 md:mt-0 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl transition-colors">
                  Apply Now
                </button>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-emerald-500/70 mb-4">Don't see a role that fits?</p>
            <button className="text-white font-bold underline decoration-emerald-500 underline-offset-8 hover:text-emerald-400 transition-colors">
              Send us an open application
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
