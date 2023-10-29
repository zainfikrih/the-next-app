import "@mantine/core/styles.css";

import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Hydrated } from "../lib/hydrateProvider";
import ThemeProvider from "@/lib/themeProvider";

const inter = Inter({ subsets: ["latin"] });
// export const dynamic = 'force-static' // temp solution

const name = "The Next App";
const desc = "NextJS 14, Mantine UI, Zustand, NextAuth";

export const viewport = {
  colorScheme: "dark",
  themeColor: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  minimumScale: 1,
  userScalable: "no",
};

export const metadata: Metadata = {
  title: name,
  description: desc,
  icons: {
    icon: "/icon/icon-192.png",
  },
  manifest: "/manifest.webmanifest.json",
  authors: [{ name: "Affogato", url: "https://github.com/zainfikrih/" }],
  keywords:
    "react, pwa, progressive-web-app, nextjs, next.js, app-router, server-side-rendering",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: name,
    // startUpImage: [],
  },
  openGraph: {
    type: "website",
    siteName: name,
    title: {
      default: name,
      template: `%s - ${name}`,
    },
    description: desc,
  },
  twitter: {
    card: "summary",
    title: {
      default: name,
      template: `%s - ${name}`,
    },
    description: desc,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
  auth: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript defaultColorScheme="dark" />
        <ThemeProvider />
      </head>
      <body className={inter.className}>
        <MantineProvider defaultColorScheme="dark">
          <Hydrated>{children}</Hydrated>
        </MantineProvider>
      </body>
    </html>
  );
}
