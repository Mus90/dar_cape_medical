'use client';

import { useTranslations } from 'next-intl';
import PhotoGallery from './PhotoGallery';

const GalleryTabs = () => {
  const t = useTranslations('gallery');

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        {/* Gallery Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('photos')}
          </h2>
        </div>

        {/* Photo Gallery Content */}
        <PhotoGallery />
      </div>
    </section>
  );
};

export default GalleryTabs;
