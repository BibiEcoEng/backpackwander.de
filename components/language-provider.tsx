'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { defaultLocale } from '@/lib/routing';
import { languageOptions, translations, type LanguageCode, type LanguageOption, type Translations } from '@/lib/translations';

type PlainObject = Record<string, unknown>;

function isPlainObject(value: unknown): value is PlainObject {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function deepMerge<T extends PlainObject>(base: T, override?: Partial<T>): T {
  if (!override) return base;

  const result: PlainObject = { ...base };

  for (const key of Object.keys(override)) {
    const baseVal = base[key];
    const overVal = override[key as keyof T];

    if (overVal === undefined) continue;

    if (isPlainObject(baseVal) && isPlainObject(overVal)) {
      result[key] = deepMerge(baseVal, overVal as Partial<typeof baseVal>);
    } else {
      result[key] = overVal;
    }
  }

  return result as T;
}

type LanguageContextValue = {
  language: LanguageCode;
  setLanguage: (language: LanguageCode) => void;
  options: LanguageOption[];
  content: Translations;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children, initialLanguage = defaultLocale }: { children: React.ReactNode; initialLanguage?: LanguageCode }) {
  const [language, setLanguageState] = useState<LanguageCode>(initialLanguage);

  useEffect(() => {
    setLanguageState(initialLanguage);
  }, [initialLanguage]);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const option = languageOptions.find((item) => item.code === language);
    document.documentElement.lang = option?.htmlLang ?? defaultLocale;
  }, [language]);

  const value = useMemo<LanguageContextValue>(() => {
    const merged = deepMerge(translations.en as Translations, translations[language] as Partial<Translations>);

    return {
      language,
      setLanguage: setLanguageState,
      options: languageOptions,
      content: merged
    };
  }, [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }

  return context;
}