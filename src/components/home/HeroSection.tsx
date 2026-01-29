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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-36">
      {/* Background layers */}
      <div className="absolute inset-0 z-0">
        {/* Primary background image */}
        <Image
          src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=1920&auto=format&fit=crop"
          alt={locale === 'ar' ? 'أطباء يتعاونون في تدريب سريري' : 'Doctors collaborating in clinical training'}
          fill
          sizes="100vw"
          priority
          className="object-cover"
          unoptimized
        />

        {/* Enhanced gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-primary-900/50 to-primary-600/30" />

        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

        {/* Floating geometric elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary-500/10 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-secondary-500/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '4s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container-max section-padding text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-5xl mx-auto"
        >
          {/* Main heading */}
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          >
            <span className="block bg-gradient-to-r from-white via-white to-primary-200 bg-clip-text text-transparent">
              {t('title')}
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl md:text-2xl lg:text-3xl mb-12 text-white/90 leading-relaxed max-w-4xl mx-auto font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          >
            {t('subtitle')}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          >
            <Link
              href={`/${locale}/services`}
              className="group relative px-10 py-5 bg-gradient-to-r from-primary-600 to-primary-700 text-white text-lg font-semibold rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-primary-500/30 hover:scale-105 overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                {t('explore')}
                <ArrowRightIcon className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              {/* Button shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </Link>

            <Link
              href={`/${locale}/about`}
              className="group px-10 py-5 bg-white/10 backdrop-blur-md border border-white/20 text-white text-lg font-semibold rounded-2xl transition-all duration-300 hover:bg-white/20 hover:border-white/30 hover:scale-105"
            >
              <span className="flex items-center">
                {navT('about')}
                <PlayIcon className="ml-2 h-5 w-5" />
              </span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <div className="flex flex-col items-center space-y-2">
            <span className="text-xs text-white/60 uppercase tracking-wider">{locale === 'ar' ? 'مرر لأسفل' : 'Scroll'}</span>
            <div className="w-6 h-12 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;


