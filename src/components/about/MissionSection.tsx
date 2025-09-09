'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import {
  EyeIcon,
  HeartIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

const MissionSection = () => {
  const t = useTranslations('about');

  const sections = [
    {
      icon: HeartIcon,
      title: t('mission.title'),
      description: t('mission.description'),
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: EyeIcon,
      title: t('vision.title'),
      description: t('vision.description'),
      color: 'from-blue-500 to-indigo-500'
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')`
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl">
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center">
                  <GlobeAltIcon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">5+ Years</p>
                  <p className="text-sm text-gray-600">{t('team.experience')}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4 rtl:space-x-reverse"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${section.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <section.icon className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {section.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {section.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
