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
  title: 'Deus — Oleksii Gapchenko · Architect & Builder',
  description:
    'Solutions architect and hands-on builder. Enterprise systems, independent software, and useful experiments. Selected work by Oleksii Gapchenko, based in Croatia.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Deus — Oleksii Gapchenko',
    description:
      'Solutions architect. Hands-on builder. Explore my independent software and the thinking behind it.',
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
