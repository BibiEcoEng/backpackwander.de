'use client';

import { useEffect, useState } from 'react';
import { ArrowRight, Mail, ShieldCheck, X } from 'lucide-react';
import { useLanguage } from '@/components/language-provider';

type SupportGatewayProps = {
  tone?: 'accent' | 'neutral';
};

export function SupportGateway({ tone = 'accent' }: SupportGatewayProps) {
  const [open, setOpen] = useState(false);
  const { content } = useLanguage();

  const triggerClassName =
    tone === 'neutral'
      ? 'section-cta-btn btn-secondary type-cta inline-flex items-center justify-center'
      : 'section-cta-btn btn-primary type-cta inline-flex items-center justify-center transition';

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={triggerClassName}
      >
        {content.supportGateway.button}
      </button>

      {open ? (
        <div className="fixed inset-0 z-[70] flex items-start justify-center overflow-y-auto px-4 py-4 sm:items-center sm:py-8">
          <button
            type="button"
            aria-label={content.supportGateway.closeAria}
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-background/80"
          />
          <div className="relative z-10 flex w-full max-w-4xl max-h-[calc(100dvh-2rem)] flex-col overflow-hidden rounded-2xl border border-line bg-surface sm:max-h-[calc(100dvh-4rem)]">
            <div className="flex items-center justify-between border-b border-line px-6 py-4 sm:px-8">
              <div>
                <p className="section-eyebrow text-secondaryText">{content.supportGateway.eyebrow}</p>
                <h3 className="section-card-title mt-2 text-offwhite">{content.supportGateway.title}</h3>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                title={content.supportGateway.closeAria}
                className="rounded-full border border-line p-2 text-secondaryText transition hover:bg-background hover:text-offwhite"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="grid flex-1 gap-4 overflow-y-auto p-6 sm:p-8 lg:grid-cols-3">
              {content.supportGateway.options.map((option, index) => (
                <a
                  key={option.title}
                  href={option.url}
                  target={option.url.startsWith('http') ? '_blank' : undefined}
                  rel={option.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                  onClick={() => {
                    if (option.url.startsWith('#')) {
                      setOpen(false);
                    }
                  }}
                  className="group section-card !p-5 transition hover:border-brand-light/40"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-surface text-brand-light">
                    {index === 0 ? (
                      <ShieldCheck className="h-5 w-5" />
                    ) : index === 1 ? (
                      <ArrowRight className="h-5 w-5" />
                    ) : (
                      <Mail className="h-5 w-5" />
                    )}
                  </div>
                  <h4 className="text-offwhite">{option.title}</h4>
                  <p className="mt-3 text-secondaryText">{option.description}</p>
                  <span className="type-body mt-5 inline-flex items-center gap-2 text-brand-light transition group-hover:translate-x-1">
                    {content.supportGateway.continue} <ArrowRight className="h-4 w-4" />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

