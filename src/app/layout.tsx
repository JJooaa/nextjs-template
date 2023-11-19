import '@/styles/globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { cn } from '@/lib/utils'
import { inter } from '@/fonts/inter'
import { metadataRoot } from '@/config/metadata'

export const metadata = metadataRoot

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <body className={cn(inter.className, 'antialiased')}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <main>{children}</main>
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
