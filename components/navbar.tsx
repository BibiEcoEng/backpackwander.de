'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, ChevronDown, ChevronRight, Menu, X } from 'lucide-react';
import { LanguageFlag } from '@/components/language-flag';
import { useLanguage } from '@/components/language-provider';
import { getLocalizedPath } from '@/lib/routing';
import { technicalDivisions } from '@/lib/site';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);
  const navBarRef = useRef<HTMLElement | null>(null);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const pathname = usePathname();
  const languageDropdownRef = useRef<HTMLDivElement | null>(null);
  const { content, language, options, setLanguage } = useLanguage();
  const selectedLanguage = options.find((option) => option.code === language) ?? options[0];

  const localizedPath = (path: string) => getLocalizedPath(language, path);
  const currentPath = pathname || '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const setOffset = () => {
      const navBar = navBarRef.current;
      const h = navBar?.getBoundingClientRect().height ?? header.getBoundingClientRect().height;
      document.documentElement.style.setProperty('--scroll-offset', `${h + 24}px`);
    };

    setOffset();
    window.addEventListener('resize', setOffset);
    return () => window.removeEventListener('resize', setOffset);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      if (languageDropdownRef.current && !languageDropdownRef.current.contains(target)) {
        setLanguageOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageSelect = (code: 'en' | 'de') => {
    setLanguage(code);
    setLanguageOpen(false);

    if (typeof window === 'undefined') {
      return;
    }

    const pathWithoutLocale = currentPath.replace(/^\/(en|de)(?=\/|$)/, '') || '/';
    const targetPath = pathWithoutLocale === '/' ? `/${code}` : `/${code}${pathWithoutLocale}`;
    const search = window.location.search || '';
    const hash = window.location.hash || '';
    window.location.assign(`${targetPath}${search}${hash}`);
  };

  const homeHref = localizedPath('/');
  const pipelineQualityUrl =
    technicalDivisions.find((d) => d.label === 'Pipeline Quality')?.url ?? 'https://pipelinequality.com';
  const bwDigitUrl = technicalDivisions.find((d) => d.label === 'BW Digit')?.url ?? 'https://bwdigit.com';

  const navigation = [
    { id: 'home', label: content.nav.home, href: homeHref },
    { id: 'about', label: content.nav.about, href: `${homeHref}#about` },
    { id: 'services', label: content.nav.services, href: `${homeHref}#services` },
    { id: 'industries', label: content.nav.industries, href: `${homeHref}#industries` },
    { id: 'pipeline', label: content.nav.pipelineQuality, href: pipelineQualityUrl },
    { id: 'bwdigit', label: content.nav.bwDigit, href: bwDigitUrl },
    { id: 'contact', label: content.nav.contact, href: `${homeHref}#contact` }
  ];

  function normalizePath(p: string) {
    return (p || '').replace(/\/$/, '');
  }

  function smoothScrollToHash(hash: string) {
    const el = document.getElementById(hash);
    if (!el) return;
    const offset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--scroll-offset')) || 0;
    const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  }

  function handleNavClickEvent(e: React.MouseEvent, href: string) {
    try {
      if (typeof window === 'undefined') return;
      const [pathPart, hash] = href.split('#');
      if (!hash) return;

      const current = normalizePath(window.location.pathname || '/');
      const targetPath = normalizePath(pathPart || homeHref);

      if (current === targetPath) {
        e.preventDefault();
        smoothScrollToHash(hash);
        window.history.replaceState(null, '', `${targetPath}#${hash}`);
      }
    } catch {
      // noop
    }
  }

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const hash = window.location.hash;
    if (!hash) return;
    const id = hash.replace('#', '');
    const t = setTimeout(() => smoothScrollToHash(id), 80);
    return () => clearTimeout(t);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };

    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  const languageOptionClass = (isActive: boolean) =>
    `type-body flex w-full items-center gap-3 rounded-lg px-3 py-2 transition ${
      isActive ? 'nav-lang-option-active' : 'nav-lang-option-idle'
    }`;

  const languageDropdownPanel = (
    <div className="nav-lang-dropdown absolute right-0 top-11 w-44 overflow-hidden rounded-2xl border p-1.5 shadow-industrial">
      <div className="grid gap-0.5">
        {options.map((option) => (
          <button
            key={option.code}
            type="button"
            onClick={() => handleLanguageSelect(option.code)}
            onMouseDown={(e) => (e.currentTarget as HTMLElement).blur()}
            className={languageOptionClass(language === option.code)}
          >
            <LanguageFlag code={option.code} />
            <span>{option.label}</span>
          </button>
        ))}
      </div>
    </div>
  );

  const navLinkClass = (isHomeLink: boolean) =>
    `nav-link focus:outline-none focus-visible:outline-none focus-visible:ring-0 ${
      isHomeLink ? 'nav-link-active' : 'nav-link-muted'
    }`;

  const mobileLinkClass = (isHomeLink: boolean) =>
    `nav-mobile-link focus:outline-none focus-visible:outline-none focus-visible:ring-0 ${
      isHomeLink ? 'nav-mobile-link-active' : 'nav-mobile-link-idle'
    }`;

  return (
    <header ref={headerRef} className="fixed top-0 z-50 w-full min-w-0 px-3 pt-2 sm:px-4 sm:pt-3">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 z-[60] h-1 origin-left bg-accent/80 will-change-transform"
        style={{ transform: `scaleX(${scrollProgress})` }}
      />
      {open ? (
        <button
          type="button"
          className="nav-mobile-backdrop fixed inset-0 z-40 lg:hidden"
          onClick={() => setOpen(false)}
          aria-label="Close navigation"
        />
      ) : null}

      <div
        className={`relative z-50 mx-auto max-w-[1200px] rounded-[18px] border backdrop-blur-xl ${
          isScrolled ? 'nav-shell nav-shell-scrolled' : 'nav-shell'
        }${open ? ' nav-shell-open' : ''}`}
      >
        <nav
          ref={navBarRef}
          className="nav-bar mx-auto flex max-w-[1200px] items-center px-4 py-2.5 sm:px-5 lg:px-6"
        >
          <Link
            href="/"
            className="nav-brand-link nav-bar-brand flex shrink-0 items-center gap-3 focus:outline-none focus-visible:outline-none focus-visible:ring-0"
            onMouseDown={(e) => (e.currentTarget as HTMLElement).blur()}
          >
            <Image
              src="/images/logo.png"
              alt="Backpack Wander logo"
              width={140}
              height={40}
              priority
              className="h-10 w-auto object-contain sm:h-11"
            />
            <span className="brand-label hidden xl:inline">
              BACKPACK
              <br />
              WANDER GMBH
            </span>
          </Link>

          <div className="nav-bar-links hidden shrink-0 items-center gap-1.5 lg:flex xl:gap-3 2xl:gap-5">
            {navigation.map((item) => {
              const isExternal = /^(https?:)?\/\//.test(item.href);
              const isHomeLink = item.id === 'home';

              if (isExternal) {
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseDown={(e) => (e.currentTarget as HTMLElement).blur()}
                    className="nav-link nav-link-muted focus:outline-none focus-visible:outline-none focus-visible:ring-0"
                  >
                    {item.label}
                  </a>
                );
              }

              return (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClickEvent(e, item.href)}
                  onMouseDown={(e) => (e.currentTarget as HTMLElement).blur()}
                  className={navLinkClass(isHomeLink)}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className="nav-bar-actions flex shrink-0 items-center justify-end lg:ml-0 ml-auto">
            <div className="relative hidden lg:block" ref={languageDropdownRef}>
              <button
                type="button"
                onClick={() => setLanguageOpen((value) => !value)}
                onMouseDown={(e) => (e.currentTarget as HTMLElement).blur()}
                className="nav-lang-button inline-flex shrink-0 items-center gap-1.5 rounded-lg px-2.5 py-1.5 focus:outline-none focus-visible:outline-none focus-visible:ring-0 xl:px-3"
                aria-expanded={languageOpen}
                aria-haspopup="listbox"
                aria-label={`${selectedLanguage.label} — ${content.nav.selectLanguage}`}
              >
                <LanguageFlag code={selectedLanguage.code} />
                <span className="hidden xl:inline">{selectedLanguage.label}</span>
                <span className="xl:hidden">{selectedLanguage.shortLabel}</span>
                <ChevronDown className={`h-3.5 w-3.5 shrink-0 transition ${languageOpen ? 'rotate-180' : ''}`} />
              </button>
              {languageOpen ? languageDropdownPanel : null}
            </div>

            <button
              type="button"
              className={`nav-menu-toggle inline-flex items-center justify-center rounded-lg border p-2 focus:outline-none focus-visible:outline-none focus-visible:ring-0 lg:hidden ${
                open ? 'nav-menu-toggle-open' : ''
              }`}
              onClick={() => setOpen((value) => !value)}
              onMouseDown={(e) => (e.currentTarget as HTMLElement).blur()}
              aria-label="Toggle navigation"
              aria-expanded={open}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        {open ? (
          <div className="nav-mobile-drawer lg:hidden" role="dialog" aria-modal="true" aria-label="Mobile navigation">
            <ul className="nav-mobile-list">
              {navigation.map((item) => {
                const isExternal = /^(https?:)?\/\//.test(item.href);
                const isHomeLink = item.id === 'home';

                if (isExternal) {
                  return (
                    <li key={item.id}>
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setOpen(false)}
                        onMouseDown={(e) => (e.currentTarget as HTMLElement).blur()}
                        className="nav-mobile-link nav-mobile-link-idle focus:outline-none focus-visible:outline-none focus-visible:ring-0"
                      >
                        <span>{item.label}</span>
                        <ArrowUpRight className="nav-mobile-link-icon" strokeWidth={1.75} aria-hidden />
                      </a>
                    </li>
                  );
                }

                return (
                  <li key={item.id}>
                    <Link
                      href={item.href}
                      onClick={(e) => {
                        handleNavClickEvent(e as unknown as React.MouseEvent, item.href);
                        setOpen(false);
                      }}
                      onMouseDown={(e) => (e.currentTarget as HTMLElement).blur()}
                      className={mobileLinkClass(isHomeLink)}
                    >
                      <span>{item.label}</span>
                      <ChevronRight className="nav-mobile-link-icon" strokeWidth={1.75} aria-hidden />
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="nav-mobile-footer">
              <p className="nav-mobile-section-label">{content.nav.language}</p>
              <div className="nav-mobile-lang-switch" role="listbox" aria-label={content.nav.selectLanguage}>
                {options.map((option) => (
                  <button
                    key={option.code}
                    type="button"
                    role="option"
                    aria-selected={language === option.code}
                    onClick={() => {
                      handleLanguageSelect(option.code);
                      setOpen(false);
                    }}
                    onMouseDown={(e) => (e.currentTarget as HTMLElement).blur()}
                    className={`nav-mobile-lang-btn focus:outline-none focus-visible:outline-none focus-visible:ring-0 ${
                      language === option.code ? 'nav-mobile-lang-btn-active' : 'nav-mobile-lang-btn-idle'
                    }`}
                  >
                    <LanguageFlag code={option.code} className="h-4 w-6 shrink-0 overflow-hidden rounded-sm" />
                    <span>{option.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
