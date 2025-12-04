'use client';

import { motion } from 'framer-motion';
import { useI18n } from '@/lib/i18n';

export default function Hero() {
  const { t } = useI18n();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-cream pt-24 pb-12">
      {/* Organic background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large sage blob */}
        <motion.div
          animate={{
            borderRadius: [
              '60% 40% 30% 70% / 60% 30% 70% 40%',
              '30% 70% 70% 30% / 30% 70% 70% 30%',
              '50% 50% 30% 70% / 50% 50% 70% 30%',
              '60% 40% 30% 70% / 60% 30% 70% 40%',
            ]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-sage-light/40"
        />
        {/* Peach blob */}
        <motion.div
          animate={{
            borderRadius: [
              '30% 70% 70% 30% / 30% 70% 70% 30%',
              '70% 30% 30% 70% / 70% 30% 30% 70%',
              '30% 70% 70% 30% / 30% 70% 70% 30%',
            ]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-48 -left-32 w-[600px] h-[600px] bg-peach/30"
        />
        {/* Small terracotta accent */}
        <motion.div
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/3 right-1/4 w-24 h-24 bg-terracotta-light/30 blob-1"
        />
        {/* Decorative lines */}
        <svg className="absolute top-20 left-10 w-32 h-32 text-sand opacity-60" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="inline-flex items-center gap-3 px-5 py-2.5 bg-sand/80 backdrop-blur-sm rounded-full mb-8"
            >
              <span className="w-2 h-2 bg-sage rounded-full animate-pulse" />
              <span className="text-warm-gray text-sm font-medium tracking-wide">
                {t.hero.subtitle}
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl text-charcoal mb-6 leading-[1.1]"
            >
              <span className="block">{t.hero.title}</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-lg md:text-xl text-warm-gray mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed"
            >
              {t.hero.description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="#contacts"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-charcoal hover:bg-charcoal/90 text-cream font-semibold rounded-full transition-all shadow-soft-lg"
              >
                {t.hero.cta}
                <motion.svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </motion.svg>
              </motion.a>
              <motion.a
                href="#contacts"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-cream hover:bg-sand text-charcoal font-semibold rounded-full transition-all border-2 border-light-gray hover:border-sage"
              >
                {t.hero.contact}
              </motion.a>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-12 flex items-center gap-6 justify-center lg:justify-start"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-cream bg-gradient-to-br from-sage to-sage-dark flex items-center justify-center text-cream text-xs font-bold"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div className="text-sm text-warm-gray">
                <span className="font-semibold text-charcoal">50+</span> happy families
              </div>
            </motion.div>
          </motion.div>

          {/* Image Composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative max-w-md mx-auto lg:max-w-none">
              {/* Main image with organic shape */}
              <div className="relative">
                {/* Background shape */}
                <motion.div
                  animate={{ rotate: [0, 3, 0, -3, 0] }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -inset-4 bg-gradient-to-br from-sage to-sage-light blob-1 opacity-60"
                />

                {/* Image container */}
                <div className="relative overflow-hidden blob-2 shadow-soft-lg">
                  <img
                    src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800&h=900&fit=crop&crop=faces"
                    alt="Children playing"
                    className="w-full h-[450px] md:h-[550px] object-cover"
                  />
                  {/* Warm overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-terracotta/10 via-transparent to-sage/10" />
                </div>
              </div>

              {/* Floating card - Age */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="absolute -right-6 top-8 bg-cream rounded-3xl shadow-soft-lg p-5 border border-sand"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-sage/10 rounded-2xl flex items-center justify-center">
                    <svg className="w-7 h-7 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-display text-3xl text-charcoal">1.5–6</div>
                    <div className="text-sm text-warm-gray">years old</div>
                  </div>
                </div>
              </motion.div>

              {/* Decorative elements */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-8 left-1/4 w-6 h-6 bg-clay rounded-full opacity-60"
              />
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute bottom-4 right-1/4 w-4 h-4 bg-terracotta rounded-full opacity-40"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path
            d="M0 50C240 90 480 90 720 50C960 10 1200 10 1440 50V100H0V50Z"
            fill="#F5E6D3"
          />
        </svg>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-24 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-warm-gray tracking-widest uppercase">Scroll</span>
          <div className="w-5 h-8 border-2 border-warm-gray/30 rounded-full flex justify-center pt-1.5">
            <motion.div
              animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-1 bg-terracotta rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
