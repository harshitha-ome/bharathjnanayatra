import React from 'react';
import Link from 'next/link';

// Image icon: Grandma telling stories to kids
const GrandmaStoriesIcon = () => (
  <img
    src="/assets/images/grandma_stories-1788516904825.webp"
    alt="Grandma reading Panchatantra stories to children"
    className="w-10 h-10 object-cover rounded-full"
  />
);

// Image icon: Ayurveda mortar and pestle with herbs
const AyurvedaBowlIcon = () => (
  <img
    src="/assets/images/Ayurveda-1788516745633.webp"
    alt="Ayurveda mortar and pestle with herbs"
    className="w-10 h-10 object-cover rounded-full"
  />
);

// Image icon: Ecology hands holding plant
const EcologyIcon = () => (
  <img
    src="/assets/images/ecology-1788517060150.jpg"
    alt="Hands holding a plant representing ecology"
    className="w-10 h-10 object-cover rounded-full"
  />
);

const worlds = [
  {
    id: 'world-ayurveda',
    icon: <AyurvedaBowlIcon />,
    name: 'Forest of Ayurveda',
    sanskrit: 'आयुर्वेद वन',
    domain: 'Health, Routines & Nutrition',
    color: 'from-emerald-600 to-green-400',
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
    badge: 'bg-emerald-100 text-emerald-700',
    description: 'Identify medicinal plants, build healthy daily routines, and earn Vaidya badges.',
  },
  {
    id: 'world-yoga',
    icon: <span className="text-4xl">🧘</span>,
    name: 'Valley of Yoga',
    sanskrit: 'योग घाटी',
    domain: 'Mindfulness & Emotional Regulation',
    color: 'from-violet-600 to-purple-400',
    bg: 'bg-violet-50',
    border: 'border-violet-200',
    badge: 'bg-violet-100 text-violet-700',
    description: 'Complete breathing quests, mindfulness challenges, and earn Yogi badges.',
  },
  {
    id: 'world-stories',
    icon: <GrandmaStoriesIcon />,
    name: 'Kingdom of Stories',
    sanskrit: 'कथा राज्य',
    domain: 'Panchatantra & Values',
    color: 'from-amber-600 to-yellow-400',
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    badge: 'bg-amber-100 text-amber-700',
    description: 'Make moral choices in Panchatantra quests and unlock Storyteller badges.',
  },
  {
    id: 'world-astronomy',
    icon: <span className="text-4xl">🔭</span>,
    name: 'Observatory of Aryabhata',
    sanskrit: 'आर्यभट वेधशाला',
    domain: 'Astronomy & Mathematics',
    color: 'from-indigo-600 to-blue-400',
    bg: 'bg-indigo-50',
    border: 'border-indigo-200',
    badge: 'bg-indigo-100 text-indigo-700',
    description: 'Solve star-mapping puzzles and explore India\'s astronomical heritage.',
  },
  {
    id: 'world-ecology',
    icon: <EcologyIcon />,
    name: 'Garden of Ecology',
    sanskrit: 'पारिस्थितिकी उद्यान',
    domain: 'Nature & Environment',
    color: 'from-teal-600 to-cyan-400',
    bg: 'bg-teal-50',
    border: 'border-teal-200',
    badge: 'bg-teal-100 text-teal-700',
    description: 'Explore biodiversity, identify species, and earn Naturalist badges.',
  },
  {
    id: 'world-arts',
    icon: <span className="text-4xl">🎨</span>,
    name: 'Temple of Arts',
    sanskrit: 'कला मंदिर',
    domain: 'Music, Dance & Philosophy',
    color: 'from-rose-600 to-pink-400',
    bg: 'bg-rose-50',
    border: 'border-rose-200',
    badge: 'bg-rose-100 text-rose-700',
    description: 'Discover ragas, dance forms, and philosophical traditions. Earn Artist badges.',
  },
];

export default function WorldsPreview() {
  return (
    <section className="w-full pt-8 pb-20 px-4 lg:px-8 xl:px-10 2xl:px-16 bg-background">
      <div className="max-w-screen-2xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 border border-primary/20">
            Knowledge Worlds
          </span>
          <h2 className="text-hero-md text-indigo-deep mb-4">Choose Your Adventure</h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base leading-relaxed">
            Each world is a living, breathing Indian knowledge domain — packed with quests, stories, and wisdom waiting to be discovered.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-6">
          {worlds?.map((world) => (
            <Link
              key={world?.id}
              href="/knowledge-worlds-hub"
              className={`group block rounded-2xl border ${world?.border} ${world?.bg} p-6 hover:shadow-warm-lg active:scale-[0.98] transition-all duration-250 world-card-glow cursor-pointer`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center justify-center w-12 h-12">{world?.icon}</div>
                <span className={`text-xs font-bold uppercase tracking-wide px-2.5 py-1 rounded-full ${world?.badge}`}>
                  Explore
                </span>
              </div>
              <div className="mb-1">
                <h3 className="font-extrabold text-foreground text-lg leading-tight">{world?.name}</h3>
                <p className="text-xs text-muted-foreground italic mb-2">{world?.sanskrit}</p>
              </div>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-3">{world?.domain}</p>
              <p className="text-sm text-foreground/70 leading-relaxed">{world?.description}</p>
              <div className="mt-4 flex items-center gap-2 text-xs font-bold text-foreground/50 group-hover:text-primary transition-colors">
                <span>Enter World</span>
                <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/knowledge-worlds-hub"
            className="inline-flex items-center gap-2 bg-indigo-deep text-white font-bold px-8 py-4 rounded-2xl hover:bg-indigo-deep/90 active:scale-95 transition-all duration-150 shadow-warm"
          >
            View All Knowledge Worlds →
          </Link>
        </div>
      </div>
    </section>
  );
}