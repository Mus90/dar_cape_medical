'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { ArrowRightIcon, PlayIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import Image from 'next/image';

const HeroSection = () => {
  const t = useTranslations('home.hero');
  const navT = useTranslations('navigation');
  const locale = useLocale();

  return (
    <section className="relative min-h-[65vh] md:min-h-[75vh] lg:min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=1920&auto=format&fit=crop"
          alt={locale === 'ar' ? 'أطباء يتعاونون في تدريب سريري' : 'Doctors collaborating in clinical training'}
          fill
          sizes="100vw"
          priority
          className="object-cover"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-primary-900/60 to-primary-600/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-max section-padding text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t('title')}
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {t('subtitle')}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href={`/${locale}/services`} className="btn-primary px-8 py-4 text-lg">
                {t('explore')}
              </Link>
              <Link href={`/${locale}/about`} className="btn-secondary px-8 py-4 text-lg">
                {navT('about')}
              </Link>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce" />
          </div>
        </motion.div>
      </div>

      <div className="absolute top-20 left-10 w-20 h-20 bg-primary-500/20 rounded-full animate-float" />
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-accent-500/20 rounded-full animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 right-20 w-12 h-12 bg-secondary-500/20 rounded-full animate-float" style={{ animationDelay: '2s' }} />
    </section>
  );
};

export default HeroSection;
