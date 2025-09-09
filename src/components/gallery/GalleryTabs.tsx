'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { PhotoIcon, VideoCameraIcon } from '@heroicons/react/24/outline';
import PhotoGallery from './PhotoGallery';
import VideoGallery from './VideoGallery';

const GalleryTabs = () => {
  const [activeTab, setActiveTab] = useState('photos');
  const t = useTranslations('gallery');

  const tabs = [
    {
      id: 'photos',
      name: t('photos'),
      icon: PhotoIcon,
      component: PhotoGallery
    },
    {
      id: 'videos',
      name: t('videos'),
      icon: VideoCameraIcon,
      component: VideoGallery
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 p-1 rounded-xl">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 rtl:space-x-reverse px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-white text-primary-600 shadow-md'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <tab.icon className="h-5 w-5" />
                <span>{tab.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {activeTab === 'photos' && <PhotoGallery />}
          {activeTab === 'videos' && <VideoGallery />}
        </motion.div>
      </div>
    </section>
  );
};

export default GalleryTabs;
