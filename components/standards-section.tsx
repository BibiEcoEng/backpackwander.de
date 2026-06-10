'use client';

import { Reveal } from '@/components/reveal';
import { useLanguage } from '@/components/language-provider';

export function StandardsSection() {
  const { content } = useLanguage();

  return (
    <section id="standards" className="py-16 sm:py-20 lg:py-24">
      <div className="section-shell">
        <Reveal>
          <h2 className="section-title text-offwhite">{content.standards.title}</h2>
        </Reveal>

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div>
              <h3 className="section-card-title text-offwhite">{content.standards.workWith}</h3>
              <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
                {content.standards.list.map((standard) => (
                  <div
                    key={standard}
                    className="type-body rounded-xl border border-line bg-surface px-4 py-3 text-center text-secondaryText transition hover:border-accent/25 hover:bg-background hover:text-offwhite"
                  >
                    {standard}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="rounded-2xl border border-line bg-surface p-8">
              <h3 className="section-card-title text-offwhite">{content.standards.globalTitle}</h3>
              <p className="mt-4 text-secondaryText">{content.standards.globalDescription}</p>
              <div className="mt-6 grid gap-3">
                {content.standards.regions.map((region) => (
                  <div key={region} className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-accent/90" />
                    <span className="type-body text-secondaryText">{region}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
