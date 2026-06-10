'use client';

import Image from 'next/image';
import { useMemo } from 'react';
import { Reveal } from '@/components/reveal';
import { useLanguage } from '@/components/language-provider';

function getHeadlineLines(headline: string): string[] {
  if (/Engineering Support for Offshore & Industrial Projects/i.test(headline)) {
    return ['Engineering Support', 'for Offshore & Industrial', 'Projects'];
  }

  if (/Engineering-Unterstützung für Offshore- & Industrieprojekte/i.test(headline)) {
    return ['Engineering-\u00ADUnterstützung', 'für Offshore- & Industrie', 'projekte'];
  }

  const engineeringSupportMatch = headline.match(/(Engineering Support)/i);
  if (engineeringSupportMatch && /for Industrial Projects/i.test(headline)) {
    const idx = headline.search(/Engineering Support/i) + engineeringSupportMatch[0].length;
    return [headline.slice(0, idx).trim(), headline.slice(idx).trim()];
  }

  const supportMatch = headline.match(/(Support for)/i);
  if (supportMatch) {
    const idx = headline.search(/Support for/i) + supportMatch[0].length;
    return [headline.slice(0, idx).trim(), headline.slice(idx).trim()];
  }

  const germanFurMatch = headline.match(/(Unterstützung)\s+(für)/i);
  if (germanFurMatch) {
    const idx = headline.search(/Unterstützung/i) + 'Unterstützung'.length;
    return [headline.slice(0, idx).trim(), headline.slice(idx).trim()];
  }

  const industrialMatch = headline.match(/Industrial/i);
  if (industrialMatch) {
    const idx = headline.search(/Industrial/i);
    return [headline.slice(0, idx).trim(), headline.slice(idx).trim()];
  }

  const words = headline.split(/\s+/).filter(Boolean);
  if (words.length <= 2) return [headline];
  const mid = Math.ceil(words.length / 2);
  return [words.slice(0, mid).join(' '), words.slice(mid).join(' ')];
}

export function Hero() {
  const { content, language } = useLanguage();
  const headline = content.hero.headline;
  const subheadlineLines = [
    content.hero.subheadline,
    content.hero.subheadline2,
    content.hero.subheadline3
  ];
  const headlineLines = useMemo(() => getHeadlineLines(headline), [headline]);

  function renderHighlighted(text: string) {
    const parts = text.split(/(Precision\.?|Industrial|Industrie)/gi);
    return parts.map((part, i) => {
      if (/^Precision\.?$/i.test(part) || /^Industrial$/i.test(part) || /^Industrie$/i.test(part)) {
        return (
          <span key={i} className="highlight-green">
            {part}
          </span>
        );
      }

      return <span key={i}>{part}</span>;
    });
  }

  function handleAnchorClick(e: React.MouseEvent, id: string) {
    try {
      e.preventDefault();
      const el = document.getElementById(id);
      if (!el) return;
      const offset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--scroll-offset')) || 0;
      const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
      window.history.replaceState(null, '', `#${id}`);
    } catch {
      // noop
    }
  }

  return (
    <section id="home" data-lang={language} className="relative overflow-x-clip md:min-h-[100svh]">
      <div className="absolute inset-0 z-0 bg-background" aria-hidden />

      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 md:hidden">
          <Image
            src="/images/Banner.png"
            alt="Hero background mobile"
            fill
            priority
            sizes="(max-width: 767px) 100vw, 1px"
            className="object-cover hero-image-dull"
          />
        </div>

        <div className="hero-bg-cover absolute inset-0 hidden md:grid">
          <div className="hero-bg-panel">
            <Image
              src="/images/hero-1%20(2).jpg"
              alt="Offshore wind turbines"
              fill
              sizes="50vw"
              className="object-cover object-center hero-side-image"
            />
          </div>
          <div className="hero-bg-panel">
            <Image
              src="/images/Hero-4.jpeg"
              alt="Industrial construction site"
              fill
              sizes="50vw"
              className="object-cover object-center hero-side-image"
            />
          </div>
        </div>
      </div>

      <div className="absolute inset-0 z-10 pointer-events-none" aria-hidden>
        <div className="absolute inset-0 hero-cover-overlay" />
      </div>

      <div className="relative z-20 flex items-center justify-center px-4 pb-6 pt-[calc(var(--scroll-offset)+0.75rem)] sm:px-6 sm:pb-10 md:min-h-[100svh] md:pb-14 lg:px-8">
        <Reveal>
          <div className="hero-stage">
            <div className="hero-text-backdrop">
              <div className="hero-content">
                <div className="hero-side-grid hero-side-grid-left" aria-hidden="true" />
                <div className="hero-side-grid hero-side-grid-right" aria-hidden="true" />
                <div className="hero-content-main">
                  <div className="hero-copy">
                  <div className="hero-title-wrap">
                    <h1 className="hero-title">
                      {headlineLines.map((line, idx) => (
                        <span key={`${line}-${idx}`} className="hero-title-line">
                          {line ? renderHighlighted(line) : null}
                        </span>
                      ))}
                    </h1>
                  </div>

                  <div className="hero-subtitle-wrap">
                    <p className="hero-subtitle type-body">
                      {subheadlineLines.map((line, idx) => (
                        <span key={`${line}-${idx}`} className="hero-subtitle-line">
                          {line}
                        </span>
                      ))}
                    </p>
                  </div>
                  </div>

                  <div className="hero-cta-group">
                  <a
                    href="#contact"
                    onClick={(e) => handleAnchorClick(e as unknown as React.MouseEvent, 'contact')}
                    className="btn-primary type-cta inline-flex w-full max-w-sm items-center justify-center transition sm:w-auto"
                  >
                    {content.hero.ctaDiscuss}
                  </a>

                  <a
                    href="#services"
                    onClick={(e) => handleAnchorClick(e as unknown as React.MouseEvent, 'services')}
                    className="btn-secondary type-cta inline-flex w-full max-w-sm items-center justify-center transition sm:w-auto"
                  >
                    {content.hero.ctaExplore}
                  </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
