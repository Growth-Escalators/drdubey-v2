import type { MetadataRoute } from 'next'
import { defaultSEO } from '@/lib/seo.config'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/booking/',
          '/admin/',
          '/sign-in',
          '/sign-up',
          '/_next/',
        ],
      },
    ],
    sitemap: `${defaultSEO.siteUrl}/sitemap.xml`,
    host: defaultSEO.siteUrl,
  }
}
