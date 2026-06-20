import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import SiteNav from '../../_components/SiteNav';
import SiteFooter from '../../_components/SiteFooter';
import CTA from '../../_components/CTA';
import Breadcrumbs from '../../_components/Breadcrumbs';
import { guides, getGuide, type Block } from '../../_data/guides';

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};
  return {
    title: guide.title,
    description: guide.description,
    alternates: { canonical: `/guides/${guide.slug}` },
    openGraph: {
      title: guide.title,
      description: guide.description,
      url: `https://roomdott.com/guides/${guide.slug}`,
      type: 'article',
      publishedTime: guide.datePublished,
      modifiedTime: guide.dateModified,
    },
  };
}

function renderBlock(block: Block, i: number) {
  switch (block.type) {
    case 'h2':
      return (
        <h2 key={i} className="font-serif text-2xl md:text-3xl text-soft-black mt-12 mb-4">
          {block.text}
        </h2>
      );
    case 'h3':
      return (
        <h3 key={i} className="font-serif text-xl text-soft-black mt-8 mb-3">
          {block.text}
        </h3>
      );
    case 'ul':
      return (
        <ul key={i} className="list-disc pl-5 space-y-2 my-5 text-soft-black/75 font-sans leading-relaxed">
          {block.items.map((it, j) => (
            <li key={j}>{it}</li>
          ))}
        </ul>
      );
    case 'ol':
      return (
        <ol key={i} className="list-decimal pl-5 space-y-2 my-5 text-soft-black/75 font-sans leading-relaxed">
          {block.items.map((it, j) => (
            <li key={j}>{it}</li>
          ))}
        </ol>
      );
    default:
      return (
        <p key={i} className="text-soft-black/75 font-sans text-base md:text-lg leading-relaxed my-5">
          {block.text}
        </p>
      );
  }
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  const related = guide.related.map(getGuide).filter(Boolean) as NonNullable<ReturnType<typeof getGuide>>[];

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: guide.title,
    description: guide.description,
    datePublished: guide.datePublished,
    dateModified: guide.dateModified,
    author: { '@type': 'Organization', name: 'Roomdott' },
    publisher: {
      '@type': 'Organization',
      name: 'Roomdott',
      url: 'https://roomdott.com',
    },
    mainEntityOfPage: `https://roomdott.com/guides/${guide.slug}`,
  };

  return (
    <div className="min-h-screen bg-cream text-soft-black">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <SiteNav />
      <Breadcrumbs
        items={[
          { name: 'Home', href: '/' },
          { name: 'Guides', href: '/guides' },
          { name: guide.shortTitle, href: `/guides/${guide.slug}` },
        ]}
      />

      <article className="px-6 md:px-12 pt-8 pb-16 max-w-3xl mx-auto">
        <p className="font-sans text-xs font-semibold tracking-widest uppercase text-terracotta mb-4">
          {guide.category} · {guide.readingTime}
        </p>
        <h1 className="font-serif text-4xl md:text-5xl leading-tight mb-8">{guide.title}</h1>
        <div>{guide.blocks.map(renderBlock)}</div>
      </article>

      {related.length > 0 && (
        <section className="px-6 md:px-12 py-12 max-w-3xl mx-auto border-t border-soft-black/10">
          <h2 className="font-serif text-2xl mb-6">Keep reading</h2>
          <ul className="space-y-3">
            {related.map((g) => (
              <li key={g.slug}>
                <Link href={`/guides/${g.slug}`} className="font-sans text-base text-terracotta hover:underline">
                  {g.title} →
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      <CTA
        heading="Find a roommate you’ll actually enjoy living with"
        sub="Roomdott matches you on how you really live — not who posted first. Free during beta."
      />
      <SiteFooter />
    </div>
  );
}
