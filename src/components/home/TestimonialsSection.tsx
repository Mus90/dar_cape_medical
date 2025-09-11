'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { StarIcon } from '@heroicons/react/24/solid';

const TestimonialsSection = () => {
  const t = useTranslations('home.testimonials');

  const testimonials = [
    {
      name: t('items.Ali.name'),
      location: t('items.Ali.location'),
      rating: 5,
      comment: t('items.Ali.comment'),
      image: ''
    },
    {
      name: t('items.OmNoura.name'),
      location: t('items.OmNoura.location'),
      rating: 5,
      comment: t('items.OmNoura.comment'),
      image: ''
    },
    {
      name: t('items.AbdallahAlmardi.name'),
      location: t('items.AbdallahAlmardi.location'),
      rating: 5,
      comment: t('items.AbdallahAlmardi.comment'),
      image: ''
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="card p-6 hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed italic">
                "{testimonial.comment}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
