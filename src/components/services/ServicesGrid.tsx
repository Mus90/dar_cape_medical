'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  CameraIcon,
  GlobeAltIcon,
  HeartIcon,
  RocketLaunchIcon,
  BeakerIcon,
  MapIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

const ServicesGrid = () => {
  const t = useTranslations();
  const locale = useLocale();

  const services = [
    {
      icon: CameraIcon,
      title: t('home.services.safari.title'),
      description: t('home.services.safari.description'),
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      color: 'from-green-500 to-emerald-600',
      features: ['Big 5 Wildlife Viewing', 'Professional Guide', 'Game Drive Vehicle', 'Refreshments']
    },
    {
      icon: BeakerIcon,
      title: t('home.services.wine.title'),
      description: t('home.services.wine.description'),
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      color: 'from-purple-500 to-indigo-600',
      features: ['Strawberry Tasting Sessions', 'Vineyard Tours', 'Cellar Visits', 'Gourmet Lunch']
    },
    {
      icon: HeartIcon,
      title: t('home.services.culture.title'),
      description: t('home.services.culture.description'),
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      color: 'from-orange-500 to-red-600',
      features: ['Historical Sites', 'Local Communities', 'Traditional Crafts', 'Cultural Performances']
    },
    {
      icon: RocketLaunchIcon,
      title: t('services.adventure.title'),
      description: t('services.adventure.description'),
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      color: 'from-blue-500 to-cyan-600',
      features: ['Table Mountain Hike', 'Bungee Jumping', 'Shark Cage Diving', 'Safety Equipment']
    },
    {
      icon: GlobeAltIcon,
      title: t('services.city.title'),
      description: t('services.city.description'),
      image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      color: 'from-teal-500 to-green-600',
      features: ['V&A Waterfront', 'Robben Island', 'Bo-Kaap District', 'Local Cuisine']
    },
    {
      icon: MapIcon,
      title: t('services.custom.title'),
      description: t('services.custom.description'),
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      color: 'from-pink-500 to-rose-600',
      features: ['Flexible Itinerary', 'Private Guide', 'Luxury Transport', '24/7 Support']
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('services.grid.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('services.grid.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group card overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url('${service.image}')` }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300" />
                <div className={`absolute top-4 left-4 w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center`}>
                  <service.icon className="h-6 w-6 text-white" />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">{t('services.includes')}:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center">
                        <span className="w-2 h-2 bg-primary-500 rounded-full mr-2 rtl:mr-0 rtl:ml-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={`/${locale}/contact`}
                  className="btn-primary w-full group"
                >
                  {t('services.book')}
                  <ArrowRightIcon className="h-4 w-4 ml-2 rtl:ml-0 rtl:mr-2 rtl:rotate-180 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
