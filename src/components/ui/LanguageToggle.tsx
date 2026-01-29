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

    console.log('=== LANGUAGE SWITCH DEBUG ===');
    console.log('Current locale:', locale);
    console.log('Current pathname:', pathname);
    console.log('New locale will be:', newLocale);

    // For static export, handle different URL patterns
    let newPath;

    if (pathname === '/' || pathname === '/ar') {
      // If we're on root or /ar, go to /en
      newPath = '/en';
    } else if (pathname === '/en') {
      // If we're on /en, go to /ar
      newPath = '/ar';
    } else if (pathname.startsWith('/en/')) {
      // Replace /en/ with /ar/
      newPath = pathname.replace('/en/', '/ar/');
    } else if (pathname.startsWith('/ar/')) {
      // Replace /ar/ with /en/
      newPath = pathname.replace('/ar/', '/en/');
    } else {
      // If no locale prefix, add the new locale
      newPath = `/${newLocale}${pathname}`;
    }

    console.log('Final new path:', newPath);
    console.log('========================');

    // Force redirect
    window.location.href = newPath;
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center justify-center space-x-2 rtl:space-x-reverse px-3 py-2 rounded-lg border border-gray-300 hover:border-primary-500 hover:bg-primary-50 active:scale-95 transition-all duration-200 text-sm sm:text-base cursor-pointer shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-1"
      title={locale === 'ar' ? 'Switch to English' : 'التغيير إلى العربية'}
      type="button"
    >
      <GlobeAltIcon className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600 flex-shrink-0" />
      <span className="font-medium text-gray-700 text-xs sm:text-sm select-none">
        {locale === 'ar' ? 'EN' : 'AR'}
      </span>
    </button>
  );
};

export default LanguageToggle;


