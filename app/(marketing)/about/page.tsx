import { Users, Target, Shield, Zap } from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      icon: <Users className="w-8 h-8 text-emerald-600" />,
      title: "Community First",
      description: "We believe in the power of collaboration and building meaningful connections between creators."
    },
    {
      icon: <Target className="w-8 h-8 text-emerald-600" />,
      title: "Growth Driven",
      description: "Our platform is designed to help creators scale their reach and impact through strategic partnerships."
    },
    {
      icon: <Shield className="w-8 h-8 text-emerald-600" />,
      title: "Trust & Safety",
      description: "We provide a secure environment where collaborations are backed by transparent data and verified metrics."
    },
    {
      icon: <Zap className="w-8 h-8 text-emerald-600" />,
      title: "Innovation",
      description: "Constantly evolving our tools to stay ahead of the creator economy's changing landscape."
    }
  ];

  return (
    <div className="pt-24 pb-32">
      {/* Hero Section */}
      <div className="max-w-[1200px] mx-auto px-8 text-center mb-24">
        <h1 className="text-6xl font-extrabold text-slate-900 mb-8 tracking-tight">
          Empowering the <span className="text-emerald-600">Next Generation</span> of Creators
        </h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Meetupbase is the world's leading collaboration platform designed specifically for YouTube creators. 
          We bridge the gap between creative vision and collaborative execution.
        </p>
      </div>

      {/* Story Section */}
      <div className="bg-slate-50 py-24 mb-24">
        <div className="max-w-[1200px] mx-auto px-8 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Story</h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Founded in 2024, Meetupbase started with a simple observation: creators were struggling to find the right partners for their next big project. 
              The process was fragmented, manual, and often unreliable.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              We built a platform that combines data-driven matching with seamless project management, 
              allowing creators to focus on what they do best—creating content—while we handle the logistics of collaboration.
            </p>
          </div>
          <div className="bg-emerald-900 rounded-3xl h-[400px] flex items-center justify-center relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-br from-emerald-800 to-emerald-950 opacity-90"></div>
             <div className="relative z-10 text-white text-center p-8">
                <div className="text-5xl font-bold mb-4">10K+</div>
                <div className="text-emerald-200 text-lg font-medium">Successful Collaborations</div>
             </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="max-w-[1200px] mx-auto px-8 mb-24">
        <h2 className="text-4xl font-bold text-slate-900 mb-16 text-center">Our Core Values</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="p-8 rounded-2xl bg-white border border-slate-100 hover:shadow-xl transition-all duration-300">
              <div className="mb-6">{value.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{value.title}</h3>
              <p className="text-slate-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
