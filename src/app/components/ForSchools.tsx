import React from 'react';
import Link from 'next/link';

export default function ForSchools() {
  return (
    <section id="schools" className="w-full py-20 px-4 lg:px-8 xl:px-10 2xl:px-16 bg-muted/50">
      <div className="max-w-screen-2xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block bg-secondary/10 text-secondary text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 border border-secondary/20">
            For Schools
          </span>
          <h2 className="text-hero-md text-indigo-deep mb-4">Bring Bharath JnanaYatra to Your School</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">Seamlessly integrate India&apos;s knowledge heritage into your curriculum — fully aligned with NEP 2020&apos;s holistic learning mandate.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { emoji: '📋', title: 'NEP 2020 Aligned', desc: 'Directly maps to the National Education Policy\'s push for holistic, India-rooted learning.' },
            { emoji: '🏆', title: 'Life Skills Integration', desc: 'Builds emotional resilience, problem-solving, and cultural awareness through every quest.' },
            { emoji: '👩‍🏫', title: 'Teacher Training', desc: 'Comprehensive support for educators to guide students through Knowledge Worlds.' },
            { emoji: '📊', title: 'Progress Tracking', desc: 'Detailed dashboards for teachers to monitor student XP, badges, and quest completion.' },
          ]?.map((item) => (
            <div key={`school-${item?.emoji}`} className="bg-card rounded-2xl border border-border p-6 shadow-warm">
              <div className="text-3xl mb-3">{item?.emoji}</div>
              <h3 className="font-bold text-foreground mb-2">{item?.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item?.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/sign-up-login-screen"
            className="inline-flex items-center gap-2 bg-forest-gradient text-white font-bold px-8 py-4 rounded-2xl hover:opacity-90 active:scale-95 transition-all duration-150 shadow-warm"
          >
            Partner with Us →
          </Link>
          <p className="mt-4 text-sm text-emerald-700 font-medium">
            🎓 Schools will be offered the platform at <span className="font-bold">subsidised prices</span> — making quality, heritage-rooted learning accessible to every student.
          </p>
        </div>
      </div>
    </section>
  );
}