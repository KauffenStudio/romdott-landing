import Link from 'next/link';

export const metadata = {
  title: 'Terms of Service',
  description: 'The terms governing your use of Roomdott’s roommate-matching service.',
  alternates: { canonical: '/terms' },
};

export default function Terms() {
  return (
    <div className="min-h-screen bg-cream text-soft-black">
      <nav className="flex items-center justify-between px-6 md:px-12 py-6 max-w-4xl mx-auto border-b border-soft-black/10">
        <Link href="/" className="font-serif text-2xl text-soft-black">roomdott.</Link>
      </nav>

      <main className="max-w-2xl mx-auto px-6 py-16">
        <h1 className="font-serif text-5xl mb-4">Terms of Service</h1>
        <p className="text-soft-black/50 font-sans text-sm mb-12">Last updated: June 2026</p>

        <div className="font-sans space-y-8 text-soft-black/80 leading-relaxed">
          <section>
            <h2 className="font-serif text-2xl text-soft-black mb-3">The service</h2>
            <p>Roomdott is a roommate-matching platform. We help you find compatible people to live with. We do not provide housing, accommodation, or any listings. Any housing arrangements are made directly between users.</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-soft-black mb-3">Eligibility</h2>
            <p>You must be 18 or older to use Roomdott. By signing up, you confirm that you are 18+. The platform is currently available to residents and visitors of EU, EEA, UK, and Switzerland only.</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-soft-black mb-3">Your account</h2>
            <p>You are responsible for keeping your account credentials secure. The information you provide must be truthful and up to date. Fake profiles, harassment, or misuse of contact information revealed through matches will result in permanent removal.</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-soft-black mb-3">Content</h2>
            <p>You own the content you post. By uploading photos or writing prompts, you grant Roomdott a limited license to display them to other users for matching purposes only. We do not use your content for advertising or AI training.</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-soft-black mb-3">Beta period</h2>
            <p>Roomdott is currently in beta. The service is provided free of charge and as-is. Features may change. We may limit access or shut down the beta at any time with reasonable notice.</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-soft-black mb-3">Limitation of liability</h2>
            <p>Roomdott facilitates introductions between adults. We are not responsible for any outcomes of roommate arrangements, disputes, or interactions that take place outside the platform. Exercise your own judgment and take normal precautions when meeting new people.</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-soft-black mb-3">Governing law</h2>
            <p>These terms are governed by Portuguese law. Disputes shall be resolved in the courts of Lisbon, Portugal.</p>
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
