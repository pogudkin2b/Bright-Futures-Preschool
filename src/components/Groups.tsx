'use client';

import { motion } from 'framer-motion';
import { useI18n } from '@/lib/i18n';

export default function Groups() {
  const { t } = useI18n();

  return (
    <section id="groups" className="py-20 bg-sand">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl text-charcoal mb-4">
            {t.groups.title}
          </h2>
          <p className="text-lg text-warm-gray max-w-2xl mx-auto">
            {t.groups.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {t.groups.items.map((group: { name: string; age: string; students: string; teachers: string }, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-cream rounded-3xl p-8 shadow-soft"
            >
              <h3 className="font-display text-3xl text-terracotta mb-6">{group.name}</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-sage-light rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xs">👶</span>
                  </div>
                  <div>
                    <p className="text-sm text-warm-gray">Age</p>
                    <p className="text-charcoal font-semibold">{group.age}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-sage-light rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xs">👥</span>
                  </div>
                  <div>
                    <p className="text-sm text-warm-gray">Students</p>
                    <p className="text-charcoal font-semibold">{group.students}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-sage-light rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xs">👩‍🏫</span>
                  </div>
                  <div>
                    <p className="text-sm text-warm-gray">Teachers</p>
                    <p className="text-charcoal font-semibold">{group.teachers}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
