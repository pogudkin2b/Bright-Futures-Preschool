'use client';

import { motion } from 'framer-motion';
import { useI18n } from '@/lib/i18n';

export default function Montessori() {
  const { t } = useI18n();

  return (
    <section id="montessori" className="py-20 bg-sand">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl md:text-5xl text-charcoal mb-6">
              {t.montessori.title}
            </h2>
            <p className="text-xl text-terracotta mb-6">{t.montessori.subtitle}</p>
            <p className="text-warm-gray leading-relaxed mb-8">
              {t.montessori.description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {t.montessori.principles.map((principle: string, index: number) => (
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
                <p className="text-charcoal">{principle}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {t.doodleTown.benefits.map((benefit: string, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-3 bg-cream rounded-2xl p-4 shadow-soft"
              >
                <div className="w-6 h-6 bg-terracotta rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-3 h-3 text-cream" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-charcoal">{benefit}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl md:text-5xl text-charcoal mb-6">
              {t.doodleTown.title}
            </h2>
            <p className="text-xl text-terracotta mb-6">{t.doodleTown.subtitle}</p>
            <p className="text-warm-gray leading-relaxed">
              {t.doodleTown.description}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
