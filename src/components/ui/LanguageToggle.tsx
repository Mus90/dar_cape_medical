'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { GlobeAltIcon } from '@heroicons/react/24/outline';

const LanguageToggle = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLanguage = () => {
    const newLocale = locale === 'ar' ? 'en' : 'ar';
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-2 rtl:space-x-reverse px-3 py-2 rounded-lg border border-gray-300 hover:border-primary-500 hover:bg-primary-50 transition-colors duration-200"
      title={locale === 'ar' ? 'Switch to English' : 'التبديل إلى العربية'}
    >
      <GlobeAltIcon className="h-5 w-5 text-gray-600" />
      <span className="text-sm font-medium text-gray-700">
        {locale === 'ar' ? 'EN' : 'عر'}
      </span>
    </button>
  );
};

export default LanguageToggle;
