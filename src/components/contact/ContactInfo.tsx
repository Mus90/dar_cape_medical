'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
  ChatBubbleLeftRightIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

const ContactInfo = () => {
  const t = useTranslations('contact');

  const contactDetails = [
    {
      icon: MapPinIcon,
      title: t('info.address'),
      content: [
        'Cape Home Tourism',
        'CBD',
        'Cape Town, 8001',
        'Cape Town'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: PhoneIcon,
      title: t('info.phone'),
      content: [
        '+27 817394084'
      ],
      color: 'from-green-500 to-emerald-500',
      links: [
        'tel:+27123456789'
      ]
    },
    {
      icon: EnvelopeIcon,
      title: t('info.email'),
      content: [
        'info@capehome.co.za',
        'bookings@capehome.co.za'
      ],
      color: 'from-purple-500 to-indigo-500',
      links: [
        'mailto:info@capehome.co.za',
        'mailto:bookings@capehome.co.za'
      ]
    },
    {
      icon: ClockIcon,
      title: t('hours'),
      content: [
        'Monday - Friday: 8:00 AM - 6:00 PM',
        'Saturday: 9:00 AM - 4:00 PM',
        'Sunday: 10:00 AM - 2:00 PM',
        'Public Holidays: Closed'
      ],
      color: 'from-orange-500 to-red-500'
    }
  ];

  const socialLinks = [
    { name: 'Facebook', url: '#', icon: '📘' },
    { name: 'Instagram', url: '#', icon: '📷' },
    { name: 'Twitter', url: '#', icon: '🐦' },
    { name: 'YouTube', url: '#', icon: '📺' },
    { name: 'TikTok', url: '#', icon: '🎵' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="space-y-8"
    >
      <div>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          {t('getInTouch.title')}
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {t('getInTouch.description')}
        </p>
      </div>

      {/* Contact Details */}
      <div className="space-y-6">
        {contactDetails.map((detail, index) => (
          <motion.div
            key={detail.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex items-start space-x-4 rtl:space-x-reverse"
          >
            <div className={`w-12 h-12 bg-gradient-to-r ${detail.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
              <detail.icon className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">{detail.title}</h3>
              <div className="space-y-1">
                {detail.content.map((item, idx) => (
                  <div key={idx}>
                    {detail.links && detail.links[idx] ? (
                      <a
                        href={detail.links[idx]}
                        className="text-gray-600 hover:text-primary-600 transition-colors duration-200"
                      >
                        {item}
                      </a>
                    ) : (
                      <p className="text-gray-600">{item}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Social Media */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="bg-gray-50 rounded-xl p-6"
      >
        <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
          <GlobeAltIcon className="h-5 w-5 mr-2 rtl:mr-0 rtl:ml-2" />
          Follow Us on Social Media
        </h3>
        <div className="flex space-x-4 rtl:space-x-reverse">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-2xl hover:scale-110 transition-transform duration-200 shadow-md hover:shadow-lg"
              title={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </motion.div>

      {/* Emergency Contact */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
        className="bg-accent-50 border border-accent-200 rounded-xl p-6"
      >
        <h3 className="text-lg font-bold text-accent-900 mb-2">{t('emergency.title')}</h3>
        <p className="text-accent-700 mb-4">
          {t('emergency.description')}
        </p>
        <a
          href="tel:+27123456789"
          className="inline-flex items-center text-accent-800 font-medium hover:text-accent-900"
        >
          <PhoneIcon className="h-4 w-4 mr-2 rtl:mr-0 rtl:ml-2" />
          +27 817394084
        </a>
      </motion.div>
    </motion.div>
  );
};

export default ContactInfo;
