import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy',
  description: 'How Roomdott collects, uses, and protects your data. GDPR compliant, data stored in the EU.',
  alternates: { canonical: '/privacy' },
};

export default function Privacy() {
  return (
    <div className="min-h-screen bg-cream text-soft-black">
      <nav className="flex items-center justify-between px-6 md:px-12 py-6 max-w-4xl mx-auto border-b border-soft-black/10">
        <Link href="/" className="font-serif text-2xl text-soft-black">roomdott.</Link>
      </nav>

      <main className="max-w-2xl mx-auto px-6 py-16">
        <h1 className="font-serif text-5xl mb-4">Privacy Policy</h1>
        <p className="text-soft-black/50 font-sans text-sm mb-12">Last updated: June 2026</p>

        <div className="prose prose-stone font-sans space-y-8 text-soft-black/80 leading-relaxed">
          <section>
            <h2 className="font-serif text-2xl text-soft-black mb-3">Who we are</h2>
            <p>Roomdott is a roommate-matching platform operated by KauffenStudio (sole trader, Portugal). We help people find compatible roommates across Europe.</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-soft-black mb-3">What we collect</h2>
            <p>When you join our waitlist, we collect your email address. When you create a profile, we collect the information you provide: name, age, gender, lifestyle preferences, photos, and contact details for matched connections. We store your IP-derived country for geo-restriction purposes.</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-soft-black mb-3">How we use it</h2>
            <p>Your email is used to notify you when Roomdott launches in your city. Profile data is used exclusively for roommate matching. We do not sell your data. We do not use it for advertising.</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-soft-black mb-3">Where it lives</h2>
            <p>All data is stored on Supabase infrastructure in Frankfurt, Germany (EU-Central-1). No data leaves the European Economic Area.</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-soft-black mb-3">Your rights (GDPR)</h2>
            <p>You have the right to access, correct, export, or delete your data at any time. Email us at <a href="mailto:hello@roomdott.com" className="text-terracotta underline">hello@roomdott.com</a> and we will respond within 30 days.</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-soft-black mb-3">Cookies</h2>
            <p>We use only strictly necessary cookies (session management). We do not use tracking or advertising cookies.</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-soft-black mb-3">Contact</h2>
            <p>Questions? Email <a href="mailto:hello@roomdott.com" className="text-terracotta underline">hello@roomdott.com</a>.</p>
          </section>
        </div>
      </main>
    </div>
  );
}
