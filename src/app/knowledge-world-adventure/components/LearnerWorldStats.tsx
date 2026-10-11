import React from 'react';
import { Zap, Flame } from 'lucide-react';
import ProgressBar from '@/components/ui/ProgressBar';

export default function LearnerWorldStats() {
  return (
    <div className="bg-card rounded-2xl border border-border shadow-warm p-5">
      {/* Learner header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-full bg-forest-gradient flex items-center justify-center text-2xl border-2 border-secondary/30">
          🧒
        </div>
        <div>
          <p className="font-extrabold text-foreground text-sm">Arjun Mehta</p>
          <p className="text-xs text-muted-foreground">Explorer Level V</p>
        </div>
        <div className="ml-auto flex items-center gap-1 bg-primary/10 rounded-full px-3 py-1 border border-primary/20">
          <Flame size={12} className="text-primary" />
          <span className="text-xs font-bold text-primary font-tabular">12</span>
        </div>
      </div>

      {/* World XP */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-1">
          <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">World XP</span>
          <div className="flex items-center gap-1">
            <Zap size={11} className="text-primary" />
            <span className="text-sm font-extrabold text-foreground font-tabular">480 / 740</span>
          </div>
        </div>
        <ProgressBar value={480} max={740} size="lg" variant="saffron" />
        <p className="text-[10px] text-muted-foreground mt-1">260 XP to Explorer VI</p>
      </div>

      {/* Mini stats */}
      <div className="grid grid-cols-3 gap-2">
        {[
          { id: 'mini-quests', emoji: '⚔️', value: '4', label: 'Quests' },
          { id: 'mini-badges', emoji: '🏅', value: '2', label: 'Badges' },
          { id: 'mini-streak', emoji: '🔥', value: '12', label: 'Streak' },
        ]?.map((s) => (
          <div key={s?.id} className="bg-muted rounded-xl p-2.5 text-center border border-border">
            <div className="text-lg mb-0.5">{s?.emoji}</div>
            <div className="text-base font-extrabold text-foreground font-tabular">{s?.value}</div>
            <div className="text-[9px] font-semibold text-muted-foreground uppercase tracking-wide">{s?.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}