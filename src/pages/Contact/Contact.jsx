import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useLanguage } from '../../context/LanguageContext';
import dict from './Contact.dict';
import styles from './Contact.module.css';
import brandLogo from '../../assets/logo/logo.webp';
import Seo from '../../components/Seo/Seo';

const EMPTY_FORM = {
  fullName: '',
  company: '',
  email: '',
  phone: '',
  role: '',
  needType: '',
  preferredContact: '',
  message: '',
  consent: false,
};

// Renseignes dans .env (voir .env.example). Tant qu'ils sont vides, le
// formulaire le dit clairement au lieu de faire semblant d'envoyer.
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const IS_CONFIGURED = Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY);

export default function Contact() {
  const { lang } = useLanguage();
  const t = dict[lang] ?? dict.fr;

  const [form, setForm] = useState(EMPTY_FORM);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    // on efface l'erreur du champ des que l'utilisateur le corrige
    setErrors((prev) => (prev[name] ? { ...prev, [name]: undefined } : prev));
  };

  const validate = () => {
    const next = {};
    if (!form.fullName.trim()) next.fullName = t.errRequired;
    if (!form.email.trim()) next.email = t.errRequired;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim())) {
      next.email = t.errEmail;
    }
    if (form.phone.trim() && !/^[\d\s+().-]{6,20}$/.test(form.phone.trim())) {
      next.phone = t.errPhone;
    }
    if (!form.message.trim()) next.message = t.errRequired;
    else if (form.message.trim().length < 10) next.message = t.errMessageShort;
    if (!form.consent) next.consent = t.errConsent;
    return next;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const found = validate();
    setErrors(found);
    if (Object.keys(found).length > 0) {
      // focus le premier champ en erreur pour la navigation clavier
      document.querySelector(`[name="${Object.keys(found)[0]}"]`)?.focus();
      return;
    }

    if (!IS_CONFIGURED) {
      setStatus('error');
      return;
    }

    setStatus('sending');
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          fullName: form.fullName,
          company: form.company || '—',
          email: form.email,
          phone: form.phone || '—',
          role: form.role || '—',
          needType: form.needType || '—',
          preferredContact: form.preferredContact || '—',
          message: form.message,
        },
        { publicKey: PUBLIC_KEY }
      );
      setStatus('success');
      setForm(EMPTY_FORM);
    } catch (error) {
      if (import.meta.env.DEV) console.error('EmailJS:', error);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <section className={styles.page}>
        <Seo title={t.title} description={t.intro} />
        <div className={styles.successBox} role="status">
          <div className={styles.successIcon} aria-hidden="true">✓</div>
          <h1>{t.successTitle}</h1>
          <p>{t.successText}</p>
          <button
            type="button"
            className={styles.secondaryBtn}
            onClick={() => setStatus('idle')}
          >
            {t.newRequest}
          </button>
        </div>
      </section>
    );
  }

  const fieldError = (name) =>
    errors[name] ? (
      <span className={styles.errorText} id={`${name}-error`}>
        {errors[name]}
      </span>
    ) : null;

  const inputProps = (name) => ({
    name,
    value: form[name],
    onChange: handleChange,
    id: name,
    className: errors[name] ? styles.inputError : undefined,
    'aria-invalid': errors[name] ? 'true' : undefined,
    'aria-describedby': errors[name] ? `${name}-error` : undefined,
  });

  return (
    <section className={styles.page}>
      <Seo title={t.title} description={t.intro} />
      <div className={styles.layout}>
        <form className={styles.formCard} onSubmit={handleSubmit} noValidate>
          <h1>{t.title}</h1>
          <p className={styles.intro}>{t.intro}</p>

          <div className={styles.row}>
            <div className={styles.field}>
              <label htmlFor="fullName">{t.fullName} *</label>
              <input {...inputProps('fullName')} autoComplete="name" />
              {fieldError('fullName')}
            </div>
            <div className={styles.field}>
              <label htmlFor="company">{t.company}</label>
              <input {...inputProps('company')} autoComplete="organization" />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.field}>
              <label htmlFor="email">{t.email} *</label>
              <input {...inputProps('email')} type="email" autoComplete="email" />
              {fieldError('email')}
            </div>
            <div className={styles.field}>
              <label htmlFor="phone">{t.phone}</label>
              <input {...inputProps('phone')} type="tel" autoComplete="tel" />
              {fieldError('phone')}
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.field}>
              <label htmlFor="role">{t.role}</label>
              <input {...inputProps('role')} autoComplete="organization-title" />
            </div>
            <div className={styles.field}>
              <label htmlFor="needType">{t.needType}</label>
              <select {...inputProps('needType')}>
                <option value="">—</option>
                {t.needOptions.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
          </div>

          <div className={styles.field}>
            <label htmlFor="preferredContact">{t.preferredContact}</label>
            <select {...inputProps('preferredContact')}>
              <option value="">—</option>
              {t.contactOptions.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>

          <div className={styles.field}>
            <label htmlFor="message">{t.message} *</label>
            <textarea {...inputProps('message')} rows={5} />
            {fieldError('message')}
          </div>

          <div className={styles.field}>
            <label className={styles.consent} htmlFor="consent">
              <input
                type="checkbox"
                name="consent"
                id="consent"
                checked={form.consent}
                onChange={handleChange}
                aria-invalid={errors.consent ? 'true' : undefined}
                aria-describedby={errors.consent ? 'consent-error' : undefined}
              />
              <span>{t.consent}</span>
            </label>
            {fieldError('consent')}
          </div>

          {status === 'error' && (
            <p className={styles.formError} role="alert">
              {IS_CONFIGURED ? t.errorText : t.errorNotConfigured}
            </p>
          )}

          <button
            type="submit"
            className={styles.submitBtn}
            disabled={status === 'sending'}
          >
            {status === 'sending' ? t.sending : t.submit}
          </button>
        </form>

        <aside className={styles.sidebar}>
          <div className={styles.contactCard}>
            <h2>{t.sidebarTitle}</h2>
            <a href={`mailto:${t.contactEmail}`} className={styles.contactRow}>
              <span className={styles.iconDot} aria-hidden="true">✉</span>
              <span>
                <strong>{t.email}</strong>
                <span className={styles.contactValue}>{t.contactEmail}</span>
              </span>
            </a>
            <a
              href={`tel:${t.contactPhone.replace(/\s/g, '')}`}
              className={styles.contactRow}
            >
              <span className={styles.iconDot} aria-hidden="true">☎</span>
              <span>
                <strong>{t.phone}</strong>
                <span className={styles.contactValue}>{t.contactPhone}</span>
              </span>
            </a>
          </div>

          <div className={styles.brandCard}>
            <img src={brandLogo} alt="Farm Control System" className={styles.brandLogo} />
            <p>{t.brandTagline}</p>
          </div>
        </aside>
      </div>
    </section>
  );
}
