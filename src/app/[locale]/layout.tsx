import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
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
      template: '%s | Dar Cape Tourism',
      default: 'Dar Cape Tourism - Discover Cape Town',
    },
    description: 'Experience the beauty of Cape Town with Dar Cape Tourism. Professional tour services, safari adventures, Strawberry tours, and cultural experiences.',
    keywords: 'Cape Town tourism, Cape Town tours, safari, Strawberry tours, travel agency, edu.darcape.com',
    authors: [{ name: 'Dar Cape Tourism' }],
    creator: 'Dar Cape Tourism',
    publisher: 'Dar Cape Tourism',
    robots: 'index, follow',
    openGraph: {
      type: 'website',
      locale: locale === 'ar' ? 'ar_SA' : 'en_US',
      url: 'https://edu.darcape.com',
      siteName: 'Dar Cape Tourism',
      title: 'Dar Cape Tourism - Discover Cape Town',
      description: 'Experience the beauty of Cape Town with Dar Cape Tourism.',
      images: [
        {
          url: '/images/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'Dar Cape Tourism',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Dar Cape Tourism - Discover Cape Town',
      description: 'Experience the beauty of Cape Town with Dar Cape Tourism.',
      images: ['/images/og-image.jpg'],
    },
    alternates: {
      canonical: 'https://edu.darcape.com',
      languages: {
        'ar': 'https://edu.darcape.com/ar',
        'en': 'https://edu.darcape.com/en',
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

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  const isRTL = locale === 'ar';

  return (
    <html lang={locale} dir={isRTL ? 'rtl' : 'ltr'}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0ea5e9" />
      </head>
      <body className={`${isRTL ? 'font-arabic' : 'font-english'} bg-gray-50`}>
        <NextIntlClientProvider messages={messages}>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
            <WhatsAppButton />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
