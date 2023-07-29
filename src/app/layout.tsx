import '@mantine/core/styles.css'

import { MantineProvider, ColorSchemeScript } from '@mantine/core'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { TheNavbar } from './components/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'The Next App',
  description: 'NextJS 13, Mantine UI, Zustand, NextAuth',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={inter.className}>
        <MantineProvider defaultColorScheme="auto">
          <TheNavbar>
            {children}
          </TheNavbar>
        </MantineProvider>
      </body>
    </html>
  )
}
