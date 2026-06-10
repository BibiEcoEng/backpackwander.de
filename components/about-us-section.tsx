'use client';

import Image from 'next/image';
import { useLanguage } from '@/components/language-provider';

type AboutUsSectionProps = {
  headingLevel?: 'h1' | 'h2';
};

export function AboutUsSection({ headingLevel = 'h2' }: AboutUsSectionProps) {
  const HeadingTag = headingLevel;
  const { content } = useLanguage();
  const projectItems = content.about.recentProjectEnvironment.items;
  const projectItemSplit = Math.ceil(projectItems.length / 2);
  const projectItemColumns = [
    projectItems.slice(0, projectItemSplit),
    projectItems.slice(projectItemSplit)
  ];

  return (
    <section id="about" className="about-section section-padding relative overflow-hidden">
      <div className="section-shell">
        <div className="grid gap-5 md:grid-cols-2 md:items-start md:gap-10">
          <div className="min-w-0">
            <HeadingTag className="section-title text-offwhite">{content.about.headline}</HeadingTag>

            <div className="mt-4 space-y-3 md:mt-6 md:space-y-4">
              {content.about.content.map((paragraph, index) => (
                <div key={index} className="about-highlight-box">
                  <p
                    className={`type-body max-w-none${
                      index === 1
                        ? ' about-experience-text whitespace-pre-line text-offwhite'
                        : ' text-secondaryText'
                    }`}
                  >
                    {(() => {
                      const parts = paragraph.split(/(Europe|Europa)/i);
                      return parts.map((part, i) =>
                        /^(Europe|Europa)$/i.test(part) ? (
                          <span key={i} className="highlight-green">
                            {part}
                          </span>
                        ) : (
                          <span key={i}>{part}</span>
                        )
                      );
                    })()}
                  </p>
                </div>
              ))}
            </div>

            <div className="about-project-environment mt-10 md:mt-12 lg:mt-14">
                <h3 className="section-card-title about-project-environment-title">
                  {content.about.recentProjectEnvironment.title}
                </h3>
                <div className="about-project-environment-grid mt-3">
                  {projectItemColumns.map((column, colIdx) => (
                    <ul key={colIdx} className="about-project-environment-list list-disc pl-5">
                      {column.map((item) => (
                        <li key={item} className="type-body max-w-none">
                          {item}
                        </li>
                      ))}
                    </ul>
                  ))}
                </div>
              </div>
          </div>

          <div className="about-section-media relative mx-auto aspect-[16/10] w-full max-w-full overflow-hidden rounded-xl md:aspect-[4/3] md:max-h-[380px]">
            <Image
              src="/images/Monopole%20offshore.jpeg"
              alt="Offshore monopile wind farm"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center hero-image-dull"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
