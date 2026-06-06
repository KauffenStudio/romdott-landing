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
  title: "Romdott — Find a roommate you'd actually enjoy living with",
  description:
    'Compatibility-matched roommates for students, models, and creatives moving across Europe. Not listings — people.',
  metadataBase: new URL('https://agapii.com'),
  openGraph: {
    title: 'Romdott — Roommate matching for Europe',
    description:
      "Find a roommate you'd actually enjoy living with. Compatibility-first matching for students and creatives across Europe.",
    url: 'https://agapii.com',
    siteName: 'Romdott',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Romdott' }],
    locale: 'en_EU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Romdott — Find a roommate you'd actually enjoy living with",
    description: 'Compatibility-matched roommates for students and creatives moving across Europe.',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
