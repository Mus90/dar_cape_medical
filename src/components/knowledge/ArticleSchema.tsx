interface ArticleSchemaProps {
  title: string;
  description: string;
  publishDate: string;
  lastReviewed: string;
  author: string;
  url: string;
  imageUrl?: string;
}

const ArticleSchema = ({
  title,
  description,
  publishDate,
  lastReviewed,
  author,
  url,
  imageUrl
}: ArticleSchemaProps) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    image: imageUrl || '/images/og-default.jpg',
    author: {
      '@type': 'Organization',
      name: author,
      url: 'https://darcape.com'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Dar Cape Medica',
      logo: {
        '@type': 'ImageObject',
        url: 'https://darcape.com/images/logo.jpeg'
      }
    },
    datePublished: publishDate,
    dateModified: lastReviewed,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url
    },
    about: {
      '@type': 'Thing',
      name: 'Medical Training',
      description: 'Specialist training and HPCSA registration for international medical graduates in South Africa'
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default ArticleSchema;
