'use client';

import React, { useState } from 'react';
import { Lock, CheckCircle, Star, Zap } from 'lucide-react';
import { toast } from 'sonner';

type QuestStatus = 'completed' | 'active' | 'available' | 'locked';

interface Quest {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  status: QuestStatus;
  xp: number;
  duration: string;
  badge?: string;
}

const quests: Quest[] = [
  {
    id: 'quest-001',
    number: 1,
    title: 'Enter the Forest',
    subtitle: 'Orientation & Dosha introduction',
    status: 'completed',
    xp: 40,
    duration: '8 min',
    badge: '🌱',
  },
  {
    id: 'quest-002',
    number: 2,
    title: 'The Three Doshas',
    subtitle: 'Vata, Pitta, Kapha — discover your type',
    status: 'completed',
    xp: 60,
    duration: '12 min',
    badge: '⚖️',
  },
  {
    id: 'quest-003',
    number: 3,
    title: 'Ashwagandha Grove',
    subtitle: 'Meet the ancient adaptogen',
    status: 'completed',
    xp: 70,
    duration: '10 min',
    badge: '🌿',
  },
  {
    id: 'quest-004',
    number: 4,
    title: 'Dinacharya — The Daily Rhythm',
    subtitle: 'Build a morning routine with Guru Charaka',
    status: 'completed',
    xp: 80,
    duration: '15 min',
    badge: '☀️',
  },
  {
    id: 'quest-005',
    number: 5,
    title: 'The Healing Plant Market',
    subtitle: 'Identify & collect from Aushadhi Bazaar',
    status: 'active',
    xp: 90,
    duration: '15 min',
  },
  {
    id: 'quest-006',
    number: 6,
    title: 'Nutrition & Rasa',
    subtitle: 'The six tastes and seasonal eating',
    status: 'available',
    xp: 85,
    duration: '12 min',
  },
  {
    id: 'quest-007',
    number: 7,
    title: 'The Pancha Karma Path',
    subtitle: 'Ancient cleansing and rejuvenation',
    status: 'locked',
    xp: 100,
    duration: '18 min',
  },
  {
    id: 'quest-008',
    number: 8,
    title: 'Vaidya Graduation',
    subtitle: 'Final challenge — earn your Vaidya badge',
    status: 'locked',
    xp: 150,
    duration: '20 min',
    badge: '🏆',
  },
];

const statusStyle: Record<QuestStatus, string> = {
  completed: 'bg-emerald-50 border-emerald-300 text-emerald-700',
  active: 'bg-primary/10 border-primary text-primary quest-node-pulse',
  available: 'bg-card border-border text-foreground hover:border-primary/40',
  locked: 'bg-muted border-border text-muted-foreground opacity-60',
};

const nodeStyle: Record<QuestStatus, string> = {
  completed: 'bg-emerald-500 text-white',
  active: 'bg-primary text-white',
  available: 'bg-indigo-deep text-white',
  locked: 'bg-muted-foreground/30 text-muted-foreground',
};

export default function QuestMapSection() {
  const [selected, setSelected] = useState<string | null>(null);

  const handleQuestClick = (quest: Quest) => {
    if (quest.status === 'locked') {
      toast.error('Complete previous quests to unlock this one.');
      return;
    }
    setSelected(selected === quest.id ? null : quest.id);
    if (quest.status === 'available') {
      toast.success(`🗺️ "${quest.title}" is ready to start! Enter the quest to begin.`);
    }
  };

  return (
    <div className="bg-card rounded-2xl border border-border shadow-warm p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1">Quest Map</p>
          <h3 className="font-extrabold text-foreground text-lg">Forest of Ayurveda</h3>
        </div>
        <div className="flex items-center gap-2 bg-muted rounded-xl px-3 py-2">
          <CheckCircle size={14} className="text-emerald-500" />
          <span className="text-sm font-bold text-foreground font-tabular">4/8</span>
          <span className="text-xs text-muted-foreground">complete</span>
        </div>
      </div>

      {/* Map legend */}
      <div className="flex flex-wrap gap-3 mb-5">
        {[
          { id: 'legend-done', dot: 'bg-emerald-500', label: 'Completed' },
          { id: 'legend-active', dot: 'bg-primary', label: 'Active' },
          { id: 'legend-avail', dot: 'bg-indigo-deep', label: 'Available' },
          { id: 'legend-locked', dot: 'bg-muted-foreground/30', label: 'Locked' },
        ].map((l) => (
          <div key={l.id} className="flex items-center gap-1.5">
            <div className={`w-2.5 h-2.5 rounded-full ${l.dot}`} />
            <span className="text-[11px] text-muted-foreground font-medium">{l.label}</span>
          </div>
        ))}
      </div>

      {/* Quest nodes */}
      <div className="relative">
        {/* Connecting line */}
        <div className="absolute left-[19px] top-6 bottom-6 w-0.5 bg-gradient-to-b from-emerald-300 via-border to-border z-0" />

        <div className="relative z-10 space-y-3">
          {quests.map((quest) => (
            <div key={quest.id}>
              <button
                onClick={() => handleQuestClick(quest)}
                className={`w-full flex items-center gap-4 p-3 rounded-xl border transition-all duration-200 text-left active:scale-[0.99] ${statusStyle[quest.status]}`}
              >
                {/* Node circle */}
                <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 ${nodeStyle[quest.status]}`}>
                  {quest.status === 'completed' ? (
                    <CheckCircle size={16} />
                  ) : quest.status === 'locked' ? (
                    <Lock size={14} />
                  ) : (
                    quest.number
                  )}
                </div>

                {/* Quest info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className={`text-sm font-bold truncate ${quest.status === 'locked' ? 'text-muted-foreground' : 'text-foreground'}`}>
                      {quest.title}
                    </span>
                    {quest.badge && quest.status === 'completed' && (
                      <span className="text-base">{quest.badge}</span>
                    )}
                    {quest.status === 'active' && (
                      <span className="text-[10px] bg-primary/10 text-primary font-bold px-2 py-0.5 rounded-full border border-primary/20">NOW</span>
                    )}
                  </div>
                  <p className="text-[11px] text-muted-foreground truncate">{quest.subtitle}</p>
                </div>

                {/* XP + time */}
                <div className="flex flex-col items-end gap-1 flex-shrink-0">
                  <div className="flex items-center gap-1">
                    <Zap size={11} className="text-primary" />
                    <span className="text-xs font-bold text-primary font-tabular">+{quest.xp}</span>
                  </div>
                  <span className="text-[10px] text-muted-foreground">{quest.duration}</span>
                </div>
              </button>

              {/* Expanded detail */}
              {selected === quest.id && quest.status !== 'locked' && (
                <div className="ml-13 mt-1 mb-1 bg-muted/50 rounded-xl border border-border p-3 animate-fade-in-scale">
                  <p className="text-xs text-muted-foreground leading-relaxed mb-2">{quest.subtitle}</p>
                  <div className="flex items-center gap-2">
                    <Star size={12} className="text-gold fill-gold" />
                    <span className="text-xs font-bold text-foreground">+{quest.xp} XP on completion</span>
                    {quest.badge && <span className="text-base">{quest.badge}</span>}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}