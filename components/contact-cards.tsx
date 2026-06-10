'use client';

import type { ReactNode } from 'react';
import { useLanguage } from '@/components/language-provider';
import { footerInfo } from '@/lib/site';

function ContactInfoField({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <p className="type-label text-secondaryText">{label}</p>
      <div className="type-body mt-1.5 max-w-none text-secondaryText">{children}</div>
    </div>
  );
}

export default function ContactCards() {
  const { content } = useLanguage();
  const card = content.contactPage.card;

  return (
    <section className="space-y-6">
      <div className="section-card">
        <div className="min-w-0">
          <h2 className="text-offwhite">{card.projectCoordinationTitle}</h2>

          <div className="mt-5 space-y-4">
            <ContactInfoField label={card.officeLabel}>
              {card.officeLines[0]}
              <br />
              {card.officeLines[1]}
            </ContactInfoField>

            <ContactInfoField label={card.responseWindowLabel}>{card.responseWindowText}</ContactInfoField>

            <ContactInfoField label={card.emailLabel}>
              <a href={`mailto:${footerInfo.email}`} className="text-brand-light transition hover:text-offwhite">
                {footerInfo.email}
              </a>
            </ContactInfoField>

            <ContactInfoField label={card.focusLabel}>{card.focusText}</ContactInfoField>
          </div>
        </div>
      </div>

      <div className="section-card">
        <div className="min-w-0">
          <h2 className="text-offwhite">{card.primaryDivisionTitle}</h2>
          <p className="type-body mt-3 max-w-none text-secondaryText">{card.primaryDivisionText}</p>
        </div>
      </div>
    </section>
  );
}
