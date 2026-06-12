'use client';

import Image from 'next/image';
import { SectionBlockTitle } from '@/components/section-block-title';
import { useLanguage } from '@/components/language-provider';
import { technicalDivisions } from '@/lib/site';

export function BwDigitSection() {
  const { content } = useLanguage();
  const bwDigit = content.pipelineSection.bwDigit;
  const bwDigitUrl = technicalDivisions.find((division) => division.label === 'BW Digit')?.url ?? 'https://bwdigit.com';

  return (
    <div id="bw-digit" className="section-content">
      <div className="bw-digit-panel">
        <div className="bw-digit-panel-inner grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-10">
          <div className="relative z-10 min-w-0">
            <SectionBlockTitle
              title={bwDigit.title}
              className="section-title section-block-title bw-digit-panel-title text-offwhite"
            />

            <div className="mt-4 space-y-3">
              {bwDigit.paragraphs.map((paragraph) => (
                <p key={paragraph} className="bw-digit-panel-text type-body max-w-none">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="section-cta-row mt-6">
              <a
                href={bwDigitUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="section-cta-btn btn-primary type-cta inline-flex items-center justify-center sm:w-auto"
              >
                {bwDigit.visit}
              </a>
            </div>
          </div>

          <div className="bw-digit-visual relative z-10 w-full">
            <div className="section-media-frame">
              <Image
                src="/images/BW%20digit%20-1.jpeg"
                alt="BW Digit digital solutions ecosystem"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="section-media-image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
