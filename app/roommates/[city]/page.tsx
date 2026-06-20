import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import SiteNav from '../../_components/SiteNav';
import SiteFooter from '../../_components/SiteFooter';
import CTA from '../../_components/CTA';
import Breadcrumbs from '../../_components/Breadcrumbs';
import { cities, getCity } from '../../_data/cities';
import { guides } from '../../_data/guides';

export function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city } = await params;
  const data = getCity(city);
  if (!data) return {};

  const title = `Find a Roommate in ${data.name}, ${data.country}`;
  return {
    title,
    description: `Looking for a roommate in ${data.name}? Roomdott matches you with compatible flatmates by lifestyle — sleep schedule, cleanliness, guests and more. Free during beta.`,
    alternates: { canonical: `/roommates/${data.slug}` },
    openGraph: {
      title: `${title} — Roomdott`,
      description: `Compatibility-matched roommates in ${data.name}. Not listings — people.`,
      url: `https://roomdott.com/roommates/${data.slug}`,
      type: 'website',
    },
  };
}

export default async function CityPage({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const data = getCity(city);
  if (!data) notFound();

  const otherCities = cities.filter((c) => c.slug !== data.slug).slice(0, 6);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Roommate matching in ${data.name}`,
    serviceType: 'Roommate matching',
    areaServed: { '@type': 'City', name: data.name },
    provider: { '@type': 'Organization', name: 'Roomdott', url: 'https://roomdott.com' },
    description: `Compatibility-first roommate matching for people moving to ${data.name}, ${data.country}.`,
  };

  return (
    <div className="min-h-screen bg-cream text-soft-black">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SiteNav />
      <Breadcrumbs
        items={[
          { name: 'Home', href: '/' },
          { name: 'Cities', href: '/roommates' },
          { name: data.name, href: `/roommates/${data.slug}` },
        ]}
      />

      {/* Hero */}
      <header className="px-6 md:px-12 pt-10 pb-12 max-w-4xl mx-auto text-center">
        <p className="font-sans text-xs font-semibold tracking-widest uppercase text-terracotta mb-4">
          {data.country} · {data.avgRoomRent}
        </p>
        <h1 className="font-serif text-4xl md:text-6xl leading-tight mb-6">
          Find a roommate in {data.name} you’d actually{' '}
          <span className="italic text-terracotta">enjoy</span> living with
        </h1>
        <p className="text-soft-black/60 font-sans text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          {data.intro}
        </p>
        <div className="mt-8">
          <Link
            href="/#waitlist"
            className="inline-block bg-terracotta text-cream font-sans font-semibold text-sm rounded-full px-6 py-3 hover:bg-terracotta/90 transition-colors"
          >
            Get early access in {data.name}
          </Link>
        </div>
      </header>

      {/* The scene */}
      <section className="bg-soft-black px-6 md:px-12 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-cream mb-5">
            Who’s looking for roommates in {data.name}
          </h2>
          <p className="text-cream/70 font-sans text-lg leading-relaxed">{data.scene}</p>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="px-6 md:px-12 py-16 max-w-4xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl mb-3">
          Best neighbourhoods for sharing in {data.name}
        </h2>
        <p className="text-soft-black/60 font-sans text-base mb-10 max-w-2xl">
          Where you live matters — but who you live with matters more. Here’s where sharers tend to land in{' '}
          {data.name}.
        </p>
        <div className="grid sm:grid-cols-2 gap-6">
          {data.neighborhoods.map((n) => (
            <div key={n.name} className="border-t-2 border-terracotta/30 pt-4">
              <h3 className="font-serif text-xl text-soft-black mb-2">{n.name}</h3>
              <p className="text-soft-black/60 font-sans text-sm leading-relaxed">{n.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Universities */}
      <section className="px-6 md:px-12 pb-16 max-w-4xl mx-auto">
        <h2 className="font-serif text-2xl md:text-3xl mb-4">Universities & schools in {data.name}</h2>
        <p className="text-soft-black/60 font-sans text-base mb-6 max-w-2xl">
          A big share of {data.name}’s flatshare demand comes from students arriving at:
        </p>
        <div className="flex flex-wrap gap-3">
          {data.universities.map((u) => (
            <span
              key={u}
              className="bg-sage/15 text-soft-black/70 font-sans text-sm rounded-full px-4 py-2"
            >
              {u}
            </span>
          ))}
        </div>
      </section>

      {/* How it works mini */}
      <section className="px-6 md:px-12 py-16 max-w-4xl mx-auto border-t border-soft-black/10">
        <h2 className="font-serif text-3xl md:text-4xl mb-10">How Roomdott works in {data.name}</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            ['01', 'Build your profile', 'A 5-minute quiz about your lifestyle — sleep, diet, guests, vibe.'],
            ['02', `Match in ${data.name}`, 'We score every candidate moving to your city by real compatibility.'],
            ['03', 'Connect', 'On a mutual match, you swap Instagram and WhatsApp. No messaging theatre.'],
          ].map(([n, t, b]) => (
            <div key={n}>
              <span className="font-serif text-4xl text-terracotta block mb-3">{n}</span>
              <h3 className="font-serif text-xl mb-2">{t}</h3>
              <p className="text-soft-black/60 font-sans text-sm leading-relaxed">{b}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Related guides */}
      <section className="px-6 md:px-12 py-12 max-w-4xl mx-auto">
        <h2 className="font-serif text-2xl mb-6">Before you move to {data.name}</h2>
        <ul className="space-y-3">
          {guides.slice(0, 3).map((g) => (
            <li key={g.slug}>
              <Link
                href={`/guides/${g.slug}`}
                className="font-sans text-base text-terracotta hover:underline"
              >
                {g.title} →
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Other cities */}
      <section className="px-6 md:px-12 pb-16 max-w-4xl mx-auto">
        <h2 className="font-serif text-2xl mb-6">Roommates in other cities</h2>
        <div className="flex flex-wrap gap-3">
          {otherCities.map((c) => (
            <Link
              key={c.slug}
              href={`/roommates/${c.slug}`}
              className="border border-soft-black/15 hover:border-terracotta/60 font-sans text-sm rounded-full px-4 py-2 transition-colors"
            >
              {c.name}
            </Link>
          ))}
        </div>
      </section>

      <CTA
        heading={`Find your person in ${data.name}`}
        sub={`Join the waitlist and be first to match with compatible roommates when Roomdott opens in ${data.name}.`}
      />
      <SiteFooter />
    </div>
  );
}
