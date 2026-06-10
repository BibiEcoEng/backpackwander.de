'use client';

import Image from 'next/image';
import { BwDigitSection } from '@/components/bw-digit-section';
import { SectionBlockTitle } from '@/components/section-block-title';
import { useLanguage } from '@/components/language-provider';
import { technicalDivisions } from '@/lib/site';

export function PipelineQualitySection() {
  const { content } = useLanguage();
  const section = content.pipelineSection;
  const pipelineQualityUrl =
    technicalDivisions.find((division) => division.label === 'Pipeline Quality')?.url ?? 'https://pipelinequality.com';

  return (
    <section id="pipeline-quality" className="section-padding overflow-hidden bg-surface">
      <div className="section-shell relative">
        <div className="section-card">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div className="min-w-0">
              <SectionBlockTitle title={section.pipeline.title} />

              <div className="mt-4 space-y-3">
                {section.pipeline.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="max-w-none text-secondaryText">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-6">
                <a
                  href={pipelineQualityUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary type-cta inline-flex w-full items-center justify-center sm:w-auto"
                >
                  {section.pipeline.visit}
                </a>
              </div>
            </div>

            <div className="section-media-frame">
              <Image
                src="/images/Pipline%20quality-1%20(1).jpeg"
                alt={section.pipeline.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="section-media-image"
              />
            </div>
          </div>
        </div>

        <BwDigitSection />

        <div className="section-content pt-8">
          <div className="collaboration-intro w-full">
            <h2 className="section-title text-offwhite">{section.collaboration.title}</h2>
            <p className="collaboration-intro-subtitle mt-3 max-w-none text-secondaryText">
              {section.collaboration.subtitle}
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="section-card">
              <div>
                <h3 className="section-card-title text-offwhite">{section.collaboration.clients.eyebrow}</h3>
                <p className="type-body mt-3 max-w-none whitespace-pre-line text-secondaryText">
                  {section.collaboration.clients.text}
                </p>
                <div className="mt-6">
                  <a
                    href="#contact"
                    className="btn-primary type-cta inline-flex w-full items-center justify-center sm:w-auto"
                  >
                    {section.collaboration.clients.cta}
                  </a>
                </div>
              </div>
            </div>

            <div className="section-card">
              <div>
                <h3 className="section-card-title text-offwhite">{section.collaboration.network.eyebrow}</h3>
                <p className="type-body mt-3 max-w-none text-secondaryText">{section.collaboration.network.text}</p>
                <div className="mt-6">
                  <a
                    href="#contact"
                    className="btn-primary type-cta inline-flex w-full items-center justify-center sm:w-auto"
                  >
                    {section.collaboration.network.cta}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
