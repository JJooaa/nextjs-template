import { baseUrl } from '@/lib/baseUrl'
import { MetadataRoute } from 'next'

// No need to modify this file, these settings make your website crawlable by google.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: baseUrl + '/sitemap.xml',
  }
}
