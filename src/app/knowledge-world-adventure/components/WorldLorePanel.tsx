import React from 'react';

export default function WorldLorePanel() {
  return (
    <div className="bg-indigo-deep rounded-2xl border border-white/10 shadow-warm p-5">
      <p className="text-xs font-bold text-primary uppercase tracking-widest mb-3">World Lore</p>
      <div className="flex items-start gap-3 mb-3">
        <span className="text-2xl">📜</span>
        <div>
          <p className="text-white font-bold text-sm mb-1">Charaka Samhita</p>
          <p className="text-white/50 text-[10px] italic">~600 BCE — Ancient Ayurvedic text</p>
        </div>
      </div>
      <p className="text-white/60 text-xs leading-relaxed mb-4">
        &ldquo;The aim of Ayurveda is to maintain the health of the healthy and cure the diseases of the sick.&rdquo; — Charaka Samhita, Sutrasthana 30.26
      </p>
      <div className="mandala-divider mb-4" style={{ borderColor: 'rgba(255,255,255,0.1)' }} />
      <div className="space-y-2">
        {[
          { id: 'lore-vata', term: 'Vata', meaning: 'Air + Space — governs movement and communication' },
          { id: 'lore-pitta', term: 'Pitta', meaning: 'Fire + Water — governs transformation and metabolism' },
          { id: 'lore-kapha', term: 'Kapha', meaning: 'Earth + Water — governs structure and stability' },
        ]?.map((l) => (
          <div key={l?.id} className="flex items-start gap-2">
            <span className="text-primary font-bold text-xs min-w-[40px]">{l?.term}</span>
            <span className="text-white/50 text-[10px] leading-snug">{l?.meaning}</span>
          </div>
        ))}
      </div>
    </div>
  );
}