import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://edu.darcape.com'

  const routes = [
    '',
    '/about',
    '/services',
    '/contact'
  ]

  const locales = ['ar', 'en']

  const staticPages = locales.flatMap(locale =>
    routes.map(route => ({
      url: `${baseUrl}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: route === '' ? 1 : 0.8,
    }))
  )

  // No blog pages for this site currently
  const blogPosts: MetadataRoute.Sitemap = []

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...staticPages,
    ...blogPosts
  ]
}
