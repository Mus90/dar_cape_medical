'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import {
  TagIcon,
  CalendarIcon,
  ChartBarIcon,
  BookmarkIcon
} from '@heroicons/react/24/outline';

const BlogCategories = () => {
  const t = useTranslations('blog');

  const categories = [
    { id: 'all', name: t('categories.all'), count: 24 },
    { id: 'destinations', name: t('categories.destinations'), count: 8 },
    { id: 'photography', name: t('categories.photography'), count: 6 },
    { id: 'wine', name: t('categories.wine'), count: 4 },
    { id: 'culture', name: t('categories.culture'), count: 3 },
    { id: 'adventure', name: t('categories.adventure'), count: 2 },
    { id: 'tips', name: t('categories.tips'), count: 1 }
  ];

  const recentPosts = [
    {
      title: t('posts.post1.title'),
      date: '2024-01-15',
      image: 'https://images.unsplash.com/photo-1580060860978-d479ebf95a53?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      title: t('posts.post2.title'),
      date: '2024-01-12',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      title: t('posts.post3.title'),
      date: '2024-01-10',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    }
  ];

  const popularTags = [
    'Cape Town', 'Safari', 'Strawberry Tours', 'Big 5', 'Table Mountain',
    'Garden Route', 'Kruger Park', 'Photography', 'Culture', 'Adventure',
    'Food', 'Travel Tips', 'Wildlife', 'Beaches', 'History'
  ];

  return (
    <div className="space-y-8">
      {/* Categories */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="card p-6"
      >
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <ChartBarIcon className="h-5 w-5 mr-2 rtl:mr-0 rtl:ml-2" />
          {t('categories.title')}
        </h3>
        <div className="space-y-3">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
            >
              <span className="font-medium text-gray-700">{category.name}</span>
              <span className="px-2 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-700">
                {category.count}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Recent Posts */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="card p-6"
      >
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <BookmarkIcon className="h-5 w-5 mr-2 rtl:mr-0 rtl:ml-2" />
          {t('sidebar.recent')}
        </h3>
        <div className="space-y-4">
          {recentPosts.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex space-x-3 rtl:space-x-reverse hover:bg-gray-50 p-2 rounded-lg transition-colors duration-200 cursor-pointer"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-medium text-gray-900 line-clamp-2 mb-1">
                  {post.title}
                </h4>
                <p className="text-xs text-gray-500">
                  {new Date(post.date).toLocaleDateString()}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Popular Tags */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="card p-6"
      >
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <TagIcon className="h-5 w-5 mr-2 rtl:mr-0 rtl:ml-2" />
          {t('sidebar.tags')}
        </h3>
        <div className="flex flex-wrap gap-2">
          {popularTags.map((tag, index) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="px-3 py-1 bg-gray-100 hover:bg-primary-100 hover:text-primary-700 text-gray-600 text-sm rounded-full cursor-pointer transition-colors duration-200"
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* Newsletter Signup */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
        className="card p-6 bg-gradient-to-br from-primary-50 to-accent-50 border border-primary-100"
      >
        <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center">
          <BookmarkIcon className="h-5 w-5 mr-2 rtl:mr-0 rtl:ml-2" />
        </h3>
        <h2 className="text-xl font-bold text-gray-900 mb-4">{t('sidebar.newsletter.title')}</h2>
        <p className="text-gray-600 mb-4">
          {t('sidebar.newsletter.description')}
        </p>
        <div className="space-y-3">
          <input
            type="email"
            placeholder={t('sidebar.newsletter.placeholder')}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-sm"
          />
          <button className="w-full btn-primary text-sm py-2">
            {t('sidebar.newsletter.subscribe')}
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default BlogCategories;
