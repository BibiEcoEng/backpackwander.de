"use client";

import { useLanguage } from '@/components/language-provider';
import { ContactForm } from '@/components/contact-form';

export default function ContactSidebar() {
  const { content } = useLanguage();

  return (
    <section className="contact-form-card h-fit lg:sticky lg:top-32">
      <div className="contact-form-card-inner">
        <h2 className="text-offwhite">{content.contactPage.card.sendEnquiryTitle}</h2>
        <p className="type-body mt-3 max-w-none text-secondaryText">{content.contactPage.card.sendEnquirySubtitle}</p>

        <ContactForm />
      </div>
    </section>
  );
}
