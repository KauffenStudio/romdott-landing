import Link from 'next/link';

export type Crumb = { name: string; href: string };

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `https://roomdott.com${item.href}`,
    })),
  };

  return (
    <nav aria-label="Breadcrumb" className="max-w-3xl mx-auto px-6 md:px-12 pt-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ol className="flex flex-wrap items-center gap-2 font-sans text-sm text-soft-black/50">
        {items.map((item, i) => (
          <li key={item.href} className="flex items-center gap-2">
            {i < items.length - 1 ? (
              <Link href={item.href} className="hover:text-terracotta transition-colors">
                {item.name}
              </Link>
            ) : (
              <span className="text-soft-black/70">{item.name}</span>
            )}
            {i < items.length - 1 && <span className="text-soft-black/30">/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
