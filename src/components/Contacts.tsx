'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useI18n } from '@/lib/i18n';

export default function Contacts() {
  const { t } = useI18n();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', phone: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contacts" className="py-24 md:py-32 bg-sand relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-light-gray to-transparent" />
      <div className="absolute -top-32 -right-32 w-64 h-64 bg-cream rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-sage/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-terracotta font-medium tracking-widest uppercase text-sm mb-4">
            Get in touch
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-charcoal mb-6">
            {t.contacts.title}
          </h2>
          <p className="text-lg text-warm-gray max-w-2xl mx-auto leading-relaxed">
            {t.contacts.subtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Contact cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {/* Hours */}
              <div className="bg-cream rounded-3xl p-6 border border-sand sm:col-span-2">
                <div className="w-12 h-12 bg-sage/20 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-display text-lg text-charcoal mb-2">
                  {t.contacts.hours.title}
                </h3>
                <p className="text-warm-gray">{t.contacts.hours.weekdays}</p>
                <p className="text-warm-gray">{t.contacts.hours.weekend}</p>
              </div>

              {/* Address */}
              <div className="bg-cream rounded-3xl p-6 border border-sand">
                <div className="w-12 h-12 bg-sage/20 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="font-display text-lg text-charcoal mb-1">
                  {t.contacts.address.title}
                </h3>
                <p className="text-warm-gray">{t.contacts.address.value}</p>
              </div>

              {/* Phone */}
              <div className="bg-cream rounded-3xl p-6 border border-sand">
                <div className="w-12 h-12 bg-terracotta/10 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-terracotta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="font-display text-lg text-charcoal mb-1">
                  {t.contacts.phone.title}
                </h3>
                <a href="tel:+995551503323" className="text-warm-gray hover:text-terracotta transition-colors">
                  {t.contacts.phone.value}
                </a>
              </div>

              {/* Email */}
              <div className="bg-cream rounded-3xl p-6 border border-sand">
                <div className="w-12 h-12 bg-terracotta/10 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-terracotta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-display text-lg text-charcoal mb-1">
                  {t.contacts.email.title}
                </h3>
                <a
                  href="mailto:tamunakip@hotmail.com"
                  className="text-warm-gray hover:text-terracotta transition-colors break-all"
                >
                  {t.contacts.email.value}
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-3xl overflow-hidden h-[300px] shadow-soft-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d190515.33919957996!2d44.6539013!3d41.716667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440cd7e64f626b%3A0x61d084ede2576ea3!2sTbilisi%2C%20Georgia!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Bright Futures Preschool Location"
              />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-cream rounded-3xl p-8 md:p-10 border border-sand shadow-soft-lg">
              <h3 className="font-display text-2xl text-charcoal mb-6">
                {t.contacts.form.title}
              </h3>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-sage/10 border border-sage/30 rounded-2xl p-6 text-center"
                >
                  <div className="w-16 h-16 bg-sage rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-cream" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-sage-dark font-medium">{t.contacts.form.success}</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">
                      {t.contacts.form.name}
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-5 py-4 rounded-xl border border-sand bg-sand/50 focus:border-sage focus:ring-2 focus:ring-sage/20 transition-all outline-none text-charcoal"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-2">
                      {t.contacts.form.phone}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-5 py-4 rounded-xl border border-sand bg-sand/50 focus:border-sage focus:ring-2 focus:ring-sage/20 transition-all outline-none text-charcoal"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">
                      {t.contacts.form.message}
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-5 py-4 rounded-xl border border-sand bg-sand/50 focus:border-sage focus:ring-2 focus:ring-sage/20 transition-all outline-none resize-none text-charcoal"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-8 py-4 bg-terracotta hover:bg-terracotta-dark text-cream font-semibold rounded-full transition-colors shadow-soft-lg"
                  >
                    {t.contacts.form.submit}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
