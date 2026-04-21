'use client';

import { Camera, MonitorPlay, Globe, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    id: 'smm',
    title: 'Social Media Marketing',
    desc: 'Expand your reach across platforms effortlessly. We craft strategies that go viral and turn audiences into fiercely loyal communities. From Instagram to TikTok, we manage, create, and analyze daily performance.',
    icon: Camera,
    color: 'from-orange-400 to-pink-500',
    bgColor: 'bg-orange-50',
    iconColor: 'text-orange-500',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=600&h=400&fit=crop'
  },
  {
    id: 'dev',
    title: 'Design And Development',
    desc: 'Create stunning assets and web applications. Utilizing modern stacks like Next.js and Tailwind, we build pixel-perfect digital experiences. Fast, reliable, and aesthetically breathtaking.',
    icon: MonitorPlay,
    color: 'from-blue-500 to-cyan-400',
    bgColor: 'bg-blue-50',
    iconColor: 'text-blue-500',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=600&h=400&fit=crop'
  },
  {
    id: 'seo',
    title: 'Search Engine Optimization',
    desc: 'Dominate search results with targeted growth strategies. We optimize your content, code, and links to ensure you are the first name your clients see when they search.',
    icon: Globe,
    color: 'from-purple-500 to-indigo-500',
    bgColor: 'bg-purple-50',
    iconColor: 'text-purple-500',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&h=400&fit=crop'
  }
];

export default function ServicesPage() {
  return (
    <div className="pt-24 pb-32 max-w-[1200px] mx-auto px-8 relative z-10">
      <div className="text-center max-w-3xl mx-auto mb-24 animate-in fade-in slide-in-from-bottom-8 duration-700">
        <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
          What we build <br className="hidden md:block" /> for you.
        </h1>
        <p className="text-xl text-slate-500 font-medium leading-relaxed">
          Robust, scalable, and beautiful marketing services. We manage the heavy lifting so you can focus on building your brand.
        </p>
      </div>

      <div className="space-y-32">
        {services.map((service, idx) => (
          <div 
            key={service.id} 
            className={`flex flex-col md:flex-row gap-16 items-center animate-in fade-in slide-in-from-bottom-12 duration-1000 fill-mode-both`}
            style={{ animationDelay: `${idx * 200}ms` }}
          >
            {/* Image Side */}
            <div className={`w-full md:w-1/2 relative ${idx % 2 === 1 ? 'md:order-2' : ''}`}>
              <div className={`absolute inset-0 bg-gradient-to-tr ${service.color} opacity-20 rounded-[40px] rotate-3 scale-95`} />
              <div className="relative rounded-[40px] overflow-hidden shadow-2xl bg-white border-8 border-white">
                <img src={service.image} alt={service.title} className="w-full h-[350px] object-cover" />
              </div>
            </div>

            {/* Content Side */}
            <div className={`w-full md:w-1/2 space-y-6 ${idx % 2 === 1 ? 'md:order-1' : ''}`}>
              <div className={`w-16 h-16 rounded-2xl ${service.bgColor} flex items-center justify-center mb-4`}>
                <service.icon className={`w-8 h-8 ${service.iconColor}`} />
              </div>
              <h2 className="text-3xl font-extrabold text-slate-900">{service.title}</h2>
              <p className="text-lg text-slate-500 font-medium leading-relaxed">
                {service.desc}
              </p>
              <div>
                <Link href="/pricing" className="inline-flex items-center gap-2 text-slate-900 font-bold hover:text-blue-600 transition-colors group mt-4">
                  View pricing
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
