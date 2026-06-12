'use client';

import type { FormEvent } from 'react';
import { useState } from 'react';
import { useLanguage } from '@/components/language-provider';

const initialState = {
  name: '',
  email: '',
  message: ''
};

type ContactFormUIProps = {
  variant?: 'home' | 'page';
  className?: string;
};

export function ContactFormUI({ variant = 'home', className = '' }: ContactFormUIProps) {
  const { content } = useLanguage();
  const section = content.homeContact;
  const form = content.contactForm;
  const [formState, setFormState] = useState(initialState);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const isHome = variant === 'home';

  const labels = isHome
    ? {
        name: section.fullName,
        email: section.companyEmail,
        message: section.message,
        submit: section.discussProject
      }
    : {
        name: form.name,
        email: form.email,
        message: form.message,
        submit: form.send
      };

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState)
      });

      if (response.ok) {
        setStatus('success');
        setFormState(initialState);
        return;
      }

      setStatus('error');
    } catch {
      setStatus('error');
    }
  }

  return (
    <form onSubmit={handleSubmit} className={`contact-form ${className}`.trim()}>
      <div className="contact-form-fields">
        <label className="contact-field">
          <span className={isHome ? 'sr-only' : 'contact-label'}>{labels.name}</span>
          <input
            required
            name="name"
            autoComplete="name"
            value={formState.name}
            onChange={(event) => setFormState((current) => ({ ...current, name: event.target.value }))}
            className="contact-input"
            placeholder={isHome ? labels.name : form.namePlaceholder}
          />
        </label>

        <label className="contact-field">
          <span className={isHome ? 'sr-only' : 'contact-label'}>{labels.email}</span>
          <input
            required
            type="email"
            name="email"
            autoComplete="email"
            value={formState.email}
            onChange={(event) => setFormState((current) => ({ ...current, email: event.target.value }))}
            className="contact-input"
            placeholder={isHome ? labels.email : form.emailPlaceholder}
          />
        </label>

        <label className="contact-field contact-field-full">
          <span className={isHome ? 'sr-only' : 'contact-label'}>{labels.message}</span>
          <textarea
            required
            name="message"
            rows={5}
            value={formState.message}
            onChange={(event) => setFormState((current) => ({ ...current, message: event.target.value }))}
            className="contact-textarea"
            placeholder={isHome ? labels.message : form.messagePlaceholder}
          />
        </label>
      </div>

      {isHome ? (
        <div className="section-cta-row">
          <button
            type="submit"
            disabled={status === 'loading'}
            className="section-cta-btn contact-submit btn-primary type-cta"
          >
            {status === 'loading' ? form.sending : labels.submit}
          </button>
        </div>
      ) : (
        <button
          type="submit"
          disabled={status === 'loading'}
          className="section-cta-btn contact-submit btn-primary type-cta"
        >
          {status === 'loading' ? form.sending : labels.submit}
        </button>
      )}

      {status === 'success' ? <p className="contact-status contact-status-success">{form.success}</p> : null}
      {status === 'error' ? <p className="contact-status contact-status-error">{form.error}</p> : null}
    </form>
  );
}
