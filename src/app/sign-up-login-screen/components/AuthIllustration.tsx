import React from 'react';
import AppImage from '@/components/ui/AppImage';
import AppLogo from '@/components/ui/AppLogo';
import Link from 'next/link';

const worlds = [
{ id: 'il-ayurveda', emoji: '🌿', name: 'Forest of Ayurveda' },
{ id: 'il-yoga', emoji: '🧘', name: 'Valley of Yoga' },
{ id: 'il-stories', emoji: '📖', name: 'Kingdom of Stories' },
{ id: 'il-astro', emoji: '⭐', name: 'Observatory of Aryabhata' }];


export default function AuthIllustration() {
  return (
    <div className="relative w-full h-full flex flex-col overflow-hidden bg-indigo-gradient">
      {/* Background image */}
      <div className="absolute inset-0">
        <AppImage
          src="https://images.unsplash.com/photo-1726586909813-bc148754f022"
          alt="Ancient Indian temple at twilight with stars emerging in the sky above ornate stone architecture"
          fill
          className="object-cover opacity-20"
          priority />
        
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-deep/70 via-indigo-deep/50 to-indigo-deep/90" />

      {/* Mandala top-right decoration */}
      <div className="absolute top-0 right-0 w-72 h-72 opacity-10">
        <svg viewBox="0 0 200 200" className="w-full h-full text-gold">
          <circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" strokeWidth="0.7" />
          <circle cx="100" cy="100" r="65" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="0.4" />
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330]?.map((angle, i) =>
          <line key={`auth-mandala-${i}`} x1="100" y1="10" x2="100" y2="190" stroke="currentColor" strokeWidth="0.4" transform={`rotate(${angle} 100 100)`} />
          )}
          {[0, 45, 90, 135, 180, 225, 270, 315]?.map((angle, i) =>
          <ellipse key={`auth-petal-${i}`} cx="100" cy="25" rx="6" ry="16" fill="currentColor" opacity="0.25" transform={`rotate(${angle} 100 100)`} />
          )}
        </svg>
      </div>

      {/* Floating emojis */}
      <div className="absolute top-20 left-6 text-3xl float-animation opacity-50">🪷</div>
      <div className="absolute top-40 right-8 text-2xl float-animation-delay-1 opacity-40">✨</div>
      <div className="absolute bottom-40 left-8 text-3xl float-animation-delay-2 opacity-40">🌿</div>
      <div className="absolute bottom-20 right-6 text-2xl float-animation opacity-40">⭐</div>

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full p-10">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 mb-auto">
          <AppLogo size={40} />
          <div>
            <span className="font-extrabold text-white text-lg block leading-tight">Bharath JnanaYatra</span>
            <span className="text-white/40 text-xs">भारत ज्ञानयात्रा</span>
          </div>
        </Link>

        {/* Hero text */}
        <div className="mb-8">
          <h2 className="text-3xl font-extrabold text-white mb-4 leading-tight">
            Your adventure into<br />
            <span className="gradient-text-saffron">India&apos;s ancient wisdom</span><br />
            begins here.
          </h2>
          <p className="text-white/60 text-sm leading-relaxed max-w-xs">
            Join thousands of young explorers discovering Ayurveda, Yoga, Panchatantra and more — through quests, badges, and adventure.
          </p>
        </div>

        {/* World pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          {worlds?.map((w) =>
          <div key={w?.id} className="flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-3 py-1.5 backdrop-blur-sm">
              <span className="text-sm">{w?.emoji}</span>
              <span className="text-white/70 text-xs font-medium">{w?.name}</span>
            </div>
          )}
        </div>

        {/* Quote */}
        <blockquote className="border-l-2 border-primary pl-4">
          <p className="text-white/50 text-xs italic leading-relaxed">
            &ldquo;The knowledge that once helped me heal shouldn&apos;t be a discovery I stumbled into by chance.&rdquo;
          </p>
          <footer className="text-primary text-[10px] font-bold mt-1">— Harshitha Saladi, Founder</footer>
        </blockquote>
      </div>
    </div>);

}