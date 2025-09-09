'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRightIcon, PhoneIcon } from '@heroicons/react/24/outline';

const CTASection = () => {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <section className="section-padding bg-gradient-to-r from-primary-600 to-accent-500">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-white"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready for Your Cape Town Adventure?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Contact us today to plan your perfect trip. Our expert team is ready to create unforgettable experiences tailored just for you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href={`/${locale}/contact`}
              className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-4 px-8 rounded-lg transition-colors duration-200 inline-flex items-center justify-center group"
            >
              {t('home.hero.cta')}
              <ArrowRightIcon className="h-5 w-5 ml-2 rtl:ml-0 rtl:mr-2 rtl:rotate-180 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform duration-200" />
            </Link>

            <a
              href="tel:+27123456789"
              className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium py-4 px-8 rounded-lg transition-colors duration-200 inline-flex items-center justify-center"
            >
              <PhoneIcon className="h-5 w-5 mr-2 rtl:mr-0 rtl:ml-2" />
              Call Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
