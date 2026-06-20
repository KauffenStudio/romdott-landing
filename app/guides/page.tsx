import type { Metadata } from 'next';
import Link from 'next/link';
import SiteNav from '../_components/SiteNav';
import SiteFooter from '../_components/SiteFooter';
import CTA from '../_components/CTA';
import Breadcrumbs from '../_components/Breadcrumbs';
import { guides } from '../_data/guides';

export const metadata: Metadata = {
  title: 'Roommate & Flatshare Guides',
  description:
    'Practical guides to finding compatible roommates, spotting red flags, splitting rent fairly, and living well in a shared flat across Europe.',
  alternates: { canonical: '/guides' },
};

export default function GuidesIndex() {
  const itemListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: guides.map((g, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `https://roomdott.com/guides/${g.slug}`,
      name: g.title,
    })),
  };

  return (
    <div className="min-h-screen bg-cream text-soft-black">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />
      <SiteNav />
      <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'Guides', href: '/guides' }]} />

      <header className="px-6 md:px-12 pt-10 pb-12 max-w-4xl mx-auto text-center">
        <h1 className="font-serif text-4xl md:text-6xl leading-tight mb-6">Roommate guides</h1>
        <p className="text-soft-black/60 font-sans text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Honest, practical advice on finding compatible roommates and living well together — from first
          search to splitting the bills.
        </p>
      </header>

      <section className="px-6 md:px-12 pb-20 max-w-3xl mx-auto">
        <div className="space-y-8">
          {guides.map((g) => (
            <Link
              key={g.slug}
              href={`/guides/${g.slug}`}
              className="group block border-t border-soft-black/10 pt-8"
            >
              <p className="font-sans text-xs font-semibold tracking-widest uppercase text-terracotta mb-3">
                {g.category} · {g.readingTime}
              </p>
              <h2 className="font-serif text-2xl md:text-3xl text-soft-black mb-3 group-hover:text-terracotta transition-colors">
                {g.title}
              </h2>
              <p className="font-sans text-base text-soft-black/60 leading-relaxed">{g.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>

      <CTA />
      <SiteFooter />
    </div>
  );
}
