'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

const Footer = () => {
  const t = useTranslations();
  const locale = useLocale();

  const quickLinks = [
    { name: t('navigation.home'), href: `/${locale}` },
    { name: t('navigation.about'), href: `/${locale}/about` },
    { name: t('navigation.services'), href: `/${locale}/services` },
    { name: t('navigation.gallery'), href: `/${locale}/gallery` },
    { name: t('navigation.blog'), href: `/${locale}/blog` },
    { name: t('navigation.contact'), href: `/${locale}/contact` },
  ];

  const socialLinks = [
    { name: 'Facebook', href: '#', icon: '📘' },
    { name: 'Instagram', href: '#', icon: '📷' },
    { name: 'YouTube', href: '#', icon: '📺' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href={`/${locale}`} className="flex items-center space-x-2 rtl:space-x-reverse">
              <Image
                src="/images/DarCapeLogo.png" // make sure logo.png is inside the public/ folder
                alt="Dar Cape Logo"
                width={60} // adjust size as needed
                height={60}
                className="rounded-lg"
                priority
              />
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4 rtl:space-x-reverse">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-2xl hover:scale-110 transition-transform duration-200"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{t('contact.title')}</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 rtl:space-x-reverse">
                <MapPinIcon className="h-5 w-5 text-primary-400 mt-0.5 flex-shrink-0" />
                <p className="text-gray-300 text-sm">
                  CBD, Cape Town, South Africa <br />
                </p>
              </div>
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <PhoneIcon className="h-5 w-5 text-primary-400 flex-shrink-0" />
                <p className="text-gray-300 text-sm">
                  <span dir="ltr" className="font-mono">+27749548756</span>
                </p>
              </div>
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <EnvelopeIcon className="h-5 w-5 text-primary-400 flex-shrink-0" />
                <p className="text-gray-300 text-sm">admin@darcape.com.com</p>
              </div>
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <GlobeAltIcon className="h-5 w-5 text-primary-400 flex-shrink-0" />
                <p className="text-gray-300 text-sm">www.darcape.com</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Dar Cape Tourism. {t('footer.rights')}.
            </p>
            <div className="flex space-x-6 rtl:space-x-reverse">
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
