'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronLeft, Flame } from 'lucide-react';
import ProgressBar from '@/components/ui/ProgressBar';
import Badge from '@/components/ui/Badge';
import Image from 'next/image';

export default function AdventureWorldHeader() {
  return (
    <div className="relative rounded-2xl overflow-hidden bg-forest-gradient p-6 shadow-warm-lg">
      {/* Background forest image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1448375240586-882707db888b?w=1200&q=70')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.15,
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-forest/90 to-forest/60" />

      {/* Mandala right */}
      <div className="absolute right-0 top-0 w-56 h-56 opacity-10">
        <svg viewBox="0 0 200 200" className="w-full h-full text-gold">
          <circle cx="100" cy="100" r="85" fill="none" stroke="currentColor" strokeWidth="0.8" />
          <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="0.5" />
          {[0,45,90,135,180,225,270,315]?.map((angle, i) => (
            <line key={`adv-mandala-${i}`} x1="100" y1="15" x2="100" y2="185" stroke="currentColor" strokeWidth="0.5" transform={`rotate(${angle} 100 100)`} />
          ))}
        </svg>
      </div>

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <Link
            href="/knowledge-worlds-hub"
            className="flex items-center gap-1.5 text-white/60 hover:text-white text-xs font-semibold transition-colors"
          >
            <ChevronLeft size={14} />
            All Worlds
          </Link>
          <span className="text-white/30 text-xs">/</span>
          <span className="text-white/80 text-xs font-semibold">Forest of Ayurveda</span>
        </div>

        <div className="flex flex-wrap items-start justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-4xl">🌿</span>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h1 className="text-2xl font-extrabold text-white">Forest of Ayurveda</h1>
                  <Badge variant="saffron" size="sm">In Progress</Badge>
                </div>
                <p className="text-white/50 text-sm italic">आयुर्वेद वन — Explorer Level</p>
              </div>
            </div>
            <p className="text-white/60 text-sm max-w-lg leading-relaxed">
              Ancient healing wisdom lives in every leaf and root of this forest. Master the Tridosha, learn Dinacharya, and earn your Vaidya badge.
            </p>
          </div>

          <div className="flex flex-col gap-2 min-w-[200px]">
            <div className="flex items-center justify-between">
              <span className="text-white/60 text-xs font-semibold">World Progress</span>
              <span className="text-white font-bold text-sm font-tabular">4/8 Quests</span>
            </div>
            <ProgressBar value={50} variant="gold" size="lg" />
            <div className="flex items-center justify-between mt-1">
              <div className="flex items-center gap-1.5">
                <Flame size={13} className="text-primary" />
                <span className="text-white/70 text-xs font-bold font-tabular">480 XP earned</span>
              </div>
              <span className="text-gold text-xs font-bold">Explorer V</span>
            </div>
          </div>
        </div>

        {/* Game Screenshot */}
        <div className="mt-5 rounded-xl overflow-hidden border border-white/20 shadow-lg">
          <Image
            src="/assets/images/image-1788676994483.png"
            alt="Forest of Ayurveda game screenshot"
            width={1200}
            height={675}
            className="w-full object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
}