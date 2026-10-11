import React from 'react';

export default function WorldsHubHeader() {
  return (
    <div className="relative rounded-2xl overflow-hidden bg-indigo-gradient p-8 shadow-warm-lg">
      {/* Decorative mandala */}
      <div className="absolute right-8 top-4 opacity-10 w-48 h-48">
        <svg viewBox="0 0 200 200" className="w-full h-full text-gold">
          <circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" strokeWidth="1" />
          <circle cx="100" cy="100" r="65" fill="none" stroke="currentColor" strokeWidth="0.7" />
          <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" />
          {[0,45,90,135,180,225,270,315]?.map((angle, i) => (
            <line key={`hub-mandala-${i}`} x1="100" y1="10" x2="100" y2="190" stroke="currentColor" strokeWidth="0.5" transform={`rotate(${angle} 100 100)`} />
          ))}
          {[0,45,90,135,180,225,270,315]?.map((angle, i) => (
            <ellipse key={`hub-petal-${i}`} cx="100" cy="30" rx="8" ry="20" fill="currentColor" opacity="0.3" transform={`rotate(${angle} 100 100)`} />
          ))}
        </svg>
      </div>

      <div className="relative z-10">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-primary text-xs font-bold uppercase tracking-widest mb-2">Choose Your Adventure</p>
            <h1 className="text-3xl font-extrabold text-white mb-2">Knowledge Worlds Hub</h1>
            <p className="text-white/60 text-sm max-w-lg">
              Six realms of India&apos;s ancient wisdom await you. Each world holds quests, secrets, and badges — your journey is uniquely yours.
            </p>
          </div>
          <div className="flex flex-col gap-1 text-right">
            <span className="text-white/40 text-xs">Last visited</span>
            <span className="text-white font-bold text-sm">Forest of Ayurveda</span>
            <span className="text-primary text-xs font-semibold">Quest 4 in progress →</span>
          </div>
        </div>

        {/* Floating world emojis */}
        <div className="flex gap-3 mt-6">
          {['🌿', '🧘', '📖', '⭐', '🌳', '🎨']?.map((emoji, i) => (
            <div
              key={`hub-emoji-${i}`}
              className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-xl hover:bg-white/20 transition-colors cursor-pointer"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              {emoji}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}