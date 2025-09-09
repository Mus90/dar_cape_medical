'use client';

import { useLocale } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  CalendarIcon,
  ClockIcon,
  UserIcon,
  TagIcon,
  ArrowLeftIcon,
  ShareIcon
} from '@heroicons/react/24/outline';

interface BlogPostProps {
  post: {
    id: string;
    title: string;
    content: string;
    author: string;
    date: string;
    readTime: string;
    category: string;
    categoryName: string;
    image: string;
    tags: string[];
  };
}

const BlogPost = ({ post }: BlogPostProps) => {
  const locale = useLocale();

  const sharePost = () => {
    if (typeof window !== 'undefined') {
      if (navigator.share) {
        navigator.share({
          title: post.title,
          url: window.location.href,
        });
      } else {
        // Fallback to copying URL
        navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
      }
    }
  };

  return (
    <article className="max-w-4xl mx-auto">
      {/* Back to Blog */}
      <div className="container-max px-4 sm:px-6 lg:px-8 pt-8">
        <Link
          href={`/${locale}/blog`}
          className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium group mb-8"
        >
          <ArrowLeftIcon className="h-4 w-4 mr-2 rtl:mr-0 rtl:ml-2 rtl:rotate-180 group-hover:-translate-x-1 rtl:group-hover:translate-x-1 transition-transform duration-200" />
          Back to Blog
        </Link>
      </div>

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-96 md:h-[500px] mb-8"
      >
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30" />

        {/* Category badge */}
        <div className="absolute top-6 left-6 bg-primary-600 text-white px-4 py-2 rounded-full font-medium">
          {post.categoryName}
        </div>
      </motion.div>

      <div className="container-max px-4 sm:px-6 lg:px-8">
        {/* Article Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Meta info */}
          <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6">
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <UserIcon className="h-5 w-5" />
              <span className="font-medium">{post.author}</span>
            </div>
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <CalendarIcon className="h-5 w-5" />
              <span>{new Date(post.date).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <ClockIcon className="h-5 w-5" />
              <span>{post.readTime}</span>
            </div>
            <button
              onClick={sharePost}
              className="flex items-center space-x-2 rtl:space-x-reverse text-primary-600 hover:text-primary-700 transition-colors duration-200"
            >
              <ShareIcon className="h-5 w-5" />
              <span>Share</span>
            </button>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
              >
                <TagIcon className="h-3 w-3 mr-1 rtl:mr-0 rtl:ml-1" />
                {tag}
              </span>
            ))}
          </div>
        </motion.header>

        {/* Article Content */}
        <motion.div
          key={post.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="prose prose-lg max-w-none mb-12"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Author Bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gray-50 rounded-xl p-6 mb-12"
        >
          <div className="flex items-start space-x-4 rtl:space-x-reverse">
            <img
              src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
              alt={post.author}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{post.author}</h3>
              <p className="text-gray-600 leading-relaxed">
                Travel expert and photographer with over 10 years of experience exploring Cape Town.
                Passionate about sharing the beauty and culture of this incredible country with fellow travelers.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </article>
  );
};

export default BlogPost;
