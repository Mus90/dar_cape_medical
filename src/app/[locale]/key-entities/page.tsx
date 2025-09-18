import { setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { InformationCircleIcon, AcademicCapIcon, ClipboardDocumentListIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

export default function KeyEntitiesPage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  const t = useTranslations('keyEntities');

  const entities = [
    { key: 'hpcsa', icon: InformationCircleIcon },
    { key: 'ecfmg', icon: AcademicCapIcon },
    { key: 'saqa', icon: ClipboardDocumentListIcon },
    { key: 'dha', icon: GlobeAltIcon },
  ];

  return (
    <main className="section-padding">
      <div className="container-max">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('title')}</h1>
          <p className="text-gray-600 text-lg">{t('subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {entities.map(({ key, icon: Icon }) => (
            <div key={key} className="card p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold mb-2">{t(`items.${key}.title`)}</h2>
                  <p className="text-gray-600">{t(`items.${key}.description`)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
