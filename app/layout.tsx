import type { Metadata } from 'next'
import Script from 'next/script'
import { ThemeProvider } from '@/components/ui/theme-provider'
import './globals.css'

import { geistSans, geistMono, alphaLyra } from '@/font/font'

export const metadata: Metadata = {
  title: 'Perrin Grandne - Data & Solutions Numériques',
  description: 'Perrin Grandne Portfolio',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <head>
        <Script
          src="https://cloud.umami.is/script.js"
          data-website-id="3f0eeb51-6f4e-450a-97a4-2c28501a44f7"
          strategy="afterInteractive"
          data-domains="pgrandne.github.io,perrin.website"
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${alphaLyra.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
