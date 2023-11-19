import { baseUrl } from '@/lib/baseUrl'
import { Metadata } from 'next'

export type OpenGraphProps = {
  title: string
  description: string
  image: string
}

// function that that you can just call on each page to generate the opengraph metadata
export const openGraph = ({ title, description, image }: OpenGraphProps): Metadata => {
  return {
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: baseUrl,
      title,
      description,
      siteName: 'Sisu Kickstart',
      images: [`${baseUrl}/og-images/${image}`],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${baseUrl}/og-images/${image}`],
      creator: '@JaneDoe',
    },
  }
}
