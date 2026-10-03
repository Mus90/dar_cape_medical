export default async function Head({ params: { locale } }: { params: { locale: string } }) {
    const messages = (await import(`../../../../messages/${locale}.json`)).default;
    const page = messages.insightPages.hpcsa;

    return (
        <>
            {/* Canonical and hreflang for localized insights page */}
            <link rel="canonical" href={`https://darcape.com/${locale}/insights/hpcsa-registration`} />
            <link rel="alternate" hrefLang="en" href="https://darcape.com/en/insights/hpcsa-registration" />
            <link rel="alternate" hrefLang="ar" href="https://darcape.com/ar/insights/hpcsa-registration" />
            <link rel="alternate" hrefLang="x-default" href="https://darcape.com/insights/hpcsa-registration" />
            <title>{page.title}</title>
            <meta name="description" content={page.excerpt} />
        </>
    );
}
