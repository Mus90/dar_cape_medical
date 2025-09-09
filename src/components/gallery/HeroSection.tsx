'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { CameraIcon } from '@heroicons/react/24/outline';

const HeroSection = () => {
  const t = useTranslations('gallery');

  return (
    <section className="relative py-24 bg-gradient-to-br from-primary-600 via-accent-500 to-secondary-600 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-16 left-16 w-36 h-36 bg-white rounded-full animate-float" />
        <div className="absolute bottom-24 right-12 w-28 h-28 bg-white rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-white rounded-full animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative container-max section-padding text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <CameraIcon className="h-10 w-10 text-white" />
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {t('title')}
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl opacity-90 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {t('subtitle')}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
