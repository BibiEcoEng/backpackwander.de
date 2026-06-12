'use client';

import { useLanguage } from '@/components/language-provider';

export function ServicesSection() {
  const { content } = useLanguage();
  const section = content.servicesSection;

  return (
    <section id="services" className="section-padding relative overflow-x-clip">
      <div className="section-shell">
        <h2 className="section-title services-section-title text-offwhite">
          <span className="services-section-title-desktop">{section.title}</span>
          <span className="services-section-title-mobile">
            {section.titleLinesMobile.map((line) => (
              <span key={line} className="services-section-title-line">
                {line}
              </span>
            ))}
          </span>
        </h2>

        <div className="section-content grid gap-6 lg:grid-cols-2 lg:gap-8">
          <div className="section-card min-w-0">
            <div className="relative z-10">
              <h3 className="section-card-title text-offwhite">{section.technicalOperations}</h3>

              <ul className="mt-5 list-none space-y-2.5 p-0">
                {section.technicalItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="services-card-bullet mt-2.5" aria-hidden="true" />
                    <span className="services-card-list-item type-body max-w-none text-offwhite">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="section-card min-w-0">
            <div className="relative z-10">
              <h3 className="section-card-title text-offwhite">{section.professionalResources}</h3>

              <ul className="mt-5 list-none space-y-2.5 p-0">
                {section.resourceItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="services-card-bullet mt-2.5" aria-hidden="true" />
                    <span className="services-card-list-item type-body max-w-none text-offwhite">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="section-cta-row mt-8">
          <a
            href="#contact"
            className="section-cta-btn btn-primary type-cta inline-flex items-center justify-center sm:w-auto"
          >
            {section.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
