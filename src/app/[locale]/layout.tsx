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
      template: '%s | Cape Home Tourism',
      default: 'Cape Home Tourism - Discover Cape Town',
    },
    description: 'Experience the beauty of Cape Town with Cape Home Tourism. Professional tour services, safari adventures, Strawberry tours, and cultural experiences.',
    keywords: 'Cape Town tourism, Cape Town tours, safari, Strawberry tours, travel agency, capehome.co.za',
    authors: [{ name: 'Cape Home Tourism' }],
    creator: 'Cape Home Tourism',
    publisher: 'Cape Home Tourism',
    robots: 'index, follow',
    openGraph: {
      type: 'website',
      locale: locale === 'ar' ? 'ar_SA' : 'en_US',
      url: 'https://capehome.co.za',
      siteName: 'Cape Home Tourism',
      title: 'Cape Home Tourism - Discover Cape Town',
      description: 'Experience the beauty of Cape Town with Cape Home Tourism.',
      images: [
        {
          url: '/images/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'Cape Home Tourism',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Cape Home Tourism - Discover Cape Town',
      description: 'Experience the beauty of Cape Town with Cape Home Tourism.',
      images: ['/images/og-image.jpg'],
    },
    alternates: {
      canonical: 'https://capehome.co.za',
      languages: {
        'ar': 'https://capehome.co.za/ar',
        'en': 'https://capehome.co.za/en',
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
