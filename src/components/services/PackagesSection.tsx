'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ClockIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  StarIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

const PackagesSection = () => {
  const t = useTranslations();
  const locale = useLocale();

  const packages = [
    {
      name: 'Cape Town Explorer',
      duration: '3 Days / 2 Nights',
      price: 'R 2,500',
      groupSize: '2-8 People',
      rating: 4.9,
      reviews: 127,
      image: 'https://images.unsplash.com/photo-1588097364416-f79243f2b3f0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fENhcGUlMjBUb3dufGVufDB8fDB8fHwy',
      highlights: [
        'Table Mountain Cable Car',
        'V&A Waterfront Tour',
        'Robben Island Visit',
        'Bo-Kaap Cultural Walk',
        'Strawberry Tasting in Stellenbosch'
      ],
      badge: 'Most Popular'
    },
    {
      name: 'Big 5 Safari Adventure',
      duration: '5 Days / 4 Nights',
      price: 'R 8,900',
      groupSize: '4-12 People',
      rating: 4.8,
      reviews: 89,
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      highlights: [
        'Kruger National Park',
        'Big 5 Game Drives',
        'Luxury Safari Lodge',
        'Professional Guide',
        'All Meals Included'
      ],
      badge: 'Premium'
    },
    {
      name: 'Garden Route Discovery',
      duration: '7 Days / 6 Nights',
      price: 'R 6,200',
      groupSize: '2-10 People',
      rating: 4.7,
      reviews: 156,
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      highlights: [
        'Knysna Elephant Sanctuary',
        'Tsitsikamma Forest',
        'Plettenberg Bay Beaches',
        'Oudtshoorn Ostrich Farm',
        'Cango Caves Exploration'
      ],
      badge: 'Adventure'
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
            {t('services.packages.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('services.packages.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="card overflow-hidden hover:shadow-2xl transition-shadow duration-300 relative"
            >
              {/* Badge */}
              {pkg.badge && (
                <div className="absolute top-4 right-4 z-10 bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {pkg.badge}
                </div>
              )}

              <div className="relative h-64 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url('${pkg.image}')` }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-30" />

              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-bold text-gray-900">{pkg.name}</h3>
                  <div className="flex items-center space-x-1 rtl:space-x-reverse">
                    <StarIcon className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium text-gray-700">{pkg.rating}</span>
                    <span className="text-sm text-gray-500">({pkg.reviews})</span>
                  </div>
                </div>

                <div className="flex items-center space-x-6 rtl:space-x-reverse mb-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-1 rtl:space-x-reverse">
                    <ClockIcon className="h-4 w-4" />
                    <span>{pkg.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1 rtl:space-x-reverse">
                    <UserGroupIcon className="h-4 w-4" />
                    <span>{pkg.groupSize}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">{t('services.packages.highlights')}</h4>
                  <ul className="space-y-1">
                    {pkg.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center">
                        <span className="w-2 h-2 bg-primary-500 rounded-full mr-2 rtl:mr-0 rtl:ml-2 flex-shrink-0"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={`/${locale}/contact`}
                  className="btn-primary w-full group"
                >
                  {t('book')}
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

export default PackagesSection;
