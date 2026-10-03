import { MetadataRoute } from 'next'

import { specialties } from '@/data/specialties'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://darcape.com'

  const routes = [
    '',
    '/about',
    '/services',
    '/contact',
    '/knowledge-centre',
    '/knowledge-centre/article/hpcsa-registration-categories-explained',
    // Services
    '/services/hpcsa-registration',
    // Specialties
    '/specialties',
    ...specialties.map(specialty => `/specialties/${specialty.slug}`),
    // Universities
    '/universities/uct',
    // Insights / Articles
    '/insights/hpcsa-registration',
    '/insights/training-overview',
    '/insights/pathway-for-international-medical-graduates',
    // International Patient Services (cluster)
    '/international-patient-services',
    '/international-patient-services/why-south-africa',
    '/international-patient-services/hospitals',
    '/international-patient-services/recovery-and-accommodation'
  ]

  const locales = ['en', 'ar']

  const staticPages = locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `${baseUrl}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: route === '' ? 1 : route.includes('knowledge-centre') || route.includes('specialties') ? 0.9 : 0.8
    }))
  )

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...staticPages
  ]
}


