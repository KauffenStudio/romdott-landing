import type { Metadata } from 'next';
import Link from 'next/link';
import SiteNav from '../_components/SiteNav';
import SiteFooter from '../_components/SiteFooter';
import CTA from '../_components/CTA';
import Breadcrumbs from '../_components/Breadcrumbs';
import { cities } from '../_data/cities';

export const metadata: Metadata = {
  title: 'Find a Roommate in Europe — City by City',
  description:
    'Find compatibility-matched roommates across Europe’s biggest student and creative cities — Lisbon, Barcelona, Madrid, Milan, Paris, Berlin, Amsterdam and more.',
  alternates: { canonical: '/roommates' },
};

export default function RoommatesHub() {
  return (
    <div className="min-h-screen bg-cream text-soft-black">
      <SiteNav />
      <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'Cities', href: '/roommates' }]} />

      <header className="px-6 md:px-12 pt-10 pb-12 max-w-4xl mx-auto text-center">
        <h1 className="font-serif text-4xl md:text-6xl leading-tight mb-6">
          Find a roommate, city by city
        </h1>
        <p className="text-soft-black/60 font-sans text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Roomdott matches you with compatible people moving to the same European city as you — by how you
          actually live, not who posted first. Pick your city to get started.
        </p>
      </header>

      <section className="px-6 md:px-12 pb-20 max-w-5xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cities.map((c) => (
            <Link
              key={c.slug}
              href={`/roommates/${c.slug}`}
              className="group border border-soft-black/10 rounded-2xl p-6 hover:border-terracotta/60 hover:shadow-sm transition-all"
            >
              <h2 className="font-serif text-2xl text-soft-black mb-1 group-hover:text-terracotta transition-colors">
                {c.name}
              </h2>
              <p className="font-sans text-sm text-soft-black/50 mb-4">{c.country}</p>
              <p className="font-sans text-sm text-soft-black/60 leading-relaxed mb-4">{c.bestFor}</p>
              <span className="font-sans text-xs font-semibold tracking-widest uppercase text-terracotta">
                {c.avgRoomRent}
              </span>
            </Link>
          ))}
        </div>
      </section>

      <CTA
        heading="Don’t see your city yet?"
        sub="We’re opening new European cities every month. Join the waitlist and we’ll tell you the moment yours is live."
      />
      <SiteFooter />
    </div>
  );
}
