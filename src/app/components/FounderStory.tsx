import React from 'react';


export default function FounderStory() {
  return (
    <section className="w-full py-20 px-4 lg:px-8 xl:px-10 2xl:px-16 bg-indigo-deep">
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-primary/20 text-primary text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6 border border-primary/30">
              Our Founder&apos;s Story
            </span>
            <h2 className="text-hero-md text-white mb-6">
              Born from a Question That Wouldn&apos;t Leave
            </h2>
            <div className="space-y-4 text-white/80 text-sm leading-relaxed">
              <p>
                Bharath JnanaYatra was born from a question our founder, Harshitha Saladi, carried for years: Why did the systems built to prepare me for success end up breaking my mental and physical health — when the answers to healing were sitting in my own culture the whole time?
              </p>
              <p>
                From Class 9, the pressure to crack IIT consumed her life. Long hours of study, constant comparison, and relentless deadlines left little room for anything else. Over time, this pressure turned into severe anxiety — it affected her ability to focus, to complete her own work, and eventually her physical health began to suffer too. From the outside, she appeared driven and capable. On the inside, the exhaustion was constant, and no one around her seemed to be talking about it.
              </p>
              <p>
                The turning point didn&apos;t come from another study technique or productivity hack — it came from Yoga, Intuition and Ayurveda. As she began practicing them seriously, she noticed something conventional approaches hadn&apos;t given her: a way to calm her mind and body together, not just push through with willpower. Her anxiety eased. Her health recovered. And she started asking why something this effective wasn&apos;t part of how children are raised and educated in the first place.
              </p>
              <p>
                That question led her to look closer at India&apos;s own knowledge traditions — and to a realization that reshaped everything: this knowledge wasn&apos;t just personally healing, it was largely missing from how an entire generation of children is being taught to cope, grow, and understand themselves. She identified a gap the education system wasn&apos;t filling, and set out to close it — not with another exam-prep tool, but with something rooted in what had actually healed her.
              </p>
              <p>That belief became Bharath JnanaYatra:</p>
            </div>
            <blockquote className="border-l-4 border-primary pl-6 mt-6">
              <p className="text-base text-white/90 italic leading-relaxed font-medium">
                &ldquo;The knowledge that once helped me heal shouldn&apos;t be a discovery I stumbled into by chance — it should be something every child grows up with.&rdquo;
              </p>
              <footer className="mt-3 text-primary font-bold text-sm">— Harshitha Saladi, Founder</footer>
            </blockquote>
          </div>

          <div className="flex flex-col items-center gap-6">
            <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-primary/40 shadow-warm-lg">
              <img
                src="/assets/images/IMG_1877__1_-1790516705016.jpg"
                alt="Harshitha Saladi, Founder of Bharath JnanaYatra"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block', imageRendering: 'auto' }}
              />
            </div>
            <div className="text-center">
              <p className="text-white font-bold text-lg">Harshitha Saladi</p>
              <p className="text-primary text-sm font-medium">Founder, Bharath JnanaYatra</p>
            </div>
            <div className="grid grid-cols-3 gap-4 w-full">
              {[
              { emoji: '🧘', label: 'Yoga', sublabel: 'Practitioner' },
              { emoji: '🌿', label: 'Ayurveda', sublabel: 'Advocate' },
              { emoji: '📚', label: 'IKS', sublabel: 'Explorer' }]?.
              map((item) =>
              <div key={`founder-${item?.label}`} className="bg-white/10 rounded-xl p-4 text-center border border-white/15">
                  <div className="text-2xl mb-1">{item?.emoji}</div>
                  <div className="text-white font-bold text-xs">{item?.label}</div>
                  <div className="text-white/50 text-[10px]">{item?.sublabel}</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>);

}