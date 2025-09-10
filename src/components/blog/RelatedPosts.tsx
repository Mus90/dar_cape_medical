'use client';

import { useLocale } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRightIcon, CalendarIcon, ClockIcon } from '@heroicons/react/24/outline';

interface RelatedPostsProps {
  currentPostId: string;
  category: string;
}

const RelatedPosts = ({ currentPostId, category }: RelatedPostsProps) => {
  const locale = useLocale();

  // Mock related posts - in a real app, this would come from your CMS/database
  const relatedPosts = [
    {
      id: '2',
      title: 'Safari Photography: Capturing the Big 5',
      excerpt: 'Professional tips and techniques for photographing Africa\'s most magnificent wildlife.',
      author: 'Ahmed Ali',
      date: '2024-01-12',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1544219110-079476d43889?q=80&w=1184&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category: 'photography'
    },
    {
      id: '3',
      title: 'Strawberry Tasting Guide: Stellenbosch vs Franschhoek',
      excerpt: 'Compare two of Cape Town\'s premier Strawberryregions and discover which suits your taste.',
      author: 'Mustafa Ali',
      date: '2024-01-10',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1585254589738-aff16702b974?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category: 'wine'
    },
    {
      id: '4',
      title: 'Cultural Immersion: Understanding Cape Town Heritage',
      excerpt: 'Dive deep into the rich cultural tapestry that makes Cape Town unique.',
      author: 'Mujahid Mohamed',
      date: '2024-01-08',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1704826413546-5805fd26c94f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category: 'culture'
    }
  ].filter(post => post.id !== currentPostId);

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Related Articles
          </h2>
          <p className="text-xl text-gray-600">
            Continue exploring our travel insights and destination guides
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {relatedPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card overflow-hidden hover:shadow-2xl transition-shadow duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300" />
              </div>

              <div className="p-6">
                <div className="flex items-center space-x-4 rtl:space-x-reverse text-sm text-gray-500 mb-3">
                  <div className="flex items-center space-x-1 rtl:space-x-reverse">
                    <CalendarIcon className="h-4 w-4" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-1 rtl:space-x-reverse">
                    <ClockIcon className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-200">
                  <Link href={`/${locale}/blog/${post.id}`}>
                    {post.title}
                  </Link>
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                <Link
                  href={`/${locale}/blog/${post.id}`}
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium group"
                >
                  Read More
                  <ArrowRightIcon className="h-4 w-4 ml-2 rtl:ml-0 rtl:mr-2 rtl:rotate-180 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href={`/${locale}/blog`}
            className="btn-secondary"
          >
            View All Articles
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default RelatedPosts;
