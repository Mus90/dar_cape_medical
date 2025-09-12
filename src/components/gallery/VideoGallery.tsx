'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { PlayIcon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

const VideoGallery = () => {
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);

  const videos = [
    {
      id: 1,
      title: 'Cape Town Aerial Tour',
      description: 'Stunning aerial views of Cape Town, Table Mountain, and the coastline',
      thumbnail: 'https://images.unsplash.com/photo-1730234352013-aa4941c41466?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      videoUrl: '', // Placeholder - replace with actual video
      duration: '3:45',
      category: 'City Tours'
    },
    {
      id: 2,
      title: 'Big 5 Safari Experience',
      description: 'Incredible wildlife encounters in Kruger National Park',
      thumbnail: 'https://images.unsplash.com/photo-1544219110-079476d43889?q=80&w=1184&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      videoUrl: '', // Placeholder - replace with actual video
      duration: '5:20',
      category: 'Safari'
    },
    {
      id: 3,
      title: 'StrawberryCountry Journey',
      description: 'Explore the beautiful farms of Stellenbosch and Franschhoek',
      thumbnail: 'https://images.unsplash.com/photo-1585254589738-aff16702b974?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      videoUrl: '', // Placeholder - replace with actual video
      duration: '4:15',
      category: 'Strawberry Tours'
    },
    {
      id: 4,
      title: 'Garden Route Adventure',
      description: 'Journey through Cape Town\'s most scenic coastal route',
      thumbnail: 'https://images.unsplash.com/photo-1548790630-2d0b42f5c956?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      videoUrl: '', // Placeholder - replace with actual video
      duration: '6:30',
      category: 'Adventure'
    },
    {
      id: 5,
      title: 'Cultural Heritage Tour',
      description: 'Discover the rich cultural heritage and traditions of Cape Town',
      thumbnail: 'https://images.unsplash.com/photo-1570527141186-e391a3914c42?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      videoUrl: '', // Placeholder - replace with actual video
      duration: '4:50',
      category: 'Cultural Tours'
    },
    {
      id: 6,
      title: 'Penguin Colony Experience',
      description: 'Meet the adorable African penguins at Boulders Beach',
      thumbnail: 'https://images.unsplash.com/photo-1730397454774-87a43568e255?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      videoUrl: '', // Placeholder - replace with actual video
      duration: '2:35',
      category: 'Wildlife'
    }
  ];

  const openVideo = (index: number) => {
    setSelectedVideo(index);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video, index) => (
          <motion.div
            key={video.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
            onClick={() => openVideo(index)}
          >
            <div className="aspect-w-16 aspect-h-9 relative h-64">
              <Image
                src={video.thumbnail}
                alt={video.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-40 transition-all duration-300" />

              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <PlayIcon className="h-8 w-8 text-white ml-1" />
                </div>
              </div>

              {/* Category badge */}
              <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                {video.category}
              </div>

              {/* Duration badge */}
              <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded text-sm">
                {video.duration}
              </div>

              {/* Video info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h3 className="text-white font-semibold text-lg mb-1">{video.title}</h3>
                <p className="text-gray-200 text-sm line-clamp-2">{video.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Video Modal */}
      {selectedVideo !== null && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl">
            {/* Close button */}
            <button
              onClick={closeVideo}
              className="absolute -top-12 right-0 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200 z-10"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>

            {/* Video container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="relative w-full h-0 pb-[56.25%] bg-black rounded-lg overflow-hidden"
            >
              <iframe
                src={videos[selectedVideo].videoUrl}
                title={videos[selectedVideo].title}
                className="absolute inset-0 w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>

            {/* Video info */}
            <div className="mt-4 text-white">
              <h3 className="text-xl font-semibold mb-2">{videos[selectedVideo].title}</h3>
              <p className="text-gray-300">{videos[selectedVideo].description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoGallery;
