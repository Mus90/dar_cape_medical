interface OrganizationSchemaProps {
  url?: string;
}

const OrganizationSchema = ({ url = 'https://darcape.com' }: OrganizationSchemaProps) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Dar Cape Medica',
    description: 'Specialist advisory practice for international medical graduates pursuing training and registration in South Africa',
    url: url,
    logo: {
      '@type': 'ImageObject',
      url: `${url}/images/logo.jpeg`,
      width: 480,
      height: 160
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'info@darcape.com',
      availableLanguage: ['English']
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'ZA',
      addressRegion: 'Western Cape'
    },
    sameAs: [],
    areaServed: {
      '@type': 'Country',
      name: 'South Africa'
    },
    knowsAbout: [
      'Medical training in South Africa',
      'HPCSA registration',
      'Specialist training for international doctors',
      'Medical residency South Africa',
      'Supernumerary registrar positions',
      'MMed programs',
      'CMSA examinations',
      'EPIC credential verification'
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default OrganizationSchema;
