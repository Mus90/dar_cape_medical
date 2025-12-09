import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { Metadata } from 'next';
import HeroSection from '@/components/gallery/HeroSection';
import PhotoGallery from '@/components/gallery/PhotoGallery';

import GalleryTabs from '@/components/gallery/GalleryTabs';

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'Explore our photo and video gallery highlighting medical training journeys, clinical environments, and professional milestones.',
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
