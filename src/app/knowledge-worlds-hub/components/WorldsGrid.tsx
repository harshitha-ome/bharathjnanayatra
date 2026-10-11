'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Badge from '@/components/ui/Badge';
import ProgressBar from '@/components/ui/ProgressBar';
import { Lock, ChevronRight, Star, Target } from 'lucide-react';

type WorldStatus = 'in-progress' | 'available' | 'locked' | 'completed';
type WorldDifficulty = 'Beginner' | 'Explorer' | 'Master';

interface World {
  id: string;
  emoji: string;
  name: string;
  sanskrit: string;
  domain: string;
  description: string;
  status: WorldStatus;
  level: WorldDifficulty;
  xpReward: number;
  questCount: number;
  questsCompleted: number;
  badgesTotal: number;
  badgesEarned: number;
  bgFrom: string;
  bgTo: string;
  borderColor: string;
  tagBg: string;
  tagText: string;
  sampleQuests: string[];
  badgeLabel: string;
}

const worlds: World[] = [
  {
    id: 'world-ayurveda',
    emoji: '🌿',
    name: 'Forest of Ayurveda',
    sanskrit: 'आयुर्वेद वन',
    domain: 'Health, Routines & Nutrition',
    description: 'Venture into the ancient healing forest. Identify medicinal plants, learn the secrets of Tridosha, and build daily Dinacharya routines that transform your health.',
    status: 'in-progress',
    level: 'Explorer',
    xpReward: 480,
    questCount: 8,
    questsCompleted: 4,
    badgesTotal: 4,
    badgesEarned: 2,
    bgFrom: '#f0fdf4',
    bgTo: '#dcfce7',
    borderColor: '#bbf7d0',
    tagBg: 'bg-emerald-100',
    tagText: 'text-emerald-700',
    sampleQuests: ['Identify 5 medicinal herbs', 'Build your Dinacharya routine', 'The Tridosha mystery'],
    badgeLabel: 'Vaidya',
  },
  {
    id: 'world-yoga',
    emoji: '🧘',
    name: 'Valley of Yoga',
    sanskrit: 'योग घाटी',
    domain: 'Mindfulness & Emotional Regulation',
    description: 'Descend into the serene valley where ancient Rishis mastered the mind. Practice Pranayama, navigate emotional storms, and earn the Yogi\'s wisdom.',
    status: 'available',
    level: 'Beginner',
    xpReward: 360,
    questCount: 7,
    questsCompleted: 0,
    badgesTotal: 4,
    badgesEarned: 0,
    bgFrom: '#faf5ff',
    bgTo: '#ede9fe',
    borderColor: '#ddd6fe',
    tagBg: 'bg-violet-100',
    tagText: 'text-violet-700',
    sampleQuests: ['The Breath of Calm', 'Emotions as Waves', 'Seven Chakras quest'],
    badgeLabel: 'Yogi',
  },
  {
    id: 'world-stories',
    emoji: '📖',
    name: 'Kingdom of Stories',
    sanskrit: 'कथा राज्य',
    domain: 'Panchatantra & Values',
    description: 'Enter the living kingdom where Panchatantra animals speak and moral choices have real consequences. Every story you complete unlocks deeper wisdom.',
    status: 'available',
    level: 'Beginner',
    xpReward: 320,
    questCount: 10,
    questsCompleted: 0,
    badgesTotal: 5,
    badgesEarned: 0,
    bgFrom: '#fffbeb',
    bgTo: '#fef3c7',
    borderColor: '#fde68a',
    tagBg: 'bg-amber-100',
    tagText: 'text-amber-700',
    sampleQuests: ['The Crow and the Pitcher', 'The Lion\'s Council', 'Truth or Clever?'],
    badgeLabel: 'Storyteller',
  },
  {
    id: 'world-astronomy',
    emoji: '⭐',
    name: 'Observatory of Aryabhata',
    sanskrit: 'आर्यभट वेधशाला',
    domain: 'Astronomy & Mathematics',
    description: 'Climb to the great observatory where Aryabhata mapped the cosmos. Solve star puzzles, calculate planetary movements, and unlock the mathematics of the universe.',
    status: 'locked',
    level: 'Explorer',
    xpReward: 520,
    questCount: 9,
    questsCompleted: 0,
    badgesTotal: 4,
    badgesEarned: 0,
    bgFrom: '#eef2ff',
    bgTo: '#e0e7ff',
    borderColor: '#c7d2fe',
    tagBg: 'bg-indigo-100',
    tagText: 'text-indigo-700',
    sampleQuests: ['Map the Nakshatras', 'Zero: The Infinite Concept', 'Solar eclipse prediction'],
    badgeLabel: 'Astronomer',
  },
  {
    id: 'world-ecology',
    emoji: '🌳',
    name: 'Garden of Ecology',
    sanskrit: 'पारिस्थितिकी उद्यान',
    domain: 'Nature & Environment',
    description: 'Walk through India\'s sacred groves and river systems. Discover the Pancha Bhuta, identify native species, and become a guardian of the natural world.',
    status: 'locked',
    level: 'Beginner',
    xpReward: 300,
    questCount: 6,
    questsCompleted: 0,
    badgesTotal: 3,
    badgesEarned: 0,
    bgFrom: '#f0fdfa',
    bgTo: '#ccfbf1',
    borderColor: '#99f6e4',
    tagBg: 'bg-teal-100',
    tagText: 'text-teal-700',
    sampleQuests: ['Sacred grove identification', 'Pancha Bhuta elements', 'River guardians mission'],
    badgeLabel: 'Naturalist',
  },
  {
    id: 'world-arts',
    emoji: '🎨',
    name: 'Temple of Arts',
    sanskrit: 'कला मंदिर',
    domain: 'Music, Dance & Philosophy',
    description: 'Enter the ancient temple where every pillar tells a story. Learn the mathematics of ragas, the grammar of dance, and the questions that shaped Indian philosophy.',
    status: 'locked',
    level: 'Master',
    xpReward: 600,
    questCount: 11,
    questsCompleted: 0,
    badgesTotal: 5,
    badgesEarned: 0,
    bgFrom: '#fff1f2',
    bgTo: '#ffe4e6',
    borderColor: '#fecdd3',
    tagBg: 'bg-rose-100',
    tagText: 'text-rose-700',
    sampleQuests: ['Raga of the morning', 'Bharatanatyam mudras', 'The Nastika debate'],
    badgeLabel: 'Artist',
  },
];

const statusConfig: Record<WorldStatus, { label: string; badge: React.ReactNode }> = {
  'in-progress': { label: 'In Progress', badge: <Badge variant="saffron" size="sm">In Progress</Badge> },
  'available': { label: 'Available', badge: <Badge variant="forest" size="sm">Available</Badge> },
  'locked': { label: 'Locked', badge: <Badge variant="muted" size="sm">Locked</Badge> },
  'completed': { label: 'Completed', badge: <Badge variant="success" size="sm">Completed</Badge> },
};

const difficultyConfig: Record<WorldDifficulty, string> = {
  Beginner: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  Explorer: 'bg-amber-50 text-amber-700 border-amber-200',
  Master: 'bg-red-50 text-red-600 border-red-200',
};

export default function WorldsGrid() {
  const [filter, setFilter] = useState<'all' | WorldStatus>('all');

  const filtered = filter === 'all' ? worlds : worlds.filter(w => w.status === filter);

  return (
    <div>
      {/* Filter tabs */}
      <div className="flex items-center gap-2 mb-6 flex-wrap">
        <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest mr-2">Filter:</span>
        {(['all', 'in-progress', 'available', 'locked'] as const).map((f) => (
          <button
            key={`filter-${f}`}
            onClick={() => setFilter(f)}
            className={`px-4 py-1.5 rounded-full text-xs font-bold border transition-all duration-150 active:scale-95 capitalize ${
              filter === f
                ? 'bg-primary text-white border-primary' :'bg-card text-muted-foreground border-border hover:border-primary/40 hover:text-primary'
            }`}
          >
            {f === 'all' ? 'All Worlds' : f.replace('-', ' ')}
          </button>
        ))}
        <span className="ml-auto text-xs text-muted-foreground font-medium">{filtered.length} worlds</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {filtered.map((world) => {
          const isLocked = world.status === 'locked';
          const pct = world.questCount > 0 ? Math.round((world.questsCompleted / world.questCount) * 100) : 0;

          return (
            <div
              key={world.id}
              className={`relative rounded-2xl border overflow-hidden transition-all duration-250 ${
                isLocked
                  ? 'opacity-70 cursor-not-allowed' :'world-card-glow cursor-pointer hover:-translate-y-0.5 active:scale-[0.98]'
              }`}
              style={{ borderColor: world.borderColor, background: `linear-gradient(135deg, ${world.bgFrom}, ${world.bgTo})` }}
            >
              {/* Lock overlay */}
              {isLocked && (
                <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px] z-10 flex items-center justify-center rounded-2xl">
                  <div className="flex flex-col items-center gap-2 bg-white/80 rounded-xl px-6 py-4 shadow-warm border border-border">
                    <Lock size={24} className="text-muted-foreground" />
                    <span className="text-xs font-bold text-muted-foreground">Complete 2 worlds to unlock</span>
                  </div>
                </div>
              )}

              <div className="p-5 relative z-0">
                {/* Header */}
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">{world.emoji}</div>
                    <div>
                      <h3 className="font-extrabold text-foreground text-base leading-tight">{world.name}</h3>
                      <p className="text-[11px] text-muted-foreground italic">{world.sanskrit}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    {statusConfig[world.status].badge}
                    <span className={`text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full border ${difficultyConfig[world.level]}`}>
                      {world.level}
                    </span>
                  </div>
                </div>

                {/* Domain */}
                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-2">{world.domain}</p>

                {/* Description */}
                <p className="text-xs text-foreground/70 leading-relaxed mb-4 line-clamp-2">{world.description}</p>

                {/* Stats row */}
                <div className="flex items-center gap-4 mb-3">
                  <div className="flex items-center gap-1.5">
                    <Target size={12} className="text-muted-foreground" />
                    <span className="text-xs font-bold text-foreground font-tabular">{world.questsCompleted}/{world.questCount}</span>
                    <span className="text-[10px] text-muted-foreground">quests</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Star size={12} className="text-gold fill-gold" />
                    <span className="text-xs font-bold text-foreground font-tabular">{world.badgesEarned}/{world.badgesTotal}</span>
                    <span className="text-[10px] text-muted-foreground">badges</span>
                  </div>
                  <div className="ml-auto flex items-center gap-1">
                    <span className="text-[10px] font-bold text-muted-foreground">+{world.xpReward}</span>
                    <span className="text-[10px] text-primary font-bold">XP</span>
                  </div>
                </div>

                {/* Progress */}
                <div className="mb-4">
                  <ProgressBar value={pct} size="sm" variant={world.status === 'in-progress' ? 'saffron' : 'forest'} label={`${pct}% complete`} />
                </div>

                {/* Sample quests */}
                <div className="mb-4">
                  <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-2">Sample Quests</p>
                  <div className="flex flex-wrap gap-1.5">
                    {world.sampleQuests.slice(0, 2).map((q) => (
                      <span key={`quest-chip-${world.id}-${q.slice(0,8)}`} className="text-[10px] bg-white/70 border border-border text-foreground/60 px-2 py-0.5 rounded-full font-medium">
                        {q}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                {!isLocked && (
                  <Link
                    href="/knowledge-world-adventure"
                    className="flex items-center justify-between w-full bg-indigo-deep text-white text-xs font-bold px-4 py-2.5 rounded-xl hover:bg-indigo-deep/90 active:scale-95 transition-all duration-150"
                  >
                    <span>
                      {world.status === 'in-progress' ? 'Continue Quest' : 'Enter World'}
                    </span>
                    <ChevronRight size={14} />
                  </Link>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}