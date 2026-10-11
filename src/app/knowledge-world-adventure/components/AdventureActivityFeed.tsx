import React from 'react';
import { Zap } from 'lucide-react';

const activities = [
  { id: 'act-001', emoji: '✅', text: 'Completed "Dinacharya — The Daily Rhythm"', xp: '+80 XP', time: '2h ago', color: 'text-emerald-600' },
  { id: 'act-002', emoji: '🏅', text: 'Earned Dosha Seeker badge', xp: '', time: '5h ago', color: 'text-gold' },
  { id: 'act-003', emoji: '⚡', text: 'Level up! Explorer V unlocked', xp: '', time: 'Yesterday', color: 'text-primary' },
  { id: 'act-004', emoji: '✅', text: 'Completed "Ashwagandha Grove"', xp: '+70 XP', time: 'Yesterday', color: 'text-emerald-600' },
  { id: 'act-005', emoji: '🔥', text: '10-day streak milestone reached', xp: '+25 XP', time: '2d ago', color: 'text-orange-500' },
];

export default function AdventureActivityFeed() {
  return (
    <div className="bg-card rounded-2xl border border-border shadow-warm p-5">
      <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-4">Recent Activity</p>
      <div className="space-y-3">
        {activities?.map((a) => (
          <div key={a?.id} className="flex items-start gap-3">
            <span className="text-base flex-shrink-0 mt-0.5">{a?.emoji}</span>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-foreground leading-snug">{a?.text}</p>
              <p className="text-[10px] text-muted-foreground mt-0.5">{a?.time}</p>
            </div>
            {a?.xp && (
              <div className="flex items-center gap-0.5 flex-shrink-0">
                <Zap size={10} className="text-primary" />
                <span className={`text-[10px] font-bold font-tabular ${a?.color}`}>{a?.xp}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}