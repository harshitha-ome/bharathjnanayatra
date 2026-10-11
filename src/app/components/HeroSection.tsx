import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Sparkles, Compass } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden min-h-[55vh] flex items-center">
      {/* Background */}
      <div className="absolute inset-0 bg-indigo-gradient" />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-deep/80 via-indigo-deep/60 to-indigo-deep/90" />

      {/* Decorative floating elements */}
      <div className="absolute top-16 left-8 text-4xl float-animation opacity-60">🌸</div>
      <div className="absolute top-32 right-12 text-3xl float-animation-delay-1 opacity-50">⭐</div>
      <div className="absolute bottom-24 left-16 text-3xl float-animation-delay-2 opacity-50">🪷</div>
      <div className="absolute top-24 right-1/3 text-2xl float-animation opacity-40">🦚</div>
      <div className="absolute bottom-32 right-24 text-4xl float-animation-delay-1 opacity-40">🌿</div>
      <div className="absolute top-1/2 left-4 text-2xl float-animation-delay-2 opacity-30">✨</div>

      {/* Mandala decoration top-right */}
      <div className="absolute top-0 right-0 w-96 h-96 opacity-10">
        <svg viewBox="0 0 200 200" className="w-full h-full text-gold">
          <circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="70" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="50" fill="none" stroke="currentColor" strokeWidth="0.5" />
          {[0,30,60,90,120,150,180,210,240,270,300,330]?.map((angle, i) => (
            <line
              key={`mandala-line-${i}`}
              x1="100" y1="10" x2="100" y2="190"
              stroke="currentColor" strokeWidth="0.5"
              transform={`rotate(${angle} 100 100)`}
            />
          ))}
        </svg>
      </div>

      <div className="relative z-10 w-full max-w-screen-2xl mx-auto px-4 lg:px-8 xl:px-10 2xl:px-16 py-10">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Left: Image */}
          <div className="flex-shrink-0 w-full md:w-[340px] lg:w-[420px] flex items-center justify-center">
            <div className="relative w-[280px] h-[280px] md:w-[320px] md:h-[320px] lg:w-[400px] lg:h-[400px]">
              <Image
                src="/assets/images/BJY_Logo-1788517325077.png"
                alt="Bharath JnanaYatra — An Adventure into Indian Knowledge Systems illustrated poster"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Right: Text content */}
          <div className="flex-1 min-w-0">
            {/* Tag */}
            <div className="inline-flex flex-wrap items-center gap-2 mb-6">
              <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-1.5">
                <span className="text-xs font-bold text-primary uppercase tracking-widest">NEP 2020 Aligned</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 rounded-full px-4 py-1.5">
                <span className="text-xs font-bold text-green-400 uppercase tracking-widest">Gamified IKS Learning</span>
              </div>
            </div>

            <p className="text-3xl font-bold mb-10 max-w-2xl leading-relaxed" style={{ color: '#eff5f5' }}>
              Looking to give your child ancient Indian wisdom and essential life skills?
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/sign-up-login-screen"
                className="flex items-center gap-2 bg-saffron-gradient text-white font-bold px-8 py-4 rounded-2xl hover:opacity-90 active:scale-95 transition-all duration-150 shadow-warm-lg text-base"
              >
                <Sparkles size={18} />
                Start Your Journey
              </Link>
              <Link
                href="/knowledge-worlds-hub"
                className="flex items-center gap-2 bg-white/10 border border-white/25 text-white font-bold px-8 py-4 rounded-2xl hover:bg-white/20 active:scale-95 transition-all duration-150 text-base backdrop-blur-sm"
              >
                <Compass size={18} />
                Explore Worlds
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" className="w-full fill-background">
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" />
        </svg>
      </div>
    </section>
  );
}