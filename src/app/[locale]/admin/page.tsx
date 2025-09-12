import { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import AdminDashboard from '@/components/admin/AdminDashboard';

export const metadata: Metadata = {
  title: 'Admin Dashboard',
  description: 'Content management system for Dar Cape Tourism website.',
  robots: 'noindex, nofollow', // Prevent search engine indexing
};

type Props = {
  params: { locale: string };
};

export default function AdminPage({ params: { locale } }: Props) {
  setRequestLocale(locale);

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminDashboard />
    </div>
  );
}
