import { setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';

export default function SuccessStoriesPage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  const t = useTranslations('successStories');

  return (
    <main className="section-padding">
      <div className="container-max">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('title')}</h1>
          <p className="text-gray-600 text-lg mb-10">{t('content')}</p>

          {/* Placeholder list - user can add real stories later */}
          <div className="card p-8">
            <p className="text-gray-500">{t('empty')}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
