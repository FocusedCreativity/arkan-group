'use client';

import { useLang } from '@/lib/LangContext';

export default function AboutPage() {
  const { t, isArabic } = useLang();

  return (
    <main className="pt-32 pb-24">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Column: Hero & Intro */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="text-[var(--color-gold)] font-semibold tracking-widest text-sm mb-4 uppercase">
              {t.aboutPage.hero.overline}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight font-playfair">
              {t.aboutPage.hero.headline}
            </h1>
            <p className="text-lg text-[var(--text-muted)] mb-8 max-w-xl">
              {t.aboutPage.hero.subtitle}
            </p>
            <div className="bg-[var(--bg-section)] p-8 border-l-4 border-[var(--color-gold)] rounded-r-lg">
              <p className="text-white text-lg">
                {t.aboutPage.intro.body}
              </p>
            </div>
            
            <div className="mt-12 flex items-center gap-6">
              <div className="w-20 h-20 rounded-full border-2 border-[var(--color-gold)] flex items-center justify-center text-3xl font-playfair text-[var(--color-gold)] shrink-0">
                30
              </div>
              <h3 className="text-2xl font-bold text-white uppercase tracking-wider">
                {t.aboutPage.stats.exp}
              </h3>
            </div>
          </div>

          {/* Right Column: Mission & Vision Cards */}
          <div className="lg:col-span-6 flex flex-col gap-8 justify-center">
            {/* Mission Card */}
            <div className="bg-[var(--bg-section)] p-10 rounded-2xl border border-white/5 relative overflow-hidden group hover:border-[var(--color-gold)]/30 transition-colors duration-500">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-gold)] opacity-5 rounded-bl-full transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-700"></div>
              <span className="text-[var(--color-gold)] font-bold tracking-widest text-xs mb-3 block uppercase">
                {t.aboutPage.mission.overline}
              </span>
              <h3 className="text-2xl font-bold text-white mb-4 font-playfair">
                {t.aboutPage.mission.headline}
              </h3>
              <p className="text-[var(--text-muted)] leading-relaxed">
                {t.aboutPage.mission.body}
              </p>
            </div>

            {/* Vision Card */}
            <div className="bg-[var(--bg-section)] p-10 rounded-2xl border border-white/5 relative overflow-hidden group hover:border-[var(--color-gold)]/30 transition-colors duration-500">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-gold)] opacity-5 rounded-bl-full transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-700"></div>
              <span className="text-[var(--color-gold)] font-bold tracking-widest text-xs mb-3 block uppercase">
                {t.aboutPage.vision.overline}
              </span>
              <h3 className="text-2xl font-bold text-white mb-4 font-playfair">
                {t.aboutPage.vision.headline}
              </h3>
              <p className="text-[var(--text-muted)] leading-relaxed">
                {t.aboutPage.vision.body}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
