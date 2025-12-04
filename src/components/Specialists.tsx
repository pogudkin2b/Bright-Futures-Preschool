'use client';

import { motion } from 'framer-motion';
import { useI18n } from '@/lib/i18n';

export default function Specialists() {
  const { t } = useI18n();

  return (
    <section id="specialists" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl text-charcoal mb-4">
            {t.specialists.title}
          </h2>
          <p className="text-lg text-warm-gray max-w-2xl mx-auto">
            {t.specialists.subtitle}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {t.specialists.items.map((item: { name: string; description: string }, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="bg-sand rounded-2xl p-6 text-center shadow-soft hover:shadow-soft-lg transition-all"
            >
              <div className="w-16 h-16 bg-sage-light rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">{['🎨', '🏺', '🔬', '💃', '🤸', '🩰', '🥋'][index % 7]}</span>
              </div>
              <h3 className="font-semibold text-charcoal mb-2">{item.name}</h3>
              <p className="text-sm text-warm-gray">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 bg-sand rounded-3xl p-8">
          <h3 className="font-display text-2xl text-charcoal mb-4">{t.fieldTrips.title}</h3>
          <p className="text-warm-gray mb-6">{t.fieldTrips.description}</p>
        </div>

        <div className="mt-8 bg-sand rounded-3xl p-8">
          <h3 className="font-display text-2xl text-charcoal mb-4">{t.events.title}</h3>
          <p className="text-warm-gray mb-6">{t.events.description}</p>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {t.events.items.map((event: string, index: number) => (
              <div key={index} className="bg-cream rounded-xl p-4 text-center">
                <span className="text-terracotta font-medium">{event}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
