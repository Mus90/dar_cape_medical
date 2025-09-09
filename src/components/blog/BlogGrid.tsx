'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  CalendarIcon, 
  ClockIcon, 
  UserIcon,
  ArrowRightIcon,
  TagIcon
} from '@heroicons/react/24/outline';

const BlogGrid = () => {
  const t = useTranslations('blog');
  const locale = useLocale();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogPosts = [
    {
      id: '1',
      title: t('posts.destinations.title'),
      excerpt: t('posts.destinations.excerpt'),
      author: 'Sarah Mitchell',
      date: '2024-01-15',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      category: 'destinations',
      categoryName: t('categories.destinations'),
      tags: ['Cape Town', 'Kruger', 'Garden Route', 'Travel Tips']
    },
    {
      id: '2',
      title: t('posts.photography.title'),
      excerpt: t('posts.photography.excerpt'),
      author: 'David Thompson',
      date: '2024-01-12',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      category: 'photography',
      categoryName: t('categories.photography'),
      tags: ['Safari', 'Photography', 'Wildlife', 'Big 5']
    },
    {
      id: '3',
      title: t('posts.wine.title'),
      excerpt: t('posts.wine.excerpt'),
      author: 'Ahmed Mansour',
      date: '2024-01-10',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      category: 'wine',
      categoryName: t('categories.wine'),
      tags: ['Wine', 'Stellenbosch', 'Franschhoek', 'Food']
    },
    {
      id: '4',
      title: t('posts.culture.title'),
      excerpt: t('posts.culture.excerpt'),
      author: 'Sarah Mitchell',
      date: '2024-01-08',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      category: 'culture',
      categoryName: t('categories.culture'),
      tags: ['Culture', 'Heritage', 'History', 'Local Life']
    },
    {
      id: '5',
      title: t('posts.adventure.title'),
      excerpt: t('posts.adventure.excerpt'),
      author: 'David Thompson',
      date: '2024-01-05',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      category: 'adventure',
      categoryName: t('categories.adventure'),
      tags: ['Adventure', 'Cape Town', 'Extreme Sports', 'Activities']
    },
    {
      id: '6',
      title: t('posts.tips.title'),
      excerpt: t('posts.tips.excerpt'),
      author: 'Ahmed Mansour',
      date: '2024-01-03',
      readTime: '4 min read',
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      category: 'tips',
      categoryName: t('categories.tips'),
      tags: ['Travel Tips', 'Weather', 'Planning', 'Seasons']
    }
  ];

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const categories = [
    { id: 'all', name: t('categories.all'), count: blogPosts.length },
    { id: 'destinations', name: t('categories.destinations'), count: blogPosts.filter(p => p.category === 'destinations').length },
    { id: 'photography', name: t('categories.photography'), count: blogPosts.filter(p => p.category === 'photography').length },
    { id: 'wine', name: t('categories.wine'), count: blogPosts.filter(p => p.category === 'wine').length },
    { id: 'culture', name: t('categories.culture'), count: blogPosts.filter(p => p.category === 'culture').length },
    { id: 'adventure', name: t('categories.adventure'), count: blogPosts.filter(p => p.category === 'adventure').length },
    { id: 'tips', name: t('categories.tips'), count: blogPosts.filter(p => p.category === 'tips').length }
  ];

  return (
    <div>
      {/* Category Filter */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                selectedCategory === category.id
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredPosts.map((post, index) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="card overflow-hidden hover:shadow-2xl transition-shadow duration-300 group"
          >
            <div className="relative h-64 overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300" />
              
              {/* Category badge */}
              <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                {post.categoryName}
              </div>
            </div>

            <div className="p-6">
              {/* Meta info */}
              <div className="flex items-center space-x-4 rtl:space-x-reverse text-sm text-gray-500 mb-3">
                <div className="flex items-center space-x-1 rtl:space-x-reverse">
                  <UserIcon className="h-4 w-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center space-x-1 rtl:space-x-reverse">
                  <CalendarIcon className="h-4 w-4" />
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center space-x-1 rtl:space-x-reverse">
                  <ClockIcon className="h-4 w-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>

              {/* Title */}
              <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-200">
                <Link href={`/${locale}/blog/${post.id}`}>
                  {post.title}
                </Link>
              </h2>

              {/* Excerpt */}
              <p className="text-gray-600 mb-4 leading-relaxed">
                {post.excerpt}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                  >
                    <TagIcon className="h-3 w-3 mr-1 rtl:mr-0 rtl:ml-1" />
                    {tag}
                  </span>
                ))}
              </div>

              {/* Read more link */}
              <Link
                href={`/${locale}/blog/${post.id}`}
                className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium group"
              >
                {t('readMore')}
                <ArrowRightIcon className="h-4 w-4 ml-2 rtl:ml-0 rtl:mr-2 rtl:rotate-180 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Load More Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <button className="btn-secondary">
          {t('loadMore')}
        </button>
      </motion.div>
    </div>
  );
};

export default BlogGrid;
