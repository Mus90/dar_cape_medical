'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import Image from 'next/image';

const HeroSection = () => {
  const t = useTranslations('home.hero');
  const navT = useTranslations('navigation');
  const locale = useLocale();

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden py-16 md:py-24">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=1920&auto=format&fit=crop"
          alt={locale === 'ar' ? 'رعاية طبية احترافية' : 'Professional medical care'}
          fill
          sizes="100vw"
          priority
          className="object-cover"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950/80 via-navy-900/70 to-stone-900/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-max px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight font-serif">
            {t('title')}
          </h1>

          <p className="text-lg md:text-xl mb-12 text-white/80 leading-relaxed max-w-3xl mx-auto font-light">
            {t('subtitle')}
          </p>

          <motion.div
            className="flex flex-col sm:flex-row gap-5 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link
              href={`/${locale}/contact`}
              className="group px-8 py-4 bg-teal-600 text-white text-base font-semibold rounded-lg transition-all duration-300 hover:bg-teal-700"
            >
              <span className="flex items-center">
                {t('cta')}
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </span>
            </Link>

            <Link
              href={`/${locale}/services`}
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white text-base font-semibold rounded-lg transition-all duration-300 hover:bg-white/20"
            >
              {t('explore')}
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;


