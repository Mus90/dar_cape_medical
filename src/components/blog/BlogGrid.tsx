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

  // Arabic blog posts
  const arabicPosts = [
    {
      id: '1',
      title: 'أفضل 10 وجهات يجب زيارتها في كيب تاون',
      excerpt: 'اكتشف أكثر المواقع إثارة للإعجاب التي يجب أن تكون في برنامج كل مسافر إلى كيب تاون.',
      author: 'مصطفى علي',
      date: '2024-01-15',
      readTime: '8 دقائق قراءة',
      image: 'https://images.unsplash.com/photo-1575729370600-781d9c08a74e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category: 'destinations',
      categoryName: 'الوجهات',
      tags: ['كيب تاون', 'كروجر', 'طريق الحديقة', 'نصائح السفر']
    },
    {
      id: '2',
      title: 'تصوير السفاري: التقاط الخمسة الكبار',
      excerpt: 'نصائح وتقنيات احترافية لتصوير أروع الحيوانات البرية في أفريقيا.',
      author: 'مصطفى علي',
      date: '2024-01-12',
      readTime: '6 دقائق قراءة',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      category: 'photography',
      categoryName: 'التصوير',
      tags: ['سفاري', 'تصوير', 'حياة برية', 'الخمسة الكبار']
    },
    {
      id: '3',
      title: 'دليل تذوق العنب: ستيلينبوش مقابل فرانشهوك',
      excerpt: 'قارن بين منطقتين من أفضل مناطق العنب في كيب تاون واكتشف أيهما يناسب ذوقك.',
      author: 'مصطفى علي',
      date: '2024-01-10',
      readTime: '5 دقائق قراءة',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      category: 'Grape',
      categoryName: 'العنب والمأكولات',
      tags: ['نبيذ', 'ستيلينبوش', 'فرانشهوك', 'طعام']
    },
    {
      id: '4',
      title: 'الانغماس الثقافي: فهم التراث الجنوب أفريقي',
      excerpt: 'انغمس في النسيج الثقافي الغني الذي يجعل كيب تاون فريدة من نوعها.',
      author: 'مصطفى علي',
      date: '2024-01-08',
      readTime: '7 دقائق قراءة',
      image: 'https://images.unsplash.com/photo-1570527141186-e391a3914c42?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category: 'culture',
      categoryName: 'الثقافة',
      tags: ['ثقافة', 'تراث', 'تاريخ', 'حياة محلية']
    },
    {
      id: '5',
      title: 'أنشطة المغامرة: اندفاع الأدرينالين في كيب تاون',
      excerpt: 'من القفز بالحبل إلى الغوص مع أسماك القرش، اكتشف مغامرات كيب تاون المثيرة.',
      author: 'مصطفى علي',
      date: '2024-01-05',
      readTime: '6 دقائق قراءة',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      category: 'adventure',
      categoryName: 'المغامرة',
      tags: ['مغامرة', 'كيب تاون', 'رياضات متطرفة', 'أنشطة']
    },
    {
      id: '6',
      title: 'أفضل وقت لزيارة كيب تاون: دليل الفصول',
      excerpt: 'خطط لرحلتك المثالية مع دليلنا الشامل لفصول كيب تاون.',
      author: 'مصطفى علي',
      date: '2024-01-03',
      readTime: '4 دقائق قراءة',
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      category: 'tips',
      categoryName: 'نصائح السفر',
      tags: ['نصائح السفر', 'طقس', 'تخطيط', 'فصول']
    }
  ];

  // English blog posts
  const englishPosts = [
    {
      id: '1',
      title: 'Top 10 Must-Visit Destinations in Cape Town',
      excerpt: 'Discover the most breathtaking locations that should be on every traveler\'s Cape Town itinerary.',
      author: 'Mustafa Ali',
      date: '2024-01-15',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1575729370600-781d9c08a74e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category: 'destinations',
      categoryName: 'Destinations',
      tags: ['Cape Town', 'Kruger', 'Garden Route', 'Travel Tips']
    },
    {
      id: '2',
      title: 'Safari Photography: Capturing the Big 5',
      excerpt: 'Professional tips and techniques for photographing Africa\'s most magnificent wildlife.',
      author: 'Mustafa Ali',
      date: '2024-01-12',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      category: 'photography',
      categoryName: 'Photography',
      tags: ['Safari', 'Photography', 'Wildlife', 'Big 5']
    },
    {
      id: '3',
      title: 'Grape Tasting Guide: Stellenbosch vs Franschhoek',
      excerpt: 'Compare two of Cape Town\'s premier Grape regions and discover which suits your taste.',
      author: 'Mustafa Ali',
      date: '2024-01-10',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      category: 'Grape',
      categoryName: 'Grape & Food',
      tags: ['Grape', 'Stellenbosch', 'Franschhoek', 'Food']
    },
    {
      id: '4',
      title: 'Cultural Immersion: Understanding Cape Town Heritage',
      excerpt: 'Dive deep into the rich cultural tapestry that makes Cape Town unique.',
      author: 'Mustafa Ali',
      date: '2024-01-08',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1570527141186-e391a3914c42?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category: 'culture',
      categoryName: 'Culture',
      tags: ['Culture', 'Heritage', 'History', 'Local Life']
    },
    {
      id: '5',
      title: 'Adventure Activities: Adrenaline Rush in Cape Town',
      excerpt: 'From bungee jumping to shark cage diving, discover Cape Town\'s thrilling adventures.',
      author: 'Mustafa Ali',
      date: '2024-01-05',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      category: 'adventure',
      categoryName: 'Adventure',
      tags: ['Adventure', 'Cape Town', 'Extreme Sports', 'Activities']
    },
    {
      id: '6',
      title: 'Best Time to Visit Cape Town: Seasonal Guide',
      excerpt: 'Plan your perfect trip with our comprehensive guide to Cape Town\'s seasons.',
      author: 'Mustafa Ali',
      date: '2024-01-03',
      readTime: '4 min read',
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      category: 'tips',
      categoryName: 'Travel Tips',
      tags: ['Travel Tips', 'Weather', 'Planning', 'Seasons']
    }
  ];

  // Select posts based on locale
  const blogPosts = locale === 'ar' ? arabicPosts : englishPosts;

  const filteredPosts = selectedCategory === 'all'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  // Category names based on locale
  const categoryNames = locale === 'ar' ? {
    all: 'جميع المقالات',
    destinations: 'الوجهات',
    photography: 'التصوير',
    Grape: 'العنب والمأكولات',
    culture: 'الثقافة',
    adventure: 'المغامرة',
    tips: 'نصائح السفر'
  } : {
    all: 'All Posts',
    destinations: 'Destinations',
    photography: 'Photography',
    Grape: 'Grape & Food',
    culture: 'Culture',
    adventure: 'Adventure',
    tips: 'Travel Tips'
  };

  const categories = [
    { id: 'all', name: categoryNames.all, count: blogPosts.length },
    { id: 'destinations', name: categoryNames.destinations, count: blogPosts.filter(p => p.category === 'destinations').length },
    { id: 'photography', name: categoryNames.photography, count: blogPosts.filter(p => p.category === 'photography').length },
    { id: 'Grape', name: categoryNames.Grape, count: blogPosts.filter(p => p.category === 'Grape').length },
    { id: 'culture', name: categoryNames.culture, count: blogPosts.filter(p => p.category === 'culture').length },
    { id: 'adventure', name: categoryNames.adventure, count: blogPosts.filter(p => p.category === 'adventure').length },
    { id: 'tips', name: categoryNames.tips, count: blogPosts.filter(p => p.category === 'tips').length }
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
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${selectedCategory === category.id
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
                {locale === 'ar' ? 'اقرأ المزيد' : 'Read More'}
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
          {locale === 'ar' ? 'تحميل المزيد من المقالات' : 'Load More Posts'}
        </button>
      </motion.div>
    </div>
  );
};

export default BlogGrid;
