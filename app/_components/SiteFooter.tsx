import Link from 'next/link';
import { cities } from '../_data/cities';
import { audiences } from '../_data/audiences';
import { guides } from '../_data/guides';

export default function SiteFooter() {
  return (
    <footer className="px-6 md:px-12 pt-16 pb-10 border-t border-soft-black/10 bg-cream">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14">
          <div>
            <h3 className="font-sans text-xs font-semibold tracking-widest uppercase text-soft-black/40 mb-4">
              Cities
            </h3>
            <ul className="space-y-2.5">
              {cities.slice(0, 8).map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/roommates/${c.slug}`}
                    className="text-soft-black/70 hover:text-terracotta font-sans text-sm transition-colors"
                  >
                    Roommates in {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-sans text-xs font-semibold tracking-widest uppercase text-soft-black/40 mb-4">
              For you
            </h3>
            <ul className="space-y-2.5">
              {audiences.map((a) => (
                <li key={a.slug}>
                  <Link
                    href={`/for/${a.slug}`}
                    className="text-soft-black/70 hover:text-terracotta font-sans text-sm transition-colors"
                  >
                    {a.shortLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-sans text-xs font-semibold tracking-widest uppercase text-soft-black/40 mb-4">
              Guides
            </h3>
            <ul className="space-y-2.5">
              {guides.map((g) => (
                <li key={g.slug}>
                  <Link
                    href={`/guides/${g.slug}`}
                    className="text-soft-black/70 hover:text-terracotta font-sans text-sm transition-colors"
                  >
                    {g.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-sans text-xs font-semibold tracking-widest uppercase text-soft-black/40 mb-4">
              Roomdott
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/" className="text-soft-black/70 hover:text-terracotta font-sans text-sm transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/guides" className="text-soft-black/70 hover:text-terracotta font-sans text-sm transition-colors">
                  All guides
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-soft-black/70 hover:text-terracotta font-sans text-sm transition-colors">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-soft-black/70 hover:text-terracotta font-sans text-sm transition-colors">
                  Terms
                </Link>
              </li>
              <li>
                <a href="mailto:hello@roomdott.com" className="text-soft-black/70 hover:text-terracotta font-sans text-sm transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-soft-black/10">
          <span className="font-serif text-xl text-soft-black">roomdott.</span>
          <p className="text-soft-black/40 font-sans text-sm text-center">
            Built in Lisbon · Europe only · © 2026 Roomdott
          </p>
        </div>
      </div>
    </footer>
  );
}
