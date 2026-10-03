'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

const KnowledgeCentreHero = () => {
  const t = useTranslations('knowledge.hero');

  return (
    <section className="section-padding bg-gradient-to-br from-navy-900 via-navy-800 to-teal-900 text-white">
      <div className="container-max text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-serif">
            {t('title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
            {t('subtitle')}
          </p>
          <p className="text-gray-300 max-w-2xl mx-auto">
            {t('description')}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default KnowledgeCentreHero;
