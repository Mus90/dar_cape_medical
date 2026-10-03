export default async function Head({ params: { locale } }: { params: { locale: string } }) {
    const messages = (await import(`../../../../messages/${locale}.json`)).default;
    const page = messages.internationalPatientServices.page;

    return (
        <>
            {/* Canonical and hreflang for localized pillar page */}
            <link rel="canonical" href={`https://darcape.com/${locale}/international-patient-services`} />
            <link rel="alternate" hrefLang="en" href="https://darcape.com/en/international-patient-services" />
            <link rel="alternate" hrefLang="ar" href="https://darcape.com/ar/international-patient-services" />
            <link rel="alternate" hrefLang="x-default" href="https://darcape.com/international-patient-services" />
            <title>{page.title}</title>
            <meta name="description" content={page.intro} />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'MedicalWebPage',
                        name: page.title,
                        description: page.intro,
                        mainEntity: { '@type': 'MedicalProcedure', name: page.title }
                    })
                }}
            />
        </>
    );
}
