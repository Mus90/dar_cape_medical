'use client';

import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { CalendarIcon, ClockIcon } from '@heroicons/react/24/outline';

interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  lastReviewed: string;
  readTime: string;
}

const ArticleGrid = () => {
  const t = useTranslations('knowledge.articles');
  const locale = useLocale();

  const articles: Article[] = [
    {
      id: '1',
      slug: 'hpcsa-registration-categories-explained',
      title: 'Understanding HPCSA Registration Categories for International Medical Graduates',
      excerpt: 'A detailed explanation of the different registration categories available to foreign-qualified doctors and the requirements for each.',
      category: 'hpcsa-registration',
      lastReviewed: 'September 2024',
      readTime: '8 min read'
    },
    {
      id: '2',
      slug: 'epic-credential-verification-process',
      title: 'EPIC Credential Verification: Step-by-Step Guide for South African Registration',
      excerpt: 'Complete walkthrough of the ECFMG EPIC verification process required for HPCSA registration of international medical graduates.',
      category: 'epic-verification',
      lastReviewed: 'September 2024',
      readTime: '10 min read'
    },
    {
      id: '3',
      slug: 'supernumerary-registrar-positions',
      title: 'Supernumerary Registrar Training: What International Doctors Need to Know',
      excerpt: 'Overview of self-funded training positions, availability, and considerations for international medical graduates.',
      category: 'supernumerary-training',
      lastReviewed: 'September 2024',
      readTime: '6 min read'
    },
    {
      id: '4',
      slug: 'cmsa-fellowship-examination-structure',
      title: 'CMSA Fellowship Examinations: Structure and Preparation Guide',
      excerpt: 'Understanding the College of Medicine of South Africa examination structure for specialist qualification.',
      category: 'cmsa-examinations',
      lastReviewed: 'September 2024',
      readTime: '12 min read'
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
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6 font-serif">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link
                href={`/${locale}/knowledge-centre/article/${article.slug}`}
                className="block h-full"
              >
                <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300 h-full">
                  <div className="flex items-center space-x-2 rtl:space-x-reverse mb-4">
                    <span className="px-3 py-1 bg-teal-100 text-teal-700 text-xs font-semibold rounded-full">
                      {article.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-navy-900 mb-3 font-serif line-clamp-2">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-2 rtl:space-x-reverse">
                      <CalendarIcon className="h-4 w-4" />
                      <span>{t('lastReviewed')}: {article.lastReviewed}</span>
                    </div>
                    <div className="flex items-center space-x-2 rtl:space-x-reverse">
                      <ClockIcon className="h-4 w-4" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href={`/${locale}/contact`}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-600 to-teal-700 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-teal-500/30 hover:scale-105"
          >
            {t('cta')}
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ArticleGrid;
