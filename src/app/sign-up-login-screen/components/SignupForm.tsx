'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { Eye, EyeOff, Loader2, User, GraduationCap, BookOpen } from 'lucide-react';
import { useRouter } from 'next/navigation';

type UserRole = 'child' | 'parent' | 'teacher';

interface SignupFormData {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  age?: string;
  terms: boolean;
}

interface SignupFormProps {
  onSwitchTab: () => void;
}

const roles: { id: UserRole; label: string; emoji: string; desc: string; Icon: React.ElementType }[] = [
  { id: 'child', label: 'Young Explorer', emoji: '🧒', desc: 'Age 8–16', Icon: User },
  { id: 'parent', label: 'Parent / Guardian', emoji: '👨‍👩‍👧', desc: 'Monitor progress', Icon: GraduationCap },
  { id: 'teacher', label: 'Educator', emoji: '👩‍🏫', desc: 'School / Homeschool', Icon: BookOpen },
];

export default function SignupForm({ onSwitchTab }: SignupFormProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [selectedRole, setSelectedRole] = useState<UserRole>('child');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignupFormData>();

  const passwordValue = watch('password');

  const onSubmit = async (data: SignupFormData) => {
    setLoading(true);
    // BACKEND: POST /api/auth/signup { fullName, email, password, role: selectedRole, age: data.age }
    await new Promise(r => setTimeout(r, 1600));
    setLoading(false);
    toast.success(`🌿 Welcome, ${data.fullName}! Your Yatra begins. Explore your first world!`);
    setTimeout(() => router.push('/knowledge-worlds-hub'), 1000);
  };

  return (
    <div className="animate-slide-in-right">
      <h2 className="text-2xl font-extrabold text-foreground mb-1">Begin Your Yatra</h2>
      <p className="text-muted-foreground text-sm mb-5">Create your explorer profile and start your adventure into India&apos;s knowledge traditions.</p>

      {/* Role selector */}
      <div className="mb-5">
        <p className="text-sm font-semibold text-foreground mb-2">I am a...</p>
        <div className="grid grid-cols-3 gap-2">
          {roles.map((role) => (
            <button
              key={`role-${role.id}`}
              type="button"
              onClick={() => setSelectedRole(role.id)}
              className={`flex flex-col items-center gap-1.5 p-3 rounded-xl border text-center transition-all duration-150 active:scale-95 ${
                selectedRole === role.id
                  ? 'bg-primary/10 border-primary text-primary' :'bg-card border-border text-muted-foreground hover:border-primary/30 hover:text-foreground'
              }`}
            >
              <span className="text-xl">{role.emoji}</span>
              <span className="text-[11px] font-bold leading-tight">{role.label}</span>
              <span className="text-[9px] opacity-70">{role.desc}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Social auth */}
      <div className="flex gap-3 mb-5">
        <button type="button" className="flex-1 flex items-center justify-center gap-2 bg-card border border-border rounded-xl py-2.5 text-sm font-semibold text-foreground hover:bg-muted active:scale-95 transition-all duration-150">
          <span className="text-base">🌐</span>
          Google
        </button>
        <button type="button" className="flex-1 flex items-center justify-center gap-2 bg-card border border-border rounded-xl py-2.5 text-sm font-semibold text-foreground hover:bg-muted active:scale-95 transition-all duration-150">
          <span className="text-base">🐙</span>
          GitHub
        </button>
      </div>

      <div className="flex items-center gap-3 mb-5">
        <div className="flex-1 h-px bg-border" />
        <span className="text-xs text-muted-foreground font-medium">or create account</span>
        <div className="flex-1 h-px bg-border" />
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Full name */}
        <div>
          <label htmlFor="signup-name" className="block text-sm font-semibold text-foreground mb-1.5">
            Full Name <span className="text-red-400">*</span>
          </label>
          <input
            id="signup-name"
            type="text"
            autoComplete="name"
            placeholder="Arjun Mehta"
            {...register('fullName', {
              required: 'Full name is required',
              minLength: { value: 2, message: 'Name must be at least 2 characters' },
            })}
            className={`w-full px-4 py-3 rounded-xl border bg-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm transition-colors ${
              errors.fullName ? 'border-red-400 bg-red-50' : 'border-border'
            }`}
          />
          {errors.fullName && (
            <p className="text-red-500 text-xs mt-1.5">⚠ {errors.fullName.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="signup-email" className="block text-sm font-semibold text-foreground mb-1.5">
            Email Address <span className="text-red-400">*</span>
          </label>
          <input
            id="signup-email"
            type="email"
            autoComplete="email"
            placeholder="arjun@example.com"
            {...register('email', {
              required: 'Email is required',
              pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Enter a valid email address' },
            })}
            className={`w-full px-4 py-3 rounded-xl border bg-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm transition-colors ${
              errors.email ? 'border-red-400 bg-red-50' : 'border-border'
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1.5">⚠ {errors.email.message}</p>
          )}
        </div>

        {/* Age (child only) */}
        {selectedRole === 'child' && (
          <div>
            <label htmlFor="signup-age" className="block text-sm font-semibold text-foreground mb-1.5">
              Age
              <span className="ml-2 text-xs text-muted-foreground font-normal">(helps us personalise your quests)</span>
            </label>
            <select
              id="signup-age"
              {...register('age')}
              className="w-full px-4 py-3 rounded-xl border border-border bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm transition-colors"
            >
              <option value="">Select your age</option>
              {[7,8,9,10,11,12,13,14,15,16].map((a) => (
                <option key={`age-${a}`} value={a}>{a} years old</option>
              ))}
            </select>
          </div>
        )}

        {/* Password */}
        <div>
          <label htmlFor="signup-password" className="block text-sm font-semibold text-foreground mb-1.5">
            Password <span className="text-red-400">*</span>
          </label>
          <p className="text-xs text-muted-foreground mb-1.5">At least 8 characters with one uppercase letter and one number</p>
          <div className="relative">
            <input
              id="signup-password"
              type={showPassword ? 'text' : 'password'}
              autoComplete="new-password"
              placeholder="••••••••"
              {...register('password', {
                required: 'Password is required',
                minLength: { value: 8, message: 'Password must be at least 8 characters' },
                pattern: {
                  value: /^(?=.*[A-Z])(?=.*\d).+$/,
                  message: 'Must include one uppercase letter and one number',
                },
              })}
              className={`w-full px-4 py-3 pr-11 rounded-xl border bg-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm transition-colors ${
                errors.password ? 'border-red-400 bg-red-50' : 'border-border'
              }`}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground p-1"
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
          {errors.password && (
            <p className="text-red-500 text-xs mt-1.5">⚠ {errors.password.message}</p>
          )}
        </div>

        {/* Confirm password */}
        <div>
          <label htmlFor="signup-confirm" className="block text-sm font-semibold text-foreground mb-1.5">
            Confirm Password <span className="text-red-400">*</span>
          </label>
          <div className="relative">
            <input
              id="signup-confirm"
              type={showConfirm ? 'text' : 'password'}
              autoComplete="new-password"
              placeholder="••••••••"
              {...register('confirmPassword', {
                required: 'Please confirm your password',
                validate: (val) => val === passwordValue || 'Passwords do not match',
              })}
              className={`w-full px-4 py-3 pr-11 rounded-xl border bg-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm transition-colors ${
                errors.confirmPassword ? 'border-red-400 bg-red-50' : 'border-border'
              }`}
            />
            <button
              type="button"
              onClick={() => setShowConfirm(!showConfirm)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground p-1"
              aria-label={showConfirm ? 'Hide confirm password' : 'Show confirm password'}
            >
              {showConfirm ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
          {errors.confirmPassword && (
            <p className="text-red-500 text-xs mt-1.5">⚠ {errors.confirmPassword.message}</p>
          )}
        </div>

        {/* Terms */}
        <div>
          <div className="flex items-start gap-2">
            <input
              id="signup-terms"
              type="checkbox"
              {...register('terms', { required: 'You must accept the terms to continue' })}
              className="w-4 h-4 mt-0.5 rounded border-border accent-primary flex-shrink-0"
            />
            <label htmlFor="signup-terms" className="text-xs text-muted-foreground cursor-pointer leading-relaxed">
              I agree to the{' '}
              <span className="text-primary font-semibold hover:underline cursor-pointer">Terms of Service</span>
              {' '}and{' '}
              <span className="text-primary font-semibold hover:underline cursor-pointer">Privacy Policy</span>.
              {' '}For children under 13, a parent or guardian must consent.
            </label>
          </div>
          {errors.terms && (
            <p className="text-red-500 text-xs mt-1.5">⚠ {errors.terms.message}</p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full flex items-center justify-center gap-2 bg-saffron-gradient text-white font-bold py-3.5 rounded-2xl hover:opacity-90 active:scale-95 disabled:opacity-60 transition-all duration-150 text-base min-h-[52px]"
        >
          {loading ? (
            <><Loader2 size={18} className="animate-spin" /> Creating Your Profile...</>
          ) : (
            '🌿 Begin My Yatra'
          )}
        </button>
      </form>

      <p className="text-center mt-4 text-sm text-muted-foreground">
        Already an explorer?{' '}
        <button onClick={onSwitchTab} className="text-primary font-bold hover:underline">
          Sign in →
        </button>
      </p>
    </div>
  );
}