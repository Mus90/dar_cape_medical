'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import LanguageToggle from '@/components/ui/LanguageToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations('navigation');
  const tCommon = useTranslations('common');
  const locale = useLocale();
  const pathname = usePathname();

  const navigation = [
    { name: t('home'), href: `/${locale}` },
    { name: t('about'), href: `/${locale}/about` },
    { name: t('services'), href: `/${locale}/services` },
    { name: t('howItWorks'), href: `/${locale}/how-it-works` },
    { name: t('pricing'), href: `/${locale}/pricing` },
    { name: t('contact'), href: `/${locale}/contact` },
  ];

  const isActive = (href: string) => {
    if (href === `/${locale}`) {
      return pathname === `/${locale}` || pathname === `/${locale}/`;
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Glass morphism backdrop */}
      <div className="absolute inset-0 backdrop-blur-xl bg-white/80 border-b border-white/20" />

      <nav className="relative container-max section-padding py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center group">
            <div className="relative h-32 w-auto">
              <div className="absolute -inset-3 bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md" />
              <div className="absolute inset-0 bg-white/95 backdrop-blur-sm rounded-xl border border-white/30 shadow-xl" />
              <Image
                src="/images/logo.jpeg"
                alt="DAR CAPE MEDICA Logo"
                width={480}
                height={160}
                className="relative h-32 w-auto transition-transform duration-300 group-hover:scale-105 p-3"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 rtl:space-x-reverse">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative font-medium transition-all duration-300 py-2 px-1 ${isActive(item.href)
                  ? 'text-primary-600'
                  : 'text-gray-700 hover:text-primary-600'
                  }`}
              >
                {item.name}
                {/* Animated underline */}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary-600 to-primary-700 transition-all duration-300 ${isActive(item.href) ? 'w-full' : 'w-0 hover:w-full'
                    }`}
                />
              </Link>
            ))}
          </div>

          {/* Right side actions */}
          <div className="flex items-center space-x-4 rtl:space-x-reverse z-10">
            {/* Language Toggle */}
            <div className="relative z-20">
              <LanguageToggle />
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              className="lg:hidden relative p-2 rounded-xl text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-all duration-300 z-20"
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
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden mt-4 border-t border-gray-200/50"
            >
              <div className="pt-4 space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`block px-4 py-3 rounded-xl font-medium transition-all duration-300 ${isActive(item.href)
                      ? 'text-primary-600 bg-primary-50 border-l-4 border-primary-600'
                      : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                      }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                {/* Mobile CTA */}
                <div className="pt-2 mt-2 border-t border-gray-200">
                  <Link
                    href={`/${locale}/contact`}
                    className="block w-full mx-4 px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-medium rounded-xl text-center transition-all duration-300 hover:shadow-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t('contact')}
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;


