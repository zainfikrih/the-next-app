import '@mantine/core/styles.css'

import { MantineProvider, ColorSchemeScript } from '@mantine/core'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { TheNavbar } from '../components/Navbar/Navbar.component'
import { Hydrated } from '../lib/hydrateProvider'

const inter = Inter({ subsets: ['latin'] })
// export const dynamic = 'force-static' // temp solution

export const metadata: Metadata = {
  title: 'The Next App',
  description: 'NextJS 13, Mantine UI, Zustand, NextAuth',
  manifest: '/manifest.webmanifest.json',
  viewport: "width=device-width, initial-scale=1.0",
}

export default function RootLayout({
  children,
  auth,
}: {
  children: React.ReactNode,
  auth: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={inter.className}>
        <MantineProvider defaultColorScheme="auto">
          <Hydrated>
            {children}
          </Hydrated>
        </MantineProvider>
      </body>
    </html>
  )
}
