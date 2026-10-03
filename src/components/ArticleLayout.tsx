import Link from 'next/link';
import { medicalWebPageSchema } from '@/lib/schema';

type Person = {
    name: string;
    jobTitle?: string;
    alumniOf?: any;
    sameAs?: string;
};

export default function ArticleLayout({ children, title, intro, author, reviewer, url, breadcrumb, faq }: { children: React.ReactNode; title: string; intro?: string; author?: Person; reviewer?: Person; url?: string; breadcrumb?: { name: string; url: string }[]; faq?: { question: string; answer: string }[] }) {
    const pageSchema = medicalWebPageSchema({ title, description: intro, author, reviewer, url });

    const breadcrumbSchema = breadcrumb
        ? {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: breadcrumb.map((b, i) => ({
                '@type': 'ListItem',
                position: i + 1,
                name: b.name,
                item: b.url
            }))
        }
        : null;

    const faqSchema = faq
        ? {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faq.map((f) => ({
                '@type': 'Question',
                name: f.question,
                acceptedAnswer: { '@type': 'Answer', 'text': f.answer }
            }))
        }
        : null;

    const combinedSchemas = [pageSchema, breadcrumbSchema, faqSchema].filter(Boolean);

    return (
        <main className="section-padding bg-white">
            <div className="container-max prose max-w-none">
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedSchemas.length === 1 ? combinedSchemas[0] : combinedSchemas) }} />

                <div className="rounded-3xl border border-slate-200 bg-slate-950 p-8 text-white shadow-xl">
                    <span className="inline-flex rounded-full bg-cyan-500/15 px-4 py-2 text-sm font-semibold text-cyan-200">
                        {reviewer ? `Medical Review by ${reviewer.name}` : 'Medical Review'}
                    </span>
                    <h1 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h1>
                    {intro && <p className="mt-4 text-slate-300 text-lg leading-8">{intro}</p>}
                </div>

                <div className="mt-8">
                    {children}
                </div>
            </div>
        </main>
    );
}

