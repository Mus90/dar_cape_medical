import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { Metadata } from 'next';
import HeroSection from '@/components/gallery/HeroSection';
import PhotoGallery from '@/components/gallery/PhotoGallery';
import VideoGallery from '@/components/gallery/VideoGallery';
import GalleryTabs from '@/components/gallery/GalleryTabs';

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'Explore our stunning photo and video gallery showcasing the beauty of Cape Town and unforgettable moments from our tours.',
};

type Props = {
  params: { locale: string };
};

export default function GalleryPage({ params: { locale } }: Props) {
  setRequestLocale(locale);

  return (
    <div className="min-h-screen">
      <HeroSection />
      <GalleryTabs />
    </div>
  );
}
