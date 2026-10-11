'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { Eye, EyeOff, Loader2, Copy, Check } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface LoginFormData {
  email: string;
  password: string;
  remember: boolean;
}

const demoCredentials = [
  { id: 'cred-child', role: 'Child Learner', email: 'arjun@jnanayatra.in', password: 'Forest@2026' },
  { id: 'cred-parent', role: 'Parent', email: 'priya.mehta@jnanayatra.in', password: 'Yatra@2026' },
  { id: 'cred-teacher', role: 'Teacher', email: 'teacher.sharma@jnanayatra.in', password: 'Guru@2026' },
];

interface LoginFormProps {
  onSwitchTab: () => void;
}

export default function LoginForm({ onSwitchTab }: LoginFormProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setValue,
    setError,
    formState: { errors },
  } = useForm<LoginFormData>();

  const handleCopy = async (text: string, fieldId: string) => {
    await navigator.clipboard.writeText(text);
    setCopiedField(fieldId);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const fillCredentials = (cred: typeof demoCredentials[0]) => {
    setValue('email', cred.email);
    setValue('password', cred.password);
    toast.success(`✅ Demo credentials filled for ${cred.role}`);
  };

  const onSubmit = async (data: LoginFormData) => {
    setLoading(true);
    // BACKEND: POST /api/auth/login { email: data.email, password: data.password }
    await new Promise(r => setTimeout(r, 1400));

    const valid = demoCredentials.find(c => c.email === data.email && c.password === data.password);
    if (!valid) {
      setLoading(false);
      setError('email', { message: 'Invalid credentials — use the demo accounts below to sign in' });
      return;
    }

    setLoading(false);
    toast.success(`🌿 Welcome back, ${valid.role}! Your journey continues.`);
    setTimeout(() => router.push('/knowledge-worlds-hub'), 800);
  };

  return (
    <div className="animate-fade-in-scale">
      <h2 className="text-2xl font-extrabold text-foreground mb-1">Welcome Back</h2>
      <p className="text-muted-foreground text-sm mb-6">Continue your adventure into India&apos;s knowledge traditions.</p>

      {/* Social auth */}
      <div className="flex gap-3 mb-6">
        <button className="flex-1 flex items-center justify-center gap-2 bg-card border border-border rounded-xl py-2.5 text-sm font-semibold text-foreground hover:bg-muted active:scale-95 transition-all duration-150">
          <span className="text-base">🌐</span>
          Google
        </button>
        <button className="flex-1 flex items-center justify-center gap-2 bg-card border border-border rounded-xl py-2.5 text-sm font-semibold text-foreground hover:bg-muted active:scale-95 transition-all duration-150">
          <span className="text-base">🐙</span>
          GitHub
        </button>
      </div>

      <div className="flex items-center gap-3 mb-6">
        <div className="flex-1 h-px bg-border" />
        <span className="text-xs text-muted-foreground font-medium">or sign in with email</span>
        <div className="flex-1 h-px bg-border" />
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Email */}
        <div>
          <label htmlFor="login-email" className="block text-sm font-semibold text-foreground mb-1.5">
            Email Address
          </label>
          <input
            id="login-email"
            type="email"
            autoComplete="email"
            placeholder="arjun@jnanayatra.in"
            {...register('email', {
              required: 'Email is required',
              pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Enter a valid email address' },
            })}
            className={`w-full px-4 py-3 rounded-xl border bg-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm transition-colors ${
              errors.email ? 'border-red-400 bg-red-50' : 'border-border'
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
              <span>⚠</span> {errors.email.message}
            </p>
          )}
        </div>

        {/* Password */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label htmlFor="login-password" className="block text-sm font-semibold text-foreground">
              Password
            </label>
            <button type="button" className="text-xs text-primary hover:underline font-medium">
              Forgot password?
            </button>
          </div>
          <div className="relative">
            <input
              id="login-password"
              type={showPassword ? 'text' : 'password'}
              autoComplete="current-password"
              placeholder="••••••••"
              {...register('password', {
                required: 'Password is required',
                minLength: { value: 6, message: 'Password must be at least 6 characters' },
              })}
              className={`w-full px-4 py-3 pr-11 rounded-xl border bg-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm transition-colors ${
                errors.password ? 'border-red-400 bg-red-50' : 'border-border'
              }`}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors p-1"
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
          {errors.password && (
            <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
              <span>⚠</span> {errors.password.message}
            </p>
          )}
        </div>

        {/* Remember me */}
        <div className="flex items-center gap-2">
          <input
            id="login-remember"
            type="checkbox"
            {...register('remember')}
            className="w-4 h-4 rounded border-border accent-primary"
          />
          <label htmlFor="login-remember" className="text-sm text-muted-foreground cursor-pointer select-none">
            Remember me for 30 days
          </label>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full flex items-center justify-center gap-2 bg-saffron-gradient text-white font-bold py-3.5 rounded-2xl hover:opacity-90 active:scale-95 disabled:opacity-60 transition-all duration-150 text-base min-h-[52px]"
        >
          {loading ? (
            <><Loader2 size={18} className="animate-spin" /> Signing In...</>
          ) : (
            '🚀 Sign In to Your Yatra'
          )}
        </button>
      </form>

      <p className="text-center mt-4 text-sm text-muted-foreground">
        New explorer?{' '}
        <button onClick={onSwitchTab} className="text-primary font-bold hover:underline">
          Begin your journey →
        </button>
      </p>

      {/* Demo credentials box */}
      <div className="mt-6 rounded-2xl border border-border bg-muted/60 p-4">
        <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-3">Demo Accounts — Click to Fill</p>
        <div className="space-y-2">
          {demoCredentials.map((cred) => (
            <div
              key={cred.id}
              className="flex items-center justify-between gap-3 bg-card rounded-xl px-3 py-2.5 border border-border hover:border-primary/30 cursor-pointer transition-all group"
              onClick={() => fillCredentials(cred)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && fillCredentials(cred)}
              aria-label={`Fill credentials for ${cred.role}`}
            >
              <div className="flex-1 min-w-0">
                <p className="text-xs font-bold text-foreground">{cred.role}</p>
                <p className="text-[10px] text-muted-foreground truncate">{cred.email}</p>
              </div>
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); handleCopy(cred.email, `${cred.id}-email`); }}
                  className="p-1 rounded hover:bg-muted transition-colors"
                  aria-label={`Copy email for ${cred.role}`}
                >
                  {copiedField === `${cred.id}-email` ? <Check size={12} className="text-emerald-500" /> : <Copy size={12} className="text-muted-foreground" />}
                </button>
                <span className="text-[10px] bg-primary/10 text-primary font-bold px-2 py-0.5 rounded-full border border-primary/20 group-hover:bg-primary group-hover:text-white transition-colors">
                  Use
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}