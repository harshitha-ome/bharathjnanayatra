'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import AppLogo from '@/components/ui/AppLogo';
import { Menu, X, Flame, Star, Sparkles } from 'lucide-react';

const navLinks = [
  { label: 'Knowledge Worlds', href: '/knowledge-worlds-hub' },
  { label: 'My Adventure', href: '/knowledge-world-adventure' },
  { label: 'About', href: '#about' },
  { label: 'For Schools', href: '#schools' },
];

export default function Topbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-card/95 backdrop-blur-md shadow-warm">
      <div className="max-w-screen-2xl mx-auto px-4 lg:px-8 xl:px-10 2xl:px-16 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <AppLogo size={36} />
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="font-extrabold text-base text-indigo-deep tracking-tight group-hover:text-primary transition-colors duration-200">
              Bharath JnanaYatra
            </span>
            <span className="text-[10px] font-medium text-muted-foreground tracking-widest uppercase">
              भारत ज्ञानयात्रा
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks?.map((link) => {
            const isActive = pathname === link?.href;
            return (
              <Link
                key={`nav-${link?.label}`}
                href={link?.href}
                className={`px-4 py-2 rounded-lg text-sm font-600 transition-all duration-200 ${
                  isActive
                    ? 'bg-primary/10 text-primary font-semibold' :'text-foreground/70 hover:text-foreground hover:bg-muted'
                }`}
              >
                {link?.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-3">
          {/* XP Pill */}
          <div className="flex items-center gap-1.5 bg-muted rounded-full px-3 py-1.5 border border-border">
            <Flame size={14} className="text-primary" />
            <span className="text-xs font-bold text-foreground font-tabular">1,240 XP</span>
          </div>
          <div className="flex items-center gap-1.5 bg-muted rounded-full px-3 py-1.5 border border-border">
            <Star size={14} className="text-gold fill-gold" />
            <span className="text-xs font-bold text-foreground font-tabular">7</span>
          </div>
          <Link
            href="/sign-up-login-screen"
            className="flex items-center gap-2 bg-saffron-gradient text-white text-sm font-bold px-5 py-2 rounded-xl hover:opacity-90 active:scale-95 transition-all duration-150 shadow-warm"
          >
            <Sparkles size={15} />
            Start Journey
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle mobile menu"
        >
          {mobileOpen ? <X size={22} className="text-foreground" /> : <Menu size={22} className="text-foreground" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-card animate-fade-in-scale">
          <nav className="flex flex-col gap-1 p-4">
            {navLinks?.map((link) => {
              const isActive = pathname === link?.href;
              return (
                <Link
                  key={`mobile-nav-${link?.label}`}
                  href={link?.href}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-primary/10 text-primary' :'text-foreground hover:bg-muted'
                  }`}
                >
                  {link?.label}
                </Link>
              );
            })}
            <div className="pt-3 border-t border-border mt-2">
              <Link
                href="/sign-up-login-screen"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 bg-saffron-gradient text-white text-sm font-bold px-5 py-3 rounded-xl w-full"
              >
                <Sparkles size={15} />
                Start Your Journey
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}