'use client';

import React from 'react';
import dynamic from 'next/dynamic';

const ProgressChart = dynamic(() => import('./ProgressChart'), { ssr: false });

export default function ProgressOverview() {
  return (
    <div className="bg-card rounded-2xl border border-border shadow-warm p-5">
      <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1">Journey Overview</p>
      <h3 className="font-extrabold text-foreground text-base mb-4">World Completion</h3>
      <ProgressChart />

      <div className="mt-4 space-y-2">
        {[
          { id: 'prog-ayurveda', label: 'Forest of Ayurveda', pct: 50, color: 'bg-emerald-400' },
          { id: 'prog-yoga', label: 'Valley of Yoga', pct: 0, color: 'bg-violet-400' },
          { id: 'prog-stories', label: 'Kingdom of Stories', pct: 0, color: 'bg-amber-400' },
          { id: 'prog-astro', label: 'Observatory of Aryabhata', pct: 0, color: 'bg-indigo-400' },
        ]?.map((item) => (
          <div key={item?.id} className="flex items-center gap-3">
            <div className={`w-2 h-2 rounded-full ${item?.color}`} />
            <span className="text-xs text-foreground/70 flex-1 truncate">{item?.label}</span>
            <span className="text-xs font-bold text-foreground font-tabular">{item?.pct}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}