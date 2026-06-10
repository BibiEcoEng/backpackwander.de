import type { ReactNode } from 'react';

export function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description: ReactNode }) {
  return (
    <div className="max-w-3xl">
      <p className="section-eyebrow text-accent/90">{eyebrow}</p>
      <h2 className="section-title mt-4 text-offwhite">{title}</h2>
      <p className="mt-5 text-secondaryText">{description}</p>
    </div>
  );
}
