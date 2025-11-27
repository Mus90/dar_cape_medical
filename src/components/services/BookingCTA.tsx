'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  PhoneIcon,
  EnvelopeIcon,
  ChatBubbleLeftRightIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

const BookingCTA = () => {
  const t = useTranslations('cta');
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
            {t('title')}
          </h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto opacity-90">
            {t('subtitle')}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors duration-300"
            >
              <PhoneIcon className="h-12 w-12 mx-auto mb-4 text-white" />
              <h3 className="text-xl font-semibold mb-2">{t('call.title')}</h3>
              <p className="text-white/80 mb-4">{t('call.description')}</p>
              <a
                href="tel:+27749548756"
                className="text-white font-medium hover:underline"
              >
                +27749548756
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors duration-300"
            >
              <EnvelopeIcon className="h-12 w-12 mx-auto mb-4 text-white" />
              <h3 className="text-xl font-semibold mb-2">{t('email.title')}</h3>
              <p className="text-white/80 mb-4">{t('email.description')}</p>
              <a
                href="mailto:support@darcape.com"
                className="text-white font-medium hover:underline"
              >
                support@darcape.com
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors duration-300"
            >
              <ChatBubbleLeftRightIcon className="h-12 w-12 mx-auto mb-4 text-white" />
              <h3 className="text-xl font-semibold mb-2">{t('whatsapp.title')}</h3>
              <p className="text-white/80 mb-4">{t('whatsapp.description')}</p>
              <a
                href="https://wa.me/27123456789"
                className="text-white font-medium hover:underline"
              >
                {t('whatsapp.action')}
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href={`/${locale}/contact`}
              className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-4 px-8 rounded-lg transition-colors duration-200 inline-flex items-center justify-center group"
            >
              {t('bookTrip')}
              <ArrowRightIcon className="h-5 w-5 ml-2 rtl:ml-0 rtl:mr-2 rtl:rotate-180 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform duration-200" />
            </Link>

            <Link
              href={`/${locale}/gallery`}
              className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium py-4 px-8 rounded-lg transition-colors duration-200 inline-flex items-center justify-center"
            >
              {t('viewGallery')}
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default BookingCTA;
