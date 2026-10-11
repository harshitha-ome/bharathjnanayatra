'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { Sparkles, Loader2 } from 'lucide-react';

interface WaitlistForm {
  email: string;
  name: string;
}

export default function WaitlistSignup() {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<WaitlistForm>();

  const onSubmit = async (data: WaitlistForm) => {
    setLoading(true);
    // BACKEND: POST /api/waitlist { email: data.email, name: data.name }
    await new Promise(r => setTimeout(r, 1200));
    setLoading(false);
    reset();
    toast.success(`🌿 Welcome, ${data.name}! You're on the waitlist. Your journey begins soon.`);
  };

  return (
    <section className="w-full py-20 px-4 lg:px-8 xl:px-10 2xl:px-16 bg-background">
      <div className="max-w-screen-2xl mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          <span className="inline-block bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6 border border-primary/20">
            Early Access
          </span>
          <h2 className="text-hero-md text-indigo-deep mb-4">Be the First to Embark</h2>
          <p className="text-muted-foreground mb-8">Get exclusive discounts by joining waiting list</p>

          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Your name"
                {...register('name', { required: 'Name is required' })}
                className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm"
              />
              {errors.name && <p className="text-red-500 text-xs mt-1 text-left">{errors.name.message}</p>}
            </div>
            <div className="flex-1">
              <input
                type="email"
                placeholder="your@email.com"
                {...register('email', {
                  required: 'Email is required',
                  pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Enter a valid email' },
                })}
                className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm"
              />
              {errors.email && <p className="text-red-500 text-xs mt-1 text-left">{errors.email.message}</p>}
            </div>
            <button
              type="submit"
              disabled={loading}
              className="flex items-center justify-center gap-2 bg-saffron-gradient text-white font-bold px-6 py-3 rounded-xl hover:opacity-90 active:scale-95 disabled:opacity-60 transition-all duration-150 whitespace-nowrap min-w-[160px]"
            >
              {loading ? <Loader2 size={16} className="animate-spin" /> : <Sparkles size={16} />}
              {loading ? 'Joining...' : 'Join Waitlist'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}