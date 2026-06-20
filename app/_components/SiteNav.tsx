import Link from 'next/link';

export default function SiteNav() {
  return (
    <nav className="flex items-center justify-between px-6 md:px-12 py-6 max-w-6xl mx-auto">
      <Link href="/" className="font-serif text-2xl text-soft-black tracking-tight">
        roomdott.
      </Link>
      <div className="flex items-center gap-6">
        <Link
          href="/guides"
          className="hidden sm:inline text-soft-black/60 hover:text-soft-black font-sans text-sm font-medium transition-colors"
        >
          Guides
        </Link>
        <Link
          href="/roommates"
          className="hidden sm:inline text-soft-black/60 hover:text-soft-black font-sans text-sm font-medium transition-colors"
        >
          Cities
        </Link>
        <Link
          href="/#waitlist"
          className="bg-terracotta text-cream font-sans font-semibold text-sm rounded-full px-5 py-2.5 hover:bg-terracotta/90 transition-colors"
        >
          Get early access
        </Link>
      </div>
    </nav>
  );
}
