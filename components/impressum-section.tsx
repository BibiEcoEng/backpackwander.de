'use client';

import { useLanguage } from '@/components/language-provider';

export function ImpressumSection() {
  const { content } = useLanguage();
  const page = content.impressumPage;

  return (
    <section className="legal-page section-padding">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <h1>{page.title}</h1>
        </div>

        <div className="prose-container mx-auto mt-12 max-w-3xl space-y-10">
          {page.sections.map((section) => (
            <article key={section.title}>
              <h2 className="section-card-title text-offwhite">{section.title}</h2>

              {'fields' in section &&
                section.fields.map((field) => (
                  <p key={field.label} className="mt-4 max-w-none text-secondaryText">
                    <span className="text-offwhite">{field.label}</span>{' '}
                    {'isEmail' in field && field.isEmail ? (
                      <a href={`mailto:${field.value}`} className="footer-link-accent hover:underline">
                        {field.value}
                      </a>
                    ) : (
                      field.value
                    )}
                  </p>
                ))}

              {'paragraphs' in section &&
                section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="mt-4 max-w-none text-secondaryText">
                    {paragraph}
                  </p>
                ))}

              {'listHeading' in section && section.listHeading ? (
                <p className="mt-4 max-w-none text-secondaryText">{section.listHeading}</p>
              ) : null}

              {'listItems' in section && section.listItems ? (
                <ul className="mt-3 list-disc space-y-2 pl-5 text-secondaryText">
                  {section.listItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
