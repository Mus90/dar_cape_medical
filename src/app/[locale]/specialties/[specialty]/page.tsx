import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import SpecialtyProfile from '@/components/specialties/SpecialtyProfile';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import { getSpecialtyProfile, newSpecialties } from '@/data/specialties';

type Props = { params: { locale: string; specialty: string } };

export function generateStaticParams() {
  return newSpecialties.map(item => ({ specialty: item.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const profile = getSpecialtyProfile(params.specialty, params.locale);
  if (!profile) notFound();
  const path = `/specialties/${params.specialty}`;
  const base = 'https://darcape.com';
  return {
    title: params.locale === 'ar' ? `${profile.name} — التدريب في جنوب أفريقيا` : `${profile.name} Training in South Africa`,
    description: profile.overview,
    alternates: {
      canonical: `${base}/${params.locale}${path}`,
      languages: { en: `${base}/en${path}`, ar: `${base}/ar${path}` },
    },
    openGraph: { title: profile.name, description: profile.overview, url: `${base}/${params.locale}${path}`, locale: params.locale === 'ar' ? 'ar_SA' : 'en_US' },
  };
}

export default function SpecialtyPage({ params }: Props) {
  setRequestLocale(params.locale);
  const profile = getSpecialtyProfile(params.specialty, params.locale);
  if (!profile) notFound();
  const arabic = params.locale === 'ar';
  return (
    <>
      <BreadcrumbSchema items={[
        { name: arabic ? 'التخصصات' : 'Specialties', item: `https://darcape.com/${params.locale}/specialties` },
        { name: profile.name, item: `https://darcape.com/${params.locale}/specialties/${params.specialty}` },
      ]} />
      <div className="container-max px-4 sm:px-6 pt-8">
        <Link href={`/${params.locale}/specialties`} className="text-teal-700 underline underline-offset-4">
          {arabic ? 'العودة إلى جميع التخصصات' : 'Back to all specialties'}
        </Link>
      </div>
      <SpecialtyProfile locale={params.locale} specialty={profile} />
    </>
  );
}
