import { getTranslations } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import { Metadata } from 'next';
import SpecialistTrainingContent from './SpecialistTrainingContent';

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  setRequestLocale(locale);
  const t = await getTranslations();
  return {
    title: t('specialistTrainingPage.title'),
    description: t('specialistTrainingPage.description'),
  };
}

export default function SpecialistTrainingPage({ params: { locale } }: Props) {
  setRequestLocale(locale);
  return <SpecialistTrainingContent locale={locale} />;
}
