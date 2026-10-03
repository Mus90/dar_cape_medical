export default async function Head({ params: { locale } }: { params: { locale: string } }) {
    const messages = (await import(`../../../../messages/${locale}.json`)).default;
    const page = messages.insightPages.imgPathway;

    return (
        <>
            {/* Canonical and hreflang to support localized indexing */}
            <link rel="canonical" href={`https://darcape.com/${locale}/insights/pathway-for-international-medical-graduates`} />
            <link rel="alternate" hrefLang="en" href="https://darcape.com/en/insights/pathway-for-international-medical-graduates" />
            <link rel="alternate" hrefLang="ar" href="https://darcape.com/ar/insights/pathway-for-international-medical-graduates" />
            <link rel="alternate" hrefLang="x-default" href="https://darcape.com/insights/pathway-for-international-medical-graduates" />
            <title>{page.title}</title>
            <meta
                name="description"
                content={page.intro}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'MedicalWebPage',
                        name: page.title,
                        description: page.intro,
                        reviewedBy: {
                            '@type': 'Person',
                            name: 'Dr. Tarig Zobair',
                            jobTitle: 'Pulmonologist',
                            alumniOf: {
                                '@type': 'MedicalOrganization',
                                name: 'Groote Schuur Hospital',
                                sameAs: 'https://en.wikipedia.org/wiki/Groote_Schuur_Hospital'
                            },
                            sameAs: 'https://www.linkedin.com/in/tarig-zobair-536a18285/'
                        },
                        mainEntity: {
                            '@type': 'MedicalProcedure',
                            name: 'HPCSA Medical Practitioner Registration'
                        }
                    }),
                }}
            />
        </>
    );
}
