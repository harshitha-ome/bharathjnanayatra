import React from 'react';

const steps = [
  {
    id: 'step-choose',
    step: '01',
    emoji: '🗺️',
    title: 'Choose Your World',
    description: 'Pick from immersive Indian Knowledge worlds. Each is a unique adventure domain — from Ayurveda forests to astronomy observatories.',
    color: 'bg-primary/10 border-primary/20',
    stepColor: 'text-primary',
  },
  {
    id: 'step-quest',
    step: '02',
    emoji: '⚔️',
    title: 'Complete Quests',
    description: 'Embark on story-driven missions. Solve puzzles, make moral choices, identify plants, map stars — every quest teaches real knowledge.',
    color: 'bg-secondary/10 border-secondary/20',
    stepColor: 'text-secondary',
  },
  {
    id: 'step-level',
    step: '03',
    emoji: '🏆',
    title: 'Earn Badges & Level Up',
    description: 'Gain XP points, unlock domain badges (Vaidya, Yogi, Astronomer), and progress from Beginner to Explorer to Master.',
    color: 'bg-accent/20 border-accent/30',
    stepColor: 'text-gold',
  },
];

export default function HowItWorks() {
  return (
    <section className="w-full py-20 px-4 lg:px-8 xl:px-10 2xl:px-16 bg-muted/50">
      <div className="max-w-screen-2xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block bg-secondary/10 text-secondary text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 border border-secondary/20">
            How It Works
          </span>
          <h2 className="text-hero-md text-indigo-deep mb-3">Your Journey in 3 Steps</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">From curious learner to knowledge master — the path is clear, adventurous, and deeply rooted in India&apos;s wisdom.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps?.map((s, i) => (
            <div key={s?.id} className={`relative rounded-2xl border ${s?.color} p-8 bg-card shadow-warm`}>
              {i < steps?.length - 1 && (
                <div className="hidden md:block absolute top-12 -right-4 z-10 text-2xl text-muted-foreground/30">→</div>
              )}
              <div className="text-5xl mb-4">{s?.emoji}</div>
              <div className={`text-xs font-black uppercase tracking-widest mb-2 ${s?.stepColor}`}>Step {s?.step}</div>
              <h3 className="text-xl font-extrabold text-foreground mb-3">{s?.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s?.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}