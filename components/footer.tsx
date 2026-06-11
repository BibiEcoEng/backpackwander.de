'use client';

import Link from 'next/link';
import { ArrowUpRight, Linkedin, Mail, MapPin } from 'lucide-react';
import { WhatsAppIcon } from '@/components/whatsapp-icon';
import { footerInfo, technicalDivisions } from '@/lib/site';
import { useLanguage } from '@/components/language-provider';
import { getLocalizedPath } from '@/lib/routing';

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="footer-col-heading">
      {children}
      <span className="footer-heading-accent" />
    </h4>
  );
}

export function Footer() {
  const { content, language } = useLanguage();

  const legalLinks = [
    {
      href: getLocalizedPath(language, '/privacy'),
      label: content.footer.links.privacy,
      shortLabel: content.footer.links.privacyShort
    },
    {
      href: getLocalizedPath(language, '/terms'),
      label: content.footer.links.terms,
      shortLabel: content.footer.links.termsShort
    },
    {
      href: getLocalizedPath(language, '/impressum'),
      label: content.footer.links.impressum,
      shortLabel: content.footer.links.impressumShort
    }
  ];

  return (
    <footer className="footer-shell bg-background">
      <div className="section-shell">
        <div className="footer-grid">
          <div className="footer-col footer-col-brand">
            <p className="footer-text footer-brand-copy">
              <span className="footer-brand-copy-desktop">
                {content.footer.brandDescriptionDesktopLines.map((line) => (
                  <span key={line} className="footer-brand-copy-line">
                    {line}
                  </span>
                ))}
              </span>
              <span className="footer-brand-copy-mobile">
                {content.footer.brandDescriptionMobileLines.map((line) => (
                  <span key={line} className="footer-brand-copy-line">
                    {line}
                  </span>
                ))}
              </span>
            </p>
            <ul className="footer-divisions">
              {technicalDivisions.map((division) => (
                <li key={division.url}>
                  <a
                    href={division.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`footer-link footer-link-external group${division.label === 'Pipeline Quality' ? ' footer-link-accent' : ''}`}
                  >
                    <span>{division.label}</span>
                    <ArrowUpRight className="footer-link-icon" strokeWidth={1.75} aria-hidden />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col footer-col-contact">
            <FooterHeading>
              {content.footer.companyName.replace(/\s*GmbH\s*$/, '')}{' '}
              <span className="highlight-green">GmbH</span>
            </FooterHeading>
            <div className="footer-contact">
              <div className="footer-contact-item">
                <span className="footer-contact-icon-wrap" aria-hidden>
                  <MapPin className="footer-contact-icon" strokeWidth={1.75} />
                </span>
                <p className="footer-contact-text footer-contact-address">{content.footer.address}</p>
              </div>
              <div className="footer-contact-item">
                <span className="footer-contact-icon-wrap" aria-hidden>
                  <Mail className="footer-contact-icon" strokeWidth={1.75} />
                </span>
                <a
                  href={`mailto:${footerInfo.email}`}
                  className="footer-contact-text footer-contact-link"
                  aria-label={`${content.footer.email}: ${footerInfo.email}`}
                >
                  {footerInfo.email}
                </a>
              </div>
              <div className="footer-contact-item">
                <span className="footer-contact-icon-wrap" aria-hidden>
                  <WhatsAppIcon className="footer-contact-icon" />
                </span>
                <a
                  href={footerInfo.whatsapp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-contact-text footer-contact-link footer-contact-phone"
                  aria-label={`${content.footer.whatsapp}: ${footerInfo.whatsapp.display}`}
                >
                  {footerInfo.whatsapp.display}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-divider" aria-hidden />

        <div className="footer-bottom">
          <p className="footer-meta">{content.footer.rights}</p>

          <nav className="footer-legal" aria-label={content.footer.legal}>
            <ul className="footer-legal-links">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  {link.href.startsWith('/') ? (
                    <Link href={link.href} className="footer-link footer-legal-link" title={link.label}>
                      <span className="footer-legal-link-short">{link.shortLabel}</span>
                      <span className="footer-legal-link-full">{link.label}</span>
                    </Link>
                  ) : (
                    <a href={link.href} className="footer-link footer-legal-link" title={link.label}>
                      <span className="footer-legal-link-short">{link.shortLabel}</span>
                      <span className="footer-legal-link-full">{link.label}</span>
                    </a>
                  )}
                </li>
              ))}
            </ul>
            <a
              href={footerInfo.socialLinks[0].url}
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              className="footer-social footer-bottom-social"
            >
              <Linkedin strokeWidth={1.75} aria-hidden />
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
