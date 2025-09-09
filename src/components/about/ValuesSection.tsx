'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { 
  StarIcon, 
  ShieldCheckIcon, 
  SparklesIcon, 
  TrophyIcon 
} from '@heroicons/react/24/outline';

const ValuesSection = () => {
  const t = useTranslations('about.values');

  const values = [
    {
      icon: StarIcon,
      title: t('quality'),
      description: t('qualityDesc'),
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: ShieldCheckIcon,
      title: t('authenticity'),
      description: t('authenticityDesc'),
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: SparklesIcon,
      title: t('sustainability'),
      description: t('sustainabilityDesc'),
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: TrophyIcon,
      title: t('excellence'),
      description: t('excellenceDesc'),
      color: 'from-purple-500 to-indigo-500'
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card p-8 text-center hover:shadow-2xl transition-shadow duration-300 group"
            >
              <div className={`w-20 h-20 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <value.icon className="h-10 w-10 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {value.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
