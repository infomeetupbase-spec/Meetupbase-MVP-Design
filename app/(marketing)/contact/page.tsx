import { Mail, MessageSquare, MapPin, Globe, Send, Briefcase, Code2, ArrowRight } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="pt-24 pb-32">
      {/* Hero Section */}
      <div className="max-w-[1200px] mx-auto px-8 mb-24">
        <div className="max-w-3xl">
          <h1 className="text-6xl font-extrabold text-slate-900 mb-8 tracking-tight">
            Let's build something <span className="text-emerald-600">extraordinary</span> together.
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Have questions about our platform, pricing, or partnerships? Our team is here to help you scale your creative journey.
          </p>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          {/* Contact Form */}
          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-2xl shadow-emerald-900/5">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-900 ml-1">First Name</label>
                  <input 
                    type="text" 
                    placeholder="John" 
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-900 ml-1">Last Name</label>
                  <input 
                    type="text" 
                    placeholder="Doe" 
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-900 ml-1">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com" 
                  className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-900 ml-1">Subject</label>
                <div className="relative">
                  <select className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all appearance-none">
                    <option>General Inquiry</option>
                    <option>Partnership Opportunity</option>
                    <option>Technical Support</option>
                    <option>Billing Question</option>
                  </select>
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-900 ml-1">Message</label>
                <textarea 
                  rows={5}
                  placeholder="Tell us more about how we can help..." 
                  className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all resize-none"
                ></textarea>
              </div>
              <button className="w-full py-5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-2xl shadow-xl shadow-emerald-600/20 transition-all transform hover:-translate-y-1 active:translate-y-0">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-16">
            <div className="grid sm:grid-cols-2 gap-12">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Email Us</h3>
                <p className="text-slate-600">Our team is here to help.</p>
                <a href="mailto:hello@meetupbase.com" className="text-emerald-600 font-bold hover:underline">hello@meetupbase.com</a>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Live Chat</h3>
                <p className="text-slate-600">Available Mon-Fri, 9am-6pm.</p>
                <button className="text-emerald-600 font-bold hover:underline">Start a conversation</button>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Office</h3>
                <p className="text-slate-600 leading-relaxed">
                  123 Creative Way,<br />
                  London, UK EC1A 1BB
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                  <Globe className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Social</h3>
                <p className="text-slate-600">Follow our journey.</p>
                <div className="flex gap-4">
                  <Send className="w-5 h-5 text-slate-400 hover:text-emerald-600 cursor-pointer transition-colors" />
                  <Briefcase className="w-5 h-5 text-slate-400 hover:text-emerald-600 cursor-pointer transition-colors" />
                  <Code2 className="w-5 h-5 text-slate-400 hover:text-emerald-600 cursor-pointer transition-colors" />
                </div>
              </div>
            </div>

            {/* Support Box */}
            <div className="p-8 rounded-[2rem] bg-emerald-950 text-white relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl"></div>
               <h4 className="text-2xl font-bold mb-4">Support Center</h4>
               <p className="text-emerald-200/70 mb-8 leading-relaxed">
                 Check out our Help Center for quick answers to common questions.
               </p>
               <button className="flex items-center gap-2 font-bold text-white group">
                  Visit Help Center <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
               </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
