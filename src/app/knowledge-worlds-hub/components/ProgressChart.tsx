'use client';

import React from 'react';
import { RadialBarChart, RadialBar, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { name: 'Ayurveda', value: 50, fill: '#2D6A4F' },
  { name: 'Yoga', value: 0, fill: '#7C3AED' },
  { name: 'Stories', value: 0, fill: '#D97706' },
  { name: 'Astronomy', value: 0, fill: '#4338CA' },
  { name: 'Ecology', value: 0, fill: '#0D9488' },
  { name: 'Arts', value: 0, fill: '#E11D48' },
];

export default function ProgressChart() {
  return (
    <ResponsiveContainer width="100%" height={180}>
      <RadialBarChart cx="50%" cy="50%" innerRadius="30%" outerRadius="90%" data={data} startAngle={90} endAngle={-270}>
        <RadialBar dataKey="value" cornerRadius={4} background={{ fill: 'var(--muted)' }} />
        <Tooltip
          content={({ active, payload }) => {
            if (active && payload && payload?.length) {
              return (
                <div className="bg-card border border-border rounded-xl px-3 py-2 shadow-warm text-xs">
                  <p className="font-bold text-foreground">{payload?.[0]?.payload?.name}</p>
                  <p className="text-muted-foreground">{payload?.[0]?.value}% complete</p>
                </div>
              );
            }
            return null;
          }}
        />
      </RadialBarChart>
    </ResponsiveContainer>
  );
}