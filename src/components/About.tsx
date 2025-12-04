'use client';

import { motion } from 'framer-motion';
import { useI18n } from '@/lib/i18n';

export default function About() {
  const { t } = useI18n();

  return (
    <section id="about" className="py-20 bg-sand">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl text-charcoal mb-4">
            {t.about.title}
          </h2>
          <p className="text-lg text-warm-gray max-w-2xl mx-auto">
            {t.about.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-cream rounded-3xl p-8 shadow-soft">
              <p className="text-warm-gray mb-4 font-medium text-terracotta">
                {t.about.principal}
              </p>
              <p className="text-warm-gray mb-6 leading-relaxed">
                {t.about.description}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {t.about.highlights.map((highlight: string, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-3 bg-cream rounded-2xl p-4 shadow-soft"
              >
                <div className="w-6 h-6 bg-sage rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-3 h-3 text-cream" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-charcoal">{highlight}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
