'use client';

import { motion } from 'framer-motion';
import { useI18n } from '@/lib/i18n';

export default function DailyRoutine() {
  const { t } = useI18n();

  return (
    <section id="routine" className="py-20 bg-sand">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl text-charcoal mb-4">
            {t.routine.title}
          </h2>
          <p className="text-lg text-warm-gray max-w-2xl mx-auto">
            {t.routine.subtitle}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-cream rounded-3xl p-8 shadow-soft">
            <div className="space-y-4">
              {t.routine.schedule.map((item: { time: string; activity: string }, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-6 p-4 rounded-2xl hover:bg-sand transition-colors"
                >
                  <div className="w-32 flex-shrink-0">
                    <span className="text-terracotta font-semibold">{item.time}</span>
                  </div>
                  <div className="flex-1">
                    <span className="text-charcoal">{item.activity}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
