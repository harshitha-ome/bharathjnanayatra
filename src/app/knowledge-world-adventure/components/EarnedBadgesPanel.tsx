'use client';

import React from 'react';
import { Star, Lock } from 'lucide-react';

const badges = [
  { id: 'badge-seedling', emoji: '🌱', name: 'Forest Seedling', desc: 'Completed orientation quest', earned: true, xp: 40 },
  { id: 'badge-dosha', emoji: '⚖️', name: 'Dosha Seeker', desc: 'Identified your primary Dosha', earned: true, xp: 60 },
  { id: 'badge-herb', emoji: '🌿', name: 'Herb Finder', desc: 'Collect 5 medicinal plants', earned: false, xp: 70 },
  { id: 'badge-vaidya', emoji: '🏥', name: 'Junior Vaidya', desc: 'Complete 6 forest quests', earned: false, xp: 120 },
];

export default function EarnedBadgesPanel() {
  return (
    <div className="bg-card rounded-2xl border border-border shadow-warm p-5">
      <div className="flex items-center justify-between mb-4">
        <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Vaidya Badges</p>
        <span className="text-xs font-bold text-foreground bg-muted px-2.5 py-1 rounded-full border border-border font-tabular">2/4</span>
      </div>

      <div className="space-y-2.5">
        {badges?.map((badge) => (
          <div
            key={badge?.id}
            className={`flex items-center gap-3 p-3 rounded-xl border transition-all ${
              badge?.earned
                ? 'bg-amber-50 border-amber-200' :'bg-muted/50 border-border opacity-60'
            }`}
          >
            <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xl flex-shrink-0 ${badge?.earned ? 'badge-shine shadow-warm' : 'bg-muted'}`}>
              {badge?.earned ? badge?.emoji : <Lock size={14} className="text-muted-foreground" />}
            </div>
            <div className="flex-1 min-w-0">
              <p className={`text-xs font-bold truncate ${badge?.earned ? 'text-foreground' : 'text-muted-foreground'}`}>{badge?.name}</p>
              <p className="text-[10px] text-muted-foreground truncate">{badge?.desc}</p>
            </div>
            <div className="flex flex-col items-end gap-0.5 flex-shrink-0">
              {badge?.earned ? (
                <Star size={13} className="text-gold fill-gold" />
              ) : (
                <span className="text-[10px] text-muted-foreground font-tabular">+{badge?.xp} XP</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}