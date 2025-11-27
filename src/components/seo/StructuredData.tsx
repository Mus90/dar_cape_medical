'use client';

import { useLocale } from 'next-intl';

interface StructuredDataProps {
  type: 'organization' | 'website' | 'article' | 'service';
  data?: any;
}

const StructuredData = ({ type, data }: StructuredDataProps) => {
  const locale = useLocale();

  const getStructuredData = () => {
    const baseUrl = 'https://darcape.com';

    switch (type) {
      case 'organization':
        return {
          "@context": "https://schema.org",
          "@type": "TravelAgency",
          "name": "Dar Cape  ",
          "alternateName": "Dar Cape",
          "url": baseUrl,
          "logo": `${baseUrl}/images/logo.png`,
          "image": `${baseUrl}/images/og-image.jpg`,
          "description": "Professional   services in Cape Town. Safari tours, Strawberry tours, cultural experiences, and adventure packages.",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "CBD",
            "addressLocality": "Cape Town",
            "postalCode": "8001",
            "addressCountry": "ZA"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+27-123-456-789",
            "contactType": "customer service",
            "availableLanguage": ["English", "Arabic"]
          },
          "sameAs": [
            "https://facebook.com/darcape ",
            "https://instagram.com/darcape ",
            "https://twitter.com/darcape "
          ],
          "priceRange": "$$",
          "servesCuisine": "Cape Town",
          "areaServed": {
            "@type": "Country",
            "name": "Cape Town"
          }
        };

      case 'website':
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Dar Cape  ",
          "url": baseUrl,
          "description": "Discover Cape Town with Dar Cape  . Professional tour services, safari adventures, Strawberry tours, and cultural experiences.",
          "inLanguage": [locale === 'ar' ? 'ar' : 'en'],
          "potentialAction": {
            "@type": "SearchAction",
            "target": `${baseUrl}/search?q={search_term_string}`,
            "query-input": "required name=search_term_string"
          }
        };

      case 'service':
        return {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": data?.name || "  Services",
          "description": data?.description || "Professional   services in Cape Town",
          "provider": {
            "@type": "TravelAgency",
            "name": "Dar Cape  "
          },
          "areaServed": {
            "@type": "Country",
            "name": "Cape Town"
          },
          "serviceType": " ",
          "offers": {
            "@type": "Offer",
            "availability": "https://schema.org/InStock",
            "priceCurrency": "ZAR"
          }
        };

      case 'article':
        return {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": data?.title,
          "description": data?.excerpt,
          "image": data?.image,
          "author": {
            "@type": "Person",
            "name": data?.author
          },
          "publisher": {
            "@type": "Organization",
            "name": "Dar Cape  ",
            "logo": {
              "@type": "ImageObject",
              "url": `${baseUrl}/images/logo.png`
            }
          },
          "datePublished": data?.date,
          "dateModified": data?.date,
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `${baseUrl}/blog/${data?.id}`
          }
        };

      default:
        return null;
    }
  };

  const structuredData = getStructuredData();

  if (!structuredData) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData)
      }}
    />
  );
};

export default StructuredData;
