'use client';

import { useLanguage } from '@/components/language-provider';

export function ContactPageIntro() {
  const { content } = useLanguage();

  return (
    <div className="max-w-3xl">
      <h1 className="text-offwhite">{content.contactPage.title}</h1>
      <p className="type-body mt-3 max-w-none text-secondaryText">{content.contactPage.subtitle}</p>
    </div>
  );
}
