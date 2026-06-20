import type { Metadata } from 'next';
import Link from 'next/link';
import SiteNav from '../_components/SiteNav';
import SiteFooter from '../_components/SiteFooter';
import CTA from '../_components/CTA';
import Breadcrumbs from '../_components/Breadcrumbs';
import { audiences } from '../_data/audiences';

export const metadata: Metadata = {
  title: 'Roommate Matching Built for How You Move',
  description:
    'Whoever you are — Erasmus student, model, intern, expat or digital nomad — Roomdott matches you with compatible roommates across Europe.',
  alternates: { canonical: '/for' },
};

export default function ForHub() {
  return (
    <div className="min-h-screen bg-cream text-soft-black">
      <SiteNav />
      <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'For you', href: '/for' }]} />

      <header className="px-6 md:px-12 pt-10 pb-12 max-w-4xl mx-auto text-center">
        <h1 className="font-serif text-4xl md:text-6xl leading-tight mb-6">
          Built for people on the move
        </h1>
        <p className="text-soft-black/60 font-sans text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          However you move across Europe, the hard part is the same: finding people you’ll actually enjoy
          living with. Find the version of Roomdott built for you.
        </p>
      </header>

      <section className="px-6 md:px-12 pb-20 max-w-4xl mx-auto">
        <div className="grid sm:grid-cols-2 gap-6">
          {audiences.map((a) => (
            <Link
              key={a.slug}
              href={`/for/${a.slug}`}
              className="group border border-soft-black/10 rounded-2xl p-7 hover:border-terracotta/60 hover:shadow-sm transition-all"
            >
              <h2 className="font-serif text-2xl text-soft-black mb-3 group-hover:text-terracotta transition-colors">
                {a.name}
              </h2>
              <p className="font-sans text-sm text-soft-black/60 leading-relaxed">{a.intro.slice(0, 130)}…</p>
              <span className="inline-block mt-4 font-sans text-sm font-semibold text-terracotta">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <CTA />
      <SiteFooter />
    </div>
  );
}
