import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { Metadata } from 'next';
import HeroSection from '@/components/blog/HeroSection';
import BlogGrid from '@/components/blog/BlogGrid';
import BlogCategories from '@/components/blog/BlogCategories';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Read our latest travel tips, destination guides, and tourism insights for Cape Town. Stay updated with Dar Cape Tourism blog.',
};

type Props = {
  params: { locale: string };
};

export default function BlogPage({ params: { locale } }: Props) {
  setRequestLocale(locale);

  return (
    <div className="min-h-screen">
      <HeroSection />
      <div className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
              <BlogGrid />
            </div>
            <div className="lg:col-span-1">
              <BlogCategories />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
