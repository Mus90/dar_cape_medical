'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import {
  EnvelopeIcon,
  PhoneIcon
} from '@heroicons/react/24/outline';

const TeamSection = () => {
  const t = useTranslations('about.team');

  const team = [
    {
      name: t('members.Mustafa.name'),
      position: t('members.Mustafa.position'),
      description: t('members.Mustafa.description'),
      image: '/images/team/Mustafa.png',
      email: 'mustafa@darcape.com',
      phone: '+27817394084'
    },
    {
      name: t('members.mujahid.name'),
      position: t('members.mujahid.position'),
      description: t('members.mujahid.description'),
      image: '/images/team/Mujahid.jpg',
      email: 'mujahid@darcape.com',
      phone: '+27 123 456 790'
    },
    {
      name: t('members.Ahmed.name'),
      position: t('members.Ahmed.position'),
      description: t('members.Ahmed.description'),
      image: '',
      email: 'Ahmed@darcape.com',
      phone: '+27 123 456 791'
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
            {t('title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="card overflow-hidden hover:shadow-2xl transition-shadow duration-300 group"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                {/* Contact overlay */}
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-3 rtl:space-x-reverse">
                    <a
                      href={`mailto:${member.email}`}
                      className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200"
                    >
                      <EnvelopeIcon className="h-5 w-5" />
                    </a>
                    <a
                      href={`tel:${member.phone}`}
                      className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200"
                    >
                      <PhoneIcon className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-primary-600 font-medium mb-3">
                  {member.position}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {member.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
