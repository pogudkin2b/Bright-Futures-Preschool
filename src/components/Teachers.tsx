'use client';

import { motion } from 'framer-motion';
import { useI18n } from '@/lib/i18n';

export default function Teachers() {
  const { t } = useI18n();

  return (
    <section id="teachers" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl text-charcoal mb-4">
            {t.teachers.title}
          </h2>
          <p className="text-lg text-warm-gray max-w-2xl mx-auto">
            {t.teachers.subtitle}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.teachers.staff.map((teacher: { name: string; role: string; education: string; experience: string; languages: string }, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 6) * 0.1 }}
              className="bg-sand rounded-3xl p-6 shadow-soft"
            >
              <div className="w-20 h-20 bg-sage-light rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">👩‍🏫</span>
              </div>
              <h3 className="font-display text-xl text-charcoal text-center mb-2">{teacher.name}</h3>
              <p className="text-terracotta text-sm font-medium text-center mb-4">{teacher.role}</p>
              <div className="space-y-2 text-sm">
                <p className="text-warm-gray"><strong className="text-charcoal">Education:</strong> {teacher.education}</p>
                <p className="text-warm-gray"><strong className="text-charcoal">Experience:</strong> {teacher.experience}</p>
                <p className="text-warm-gray"><strong className="text-charcoal">Languages:</strong> {teacher.languages}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
