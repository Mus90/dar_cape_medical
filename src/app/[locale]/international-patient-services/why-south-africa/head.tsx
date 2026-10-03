export default async function Head({ params: { locale } }: { params: { locale: string } }) {
    const messages = (await import(`../../../../../messages/${locale}.json`)).default;
    const page = messages.internationalPatientServices.why;
    return (
        <>
            {/* Canonical and hreflang for localized cluster page */}
            <link rel="canonical" href={`https://darcape.com/${locale}/international-patient-services/why-south-africa`} />
            <link rel="alternate" hrefLang="en" href="https://darcape.com/en/international-patient-services/why-south-africa" />
            <link rel="alternate" hrefLang="ar" href="https://darcape.com/ar/international-patient-services/why-south-africa" />
            <link rel="alternate" hrefLang="x-default" href="https://darcape.com/international-patient-services/why-south-africa" />
            <title>{page.title}</title>
            <meta name="description" content={page.intro} />
        </>
    );
}
