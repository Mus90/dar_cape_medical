import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import '../globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';

const locales = ['ar', 'en'];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale }
}: {
  params: { locale: string };
}) {
  return {
    title: {
      template: '%s | Dar Cape Medica',
      default: 'Dar Cape Medica - Medical Training Support',
    },
    description: 'Guidance and support for medical professionals pursuing training and postgraduate education in South Africa.',
    keywords: 'medical training, HPCSA, postgraduate training, South Africa medical education, Dar Cape Medica, darcape.com',
    authors: [{ name: 'Dar Cape Medica' }],
    creator: 'Dar Cape Medica',
    publisher: 'Dar Cape Medica',
    robots: 'index, follow',
    openGraph: {
      type: 'website',
      locale: locale === 'ar' ? 'ar_SA' : 'en_US',
      url: 'https://darcape.com',
      siteName: 'Dar Cape Medica',
      title: 'Dar Cape Medica - Medical Training Support',
      description: 'Guidance and support for medical professionals pursuing training and postgraduate education in South Africa.',
      images: [
        {
          url: '/images/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'Dar Cape Medica',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Dar Cape Medica - Medical Training Support',
      description: 'Guidance and support for medical professionals pursuing training and postgraduate education in South Africa.',
      images: ['/images/og-image.jpg'],
    },
    alternates: {
      canonical: 'https://darcape.com',
      languages: {
        'ar': 'https://darcape.com/ar',
        'en': 'https://darcape.com/en',
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  // Load messages directly for static export compatibility
  const messages = (await import(`../../../messages/${locale}.json`)).default;

  const isRTL = locale === 'ar';

  return (
    <NextIntlClientProvider messages={messages}>
      <div className={`min-h-screen flex flex-col ${isRTL ? 'font-arabic' : 'font-english'} bg-gray-50`} data-locale={locale} data-dir={isRTL ? 'rtl' : 'ltr'}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </NextIntlClientProvider>
  );
}
