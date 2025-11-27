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
import {
  FaceBookIcon,
  InstagramIcon,
  TwitterIcon,
  YouTubeIcon,
  TikTokIcon
} from '@/components/icons/SocialIcons';

const ContactInfo = () => {
  const t = useTranslations('contact');

  const contactDetails = [
    {
      icon: MapPinIcon,
      title: t('info.address'),
      content: [
        'Dar Cape  ',
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
        '+27749548756'
      ],
      color: 'from-green-500 to-emerald-500',
      links: [
        'tel:+27749548756'
      ]
    },
    {
      icon: EnvelopeIcon,
      title: t('info.email'),
      content: [
        'support@darcape.com.com',
      ],
      color: 'from-purple-500 to-indigo-500',
      links: [
        'mailto:support@darcape.com.com',
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
    { name: 'Facebook', url: 'https://facebook.com/darcape ', icon: FaceBookIcon, color: 'text-blue-600 hover:text-blue-700' },
    { name: 'Instagram', url: 'https://instagram.com/darcape ', icon: InstagramIcon, color: 'text-pink-600 hover:text-pink-700' },
    { name: 'Twitter', url: 'https://twitter.com/darcape ', icon: TwitterIcon, color: 'text-gray-900 hover:text-gray-700' },
    { name: 'YouTube', url: 'https://youtube.com/@darcape ', icon: YouTubeIcon, color: 'text-red-600 hover:text-red-700' },
    { name: 'TikTok', url: 'https://tiktok.com/@darcape ', icon: TikTokIcon, color: 'text-black hover:text-gray-800' }
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
                        {detail.title === t('info.phone') ? (
                          <span dir="ltr" className="font-mono">{item}</span>
                        ) : (
                          item
                        )}
                      </a>
                    ) : (
                      <p className="text-gray-600">
                        {detail.title === t('info.phone') ? (
                          <span dir="ltr" className="font-mono">{item}</span>
                        ) : (
                          item
                        )}
                      </p>
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
          {t('social.title')}
        </h3>
        <div className="flex space-x-4 rtl:space-x-reverse">
          {socialLinks.map((social) => {
            const IconComponent = social.icon;
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-12 h-12 bg-white rounded-lg flex items-center justify-center hover:scale-110 transition-all duration-200 shadow-md hover:shadow-lg ${social.color}`}
                title={social.name}
              >
                <IconComponent className="w-6 h-6" />
              </a>
            );
          })}
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
          href="tel:+27749548756"
          className="inline-flex items-center text-accent-800 font-medium hover:text-accent-900"
        >
          <PhoneIcon className="h-4 w-4 mr-2 rtl:mr-0 rtl:ml-2" />
          <span dir="ltr" className="font-mono">+27749548756</span>
        </a>
      </motion.div>
    </motion.div>
  );
};

export default ContactInfo;
