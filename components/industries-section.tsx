'use client';

import Image from 'next/image';
import { useLanguage } from '@/components/language-provider';

export function IndustriesSection() {
  const { content } = useLanguage();
  const section = content.industriesSection;

  return (
    <section id="industries" className="section-padding relative">
      <div className="section-shell">
        <div className="industries-panel">
          <div className="industries-layout">
            <div className="industries-row">
              {section.items.map((item) => (
                <article key={item.id} className="industries-card group">
                  <div className="industries-card-content">
                    <span className="industries-card-bullet" aria-hidden="true" />
                    <h3 className="industries-card-title type-body max-w-none text-offwhite">{item.title}</h3>
                  </div>
                </article>
              ))}
            </div>

            <div className="industries-media-slot">
              <div className="section-media-frame">
                <Image
                  src="/images/Bolits-image.jpeg"
                  alt="Industrial facility and engineering infrastructure"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="section-media-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
