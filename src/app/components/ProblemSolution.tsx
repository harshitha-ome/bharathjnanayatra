import React from 'react';

const solutionItems = [
  { icon: '🎮', title: 'Gamified Knowledge Worlds', text: '3D adventure worlds — from the Forest of Ayurveda to the Observatory of Aryabhata — make ancient wisdom irresistible to children.', useCustomIcon: false, useGameIcon: true },
  { icon: '📱', title: 'Productive Screen Time in an Engaging Way', text: 'Transform passive screen time into meaningful, active learning experiences — children are captivated by quests, stories, and challenges rooted in India\'s rich heritage.', useCustomIcon: false, useProductiveIcon: true },
  { icon: '🧠', title: 'Evidence-Informed Pedagogy', text: 'Built on child psychology, IKS research, and NEP 2020 principles — every quest is designed to build life skills, not just knowledge.', useCustomIcon: true },
  { icon: '🤖', title: 'AI-Driven Personalisation', text: 'Adaptive learning paths guided by domain experts ensure every child progresses at their own pace with culturally rooted content.', useCustomIcon: false, useAIIcon: true },
];

export default function ProblemSolution() {
  return (
    <section className="w-full pt-20 pb-8 px-4 lg:px-8 xl:px-10 2xl:px-16 bg-background">
      <div className="max-w-screen-2xl mx-auto">
        <div className="max-w-2xl mx-auto">
          {/* Solution */}
          <span className="inline-block text-blue-700 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 border border-blue-200" style={{ backgroundColor: '#eff5f5' }}>
            Our Solution
          </span>
          <h2 className="text-hero-md text-indigo-deep mb-6">Bharath JnanaYatra Bridges the Gap</h2>
          <div className="space-y-5">
            {solutionItems?.map((item) => (
              <div key={`sol-${item?.title}`} className="flex items-start gap-5 bg-blue-50 rounded-xl p-6 border border-blue-100">
                <span className="min-w-[96px] flex items-center justify-center">
                  {item?.useCustomIcon ? (
                    <img
                      src="/assets/images/psycho_sit-1788689341857.jpeg"
                      alt="Psychologist playing with a child — evidence-informed pedagogy"
                      className="w-24 h-24 rounded-xl object-cover border-2 border-blue-300"
                    />
                  ) : item?.useProductiveIcon ? (
                    <img
                      src="/assets/images/Productive_time-1788694576140.png"
                      alt="Stopwatch timer icon representing Productive Screen Time"
                      className="w-24 h-24 rounded-xl object-cover border-2 border-blue-300"
                    />
                  ) : item?.useGameIcon ? (
                    <img
                      src="/assets/images/video-game-1788694407711.jpg"
                      alt="Game controller representing Gamified Knowledge Worlds"
                      className="w-24 h-24 rounded-xl object-cover border-2 border-blue-300"
                    />
                  ) : item?.useAIIcon ? (
                    <img
                      src="/assets/images/Screenshot_2026-09-06_171002-1788694818268.png"
                      alt="AI brain circuit representing AI-Driven Personalisation"
                      className="w-24 h-24 rounded-xl object-cover border-2 border-blue-300"
                    />
                  ) : (
                    <span className="w-24 h-24 rounded-xl border-2 border-blue-300 bg-white flex items-center justify-center text-5xl">
                      {item?.icon}
                    </span>
                  )}
                </span>
                <div>
                  <p className="text-base font-bold text-blue-800 mb-1">{item?.title}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item?.text}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-center text-muted-foreground italic">
            This is not only meant for children but for anyone who wants to explore Our wisdom.
          </p>
        </div>
      </div>
    </section>
  );
}