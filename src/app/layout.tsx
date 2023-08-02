import '@mantine/core/styles.css'

import { MantineProvider, ColorSchemeScript } from '@mantine/core'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Hydrated } from '../lib/hydrateProvider'
import ThemeProvider from '@/lib/themeProvider'

const inter = Inter({ subsets: ['latin'] })
// export const dynamic = 'force-static' // temp solution

const name = "The Next App"
const desc = "NextJS 13, Mantine UI, Zustand, NextAuth"

export const metadata: Metadata = {
  title: name,
  description: desc,
  manifest: '/manifest.webmanifest.json',
  viewport: "minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no, maximum-scale=1",
  authors: [{ name: "Affogato", url: "https://github.com/zainfikrih/" }],
  keywords:
    "react, pwa, progressive-web-app, nextjs, next.js, app-router, server-side-rendering",
  openGraph: {
    type: "website",
    title: {
      default: name,
      template: `%s - ${name}`,
    },
    description: desc,
  },
  twitter: {
    card: "summary_large_image",
    title: {
      default: name,
      template: `%s - ${name}`,
    },
    description: desc,
  },
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode,
  auth: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <ThemeProvider />
      </head>
      <body className={inter.className}>
        <MantineProvider defaultColorScheme="dark">
          <Hydrated>
            {children}
          </Hydrated>
        </MantineProvider>
      </body>
    </html>
  )
}
