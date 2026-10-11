import React from 'react';
import { Flame, Star, Trophy, Zap, Target, BookOpen } from 'lucide-react';
import ProgressBar from '@/components/ui/ProgressBar';
import Icon from '@/components/ui/AppIcon';


const stats = [
  {
    id: 'stat-xp',
    icon: Zap,
    iconColor: 'text-primary',
    iconBg: 'bg-primary/10',
    label: 'Total XP',
    value: '1,240',
    sub: '260 to Level 6',
    progress: 82,
    progressVariant: 'saffron' as const,
  },
  {
    id: 'stat-streak',
    icon: Flame,
    iconColor: 'text-orange-500',
    iconBg: 'bg-orange-50',
    label: 'Day Streak',
    value: '12 days',
    sub: 'Personal best: 18',
    progress: 67,
    progressVariant: 'saffron' as const,
  },
  {
    id: 'stat-badges',
    icon: Star,
    iconColor: 'text-gold',
    iconBg: 'bg-amber-50',
    label: 'Badges Earned',
    value: '7 / 24',
    sub: '3 new this week',
    progress: 29,
    progressVariant: 'gold' as const,
  },
  {
    id: 'stat-worlds',
    icon: Trophy,
    iconColor: 'text-secondary',
    iconBg: 'bg-secondary/10',
    label: 'Worlds Explored',
    value: '2 / 6',
    sub: '4 worlds locked',
    progress: 33,
    progressVariant: 'forest' as const,
  },
  {
    id: 'stat-quests',
    icon: Target,
    iconColor: 'text-violet-600',
    iconBg: 'bg-violet-50',
    label: 'Quests Completed',
    value: '14 / 38',
    sub: '2 active now',
    progress: 37,
    progressVariant: 'indigo' as const,
  },
  {
    id: 'stat-level',
    icon: BookOpen,
    iconColor: 'text-indigo-deep',
    iconBg: 'bg-indigo-deep/10',
    label: 'Current Level',
    value: 'Explorer V',
    sub: 'Ayurveda path',
    progress: 82,
    progressVariant: 'indigo' as const,
  },
];

export default function LearnerStatsBar() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
      {stats.map((s) => {
        const Icon = s.icon;
        return (
          <div key={s.id} className="bg-card rounded-2xl border border-border p-4 shadow-warm hover:shadow-warm-lg transition-all duration-200">
            <div className={`w-9 h-9 rounded-xl ${s.iconBg} flex items-center justify-center mb-3`}>
              <Icon size={18} className={s.iconColor} />
            </div>
            <div className="text-xl font-extrabold text-foreground font-tabular mb-0.5">{s.value}</div>
            <div className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wide mb-2">{s.label}</div>
            <ProgressBar value={s.progress} size="sm" variant={s.progressVariant} />
            <p className="text-[10px] text-muted-foreground mt-1.5">{s.sub}</p>
          </div>
        );
      })}
    </div>
  );
}