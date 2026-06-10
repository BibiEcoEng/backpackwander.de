import { siteConfig } from '@/lib/site';
import type { Locale } from '@/lib/routing';

export type PageKey =
  | 'home'
  | 'about'
  | 'contact'
  | 'deployment-model'
  | 'privacy'
  | 'terms'
  | 'impressum';

export const pagePaths: Record<PageKey, string> = {
  home: '/',
  about: '/about',
  contact: '/contact',
  'deployment-model': '/deployment-model',
  privacy: '/privacy',
  terms: '/terms',
  impressum: '/impressum'
};

const germanDescription =
  'Backpack Wander GmbH bietet Qualitätssicherungsleistungen, Qualitätskontrollleistungen, QA/QC-Engineering, Inspektionssupport und Inbetriebnahme-Support für Offshore-Wind-, Schwerfertigungs- und industrielle Bauprojekte weltweit.';

export const pageMetadata: Record<PageKey, Record<Locale, { title: string; description: string }>> = {
  home: {
    en: {
      title: 'Industrial Engineering Oversight | Backpack Wander GmbH',
      description: siteConfig.description
    },
    de: {
      title: 'Industrielle Engineering-Überwachung | Backpack Wander GmbH',
      description: germanDescription
    }
  },
  about: {
    en: {
      title: 'About | Backpack Wander GmbH',
      description: 'Industrial engineering oversight, QA/QC discipline, and technical project support built on field experience.'
    },
    de: {
      title: 'Über uns | Backpack Wander GmbH',
      description:
        'Industrielle technische Überwachung, QA/QC-Disziplin und Projektunterstützung auf Grundlage praktischer Felderfahrung.'
    }
  },
  contact: {
    en: {
      title: 'Contact | Backpack Wander GmbH',
      description:
        'Contact Backpack Wander GmbH for QA/QC oversight, offshore wind support, documentation control, and industrial engineering coordination.'
    },
    de: {
      title: 'Kontakt | Backpack Wander GmbH',
      description:
        'Kontaktieren Sie Backpack Wander GmbH für QA/QC-Überwachung, Offshore-Wind-Support, Dokumentationssteuerung und technische Koordination.'
    }
  },
  'deployment-model': {
    en: {
      title: 'Deployment Model | Backpack Wander GmbH',
      description:
        'A primary industrial quality division supported by a secondary digital division for technical delivery and documentation.'
    },
    de: {
      title: 'Einsatzmodell | Backpack Wander GmbH',
      description:
        'Eine primäre industrielle Qualitätsdivision, unterstützt durch eine digitale Sekundärdivision für technische Lieferung und Dokumentation.'
    }
  },
  privacy: {
    en: {
      title: 'Privacy Policy | Backpack Wander GmbH',
      description:
        'How Backpack Wander GmbH processes personal data in accordance with applicable data protection laws, including the GDPR.'
    },
    de: {
      title: 'Datenschutz | Backpack Wander GmbH',
      description:
        'Wie Backpack Wander GmbH personenbezogene Daten gemäß den geltenden Datenschutzgesetzen, einschließlich der DSGVO, verarbeitet.'
    }
  },
  terms: {
    en: {
      title: 'Terms & Conditions | Backpack Wander GmbH',
      description: 'General terms and conditions for services and offers of Backpack Wander GmbH.'
    },
    de: {
      title: 'Nutzungsbedingungen | Backpack Wander GmbH',
      description: 'Allgemeine Geschäftsbedingungen für Dienstleistungen und Angebote der Backpack Wander GmbH.'
    }
  },
  impressum: {
    en: {
      title: 'Impressum | Backpack Wander GmbH',
      description: 'Legal disclosure and company information for Backpack Wander GmbH, Berlin, Germany.'
    },
    de: {
      title: 'Impressum | Backpack Wander GmbH',
      description: 'Rechtliche Angaben und Unternehmensinformationen der Backpack Wander GmbH, Berlin.'
    }
  }
};

export function getPageSeo(locale: Locale, page: PageKey) {
  return pageMetadata[page][locale];
}
