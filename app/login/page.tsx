'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/lib/store';
import { ArrowRight, Video } from 'lucide-react';
import { signIn } from 'next-auth/react';

export default function LoginPage() {
  const [email, setEmail] = useState('test@example.com');
  const [password, setPassword] = useState('password123');
  const [isLoading, setIsLoading] = useState(false);
  const login = useAuthStore((state) => state.login);
  const router = useRouter();

  const handleGoogleLogin = () => {
    signIn('google', { callbackUrl: '/dashboard' });
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    const result = await signIn('credentials', {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      alert('Invalid credentials. Hint: test@example.com / password123');
      setIsLoading(false);
    } else {
      login(email); // Keep Zustand for local UI state if needed
      router.push('/dashboard');
    }
  };

  return (
    <div className="min-h-screen flex bg-white font-sans">
      
      {/* Left Side: Auth Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 sm:px-16 md:px-24 xl:px-32 relative z-10">
        <div className="absolute top-10 left-10 lg:left-16 flex items-center gap-3">
          <div className="p-2 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl shadow-lg">
            <Video className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-slate-900 tracking-tight">PJ Studio</span>
        </div>

        <div className="w-full max-w-md mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="mb-10">
            <h1 className="text-4xl font-extrabold text-slate-900 mb-3 tracking-tight">Welcome Back</h1>
            <p className="text-slate-500 font-medium">Log in to your creative workspace</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all font-medium placeholder:text-slate-400"
                placeholder="you@example.com"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 ml-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all font-medium placeholder:text-slate-400"
                placeholder="••••••••"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full group mt-8 relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0B3022] text-white font-bold rounded-2xl overflow-hidden transition-transform active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed shadow-xl shadow-[#0B3022]/20"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#0B3022] to-[#166534] transition-opacity group-hover:opacity-90" />
              <span className="relative z-10 flex items-center gap-2">
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    Sign In to Dashboard
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </span>
            </button>
          </form>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-100"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-4 text-slate-400 font-bold tracking-widest">Or continue with</span>
            </div>
          </div>

          <div className="flex justify-center">
            <button 
              onClick={handleGoogleLogin}
              className="w-full max-w-[320px] py-4 px-6 bg-white border-2 border-slate-100 rounded-2xl font-bold text-slate-700 hover:bg-slate-50 hover:border-slate-200 transition-all flex items-center justify-center gap-3 shadow-sm active:scale-[0.98]"
            >
              <img src="https://www.gstatic.com/images/branding/product/1x/gsa_512dp.png" className="w-5 h-5" alt="Google" />
              Sign in with Google
            </button>
          </div>
          
          <p className="text-center text-sm font-medium text-slate-400 mt-8">
            Note: Use the pre-filled credentials to test.
          </p>
        </div>
      </div>

      {/* Right Side: Vibrant Graphic */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-slate-50 overflow-hidden items-center justify-center p-12">
        {/* Massive vibrant gradient backgrounds */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100/40 via-pink-100/40 to-orange-50/40" />
        <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-gradient-to-br from-purple-400 to-pink-500 rounded-full blur-[100px] opacity-40 mix-blend-multiply" />
        <div className="absolute bottom-[10%] left-[10%] w-[500px] h-[500px] bg-gradient-to-tr from-orange-400 to-yellow-300 rounded-full blur-[120px] opacity-40 mix-blend-multiply" />
        
        {/* Glassmorphism card floating over the gradient representing structure */}
        <div className="relative z-10 w-[450px] aspect-square rounded-[40px] border border-white/50 backdrop-blur-3xl bg-white/30 shadow-2xl p-12 flex flex-col justify-end">
           <h2 className="text-4xl font-extrabold text-slate-900 leading-tight mb-4 tracking-tight">Not Competition<br/>Only Collaboration</h2>
           <p className="text-lg font-medium text-slate-700">Linking creative minds together flawlessly.</p>
        </div>
      </div>

    </div>
  );
}
