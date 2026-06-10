'use client';

import { Reveal } from '@/components/reveal';
import { SupportGateway } from '@/components/support-gateway';
import { useLanguage } from '@/components/language-provider';
import { getLocalizedPath } from '@/lib/routing';

export function ClosingCTASection() {
  const { content, language } = useLanguage();
  const contactHref = getLocalizedPath(language, '/contact');

  return (
    <section id="contact" className="section-padding">
      <div className="section-shell">
        <Reveal>
          <div className="max-w-3xl">
            <p className="section-eyebrow text-secondaryText">{content.closing.eyebrow}</p>
            <h2 className="section-title mt-3 text-offwhite">{content.closing.headline}</h2>
            <p className="mt-4 max-w-none text-secondaryText">{content.closing.description}</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <SupportGateway />
              <a href={contactHref} className="btn-secondary type-cta inline-flex items-center justify-center">
                {content.closing.joinNetwork}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
