'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import LanguageToggle from '@/components/ui/LanguageToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations('navigation');
  const locale = useLocale();
  const pathname = usePathname();

  const navigation = [
    { name: t('home'), href: `/${locale}` },
    { name: t('about'), href: `/${locale}/about` },
    { name: t('services'), href: `/${locale}/services` },
    { name: t('gallery'), href: `/${locale}/gallery` },
    { name: t('blog'), href: `/${locale}/blog` },
    { name: t('contact'), href: `/${locale}/contact` },
  ];

  const isActive = (href: string) => {
    if (href === `/${locale}`) {
      return pathname === `/${locale}` || pathname === `/${locale}/`;
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <nav className="container-max section-padding py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center space-x-2 rtl:space-x-reverse">
            <div className="w-10 h-10 bg-gradient-to-r from-primary-600 to-accent-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">DC</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">Dar Cape</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 rtl:space-x-reverse">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-medium transition-colors duration-200 ${isActive(item.href)
                  ? 'text-primary-600 border-b-2 border-primary-600 pb-1'
                  : 'text-gray-700 hover:text-primary-600'
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Language Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <LanguageToggle />

            {/* Mobile menu button */}
            <button
              type="button"
              className="lg:hidden p-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="pt-4 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 rounded-md font-medium transition-colors duration-200 ${isActive(item.href)
                    ? 'text-primary-600 bg-primary-50'
                    : 'text-gray-700 hover:text-primary-600 hover:bg-gray-100'
                    }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
