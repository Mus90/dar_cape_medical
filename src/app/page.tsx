"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RootPage() {
    const router = useRouter();

    useEffect(() => {
        router.replace('/ar');
    }, [router]);

    return (
        <noscript>
            <meta httpEquiv="refresh" content="0; url=/ar" />
        </noscript>
    );
}
