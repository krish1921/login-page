import React, { useState } from 'react';
import { User, Lock, Eye, EyeOff, ArrowRight, Shield, Database, Cpu, MapPin, CheckCircle2, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function LoginCard() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (!username.trim()) {
      setErrorMsg('Please enter your Username or Email');
      return;
    }
    if (!password) {
      setErrorMsg('Please enter your Password');
      return;
    }

    setIsLoading(true);

    // Simulate authenticating against Oil India eRTMAC-NWIS portal
    setTimeout(() => {
      setIsLoading(false);
      setLoginSuccess(true);
      
      // Fire celebration confetti
      try {
        const fireConfetti = typeof confetti === 'function' ? confetti : (confetti && confetti.default);
        if (typeof fireConfetti === 'function') {
          fireConfetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.6 }
          });
        }
      } catch (err) {
        // Fallback silently if confetti is not ready
      }
    }, 1200);
  };

  const handleMicrosoftLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setUsername('oil_india_officer@oilindia.in');
      setLoginSuccess(true);
    }, 1000);
  };

  return (
    <div className="w-full max-w-[420px] select-none z-20">
      <div className="glass-card rounded-[28px] p-8 shadow-[0_0_50px_rgba(53,230,161,0.18)] border border-[#35E6A1]/35 relative overflow-hidden backdrop-blur-xl">
        {/* Subtle top light reflection beam */}
        <div className="absolute -top-12 left-1/4 w-1/2 h-24 bg-[#35E6A1]/20 blur-2xl pointer-events-none"></div>

        {/* Title & Subtitle */}
        <div className="mb-6">
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            Welcome Back
          </h2>
          <p className="text-[#9AAFA7] text-sm font-normal mt-1 opacity-90">
            Sign in to access eRTMAC-NWIS
          </p>
        </div>

        {/* Error Feedback Banner */}
        {errorMsg && (
          <div className="mb-4 p-3 rounded-xl bg-red-500/15 border border-red-500/40 text-red-200 text-xs flex items-center gap-2 animate-in fade-in slide-in-from-top-2">
            <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        {/* Success Modal / Banner */}
        {loginSuccess ? (
          <div className="py-8 flex flex-col items-center text-center space-y-4 animate-in zoom-in-95 duration-300">
            <div className="w-16 h-16 rounded-full bg-[#35E6A1]/20 border-2 border-[#35E6A1] flex items-center justify-center shadow-[0_0_30px_rgba(53,230,161,0.5)]">
              <CheckCircle2 className="w-8 h-8 text-[#35E6A1]" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Authentication Successful!</h3>
              <p className="text-[#9AAFA7] text-xs mt-1">
                Access granted to Oil India Nearby Wells Intelligence System.
              </p>
            </div>
            <button
              onClick={() => {
                setLoginSuccess(false);
                setUsername('');
                setPassword('');
              }}
              className="mt-2 text-xs text-[#35E6A1] hover:underline font-medium"
            >
              Sign out / Log in as another user
            </button>
          </div>
        ) : (
          /* Main Form */
          <form onSubmit={handleLogin} className="space-y-4">
            {/* Username / Email Field */}
            <div className="relative">
              <div className="glass-input rounded-xl flex items-center px-4 py-3.5 transition-all">
                <User className="w-4 h-4 text-slate-400 mr-3 shrink-0" />
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Username / Email"
                  className="bg-transparent text-white placeholder-slate-400 text-sm focus:outline-none w-full"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="relative">
              <div className="glass-input rounded-xl flex items-center px-4 py-3.5 transition-all">
                <Lock className="w-4 h-4 text-slate-400 mr-3 shrink-0" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="bg-transparent text-white placeholder-slate-400 text-sm focus:outline-none w-full pr-8"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 text-slate-400 hover:text-white transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password Row */}
            <div className="flex items-center justify-between text-xs pt-1">
              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded bg-[#06130F] border-slate-600 text-[#35E6A1] focus:ring-0 cursor-pointer accent-[#35E6A1]"
                />
                <span className="text-[#9AAFA7] font-medium">Remember me</span>
              </label>

              <a
                href="#forgot-password"
                onClick={(e) => {
                  e.preventDefault();
                  alert('Password reset link has been dispatched to your Oil India domain administrator.');
                }}
                className="text-[#35E6A1] hover:underline font-medium transition-colors"
              >
                Forgot password?
              </a>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full mt-2 bg-[#35E6A1] hover:bg-[#20C98A] active:scale-[0.99] text-[#06130F] font-bold py-3.5 px-6 rounded-xl shadow-[0_0_25px_rgba(53,230,161,0.4)] hover:shadow-[0_0_35px_rgba(53,230,161,0.6)] transition-all flex items-center justify-center gap-2 text-base group disabled:opacity-70 cursor-pointer"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-[#06130F] border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <>
                  <span>Login</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>

            {/* Divider OR */}
            <div className="flex items-center my-4">
              <div className="flex-1 border-t border-slate-700/70"></div>
              <span className="px-3 text-[11px] text-slate-400 font-semibold tracking-wider">
                OR
              </span>
              <div className="flex-1 border-t border-slate-700/70"></div>
            </div>

            {/* Microsoft Login Button */}
            <button
              type="button"
              onClick={handleMicrosoftLogin}
              className="w-full bg-[#06130F]/80 hover:bg-[#0A1B16] border border-slate-700/70 hover:border-slate-600 text-white font-medium py-3 px-4 rounded-xl flex items-center justify-center gap-3 transition-all cursor-pointer shadow-md"
            >
              {/* Microsoft 4-color square logo */}
              <div className="grid grid-cols-2 gap-0.5 w-4 h-4 shrink-0">
                <div className="bg-[#f25022] w-full h-full"></div>
                <div className="bg-[#7fba00] w-full h-full"></div>
                <div className="bg-[#00a4ef] w-full h-full"></div>
                <div className="bg-[#ffb900] w-full h-full"></div>
              </div>
              <span className="text-xs font-semibold">Continue with Microsoft</span>
            </button>
          </form>
        )}

        {/* Bottom 4 Feature Items */}
        <div className="border-t border-slate-700/60 pt-5 mt-6 grid grid-cols-4 gap-1 text-center">
          <div className="flex flex-col items-center group cursor-pointer">
            <Shield className="w-4 h-4 text-[#35E6A1] group-hover:scale-110 transition-transform" />
            <span className="text-[10px] text-[#9AAFA7] font-medium leading-tight mt-1.5 opacity-85">
              Secure <br /> Access
            </span>
          </div>

          <div className="flex flex-col items-center group cursor-pointer border-l border-slate-700/40">
            <Database className="w-4 h-4 text-[#35E6A1] group-hover:scale-110 transition-transform" />
            <span className="text-[10px] text-[#9AAFA7] font-medium leading-tight mt-1.5 opacity-85">
              Oil India <br /> Data Network
            </span>
          </div>

          <div className="flex flex-col items-center group cursor-pointer border-l border-slate-700/40">
            <Cpu className="w-4 h-4 text-[#35E6A1] group-hover:scale-110 transition-transform" />
            <span className="text-[10px] text-[#9AAFA7] font-medium leading-tight mt-1.5 opacity-85">
              AI-Powered <br /> Insights
            </span>
          </div>

          <div className="flex flex-col items-center group cursor-pointer border-l border-slate-700/40">
            <MapPin className="w-4 h-4 text-[#35E6A1] group-hover:scale-110 transition-transform" />
            <span className="text-[10px] text-[#9AAFA7] font-medium leading-tight mt-1.5 opacity-85">
              Field & Office <br /> Access
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
