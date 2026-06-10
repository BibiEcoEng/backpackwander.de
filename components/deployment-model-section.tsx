'use client';

import { Reveal } from '@/components/reveal';
import { useLanguage } from '@/components/language-provider';

type DeploymentModelSectionProps = {
  showPageTitle?: boolean;
};

export function DeploymentModelSection({ showPageTitle = false }: DeploymentModelSectionProps) {
  const { content } = useLanguage();

  return (
    <section id="deployment" className="section-padding">
      <div className="section-shell">
        {showPageTitle ? (
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <h1 className="section-title text-offwhite">{content.deployment.pageTitle}</h1>
            <p className="type-body mt-4 text-secondaryText">{content.deployment.pageDescription}</p>
          </div>
        ) : null}

        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          <Reveal>
            <div className="section-card">
              <div>
                <p className="section-eyebrow text-secondaryText">{content.deployment.enterpriseEyebrow}</p>
                <h2 className="section-card-title mt-3 text-offwhite">{content.deployment.enterpriseTitle}</h2>
                <p className="mt-4 max-w-none text-secondaryText">{content.deployment.enterpriseDescription}</p>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="section-card">
              <div>
                <p className="section-eyebrow text-secondaryText">{content.deployment.expertsEyebrow}</p>
                <h2 className="section-card-title mt-3 text-offwhite">{content.deployment.expertsTitle}</h2>
                <p className="mt-4 max-w-none text-secondaryText">{content.deployment.expertsDescription}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
