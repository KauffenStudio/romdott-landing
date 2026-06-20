import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import SiteNav from '../../_components/SiteNav';
import SiteFooter from '../../_components/SiteFooter';
import CTA from '../../_components/CTA';
import Breadcrumbs from '../../_components/Breadcrumbs';
import { audiences, getAudience } from '../../_data/audiences';
import { guides } from '../../_data/guides';

export function generateStaticParams() {
  return audiences.map((a) => ({ audience: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ audience: string }>;
}): Promise<Metadata> {
  const { audience } = await params;
  const data = getAudience(audience);
  if (!data) return {};
  return {
    title: data.metaTitle,
    description: data.metaDescription,
    alternates: { canonical: `/for/${data.slug}` },
    openGraph: {
      title: `${data.metaTitle} — Roomdott`,
      description: data.metaDescription,
      url: `https://roomdott.com/for/${data.slug}`,
      type: 'website',
    },
  };
}

export default async function AudiencePage({
  params,
}: {
  params: Promise<{ audience: string }>;
}) {
  const { audience } = await params;
  const data = getAudience(audience);
  if (!data) notFound();

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: data.faq.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <div className="min-h-screen bg-cream text-soft-black">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <SiteNav />
      <Breadcrumbs
        items={[
          { name: 'Home', href: '/' },
          { name: 'For you', href: '/for' },
          { name: data.name, href: `/for/${data.slug}` },
        ]}
      />

      <header className="px-6 md:px-12 pt-10 pb-12 max-w-4xl mx-auto text-center">
        <p className="font-sans text-xs font-semibold tracking-widest uppercase text-terracotta mb-4">
          {data.name}
        </p>
        <h1 className="font-serif text-4xl md:text-6xl leading-tight mb-6">{data.h1}</h1>
        <p className="text-soft-black/60 font-sans text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          {data.intro}
        </p>
        <div className="mt-8">
          <Link
            href="/#waitlist"
            className="inline-block bg-terracotta text-cream font-sans font-semibold text-sm rounded-full px-6 py-3 hover:bg-terracotta/90 transition-colors"
          >
            Get early access
          </Link>
        </div>
      </header>

      {/* Pain points */}
      <section className="bg-soft-black px-6 md:px-12 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-cream text-center mb-12">
            Why this is so hard right now
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {data.painPoints.map((p) => (
              <div key={p.title}>
                <h3 className="font-serif text-xl text-cream mb-3">{p.title}</h3>
                <p className="text-cream/60 font-sans text-sm leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it helps */}
      <section className="px-6 md:px-12 py-16 max-w-4xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl text-center mb-12">How Roomdott helps</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {data.howItHelps.map((h, i) => (
            <div key={h.title}>
              <span className="font-serif text-4xl text-terracotta block mb-3">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="font-serif text-xl mb-2">{h.title}</h3>
              <p className="text-soft-black/60 font-sans text-sm leading-relaxed">{h.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 md:px-12 py-16 max-w-3xl mx-auto border-t border-soft-black/10">
        <h2 className="font-serif text-3xl md:text-4xl mb-10">Frequently asked questions</h2>
        <div className="space-y-8">
          {data.faq.map((f) => (
            <div key={f.q}>
              <h3 className="font-serif text-xl text-soft-black mb-2">{f.q}</h3>
              <p className="text-soft-black/60 font-sans text-base leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Related guides */}
      <section className="px-6 md:px-12 pb-12 max-w-3xl mx-auto">
        <h2 className="font-serif text-2xl mb-6">Helpful reading</h2>
        <ul className="space-y-3">
          {guides.slice(0, 3).map((g) => (
            <li key={g.slug}>
              <Link href={`/guides/${g.slug}`} className="font-sans text-base text-terracotta hover:underline">
                {g.title} →
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <CTA />
      <SiteFooter />
    </div>
  );
}
