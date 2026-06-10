'use client';

import { useLanguage } from '@/components/language-provider';

export function TermsSection() {
  const { content } = useLanguage();
  const page = content.termsPage;

  return (
    <section className="legal-page section-padding">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <h1>{page.title}</h1>
          <p className="mt-3 text-secondaryText">{page.subtitle}</p>
        </div>

        <div className="prose-container mx-auto mt-12 max-w-3xl space-y-10">
          {page.sections.map((section) => (
            <article key={section.title}>
              <h2 className="section-card-title text-offwhite">{section.title}</h2>

              {'paragraphs' in section &&
                section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="mt-4 max-w-none text-secondaryText">
                    {paragraph}
                  </p>
                ))}

              {'listItems' in section && section.listItems ? (
                <ul className="mt-3 list-disc space-y-2 pl-5 text-secondaryText">
                  {section.listItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}

              {'closingParagraphs' in section &&
                section.closingParagraphs.map((paragraph) => (
                  <p key={paragraph} className="mt-4 max-w-none text-secondaryText">
                    {paragraph}
                  </p>
                ))}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
