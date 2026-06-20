import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: "Roomdott — Find a roommate you'd actually enjoy living with",
    template: '%s · Roomdott',
  },
  description:
    'Compatibility-matched roommates for students, models, and creatives moving across Europe. Not listings — people. Free during beta.',
  metadataBase: new URL('https://roomdott.com'),
  applicationName: 'Roomdott',
  keywords: [
    'roommate matching',
    'find a roommate Europe',
    'compatible roommates',
    'flatmate finder',
    'roommate finder for students',
    'Erasmus roommate',
    'shared flat Europe',
    'roommate app',
    'flatshare compatibility',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Roomdott — Roommate matching for Europe',
    description:
      "Find a roommate you'd actually enjoy living with. Compatibility-first matching for students and creatives across Europe.",
    url: 'https://roomdott.com',
    siteName: 'Roomdott',
    locale: 'en_EU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Roomdott — Find a roommate you'd actually enjoy living with",
    description: 'Compatibility-matched roommates for students and creatives moving across Europe.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://roomdott.com/#organization',
      name: 'Roomdott',
      url: 'https://roomdott.com',
      email: 'hello@roomdott.com',
      description:
        'Compatibility-first roommate matching for students, models, and creatives across Europe.',
      areaServed: 'Europe',
    },
    {
      '@type': 'WebSite',
      '@id': 'https://roomdott.com/#website',
      url: 'https://roomdott.com',
      name: 'Roomdott',
      publisher: { '@id': 'https://roomdott.com/#organization' },
      inLanguage: 'en',
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
