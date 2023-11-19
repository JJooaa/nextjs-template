import { baseUrl } from '@/lib/baseUrl'
import { Metadata } from 'next'

export const metadataRoot: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    template: '%s | Website',
    default: 'Website',
  },
  description: "Jane Doe's Wesbite",
  generator: 'Next.js',
  applicationName: 'Sisu Kickstart',
  keywords: ['website', 'jane doe'],
  authors: [{ name: 'Jane', url: 'https://janedoe.com' }],
  creator: 'Jane Doe',
}
