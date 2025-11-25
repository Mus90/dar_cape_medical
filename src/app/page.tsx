"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RootPage() {
    const router = useRouter();

    useEffect(() => {
        router.replace('/en');
    }, [router]);

    return (
        <noscript>
            <meta httpEquiv="refresh" content="0; url=/en" />
        </noscript>
    );
}
