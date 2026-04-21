'use client';

import { CheckCircle2, Minus } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const plans = [
  {
    name: 'Starter',
    desc: 'Perfect for upcoming creators',
    price: 'Free',
    isPopular: false,
    features: ['Access to basic tools', 'Collaborate with up to 2 people', 'Standard analytics', 'Community support'],
    missing: ['Advanced growth analytics', 'Dedicated account manager', 'API Access', 'Custom branding']
  },
  {
    name: 'Pro',
    desc: 'Everything you need to scale',
    price: '$29',
    period: '/month',
    isPopular: true,
    features: ['Unlimited collaborations', 'Advanced growth analytics', 'Priority email support', 'Custom branding', 'Access to premium tools'],
    missing: ['Dedicated account manager', 'API Access']
  },
  {
    name: 'Agency',
    desc: 'For power-user teams',
    price: '$99',
    period: '/month',
    isPopular: false,
    features: ['Everything in Pro', 'Dedicated account manager', 'API Access', 'White-labeled portfolio', '1-on-1 strategy calls'],
    missing: []
  }
];

export default function PricingPage() {
  return (
    <div className="pt-24 pb-32 max-w-[1200px] mx-auto px-8 relative z-10">
      <div className="text-center max-w-2xl mx-auto mb-20 animate-in fade-in slide-in-from-bottom-8 duration-700">
        <h1 className="text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
          Simple, transparent pricing
        </h1>
        <p className="text-xl text-slate-500 font-medium leading-relaxed">
          Choose the plan that best fits your collaborative journey. Start for free and scale smoothly.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {plans.map((plan, i) => (
          <div 
            key={i}
            className={cn(
              "relative bg-white rounded-[40px] p-10 border shadow-xl flex flex-col transition-all hover:-translate-y-2 animate-in zoom-in-95 duration-1000",
              plan.isPopular ? "border-pink-200 shadow-pink-100 ring-4 ring-pink-50/50" : "border-slate-100 shadow-slate-100/50"
            )}
            style={{ animationDelay: `${i * 150}ms`, animationFillMode: 'both' }}
          >
            {plan.isPopular && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xs font-bold uppercase tracking-widest text-white bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 rounded-full shadow-lg shadow-pink-200">
                Most Popular
              </div>
            )}
            
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-slate-900">{plan.name}</h3>
              <p className="text-sm font-medium text-slate-500 mt-2">{plan.desc}</p>
            </div>

            <div className="mb-10 flex items-baseline gap-2">
              <span className="text-5xl font-extrabold text-slate-900">{plan.price}</span>
              {plan.period && <span className="text-lg font-medium text-slate-500">{plan.period}</span>}
            </div>

            <div className="space-y-4 mb-10 flex-1">
              <p className="text-sm font-bold text-slate-900 mb-6 uppercase tracking-wider">What's included</p>
              
              {plan.features.map((ft, fi) => (
                <div key={fi} className="flex items-start gap-4">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span className="text-slate-600 font-medium text-[15px] leading-tight">{ft}</span>
                </div>
              ))}
              
              {plan.missing.map((ft, fi) => (
                <div key={fi} className="flex items-start gap-4 opacity-50">
                  <Minus className="w-5 h-5 text-slate-400 shrink-0" />
                  <span className="text-slate-400 font-medium text-[15px] leading-tight">{ft}</span>
                </div>
              ))}
            </div>

            <Link 
              href="/login" 
              className={cn(
                "w-full py-4 rounded-2xl text-center font-bold transition-all shadow-lg active:scale-95",
                plan.isPopular 
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:opacity-90 shadow-pink-200" 
                  : "bg-slate-50 hover:bg-slate-100 text-slate-900 border border-slate-200"
              )}
            >
              Get Started
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
