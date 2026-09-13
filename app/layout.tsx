import type { Metadata } from 'next';
import { Space_Grotesk, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';
const space = Space_Grotesk({
  variable: '--font-space',
  subsets: ['latin'],
  display: 'swap',
});
const plex = IBM_Plex_Mono({
  variable: '--font-plex',
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
});
export const metadata: Metadata = {
  metadataBase: new URL('https://deus42.github.io/'),
  title: 'Deus — Oleksii Gapchenko, solutions architect',
  description:
    'Oleksii Gapchenko, solutions architect in Croatia. Enterprise systems for work; a media library, a browser RPG, a map workspace, and a finance app built for myself.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Deus — Oleksii Gapchenko',
    description:
      'Solutions architect in Croatia. Four personal projects: AllCheck, The Getaway, Routewise, and MoneyWave.',
    type: 'website',
    locale: 'en_US',
    url: 'https://deus42.github.io/',
  },
  icons: { icon: '/favicon.svg' },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/images/architecture-study.webp"
          as="image"
          fetchPriority="high"
        />
      </head>
      <body className={`${space.variable} ${plex.variable}`}>{children}</body>
    </html>
  );
}
