interface ProfessionalServiceSchemaProps {
  name: string;
  description: string;
  url: string;
  areaServed?: string[];
  serviceType?: string[];
}

const ProfessionalServiceSchema = ({
  name,
  description,
  url,
  areaServed = ['South Africa'],
  serviceType = ['Medical Advisory', 'Registration Support', 'Training Pathway Guidance']
}: ProfessionalServiceSchemaProps) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: name,
    description: description,
    url: url,
    provider: {
      '@type': 'Organization',
      name: 'Dar Cape Medica',
      url: 'https://darcape.com'
    },
    areaServed: areaServed.map(country => ({
      '@type': 'Country',
      name: country
    })),
    serviceType: serviceType,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Medical Training Advisory Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Profile Assessment',
            description: 'Comprehensive assessment of candidate qualifications and pathway options'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'HPCSA Registration Support',
            description: 'Guidance on HPCSA registration processes and requirements'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Training Program Application Support',
            description: 'Assistance with university and training program applications'
          }
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default ProfessionalServiceSchema;
