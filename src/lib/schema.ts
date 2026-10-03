export function medicalWebPageSchema({ title, description, author, reviewer, url }: { title: string; description?: string; author?: any; reviewer?: any; url?: string; }) {
    const schema: any = {
        '@context': 'https://schema.org',
        '@type': 'MedicalWebPage',
        name: title,
        description: description || '',
        mainEntity: {
            '@type': 'MedicalProcedure',
            name: title,
        },
    };

    if (author) schema.author = { '@type': 'Person', name: author.name, sameAs: author.sameAs };
    if (reviewer) schema.reviewedBy = {
        '@type': 'Person',
        name: reviewer.name,
        jobTitle: reviewer.jobTitle,
        alumniOf: reviewer.alumniOf,
        sameAs: reviewer.sameAs,
    };
    if (url) schema.url = url;

    return schema;
}
