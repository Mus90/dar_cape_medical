'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';
import {
  FaceBookIcon,
  InstagramIcon,
  TikTokIcon
} from '@/components/icons/SocialIcons';

const Footer = () => {
  const t = useTranslations();
  const tCommon = useTranslations('common');
  const locale = useLocale();

  const quickLinks = [
    { name: t('navigation.home'), href: `/${locale}` },
    { name: t('navigation.about'), href: `/${locale}/about` },
    { name: t('navigation.services'), href: `/${locale}/services` },
    { name: t('navigation.contact'), href: `/${locale}/contact` },
  ];

  const socialLinks = [
    { name: 'Facebook', href: 'https://www.facebook.com/DarCapeMedica/', icon: <FaceBookIcon className="w-5 h-5" /> },
    { name: 'Instagram', href: 'https://www.instagram.com/dar_cape_medica/', icon: <InstagramIcon className="w-5 h-5" /> },
    { name: 'TikTok', href: 'https://www.tiktok.com/@dar_cape', icon: <TikTokIcon className="w-5 h-5" /> }
  ];

  return (
    <footer className="bg-navy-900 text-white">
      <div className="container-max px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href={`/${locale}`} className="flex items-center">
              <span className="text-xl font-bold text-white font-serif">{tCommon('brandName')}</span>
            </Link>
            <p className="text-stone-400 text-sm leading-relaxed">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4 rtl:space-x-reverse">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-400 hover:text-teal-400 transition-colors duration-200"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-stone-300 uppercase tracking-wider">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-stone-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-stone-300 uppercase tracking-wider">{t('contact.title')}</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 rtl:space-x-reverse">
                <MapPinIcon className="h-5 w-5 text-teal-400 mt-0.5 flex-shrink-0" />
                <p className="text-stone-400 text-sm">
                  CBD, Cape Town, South Africa
                </p>
              </div>
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <PhoneIcon className="h-5 w-5 text-teal-400 flex-shrink-0" />
                <p className="text-stone-400 text-sm">
                  <span dir="ltr" className="font-mono">+27749548756</span>
                </p>
              </div>
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <EnvelopeIcon className="h-5 w-5 text-teal-400 flex-shrink-0" />
                <p className="text-stone-400 text-sm">mustafa@darcape.com</p>
              </div>
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <GlobeAltIcon className="h-5 w-5 text-teal-400 flex-shrink-0" />
                <p className="text-stone-400 text-sm">www.darcape.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-stone-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-stone-500 text-sm">
              © {new Date().getFullYear()} {tCommon('brandName')}. {t('footer.rights')}.
            </p>
            <div className="flex space-x-6 rtl:space-x-reverse">
              <Link href="#" className="text-stone-500 hover:text-stone-400 text-sm transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="#" className="text-stone-500 hover:text-stone-400 text-sm transition-colors duration-200">
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


