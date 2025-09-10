'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const PhotoGallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const photos = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1525945995886-0ede2bd49ab6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Cape Town Skyline with Table Mountain at Sunset',
      category: 'City Tours'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1730234352013-aa4941c41466?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Table Mountain Cable Car Experience',
      category: 'Adventure'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1585254589738-aff16702b974?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Stellenbosch StrawberryEstate farms',
      category: 'Strawberry Tours'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1570527141186-e391a3914c42?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Traditional Cape Malay Cultural Heritage',
      category: 'Cultural Tours'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1721155810182-e92747822c54?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'V&A Waterfront Marina at Golden Hour',
      category: 'City Tours'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1730397454774-87a43568e255?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'African Penguins at Boulders Beach',
      category: 'Wildlife'
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1548790630-2d0b42f5c956?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Garden Route Coastal Scenic Drive',
      category: 'Adventure'
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1544219110-079476d43889?q=80&w=1184&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Sunset Safari at Kruger National Park',
      category: 'Safari'
    },
    {
      id: 9,
      src: 'https://images.unsplash.com/photo-1644477195552-f798700bec56?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Big Five Safari Wildlife Experience',
      category: 'Safari'
    }
  ];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % photos.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? photos.length - 1 : selectedImage - 1);
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {photos.map((photo, index) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
            onClick={() => openLightbox(index)}
          >
            <div className="aspect-w-16 aspect-h-12 relative h-64">
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300" />

              {/* Category badge */}
              <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                {photo.category}
              </div>

              {/* Overlay content */}
              <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm font-medium">{photo.alt}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>

            {/* Navigation buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200"
            >
              <ChevronLeftIcon className="h-6 w-6" />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200"
            >
              <ChevronRightIcon className="h-6 w-6" />
            </button>

            {/* Image */}
            <motion.img
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              src={photos[selectedImage].src}
              alt={photos[selectedImage].alt}
              className="max-w-full max-h-full object-contain rounded-lg"
            />

            {/* Image info */}
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <div className="bg-black/50 backdrop-blur-sm rounded-lg p-4">
                <h3 className="font-semibold text-lg mb-1">{photos[selectedImage].alt}</h3>
                <p className="text-sm text-gray-300">
                  {selectedImage + 1} of {photos.length} • {photos[selectedImage].category}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PhotoGallery;
