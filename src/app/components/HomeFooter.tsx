import React from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';

export default function HomeFooter() {
  return (
    <footer className="w-full bg-indigo-deep py-12 px-4 lg:px-8 xl:px-10 2xl:px-16 border-t border-white/10">
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <AppLogo size={36} />
              <div>
                <span className="font-extrabold text-white text-base block">Bharath JnanaYatra</span>
                <span className="text-white/40 text-xs">भारत ज्ञानयात्रा</span>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm">
              Transforming India&apos;s ancient knowledge traditions into gamified adventures for the digital generation.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-widest">Explore</h4>
            <ul className="space-y-2">
              {[
                { label: 'Knowledge Worlds', href: '/knowledge-worlds-hub' },
                { label: 'My Adventure', href: '/knowledge-world-adventure' },
                { label: 'Start Journey', href: '/sign-up-login-screen' },
              ]?.map((l) => (
                <li key={`footer-${l?.label}`}>
                  <Link href={l?.href} className="text-white/50 hover:text-white text-sm transition-colors">
                    {l?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-widest">Connect</h4>
            <ul className="space-y-2">
              {['For Schools', 'About Us', 'Blog', 'Contact']?.map((l) => (
                <li key={`footer-link-${l}`}>
                  <span className="text-white/50 text-sm cursor-pointer hover:text-white transition-colors">{l}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mandala-divider mb-6" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">© 2026 Bharath JnanaYatra. All rights reserved.</p>
          <p className="text-white/30 text-xs italic">ज्ञानं परमं ध्येयम् — Knowledge is the supreme goal</p>
        </div>
      </div>
    </footer>
  );
}