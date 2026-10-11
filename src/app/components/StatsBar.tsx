import React from 'react';

const stats = [
  { value: '12%', label: 'Teacher training programs cover IKS', emoji: '📚' },
  { value: '<5%', label: 'Of school curricula reflect it', emoji: '🏫' },
  { value: '68%', label: 'Of students still want to learn it', emoji: '🌟' },
  { value: '44.5%', label: 'Parents see weak emotional management', emoji: '💛' },
];

export default function StatsBar() {
  return (
    <section className="w-full bg-indigo-deep py-8 px-4 lg:px-8 xl:px-10 2xl:px-16">
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats?.map((s) => (
            <div key={`stat-${s?.value}`} className="text-center">
              <div className="text-2xl mb-1">{s?.emoji}</div>
              <div className="text-3xl font-extrabold text-gold font-tabular mb-1">{s?.value}</div>
              <div className="text-xs text-white/60 font-medium leading-snug">{s?.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}