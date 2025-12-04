'use client';

import { motion } from 'framer-motion';
import { useI18n } from '@/lib/i18n';

export default function Footer() {
  const { t } = useI18n();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-cream relative overflow-hidden">
      {/* Wave top */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 60V20C480 60 960 0 1440 40V60H0Z" fill="#FDF8F3" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-12">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-sage rounded-blob flex items-center justify-center">
                <svg className="w-6 h-6 text-cream" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.85 0 3.58-.5 5.07-1.37-.48-.62-.83-1.32-1.07-2.07-.96.59-2.08.94-3.28.94-3.58 0-6.5-2.92-6.5-6.5S9.42 6.5 13 6.5c2.73 0 5.06 1.7 6.02 4.1.63-.11 1.28-.1 1.9.03C20.08 6.6 16.47 2 12 2zm1 5v4.41l3.29 3.29-1.41 1.41L11 12.41V7h2z"/>
                </svg>
              </div>
              <div>
                <span className="font-display text-2xl block">Bright Futures</span>
                <span className="text-cream/60 text-xs tracking-widest uppercase">Preschool</span>
              </div>
            </div>
            <p className="text-cream/70 max-w-sm leading-relaxed mb-6">
              {t.hero.subtitle}. Creating a nurturing environment where every child can grow, learn, and thrive.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              <motion.a
                href="mailto:tamunakip@hotmail.com"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-11 h-11 bg-cream/10 hover:bg-terracotta rounded-xl flex items-center justify-center transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg mb-6">Navigation</h4>
            <ul className="space-y-3">
              {[
                { href: '#about', label: t.nav.about },
                { href: '#curriculum', label: t.nav.curriculum },
                { href: '#groups', label: t.nav.groups },
                { href: '#contacts', label: t.nav.contacts },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-cream/60 hover:text-cream transition-colors text-sm flex items-center gap-2 group">
                    <span className="w-0 h-px bg-terracotta transition-all group-hover:w-4" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg mb-6">Contact</h4>
            <ul className="space-y-3 text-sm text-cream/60">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{t.footer.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-sage flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+995599270920" className="hover:text-cream transition-colors">{t.footer.phone}</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-cream/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-cream/40 text-sm">
            {t.footer.rights}
          </p>
          <p className="text-cream/40 text-xs">
            Made with care for little ones
          </p>
        </div>
      </div>

      {/* Decorative blob */}
      <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-sage/10 rounded-full blur-3xl" />
    </footer>
  );
}
