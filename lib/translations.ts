export type LanguageCode = 'en' | 'de';

export type LanguageOption = {
  code: LanguageCode;
  flag: string;
  label: string;
  shortLabel: string;
  htmlLang: string;
};

export const languageOptions: LanguageOption[] = [
  {
    code: 'en',
    flag: 'us',
    label: 'English',
    shortLabel: 'EN',
    htmlLang: 'en'
  },
  {
    code: 'de',
    flag: 'de',
    label: 'German',
    shortLabel: 'DE',
    htmlLang: 'de'
  }
];

export const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      industries: 'Industries',
      pipelineQuality: 'Pipeline Quality',
      bwDigit: 'BW Digit',
      deployment: 'Our Deployment Model',
      contact: 'Contact',
      ecosystem: 'Our Technical Ecosystem',
      language: 'Language',
      selectLanguage: 'Select language'
    },
    hero: {
      headline: 'Engineering Support for Offshore & Industrial Projects',
      subheadline: 'Backpack Wander GmbH provides quality assurance, quality control, inspection',
      subheadline2: 'support and project coordination services across offshore, energy,',
      subheadline3: 'manufacturing and industrial sectors.',
      joinNetwork: 'Join the Network',
      ctaDiscuss: 'Discuss Your Project',
      ctaExplore: 'Explore Services'
    },
    servicesSection: {
      title: 'Quality, Inspection & Project Support',
      titleLinesMobile: ['Quality, Inspection &', 'Project Support'],
      technicalOperations: 'Technical Operations',
      professionalResources: 'Professional Resources',
      technicalItems: [
        'QA/QC Support',
        'Inspection Services',
        'Manufacturing Surveillance',
        'Documentation & Compliance',
        'Project Coordination',
        'Commissioning Support'
      ],
      resourceItems: [
        'QA/QC Engineers',
        'Inspectors',
        'HSE Professionals',
        'Technical Specialists',
        'Remote & On-Site Support'
      ],
      cta: 'Discuss Your Project'
    },
    industriesSection: {
      eyebrow: 'INDUSTRIES',
      title: 'Sectors We Secure',
      items: [
        { id: 'IND-01', title: 'Offshore Wind' },
        { id: 'IND-02', title: 'Oil & Gas' },
        { id: 'IND-03', title: 'Petrochemical' },
        { id: 'IND-04', title: 'Manufacturing' },
        { id: 'IND-05', title: 'Energy Infrastructure' },
        { id: 'IND-06', title: 'Data Centers' }
      ]
    },
    pipelineSection: {
      pipeline: {
        eyebrow: 'PIPELINE QUALITY',
        title: 'Pipeline Quality — Specialized Industrial Engineering',
        paragraphs: [
          'Focused on QA/QC, inspections, quality assurance and engineering support.',
          'Pipeline Quality works closely with BW Digit where digital reporting, inspection tools and project dashboards are required.'
        ],
        visit: 'Visit Pipeline Quality',
        imageAlt: 'Pipeline Quality'
      },
      bwDigit: {
        eyebrow: 'DIGITAL SOLUTIONS',
        title: 'BW Digit — Industrial Digital Solutions',
        paragraphs: [
          'Backpack Wander GmbH supports industrial projects with practical digital tools designed to improve reporting, documentation and field communication.',
          'These solutions are developed specifically for engineering environments and integrated into real project workflows where efficiency, accuracy and traceability are essential.'
        ],
        visit: 'Visit BW Digit'
      },
      collaboration: {
        title: 'Building Projects Through Expertise & Collaboration',
        subtitle:
          'Backpack Wander GmbH connects industrial expertise with a flexible professional network across Europe. We work with both:',
        clients: {
          eyebrow: 'Industrial Clients',
          text: 'Companies requiring QA/QC support, inspection services\nand project-based engineering expertise\nacross offshore wind, energy and industrial sectors.',
          cta: 'Discuss Your Project'
        },
        network: {
          eyebrow: 'Engineering Support',
          text: 'Experienced engineers, inspectors and technical specialists collaborating on project-based assignments both on-site and remotely.',
          cta: 'Join Our Network'
        }
      }
    },
    homeContact: {
      eyebrow: 'CONTACT',
      title: "Let's Discuss Your Project",
      introLines: [
        'Backpack Wander GmbH supports offshore and industrial projects',
        'through Pipeline Quality, with digital services delivered by BW Digit.',
        'Response within 24 business hours'
      ],
      introLinesMobile: [
        'Backpack Wander GmbH supports offshore and industrial projects through Pipeline Quality, with digital services delivered by BW Digit.',
        'Response within 24 business hours'
      ],
      discussProject: 'Discuss Your Project',
      joinNetwork: 'Join Our Network',
      fullName: 'Full Name',
      company: 'Company',
      companyEmail: 'Company Email',
      message: 'Message'
    },
    supportGateway: {
      button: 'Request Technical Support',
      eyebrow: 'Industrial Gateway',
      title: 'Select the technical division that fits your project',
      continue: 'Continue',
      closeAria: 'Close support gateway',
      options: [
        {
          title: 'Pipeline Quality',
          description: 'Primary QA/QC, inspection, and commissioning oversight for offshore wind, pipelines, refineries, and heavy industry.',
          url: 'https://pipelinequality.com'
        },
        {
          title: 'BW Digit',
          description: 'Web design, development, applications, data systems, and business digitalization services.',
          url: 'https://bwdigit.com'
        },
        {
          title: 'Corporate Enquiries',
          description: 'Direct industrial project discussions, partnership requests, and technical scope reviews.',
          url: '#contact'
        }
      ]
    },
    about: {
      headline: 'Built Through Real Industrial Experience',
      content: [
        'Currently supporting large-scale offshore wind foundation manufacturing projects in Europe while building a trusted network of engineering professionals.',
        'Our experience spans offshore energy, manufacturing, oil &\ngas, petrochemical and industrial construction environments.'
      ],
      recentProjectEnvironment: {
        title: 'Recent Project Environment',
        items: [
          'Offshore Wind Foundations',
          'Monopiles & Transition Pieces',
          'Manufacturing Surveillance',
          'Dimensional Control',
          'Welding & NDT Coordination',
          'Documentation Review',
          'Quality Reporting'
        ]
      }
    },
    infrastructure: {
      eyebrow: 'Industries We Support',
      title: 'Built for the Work That Demands Precision',
      subtitle:
        'From renewable energy to mission-critical infrastructure, our support model is designed for complex industrial environments where reliability, compliance, and execution matter most.',
      intro:
        'We operate internationally across Europe, North America, the Middle East, Africa, and Asia-Pacific — supporting complex industrial, energy, infrastructure, and mission-critical projects.',
      categories: [
        {
          title: 'Offshore Wind & Energy Infrastructure',
          description:
            'Supporting offshore and renewable energy projects through QA/QC oversight, structural inspection support, offshore documentation control, contractor coordination, and asset integrity workflows.'
        },
        {
          title: 'Pipelines, Refineries & Heavy Industry',
          description:
            'Delivering robust quality assurance and inspection support through welding surveillance, coating inspection, NDT coordination, hydrotest support, ITP verification, turnover documentation, and standards compliance.'
        },
        {
          title: 'Mission-Critical Data Centers',
          description:
            'Supporting hyperscale and mission-critical facilities through QA/QC oversight, mechanical completion tracking, FAT/SAT coordination, commissioning support, and construction quality management.'
        },
        {
          title: 'Industrial Project Support & Digital Coordination',
          description:
            'Reducing operational bottlenecks through structured reporting systems, QA/QC tracking workflows, documentation coordination, turnover management, and practical digital tools built around real field operations.'
        }
      ]
    },
    standards: {
      title: 'Standards, Compliance & Global Deployment',
      workWith: 'Standards We Work With',
      globalTitle: 'Global Technical Deployment Network',
      globalDescription:
        'Backpack Wander GmbH provides compliant international B2B subcontracting through a trusted German GmbH structure. We connect companies with vetted independent inspectors, engineers, QA/QC specialists, and commissioning professionals ready for rapid international deployment.',
      regions: ['Europe & North America', 'Middle East & Africa', 'Asia-Pacific'],
      list: ['ISO', 'ASME', 'API', 'AWS', 'IEC', 'EN Standards', 'NORSOK', 'Client Specifications', 'Project-Specific QA/QC Procedures']
    },
    deployment: {
      pageTitle: 'Our Deployment Model',
      pageDescription:
        'A primary industrial quality division supported by a secondary digital division for technical delivery and documentation.',
      enterpriseEyebrow: 'Primary Division',
      enterpriseTitle: 'For Enterprise Clients',
      enterpriseDescription:
        'Need experienced technical reinforcement for industrial projects? We help companies solve inspection gaps, workforce shortages, commissioning pressure, and project bottlenecks by connecting them with trusted field professionals ready for on-site or remote deployment. Our German GmbH structure enables compliant international collaboration with minimal administrative friction across cross-border industrial projects.',
      expertsEyebrow: 'Supporting Division',
      expertsTitle: 'For Independent Experts',
      expertsDescription:
        'Operate your freelance business through a trusted international engineering network built around real field experience. We connect independent QA/QC inspectors, engineers, commissioning specialists, coordinators, and HSE professionals with industrial and energy projects worldwide — while supporting transparent collaboration, fair contract structures, and compliant B2B engagement.'
    },
    closing: {
      eyebrow: 'Technical Oversight',
      headline: "Let's Discuss Your Project",
      description:
        'Whether you need offshore wind inspection support, pipeline quality control, industrial documentation, or on-site engineering oversight, Backpack Wander GmbH supports complex industrial delivery with a disciplined corporate framework.',
      joinNetwork: 'Contact the Team'
    },
    footer: {
      brandDescription:
        'Industrial engineering oversight, QA/QC, and offshore wind support. Technical documentation and project coordination for international industrial delivery.',
      brandDescriptionLines: [
        'Industrial engineering oversight, QA/QC, and offshore wind support.',
        'Technical documentation and project coordination for international industrial delivery.'
      ],
      navigation: 'Explore',
      companyName: 'Backpack Wander GmbH',
      divisions: 'Company Divisions',
      companyDivisions: 'Company Divisions',
      highlights: ['Industrial Engineering', 'Quality Assurance', 'Project Support'],
      company: 'Company',
      contactLegal: 'Email',
      contactNote: 'Response within 24 business hours',
      addressLabel: 'Address',
      address: 'Kolonnenstraße 8, 10827 Berlin, Germany',
      addressLines: ['Kolonnenstraße 8, 10827 Berlin, Germany'],
      email: 'Email',
      phone: 'Phone Number',
      whatsapp: 'WhatsApp',
      legal: 'Legal',
      links: {
        about: 'About Us',
        industries: 'Industries',
        contact: 'Contact',
        privacy: 'Privacy Policy',
        terms: 'Terms & Conditions',
        impressum: 'Impressum',
        privacyShort: 'Privacy',
        termsShort: 'Terms',
        impressumShort: 'Impressum'
      },
      rights: '© 2026 Backpack Wander GmbH. All rights reserved.',
      divisionDescriptions: {
        'Pipeline Quality': 'Primary industrial quality and oversight division',
        'BW Digit': 'Modern digital services — web, apps, and business digitalization'
      }
    },
    contactPage: {
      title: "Let's Discuss Your Project",
      subtitle:
        'Whether you need offshore wind inspection support, pipeline quality control, industrial documentation, or on-site engineering oversight, Backpack Wander GmbH supports complex industrial delivery with a disciplined corporate framework.'
      ,
      card: {
        projectCoordinationTitle: 'Project Coordination',
        officeLabel: 'Office',
        officeLines: ['Backpack Wander GmbH', 'Registered in Germany'],
        responseWindowLabel: 'Response Window',
        responseWindowText: 'Within 24 business hours',
        emailLabel: 'Email',
        focusLabel: 'Focus',
        focusText: 'QA/QC, offshore wind, pipeline quality, documentation, and engineering oversight.',
        primaryDivisionTitle: 'Primary Division',
        primaryDivisionText:
          'Pipeline Quality is the core industrial quality and oversight division, focused on execution control, reporting discipline, and site verification.',
        sendEnquiryTitle: 'Send a Technical Enquiry',
        sendEnquirySubtitle: 'Share the project scope, location, and timeline. We will respond with a suitable technical path.'
      }
    },
    privacyPage: {
      title: 'Privacy Policy',
      subtitle: 'Your trust and data security are paramount to us.',
      sections: [
        {
          title: '1. General Information',
          paragraphs: [
            'Backpack Wander GmbH takes the protection of personal data seriously and processes personal data in accordance with applicable data protection laws, including the GDPR.'
          ]
        },
        {
          title: '2. Responsible Entity',
          addressLines: ['Backpack Wander GmbH', 'Kolonnenstraße 8', '10827 Berlin', 'Germany'],
          emailLabel: 'Email:',
          email: 'info@backpackwander.com'
        },
        {
          title: '3. Data Processing & Your Rights',
          paragraphs: [
            'This Privacy Policy applies to all services and brands operated by Backpack Wander GmbH, including the Pipeline Quality brand.'
          ],
          listHeading: 'Legal Basis for Data Processing (Art. 6 GDPR):',
          listItems: [
            'Art. 6(1)(b) GDPR - performance of a contract or pre-contractual measures',
            'Art. 6(1)(f) GDPR - legitimate interest',
            'Art. 6(1)(a) GDPR - consent, where applicable'
          ],
          closingParagraphs: [
            'Personal data submitted via contact forms or file uploads is processed solely to handle inquiries and project-related communication.',
            "Communication via WhatsApp is subject to WhatsApp's privacy policy and used exclusively for business purposes.",
            'We use Google Analytics to analyze website usage. Data processing is based on consent.',
            'Data is stored only as long as necessary or required by statutory retention obligations.'
          ]
        },
        {
          title: '4. Your Rights',
          paragraphs: [
            'You have the right to access, rectification, erasure, restriction, data portability and objection.'
          ],
          requestsLabel: 'Requests:',
          email: 'info@backpackwander.com'
        }
      ]
    },
    impressumPage: {
      title: 'Impressum',
      sections: [
        {
          title: 'Company Information',
          fields: [
            { label: 'Company Name:', value: 'Backpack Wander GmbH' },
            { label: 'Address:', value: 'Kolonnenstraße 8, 10827 Berlin, Germany' },
            { label: 'Email:', value: 'info@backpackwander.com', isEmail: true },
            { label: 'Commercial Register:', value: 'HRB 282058 B' },
            { label: 'Register Court:', value: 'Charlottenburg Commercial Court, Berlin' },
            { label: 'Managing Director:', value: 'Biljana Habel' }
          ]
        },
        {
          title: 'Business Description',
          paragraphs: [
            'Backpack Wander GmbH provides specialized QA/QC engineering services and digital tools for the construction industry.'
          ],
          listHeading: 'Our two main service pillars are:',
          listItems: [
            'Pipeline Quality: Engineering and QA/QC services including welding traceability, documentation, site inspections, and ISO compliance',
            'BW Digit: Digital tools and automation solutions for construction site documentation and management'
          ]
        },
        {
          title: 'Liability Notice',
          paragraphs: [
            'Despite careful monitoring of content, we as operators of this website are not responsible for the content of external links. The responsibility for the content of linked pages always lies with the respective provider or operator of the pages. At the time of linking, the linked pages were checked for possible violations of law. No illegal content was apparent at that time. However, continuous monitoring of the content of linked pages without specific evidence of infringement is not reasonable. If we become aware of any infringements, we will remove such links immediately.'
          ]
        },
        {
          title: 'Copyright',
          paragraphs: [
            '© 2026 Backpack Wander GmbH. All rights reserved. The content and structure of this website, including text, images, graphics, and their arrangement, are protected by copyright. Reproduction or use of these elements without express permission is prohibited.'
          ]
        }
      ]
    },
    termsPage: {
      title: 'Terms & Conditions',
      subtitle: 'Please read these terms and conditions carefully before using our services.',
      sections: [
        {
          title: 'General Terms',
          paragraphs: [
            'These General Terms and Conditions apply to all services and offers of Backpack Wander GmbH.',
            'Backpack Wander GmbH provides, in particular, the following services:'
          ],
          listItems: [
            'Consulting for individuals and companies',
            'QA/QC documentation support and engineering services',
            'Project-related remote and on-site support',
            'Services in the areas of marketing, digital products, and online offerings',
            'Sale of digital products and merchandise'
          ],
          closingParagraphs: [
            'The services are provided under various brands of Backpack Wander GmbH, including the Pipeline Quality brand.',
            'The contractual partner is exclusively Backpack Wander GmbH, unless expressly agreed otherwise.'
          ]
        },
        {
          title: 'Our Services',
          paragraphs: [
            'Backpack Wander GmbH provides digital business consulting, web design, and digital marketing services.',
            'We reserve the right to modify or discontinue any service at any time without notice.'
          ]
        },
        {
          title: 'User Obligations',
          paragraphs: [
            'Users must provide accurate information and use our services in compliance with applicable laws.',
            'You are responsible for maintaining the confidentiality of your account information.'
          ]
        },
        {
          title: 'Limitation of Liability',
          paragraphs: [
            'The liability of Backpack Wander GmbH is limited to intent and gross negligence, to the extent permitted by law.',
            'Liability for indirect damages or lost profits is excluded, to the extent permitted by law.',
            'The laws of the Federal Republic of Germany apply.',
            "The place of jurisdiction is - to the extent permitted by law - the company's registered office."
          ]
        }
      ]
    },
    contactForm: {
      name: 'Name',
      email: 'Email',
      company: 'Company',
      message: 'Message',
      namePlaceholder: 'Your name',
      emailPlaceholder: 'you@company.com',
      companyPlaceholder: 'Organization name',
      messagePlaceholder: 'Tell us about the project scope, location, and timeline.',
      sending: 'Sending…',
      send: "Let's Talk",
      success: 'Your inquiry has been received.',
      error: 'Something went wrong. Please try again.'
    },
    industriesShowcase: {
      eyebrow: 'Industrial Sectors',
      title: 'Where Pipeline Quality Delivers',
      subtitle: 'From offshore wind fabrication to refineries and critical infrastructure, we support industrial projects where precision, documentation, and control matter most.',
      industries: [
        {
          title: 'Offshore Wind & Renewables',
          description: 'Monopiles, offshore structures, subsea assets, and fabrication oversight'
        },
        {
          title: 'Pipelines & Refineries',
          description: 'Welding surveillance, coating inspection, and integrity documentation'
        },
        {
          title: 'Heavy Industry',
          description: 'Fabrication halls, structural checks, lifting operations, and dimensional control'
        },
        {
          title: 'Critical Facilities',
          description: 'Technical oversight for mission-critical environments and delivery control'
        },
        {
          title: 'Technical Field Oversight',
          description: 'QA/QC coordination, inspection reporting, and site discipline'
        },
        {
          title: 'Industrial Documentation',
          description: 'Reporting workflows, technical records, and handover documentation'
        }
      ]
    }
    ,
    imageCarousel: {
      eyebrow: 'Industrial Portfolio',
      title: 'Industrial Delivery & Deployment',
      cta: 'Explore Projects',
      slides: [
        {
          title: 'Field Inspections & QA/QC',
          description: 'On-site QA/QC inspections, technical surveys and inspection reports to ensure compliance and safety.',
          cta: 'View Field Inspections'
        },
        {
          title: 'Offshore Monopile Projects',
          description: 'End-to-end monopile fabrication, load-out and offshore installation support for renewable energy projects.',
          cta: 'View Offshore Projects'
        },
        {
          title: 'Industrial Coordination & Reporting',
          description: 'Digital coordination systems, QA/QC reporting, and management dashboards for industrial execution.',
          cta: 'Explore Coordination'
        },
        {
          title: 'Pipeline Inspection & QA/QC',
          description: 'Inline inspection, coating verification and pressure testing management for pipeline integrity and compliance.',
          cta: 'Inspect Pipelines'
        },
        {
          title: 'Field Team Coordination',
          description: 'On-site coordination and technical oversight that keeps projects on schedule and within specification.',
          cta: 'View Field Coordination'
        },
        {
          title: 'Data Center Infrastructure',
          description: 'Deployment support for mission-critical infrastructure including power, cooling and structured cabling.',
          cta: 'Explore Data Centers'
        },
        {
          title: 'Quality Monitoring & Critical Facilities',
          description: 'Precision monitoring, documentation control and operational oversight for mission-critical environments.',
          cta: 'See Monitoring'
        },
        {
          title: 'Project Management & Coordination',
          description: 'End-to-end project delivery, scheduling and stakeholder coordination to reduce risk and ensure milestones.',
          cta: 'View Project Management'
        },
        {
          title: 'Industrial Operations',
          description: 'Operations support, maintenance planning and continuous improvement programs for industrial sites.',
          cta: 'Explore Operations'
        },
        {
          title: 'Technical Deployment & Commissioning',
          description: 'Deployment engineering, commissioning and technical mobilisation to bring systems online reliably.',
          cta: 'See Deployment Support'
        }
      ]
    }
  },
  de: {
    nav: {
      home: 'Startseite',
      about: 'Über uns',
      services: 'Leistungen',
      industries: 'Branchen',
      pipelineQuality: 'Pipeline Quality',
      bwDigit: 'BW Digit',
      deployment: 'Unser Einsatzmodell',
      contact: 'Kontakt',
      ecosystem: 'Unser technisches Ökosystem',
      language: 'Sprache',
      selectLanguage: 'Sprache auswählen'
    },
    hero: {
      headline: 'Engineering-Unterstützung für Offshore- & Industrieprojekte',
      subheadline: 'Backpack Wander GmbH bietet Qualitätssicherung, Qualitätskontrolle, Inspektion',
      subheadline2: 'support und Projektkoordination in den Bereichen Offshore, Energie,',
      subheadline3: 'Fertigung und Industrie.',
      joinNetwork: 'Dem Netzwerk beitreten',
      ctaDiscuss: 'Projekt besprechen',
      ctaExplore: 'Leistungen entdecken'
    },
    servicesSection: {
      title: 'Qualität, Inspektion & Projektsupport',
      titleLinesMobile: ['Qualität, Inspektion &', 'Projektsupport'],
      technicalOperations: 'Technische Operationen',
      professionalResources: 'Professionelle Ressourcen',
      technicalItems: [
        'QA/QC-Unterstützung',
        'Inspektionsleistungen',
        'Fertigungsüberwachung',
        'Dokumentation & Compliance',
        'Projektkoordination',
        'Inbetriebnahme-Support'
      ],
      resourceItems: [
        'QA/QC-Ingenieure',
        'Inspektoren',
        'HSE-Fachkräfte',
        'Technische Spezialisten',
        'Remote- & Vor-Ort-Support'
      ],
      cta: 'Projekt besprechen'
    },
    industriesSection: {
      eyebrow: 'BRANCHEN',
      title: 'Branchen, die wir absichern',
      items: [
        { id: 'IND-01', title: 'Offshore-Wind' },
        { id: 'IND-02', title: 'Öl & Gas' },
        { id: 'IND-03', title: 'Petrochemie' },
        { id: 'IND-04', title: 'Fertigung' },
        { id: 'IND-05', title: 'Energieinfrastruktur' },
        { id: 'IND-06', title: 'Rechenzentren' }
      ]
    },
    pipelineSection: {
      pipeline: {
        eyebrow: 'PIPELINE QUALITY',
        title: 'Pipeline Quality — Spezialisiertes Industrie-Engineering',
        paragraphs: [
          'Fokus auf QA/QC, Inspektionen, Qualitätssicherung und technische Unterstützung.',
          'Pipeline Quality arbeitet eng mit BW Digit zusammen, wenn digitales Reporting, Inspektionswerkzeuge und Projekt-Dashboards erforderlich sind.'
        ],
        visit: 'Pipeline Quality besuchen',
        imageAlt: 'Pipeline Quality'
      },
      bwDigit: {
        eyebrow: 'DIGITALE LÖSUNGEN',
        title: 'BW Digit — Industrielle Digitale Lösungen',
        paragraphs: [
          'Backpack Wander GmbH unterstützt Industrieprojekte mit praxisnahen digitalen Tools zur Verbesserung von Reporting, Dokumentation und Feldkommunikation.',
          'Diese Lösungen werden speziell für Engineering-Umgebungen entwickelt und in reale Projekt-Workflows integriert, in denen Effizienz, Genauigkeit und Nachverfolgbarkeit entscheidend sind.'
        ],
        visit: 'BW Digit besuchen'
      },
      collaboration: {
        title: 'Projekte durch Expertise & Zusammenarbeit aufbauen',
        subtitle:
          'Backpack Wander GmbH verbindet industrielle Expertise mit einem flexiblen Fachkräftenetzwerk in Europa. Wir arbeiten mit beiden:',
        clients: {
          eyebrow: 'Industriekunden',
          text: 'Unternehmen, die QA/QC-Support, Inspektionsleistungen\nund projektbasierte Engineering-Expertise\nin Offshore-Wind-, Energie- und Industriesektoren benötigen.',
          cta: 'Projekt besprechen'
        },
        network: {
          eyebrow: 'Engineering-Unterstützung',
          text: 'Erfahrene Ingenieure, Inspektoren und technische Spezialisten, die projektbasiert vor Ort und remote zusammenarbeiten.',
          cta: 'Unserem Netzwerk beitreten'
        }
      }
    },
    homeContact: {
      eyebrow: 'KONTAKT',
      title: 'Lassen Sie uns über Ihr Projekt sprechen',
      introLines: [
        'Backpack Wander GmbH unterstützt Offshore- und Industrieprojekte',
        'über Pipeline Quality, mit digitalen Dienstleistungen von BW Digit.',
        'Antwort innerhalb von 24 Geschäftsstunden'
      ],
      introLinesMobile: [
        'Backpack Wander GmbH unterstützt Offshore- und Industrieprojekte über Pipeline Quality, mit digitalen Dienstleistungen von BW Digit.',
        'Antwort innerhalb von 24 Geschäftsstunden'
      ],
      discussProject: 'Projekt besprechen',
      joinNetwork: 'Unserem Netzwerk beitreten',
      fullName: 'Vollständiger Name',
      company: 'Unternehmen',
      companyEmail: 'Geschäftliche E-Mail',
      message: 'Nachricht'
    },
    supportGateway: {
      button: 'Technischen Support anfordern',
      eyebrow: 'Industrielles Gateway',
      title: 'Wählen Sie die technische Division, die zu Ihrem Projekt passt',
      continue: 'Weiter',
      closeAria: 'Support-Gateway schließen',
      options: [
        {
          title: 'Pipeline Quality',
          description:
            'Primäre QA/QC-, Inspektions- und Inbetriebnahme-Überwachung für Offshore-Wind, Pipelines, Raffinerien und Schwerindustrie.',
          url: 'https://pipelinequality.com'
        },
        {
          title: 'BW Digit',
          description:
            'Webdesign, Entwicklung, Anwendungen, Datensysteme und Unternehmensdigitalisierung.',
          url: 'https://bwdigit.com'
        },
        {
          title: 'Unternehmensanfragen',
          description: 'Direkte Projektgespräche, Partnerschaftsanfragen und technische Umfangsprüfungen.',
          url: '#contact'
        }
      ]
    },
    about: {
      headline: 'Aufgebaut durch echte industrielle Erfahrung',
      content: [
        'Derzeit unterstützen wir groß angelegte Fertigungsprojekte für Offshore-Wind-Fundamente in Europa und bauen gleichzeitig ein vertrauenswürdiges Netzwerk von Ingenieurfachkräften auf.',
        'Unsere Erfahrung umfasst Offshore-Energie, Fertigung, Öl &\nGas, Petrochemie und industrielle Bauumgebungen.'
      ],
      recentProjectEnvironment: {
        title: 'Aktuelles Projektmilieu',
        items: [
          'Offshore-Wind-Fundamente',
          'Monopiles & Transition Pieces',
          'Fertigungsüberwachung',
          'Maßkontrolle',
          'Schweiß- & NDT-Koordination',
          'Dokumentenprüfung',
          'Qualitätsberichterstattung'
        ]
      }
    },
    infrastructure: {
      eyebrow: 'Branchen, die wir unterstützen',
      title: 'Ausgelegt für Arbeiten, die Präzision erfordern',
      subtitle:
        'Von erneuerbaren Energien bis zu mission-kritischer Infrastruktur ist unser Support-Modell für komplexe industrielle Umgebungen konzipiert, in denen Zuverlässigkeit, Compliance und Ausführung am wichtigsten sind.',
      intro:
        'Wir sind international in Europa, Nordamerika, dem Nahen Osten, Afrika und im asiatisch-pazifischen Raum tätig — und unterstützen komplexe Industrie-, Energie-, Infrastruktur- und mission-kritische Projekte.',
      categories: [
        {
          title: 'Offshore-Wind & Energieinfrastruktur',
          description:
            'Unterstützung von Offshore- und Erneuerbare-Energien-Projekten durch QA/QC-Überwachung, strukturelle Inspektionsunterstützung, Offshore-Dokumentationskontrolle, Auftragnehmerkoordination und Asset-Integrity-Workflows.'
        },
        {
          title: 'Pipelines, Raffinerien & Schwerindustrie',
          description:
            'Robuste Qualitätssicherung und Inspektionsunterstützung durch Schweißüberwachung, Beschichtungsinspektion, NDT-Koordination, Hydrotest-Support, ITP-Verifizierung, Turnover-Dokumentation und Normenkonformität.'
        },
        {
          title: 'Mission-kritische Rechenzentren',
          description:
            'Unterstützung von Hyperscale- und mission-kritischen Anlagen durch QA/QC-Überwachung, Mechanical-Completion-Tracking, FAT/SAT-Koordination, Inbetriebnahme-Support und Bauqualitätsmanagement.'
        },
        {
          title: 'Industrieller Projektsupport & digitale Koordination',
          description:
            'Reduzierung operativer Engpässe durch strukturierte Reporting-Systeme, QA/QC-Tracking-Workflows, Dokumentationskoordination, Turnover-Management und praxisnahe digitale Tools für reale Feldabläufe.'
        }
      ]
    },
    standards: {
      title: 'Standards, Compliance & globaler Einsatz',
      workWith: 'Standards, mit denen wir arbeiten',
      globalTitle: 'Globales technisches Einsatznetzwerk',
      globalDescription:
        'Backpack Wander GmbH bietet konforme internationale B2B-Subunternehmerleistungen über eine vertrauenswürdige deutsche GmbH-Struktur. Wir verbinden Unternehmen mit geprüften unabhängigen Inspektoren, Ingenieuren, QA/QC-Spezialisten und Inbetriebnahme-Fachkräften, die für einen schnellen internationalen Einsatz bereitstehen.',
      regions: ['Europa & Nordamerika', 'Naher Osten & Afrika', 'Asien-Pazifik'],
      list: ['ISO', 'ASME', 'API', 'AWS', 'IEC', 'EN-Standards', 'NORSOK', 'Kundenspezifikationen', 'Projektspezifische QA/QC-Verfahren']
    },
    deployment: {
      pageTitle: 'Unser Einsatzmodell',
      pageDescription:
        'Eine primäre industrielle Qualitätsdivision, unterstützt durch eine digitale Sekundärdivision für technische Lieferung und Dokumentation.',
      enterpriseEyebrow: 'Primäre Division',
      enterpriseTitle: 'Für Unternehmenskunden',
      enterpriseDescription:
        'Benötigen Sie erfahrene technische Verstärkung für Industrieprojekte? Wir helfen Unternehmen, Inspektionslücken, Personalmangel, Inbetriebnahmedruck und Projektengpässe zu lösen, indem wir sie mit vertrauenswürdigen Fachkräften verbinden, die für Vor-Ort- oder Remote-Einsätze bereitstehen. Unsere deutsche GmbH-Struktur ermöglicht konforme internationale Zusammenarbeit mit minimaler administrativer Reibung bei grenzüberschreitenden Industrieprojekten.',
      expertsEyebrow: 'Unterstützende Division',
      expertsTitle: 'Für unabhängige Experten',
      expertsDescription:
        'Führen Sie Ihr Freelance-Geschäft über ein vertrauenswürdiges internationales Engineering-Netzwerk auf Basis echter Felderfahrung. Wir verbinden unabhängige QA/QC-Inspektoren, Ingenieure, Inbetriebnahme-Spezialisten, Koordinatoren und HSE-Fachkräfte mit Industrie- und Energieprojekten weltweit — mit transparenter Zusammenarbeit, fairen Vertragsstrukturen und konformer B2B-Abwicklung.'
    },
    closing: {
      eyebrow: 'Technische Überwachung',
      headline: 'Lassen Sie uns über Ihr Projekt sprechen',
      description:
        'Ob Sie Unterstützung bei Offshore-Wind-Inspektionen, Pipeline-Qualitätskontrolle, industrieller Dokumentation oder technischer Überwachung vor Ort benötigen — Backpack Wander GmbH unterstützt komplexe industrielle Projekte mit einem disziplinierten Unternehmensrahmen.',
      joinNetwork: 'Team kontaktieren'
    },
    footer: {
      brandDescription:
        'Industrielle Engineering-Überwachung, QA/QC und Offshore-Wind-Support. Technische Dokumentation und Projektkoordination für internationale industrielle Projekte.',
      brandDescriptionLines: [
        'Industrielle Engineering-Überwachung, QA/QC und Offshore-Wind-Support.',
        'Technische Dokumentation und Projektkoordination für internationale industrielle Projekte.'
      ],
      navigation: 'Entdecken',
      companyName: 'Backpack Wander GmbH',
      divisions: 'Unternehmensbereiche',
      companyDivisions: 'Unternehmensbereiche',
      highlights: ['Industrielles Engineering', 'Qualitätssicherung', 'Projektsupport'],
      company: 'Unternehmen',
      contactLegal: 'E-Mail',
      contactNote: 'Antwort innerhalb von 24 Geschäftsstunden',
      addressLabel: 'Adresse',
      address: 'Kolonnenstraße 8, 10827 Berlin, Deutschland',
      addressLines: ['Kolonnenstraße 8, 10827 Berlin, Deutschland'],
      email: 'E-Mail',
      phone: 'Telefonnummer',
      whatsapp: 'WhatsApp',
      legal: 'Rechtliches',
      links: {
        about: 'Über uns',
        industries: 'Branchen',
        contact: 'Kontakt',
        privacy: 'Datenschutz',
        terms: 'Nutzungsbedingungen',
        impressum: 'Impressum',
        privacyShort: 'Datenschutz',
        termsShort: 'Bedingungen',
        impressumShort: 'Impressum'
      },
      rights: '© 2026 Backpack Wander GmbH. Alle Rechte vorbehalten.',
      divisionDescriptions: {
        'Pipeline Quality': 'Primäre industrielle Qualitäts- und Überwachungsdivision',
        'BW Digit': 'Moderne digitale Dienstleistungen — Web, Apps und Digitalisierung'
      }
    },
    contactPage: {
      title: 'Lassen Sie uns über Ihr Projekt sprechen',
      subtitle:
        'Ob Sie Unterstützung bei Offshore-Wind-Inspektionen, Pipeline-Qualitätskontrolle, industrieller Dokumentation oder technischer Überwachung vor Ort benötigen — Backpack Wander GmbH unterstützt komplexe industrielle Projekte mit einem disziplinierten Unternehmensrahmen.',
      card: {
        projectCoordinationTitle: 'Projektkoordination',
        officeLabel: 'Büro',
        officeLines: ['Backpack Wander GmbH', 'In Deutschland registriert'],
        responseWindowLabel: 'Antwortzeitraum',
        responseWindowText: 'Innerhalb von 24 Geschäftsstunden',
        emailLabel: 'E-Mail',
        focusLabel: 'Fokus',
        focusText: 'QA/QC, Offshore-Wind, Pipeline-Qualität, Dokumentation und Engineering-Überwachung.',
        primaryDivisionTitle: 'Primäre Division',
        primaryDivisionText:
          'Pipeline Quality ist die zentrale industrielle Qualitäts- und Überwachungsdivision mit Fokus auf Ausführungskontrolle, Reporting-Disziplin und Standortverifizierung.',
        sendEnquiryTitle: 'Technische Anfrage senden',
        sendEnquirySubtitle:
          'Teilen Sie Projektumfang, Standort und Zeitplan mit. Wir antworten mit einem passenden technischen Weg.'
      }
    },
    privacyPage: {
      title: 'Datenschutz',
      subtitle: 'Ihr Vertrauen und die Sicherheit Ihrer Daten sind uns wichtig.',
      sections: [
        {
          title: '1. Allgemeine Informationen',
          paragraphs: [
            'Backpack Wander GmbH nimmt den Schutz personenbezogener Daten ernst und verarbeitet personenbezogene Daten in Übereinstimmung mit den geltenden Datenschutzgesetzen, einschließlich der DSGVO.'
          ]
        },
        {
          title: '2. Verantwortliche Stelle',
          addressLines: ['Backpack Wander GmbH', 'Kolonnenstraße 8', '10827 Berlin', 'Deutschland'],
          emailLabel: 'E-Mail:',
          email: 'info@backpackwander.com'
        },
        {
          title: '3. Datenverarbeitung & Ihre Rechte',
          paragraphs: [
            'Diese Datenschutzerklärung gilt für alle Dienstleistungen und Marken von Backpack Wander GmbH, einschließlich der Marke Pipeline Quality.'
          ],
          listHeading: 'Rechtsgrundlage für die Datenverarbeitung (Art. 6 DSGVO):',
          listItems: [
            'Art. 6 Abs. 1 lit. b DSGVO – Vertragserfüllung oder vorvertragliche Maßnahmen',
            'Art. 6 Abs. 1 lit. f DSGVO – berechtigtes Interesse',
            'Art. 6 Abs. 1 lit. a DSGVO – Einwilligung, sofern anwendbar'
          ],
          closingParagraphs: [
            'Personenbezogene Daten, die über Kontaktformulare oder Datei-Uploads übermittelt werden, werden ausschließlich zur Bearbeitung von Anfragen und projektbezogener Kommunikation verarbeitet.',
            'Die Kommunikation über WhatsApp unterliegt der Datenschutzerklärung von WhatsApp und wird ausschließlich zu geschäftlichen Zwecken genutzt.',
            'Wir verwenden Google Analytics zur Analyse der Website-Nutzung. Die Datenverarbeitung erfolgt auf Grundlage einer Einwilligung.',
            'Daten werden nur so lange gespeichert, wie es erforderlich ist oder gesetzliche Aufbewahrungspflichten es verlangen.'
          ]
        },
        {
          title: '4. Ihre Rechte',
          paragraphs: [
            'Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit und Widerspruch.'
          ],
          requestsLabel: 'Anfragen:',
          email: 'info@backpackwander.com'
        }
      ]
    },
    impressumPage: {
      title: 'Impressum',
      sections: [
        {
          title: 'Unternehmensinformationen',
          fields: [
            { label: 'Firmenname:', value: 'Backpack Wander GmbH' },
            { label: 'Adresse:', value: 'Kolonnenstraße 8, 10827 Berlin, Deutschland' },
            { label: 'E-Mail:', value: 'info@backpackwander.com', isEmail: true },
            { label: 'Handelsregister:', value: 'HRB 282058 B' },
            { label: 'Registergericht:', value: 'Amtsgericht Charlottenburg, Berlin' },
            { label: 'Geschäftsführerin:', value: 'Biljana Habel' }
          ]
        },
        {
          title: 'Geschäftsbeschreibung',
          paragraphs: [
            'Backpack Wander GmbH bietet spezialisierte QA/QC-Engineering-Dienstleistungen und digitale Tools für die Bauindustrie.'
          ],
          listHeading: 'Unsere zwei Hauptdienstleistungsbereiche sind:',
          listItems: [
            'Pipeline Quality: Engineering- und QA/QC-Dienstleistungen einschließlich Schweißrückverfolgbarkeit, Dokumentation, Baustelleninspektionen und ISO-Konformität',
            'BW Digit: Digitale Tools und Automatisierungslösungen für Baustellendokumentation und -management'
          ]
        },
        {
          title: 'Haftungshinweis',
          paragraphs: [
            'Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir als Betreiber dieser Website keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Zum Zeitpunkt der Verlinkung wurden die verlinkten Seiten auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.'
          ]
        },
        {
          title: 'Urheberrecht',
          paragraphs: [
            '© 2026 Backpack Wander GmbH. Alle Rechte vorbehalten. Die Inhalte und Struktur dieser Website, einschließlich Texte, Bilder, Grafiken und deren Anordnung, sind urheberrechtlich geschützt. Eine Vervielfältigung oder Verwendung dieser Elemente ohne ausdrückliche Genehmigung ist untersagt.'
          ]
        }
      ]
    },
    termsPage: {
      title: 'Nutzungsbedingungen',
      subtitle: 'Bitte lesen Sie diese Allgemeinen Geschäftsbedingungen sorgfältig, bevor Sie unsere Dienstleistungen nutzen.',
      sections: [
        {
          title: 'Allgemeine Bedingungen',
          paragraphs: [
            'Diese Allgemeinen Geschäftsbedingungen gelten für alle Dienstleistungen und Angebote der Backpack Wander GmbH.',
            'Backpack Wander GmbH erbringt insbesondere folgende Leistungen:'
          ],
          listItems: [
            'Consulting für Einzelpersonen und Unternehmen',
            'QA/QC-Dokumentationsunterstützung und Engineering-Dienstleistungen',
            'Projektbezogene Remote- und Vor-Ort-Unterstützung',
            'Leistungen in den Bereichen Marketing, digitale Produkte und Online-Angebote',
            'Verkauf digitaler Produkte und Merchandise'
          ],
          closingParagraphs: [
            'Die Leistungen werden unter verschiedenen Marken der Backpack Wander GmbH erbracht, einschließlich der Marke Pipeline Quality.',
            'Vertragspartner ist ausschließlich die Backpack Wander GmbH, sofern nicht ausdrücklich etwas anderes vereinbart wurde.'
          ]
        },
        {
          title: 'Unsere Dienstleistungen',
          paragraphs: [
            'Backpack Wander GmbH bietet digitales Business-Consulting, Webdesign und digitale Marketing-Dienstleistungen an.',
            'Wir behalten uns das Recht vor, jede Dienstleistung jederzeit ohne Vorankündigung zu ändern oder einzustellen.'
          ]
        },
        {
          title: 'Pflichten der Nutzer',
          paragraphs: [
            'Nutzer müssen korrekte Angaben machen und unsere Dienstleistungen im Einklang mit geltendem Recht nutzen.',
            'Sie sind für die Vertraulichkeit Ihrer Kontoinformationen verantwortlich.'
          ]
        },
        {
          title: 'Haftungsbeschränkung',
          paragraphs: [
            'Die Haftung der Backpack Wander GmbH ist auf Vorsatz und grobe Fahrlässigkeit beschränkt, soweit gesetzlich zulässig.',
            'Die Haftung für mittelbare Schäden oder entgangenen Gewinn ist ausgeschlossen, soweit gesetzlich zulässig.',
            'Es gilt das Recht der Bundesrepublik Deutschland.',
            'Gerichtsstand ist – soweit gesetzlich zulässig – der Sitz des Unternehmens.'
          ]
        }
      ]
    },
    contactForm: {
      name: 'Name',
      email: 'E-Mail',
      company: 'Unternehmen',
      message: 'Nachricht',
      namePlaceholder: 'Ihr Name',
      emailPlaceholder: 'sie@unternehmen.de',
      companyPlaceholder: 'Name der Organisation',
      messagePlaceholder: 'Beschreiben Sie Projektumfang, Standort und Zeitplan.',
      sending: 'Wird gesendet…',
      send: 'Lassen Sie uns sprechen',
      success: 'Ihre Anfrage ist eingegangen.',
      error: 'Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.'
    },
    industriesShowcase: {
      eyebrow: 'Industrielle Sektoren',
      title: 'Wo Pipeline Quality liefert',
      subtitle:
        'Von Offshore-Wind-Fertigung bis zu Raffinerien und kritischer Infrastruktur unterstützen wir industrielle Projekte, bei denen Präzision, Dokumentation und Kontrolle am wichtigsten sind.',
      industries: [
        {
          title: 'Offshore-Wind & Erneuerbare Energien',
          description: 'Monopiles, Offshore-Strukturen, Unterwasseranlagen und Fertigungsüberwachung'
        },
        {
          title: 'Pipelines & Raffinerien',
          description: 'Schweißüberwachung, Beschichtungsinspektion und Integritätsdokumentation'
        },
        {
          title: 'Schwerindustrie',
          description: 'Fertigungshallen, Strukturprüfungen, Hebevorgänge und Maßkontrolle'
        },
        {
          title: 'Kritische Anlagen',
          description: 'Technische Überwachung für mission-kritische Umgebungen und Lieferkontrolle'
        },
        {
          title: 'Technische Feldüberwachung',
          description: 'QA/QC-Koordination, Inspektionsberichte und Standortdisziplin'
        },
        {
          title: 'Industrielle Dokumentation',
          description: 'Reporting-Workflows, technische Unterlagen und Übergabedokumentation'
        }
      ]
    },
    imageCarousel: {
      eyebrow: 'Industrielles Portfolio',
      title: 'Industrielle Lieferung & Bereitstellung',
      cta: 'Projekte ansehen',
      slides: [
        {
          title: 'Vor-Ort-Inspektionen & QA/QC',
          description: 'QA/QC-Inspektionen vor Ort, technische Untersuchungen und Inspektionsberichte zur Sicherstellung von Compliance und Sicherheit.',
          cta: 'Inspektionen ansehen'
        },
        {
          title: 'Offshore-Monopile-Projekte',
          description: 'Komplette Unterstützung bei Monopile-Fertigung, Verladung und Offshore-Installation für Erneuerbare-Energie-Projekte.',
          cta: 'Offshore-Projekte'
        },
        {
          title: 'Industrielle Koordination & Reporting',
          description: 'Digitale Koordinationssysteme, QA/QC-Reporting und Management-Dashboards für industrielle Abläufe.',
          cta: 'Koordination erkunden'
        },
        {
          title: 'Pipeline-Inspektion & QA/QC',
          description: 'Inline-Inspektion, Beschichtungsprüfung und Drucktest-Management zur Gewährleistung der Pipeline-Integrität.',
          cta: 'Pipelines prüfen'
        },
        {
          title: 'Feldteam-Koordination',
          description: 'Vor-Ort-Koordination und technische Aufsicht, damit Projekte im Zeitplan und innerhalb der Spezifikation bleiben.',
          cta: 'Koordination ansehen'
        },
        {
          title: 'Data-Center-Infrastruktur',
          description: 'Einsatzunterstützung für kritisch wichtige Infrastruktur, einschließlich Stromversorgung, Kühlung und strukturierte Verkabelung.',
          cta: 'Rechenzentren entdecken'
        },
        {
          title: 'Qualitätsüberwachung & Kritische Anlagen',
          description: 'Präzise Überwachung, Dokumentationskontrolle und operative Aufsicht für mission-kritische Umgebungen.',
          cta: 'Monitoring ansehen'
        },
        {
          title: 'Projektmanagement & Koordination',
          description: 'End-to-End-Projektabwicklung, Terminplanung und Stakeholder-Koordination zur Risikominimierung.',
          cta: 'Projektmanagement'
        },
        {
          title: 'Industrieller Betrieb',
          description: 'Betriebsunterstützung, Instandhaltungsplanung und kontinuierliche Verbesserungsprogramme für Industrieanlagen.',
          cta: 'Betrieb erkunden'
        },
        {
          title: 'Technische Bereitstellung & Inbetriebnahme',
          description: 'Einsatztechnik, Inbetriebnahme und technische Mobilisierung, um Systeme zuverlässig in Betrieb zu nehmen.',
          cta: 'Bereitstellung ansehen'
        }
      ]
    }
  }
} as const;

export type Translations = (typeof translations)[LanguageCode];
