'use client';

import React, { useState } from 'react';
import { Zap, Clock, Target, ChevronRight, CheckCircle, Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import Badge from '@/components/ui/Badge';

const objectives = [
  { id: 'obj-1', text: 'Visit the Ashwagandha grove and observe its root structure', done: true },
  { id: 'obj-2', text: 'Collect 3 leaf samples from different medicinal plants', done: true },
  { id: 'obj-3', text: 'Identify the Dosha properties of each plant you collected', done: false },
  { id: 'obj-4', text: 'Prepare a simple herbal remedy for Vata imbalance', done: false },
];

export default function ActiveQuestPanel() {
  const [starting, setStarting] = useState(false);

  const handleBeginQuest = async () => {
    setStarting(true);
    // BACKEND: POST /api/quests/quest-003/start { learnerId: 'learner-001' }
    await new Promise(r => setTimeout(r, 1400));
    setStarting(false);
    toast?.success('🌿 Quest resumed! Collect your plant samples from the healing grove.');
  };

  return (
    <div className="bg-card rounded-2xl border border-border shadow-warm overflow-hidden">
      {/* Quest banner */}
      <div
        className="relative h-40 overflow-hidden"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=800&q=70')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-forest/80 via-forest/60 to-transparent" />
        <div className="absolute inset-0 p-5 flex flex-col justify-between">
          <div className="flex items-center gap-2">
            <Badge variant="saffron" size="sm">Active Quest</Badge>
            <Badge variant="warning" size="sm">Quest 5 of 8</Badge>
          </div>
          <div>
            <h2 className="text-white font-extrabold text-xl leading-tight">The Healing Plant Market</h2>
            <p className="text-white/60 text-xs mt-1 italic">Aushadhi Bazaar — Identify & Collect</p>
          </div>
        </div>
        <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-black/30 rounded-full px-3 py-1 backdrop-blur-sm">
          <Zap size={12} className="text-gold" />
          <span className="text-white font-bold text-xs font-tabular">+90 XP</span>
        </div>
      </div>

      {/* Quest body */}
      <div className="p-6">
        {/* Meta */}
        <div className="flex flex-wrap gap-4 mb-5">
          <div className="flex items-center gap-1.5 bg-muted rounded-full px-3 py-1.5">
            <Clock size={13} className="text-muted-foreground" />
            <span className="text-xs font-semibold text-muted-foreground">~15 min</span>
          </div>
          <div className="flex items-center gap-1.5 bg-muted rounded-full px-3 py-1.5">
            <Target size={13} className="text-muted-foreground" />
            <span className="text-xs font-semibold text-muted-foreground">4 objectives</span>
          </div>
          <div className="flex items-center gap-1.5 bg-amber-50 border border-amber-200 rounded-full px-3 py-1.5">
            <span className="text-xs font-bold text-amber-700">Explorer</span>
          </div>
        </div>

        {/* Story */}
        <div className="bg-muted/60 rounded-xl border border-border p-4 mb-5">
          <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-2">Quest Story</p>
          <p className="text-sm text-foreground/80 leading-relaxed italic">
            &ldquo;The village Vaidya, Guru Charaka, has sent you to the weekly Aushadhi Bazaar with a scroll of medicinal needs. The traders know their plants well — but can you identify them? Use your knowledge of the Tridosha to select the right herbs and prepare the remedy before sundown.&rdquo;
          </p>
          <p className="text-xs text-muted-foreground mt-2 font-medium">— Chapter 3: The Healer&apos;s Market</p>
        </div>

        {/* Objectives */}
        <div className="mb-6">
          <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-3">Quest Objectives</p>
          <div className="space-y-2.5">
            {objectives?.map((obj) => (
              <div
                key={obj?.id}
                className={`flex items-start gap-3 p-3 rounded-xl border transition-colors ${
                  obj?.done
                    ? 'bg-emerald-50 border-emerald-200' :'bg-muted/50 border-border'
                }`}
              >
                <CheckCircle
                  size={16}
                  className={`mt-0.5 flex-shrink-0 ${obj?.done ? 'text-emerald-500 fill-emerald-100' : 'text-muted-foreground'}`}
                />
                <span className={`text-sm leading-relaxed ${obj?.done ? 'line-through text-muted-foreground' : 'text-foreground'}`}>
                  {obj?.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Reward preview */}
        <div className="flex items-center gap-3 bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6">
          <span className="text-2xl">🏅</span>
          <div className="flex-1">
            <p className="text-xs font-bold text-amber-700 uppercase tracking-widest">Quest Reward</p>
            <p className="text-sm font-bold text-foreground">+90 XP + Herb Collector Badge</p>
          </div>
          <div className="flex items-center gap-1">
            <Zap size={14} className="text-primary" />
            <span className="text-primary font-extrabold text-sm font-tabular">90 XP</span>
          </div>
        </div>

        {/* CTA */}
        <button
          onClick={handleBeginQuest}
          disabled={starting}
          className="flex items-center justify-center gap-2 w-full bg-saffron-gradient text-white font-bold text-base py-4 rounded-2xl hover:opacity-90 active:scale-95 disabled:opacity-60 transition-all duration-150 min-h-[52px]"
        >
          {starting ? (
            <><Loader2 size={18} className="animate-spin" /> Entering Quest...</>
          ) : (
            <><span>Continue Quest</span><ChevronRight size={18} /></>
          )}
        </button>
      </div>
    </div>
  );
}