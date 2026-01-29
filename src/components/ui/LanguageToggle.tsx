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

    // For static export, we need to handle routing differently
    // Get the current path without locale prefix
    const pathWithoutLocale = pathname.replace(/^\/(en|ar)/, '') || '/';

    // Construct new path with new locale
    const newPath = `/${newLocale}${pathWithoutLocale}`;

    console.log('Switching language from', locale, 'to', newLocale);
    console.log('Current pathname:', pathname);
    console.log('New path:', newPath);

    // For static export, use window.location for full page reload
    if (typeof window !== 'undefined') {
      window.location.href = newPath;
    } else {
      router.push(newPath);
    }
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-2 rtl:space-x-reverse px-3 py-2 rounded-lg border border-gray-300 hover:border-primary-500 hover:bg-primary-50 transition-colors duration-200"
      title={locale === 'ar' ? 'Switch to English' : 'التغيير إلى العربية'}
    >
      <GlobeAltIcon className="h-5 w-5 text-gray-600" />
      <span className="text-sm font-medium text-gray-700">
        {locale === 'ar' ? 'EN' : 'AR'}
      </span>
    </button>
  );
};

export default LanguageToggle;


