import React from 'react';
import Link from 'next/link';
import ProgressBar from '@/components/ui/ProgressBar';
import { ChevronRight, Star, Zap } from 'lucide-react';

const missions = [
  { id: 'mission-herbs', label: 'Identify 5 medicinal herbs', xp: 80, done: true },
  { id: 'mission-dosha', label: 'Learn your Dosha type', xp: 60, done: true },
  { id: 'mission-routine', label: 'Build Dinacharya routine', xp: 100, done: false },
  { id: 'mission-plants', label: 'The healing plant market', xp: 90, done: false },
];

const badges = [
  { id: 'badge-herb', emoji: '🌿', label: 'Herb Finder', earned: true },
  { id: 'badge-dosha', emoji: '⚖️', label: 'Dosha Seeker', earned: true },
  { id: 'badge-vaidya', emoji: '🏥', label: 'Junior Vaidya', earned: false },
  { id: 'badge-master', emoji: '👑', label: 'Forest Master', earned: false },
];

export default function FeaturedWorldSpotlight() {
  return (
    <div className="bg-card rounded-2xl border border-border shadow-warm overflow-hidden">
      {/* Header */}
      <div className="bg-forest-gradient p-5">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-3xl">🌿</span>
          <div>
            <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest">Featured World</p>
            <h3 className="text-white font-extrabold text-lg leading-tight">Forest of Ayurveda</h3>
            <p className="text-white/50 text-xs italic">आयुर्वेद वन</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex-1">
            <ProgressBar value={50} size="md" variant="gold" />
          </div>
          <span className="text-white font-bold text-sm font-tabular">50%</span>
        </div>
        <p className="text-white/50 text-xs mt-1">4 of 8 quests completed</p>
      </div>

      {/* Missions */}
      <div className="p-5">
        <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-3">Active Missions</p>
        <div className="space-y-2 mb-5">
          {missions?.map((m) => (
            <div
              key={m?.id}
              className={`flex items-center gap-3 p-2.5 rounded-xl border transition-colors ${
                m?.done
                  ? 'bg-emerald-50 border-emerald-200 opacity-70' :'bg-muted border-border hover:border-primary/30'
              }`}
            >
              <span className="text-base">{m?.done ? '✅' : '🔸'}</span>
              <span className={`text-xs flex-1 font-medium ${m?.done ? 'line-through text-muted-foreground' : 'text-foreground'}`}>
                {m?.label}
              </span>
              <div className="flex items-center gap-1">
                <Zap size={10} className="text-primary" />
                <span className="text-[10px] font-bold text-primary font-tabular">+{m?.xp}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Badges */}
        <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-3">Vaidya Badges</p>
        <div className="grid grid-cols-4 gap-2 mb-5">
          {badges?.map((b) => (
            <div
              key={b?.id}
              className={`flex flex-col items-center gap-1 p-2 rounded-xl border ${
                b?.earned
                  ? 'bg-amber-50 border-amber-200' :'bg-muted border-border opacity-50'
              }`}
            >
              <span className="text-xl">{b?.emoji}</span>
              <span className="text-[9px] font-bold text-center text-muted-foreground leading-tight">{b?.label}</span>
              {b?.earned && <Star size={8} className="text-gold fill-gold" />}
            </div>
          ))}
        </div>

        <Link
          href="/knowledge-world-adventure"
          className="flex items-center justify-center gap-2 w-full bg-saffron-gradient text-white font-bold text-sm py-3 rounded-xl hover:opacity-90 active:scale-95 transition-all duration-150"
        >
          Continue Adventure
          <ChevronRight size={16} />
        </Link>
      </div>
    </div>
  );
}