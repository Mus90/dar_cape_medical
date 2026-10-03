export default async function Head({ params: { locale } }: { params: { locale: string } }) {
    const messages = (await import(`../../../../messages/${locale}.json`)).default;
    const page = messages.insightPages.training;

    return (
        <>
            {/* Canonical and hreflang for localized insights page */}
            <link rel="canonical" href={`https://darcape.com/${locale}/insights/training-overview`} />
            <link rel="alternate" hrefLang="en" href="https://darcape.com/en/insights/training-overview" />
            <link rel="alternate" hrefLang="ar" href="https://darcape.com/ar/insights/training-overview" />
            <link rel="alternate" hrefLang="x-default" href="https://darcape.com/insights/training-overview" />
            <title>{page.title}</title>
            <meta name="description" content={page.intro} />
        </>
    );
}
