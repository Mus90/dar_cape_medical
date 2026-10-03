'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface ArticleDetailProps {
  locale: string;
  article: {
    title: string;
    content: string;
    category: string;
    lastReviewed: string;
    readTime: string;
    disclaimer: string;
    sources: Array<{ name: string; url: string; type: 'official' | 'interpretation' }>;
    relatedServices: Array<{ title: string; slug: string }>;
  };
}

const ArticleDetail = ({ locale, article }: ArticleDetailProps) => {
  const t = useTranslations('knowledge.article');

  return (
    <main className="section-padding pt-32">
      <div className="container-max max-w-4xl">
        {/* Article Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="flex items-center space-x-2 rtl:space-x-reverse mb-4">
            <span className="px-3 py-1 bg-teal-100 text-teal-700 text-sm font-semibold rounded-full">
              {article.category}
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4 font-serif">
            {article.title}
          </h1>
          
          <div className="flex items-center space-x-6 rtl:space-x-reverse text-sm text-gray-600">
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <span>📅</span>
              <span>{t('lastReviewed')}: {article.lastReviewed}</span>
            </div>
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <span>⏱️</span>
              <span>{article.readTime}</span>
            </div>
          </div>
        </motion.div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-amber-50 border-2 border-amber-200 rounded-xl p-6 mb-8"
        >
          <div className="flex items-start space-x-3 rtl:space-x-reverse">
            <span className="text-2xl">⚠️</span>
            <p className="text-amber-800 leading-relaxed">
              {article.disclaimer}
            </p>
          </div>
        </motion.div>

        {/* Article Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white p-8 rounded-2xl border border-gray-200 mb-8"
        >
          <div className="prose prose-lg max-w-none text-gray-700 leading-loose prose-headings:font-serif prose-headings:text-navy-900 prose-headings:font-bold prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-8 prose-h2:border-b prose-h2:border-gray-200 prose-h2:pb-4 prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-6 prose-h3:text-navy-800 prose-h3:font-bold prose-p:mb-8 prose-p:leading-9 prose-ul:my-6 prose-ol:my-6 prose-li:mb-3 prose-li:leading-8 prose-li:pl-2 prose-strong:text-navy-900 prose-em:text-gray-600 prose-table:my-8 prose-table:w-full prose-table:border-collapse prose-th:bg-navy-900 prose-th:text-white prose-th:font-semibold prose-th:p-4 prose-th:text-left prose-td:border prose-td:border-gray-200 prose-td:p-4 prose-td:text-left prose-td:leading-7 prose-tr:hover:bg-gray-50 prose-a:text-teal-600 prose-a:no-underline hover:prose-a:underline">
            <div dangerouslySetInnerHTML={{ __html: article.content }} />
          </div>
        </motion.div>

        {/* Sources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gray-50 p-8 rounded-2xl border border-gray-200 mb-8"
        >
          <h2 className="text-2xl font-bold text-navy-900 mb-6 font-serif">
            {t('sources.title')}
          </h2>
          
          <div className="space-y-4">
            {article.sources.map((source, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg ${
                  source.type === 'official'
                    ? 'bg-teal-50 border border-teal-200'
                    : 'bg-gray-100 border border-gray-200'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 rtl:space-x-reverse mb-2">
                      <span className={`text-xs font-semibold px-2 py-1 rounded ${
                        source.type === 'official'
                          ? 'bg-teal-200 text-teal-800'
                          : 'bg-gray-200 text-gray-700'
                      }`}>
                        {source.type === 'official' ? t('sources.official') : t('sources.interpretation')}
                      </span>
                    </div>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-600 hover:text-teal-700 font-medium flex items-center"
                    >
                      {source.name}
                      <span className="ml-2">↗</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-sm text-gray-600 mt-6 italic">
            {t('sources.note')}
          </p>
        </motion.div>

        {/* Related Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-navy-900 to-navy-800 rounded-2xl p-8 text-white"
        >
          <h2 className="text-2xl font-bold mb-6 font-serif">
            {t('relatedServices.title')}
          </h2>
          
          <div className="space-y-4">
            {article.relatedServices.map((service, index) => (
              <Link
                key={index}
                href={`/${locale}/services/${service.slug}`}
                className="block bg-white/10 hover:bg-white/20 p-4 rounded-xl transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium">{service.title}</span>
                  <span>→</span>
                </div>
              </Link>
            ))}
          </div>

          <Link
            href={`/${locale}/contact`}
            className="inline-block mt-6 px-6 py-3 bg-teal-600 text-white font-semibold rounded-xl hover:bg-teal-700 transition-colors"
          >
            {t('relatedServices.cta')}
          </Link>
        </motion.div>
      </div>
    </main>
  );
};

export default ArticleDetail;

