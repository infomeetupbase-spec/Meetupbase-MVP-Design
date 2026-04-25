'use client';

import Link from 'next/link';
import { Video, AtSign, Camera, Briefcase, Mail } from 'lucide-react';

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-white overflow-hidden text-slate-800 font-sans relative">
      {/* Decorative Wavy Background Gradients (Global) */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-purple-100/40 via-pink-100/40 to-orange-50/40 rounded-full blur-3xl -translate-y-1/4 translate-x-1/4 pointer-events-none" />
      <div className="absolute top-[800px] left-0 w-[600px] h-[600px] bg-gradient-to-tr from-blue-100/40 to-purple-50/40 rounded-full blur-3xl -translate-x-1/3 pointer-events-none" />
      
      {/* Navbar */}
      <nav className="relative z-50 flex flex-1 w-full items-center justify-between px-8 py-6 max-w-[1400px] mx-auto min-h-[90px]">
        <Link href="/" className="flex items-center gap-3">
          <div className="bg-slate-900 rounded-lg p-2 text-white">
            <Video className="w-5 h-5" />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900">
            PJ Studio
          </span>
        </Link>

        <div className="hidden md:flex flex-1 justify-center items-center gap-10">
          <Link href="/features" className="text-sm font-semibold text-slate-500 hover:text-slate-900 transition-colors">Features</Link>
          <Link href="/pricing" className="text-sm font-semibold text-slate-500 hover:text-slate-900 transition-colors">Pricing</Link>
          <Link href="/services" className="text-sm font-semibold text-slate-500 hover:text-slate-900 transition-colors">Services</Link>
        </div>

        <div>
          <Link 
            href="/login" 
            className="px-6 py-2.5 bg-[#0B3022] hover:bg-[#166534] text-white text-sm font-bold rounded-full transition-all shadow-md shadow-[#0B3022]/20"
          >
            Login / Contact us
          </Link>
        </div>
      </nav>

      <main className="flex-1 w-full relative z-10 basis-full">
        {children}
      </main>

      {/* Footer */}
      <footer className="relative z-10 w-full bg-slate-50 border-t border-slate-200 pt-20 pb-10 px-8 mt-20">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1 space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="bg-slate-900 rounded-lg p-2 text-white">
                <Video className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">
                PJ Studio
              </span>
            </Link>
            <p className="text-slate-500 text-sm font-medium leading-relaxed">
              Empowering creators and businesses to build exceptional digital experiences through seamless collaboration.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-blue-500 transition-colors"><AtSign className="w-4 h-4" /></Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-pink-500 transition-colors"><Camera className="w-4 h-4" /></Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-blue-700 transition-colors"><Briefcase className="w-4 h-4" /></Link>
            </div>
          </div>
          
          <div>
            <h4 className="text-slate-900 font-bold mb-6">Company</h4>
            <div className="flex flex-col gap-4">
              <Link href="/about" className="text-slate-500 hover:text-slate-900 text-sm font-medium transition-colors">About Us</Link>
              <Link href="/careers" className="text-slate-500 hover:text-slate-900 text-sm font-medium transition-colors">Careers</Link>
              <Link href="/services" className="text-slate-500 hover:text-slate-900 text-sm font-medium transition-colors">Services</Link>
              <Link href="/pricing" className="text-slate-500 hover:text-slate-900 text-sm font-medium transition-colors">Pricing</Link>
            </div>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold mb-6">Resources</h4>
            <div className="flex flex-col gap-4">
              <Link href="/blog" className="text-slate-500 hover:text-slate-900 text-sm font-medium transition-colors">Blog</Link>
              <Link href="/case-studies" className="text-slate-500 hover:text-slate-900 text-sm font-medium transition-colors">Case Studies</Link>
              <Link href="/help-center" className="text-slate-500 hover:text-slate-900 text-sm font-medium transition-colors">Help Center</Link>
              <Link href="/contact" className="text-slate-500 hover:text-slate-900 text-sm font-medium transition-colors">Contact</Link>
            </div>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold mb-6">Subscribe</h4>
            <p className="text-slate-500 text-sm font-medium mb-4">Stay updated with our latest news.</p>
            <form className="flex gap-2">
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input type="email" placeholder="Email address" className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 text-sm font-medium transition-all" />
              </div>
              <button className="bg-slate-900 text-white px-4 py-2 rounded-xl text-sm font-bold hover:bg-slate-800 transition-colors">Join</button>
            </form>
          </div>
        </div>
        
        <div className="max-w-[1400px] mx-auto pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm font-medium">© 2026 PJ Studio. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="text-slate-500 hover:text-slate-900 text-sm font-medium transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-slate-500 hover:text-slate-900 text-sm font-medium transition-colors">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
