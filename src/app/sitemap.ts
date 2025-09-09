import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://capehome.co.za'
  
  const routes = [
    '',
    '/about',
    '/services',
    '/gallery',
    '/blog',
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

  // Add blog posts (in a real app, this would be dynamic)
  const blogPosts = locales.flatMap(locale => [
    {
      url: `${baseUrl}/${locale}/blog/1`,
      lastModified: new Date('2024-01-15'),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }
  ])

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
