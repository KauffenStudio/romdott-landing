import WaitlistForm from './_components/WaitlistForm';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-cream text-soft-black">

      {/* ── Nav ──────────────────────────────────────────────────── */}
      <nav className="flex items-center justify-between px-6 md:px-12 py-6 max-w-6xl mx-auto">
        <span className="font-serif text-2xl text-soft-black tracking-tight">romdott.</span>
        <a
          href="#waitlist"
          className="bg-terracotta text-cream font-sans font-semibold text-sm rounded-full px-5 py-2.5 hover:bg-terracotta/90 transition-colors"
        >
          Get early access
        </a>
      </nav>

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="px-6 md:px-12 pt-16 pb-24 max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-sage/20 text-sage font-sans text-xs font-semibold tracking-widest uppercase rounded-full px-4 py-2 mb-10">
          <span className="w-1.5 h-1.5 rounded-full bg-sage inline-block"></span>
          Launching in Europe · Free during beta
        </div>

        <h1 className="font-serif text-5xl md:text-7xl leading-tight md:leading-[1.1] text-soft-black mb-6">
          Find a roommate you'd actually{' '}
          <span className="italic text-terracotta">enjoy</span> living with.
        </h1>

        <p className="text-soft-black/60 font-sans text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
          Compatibility-matched roommates for students, models, and creatives
          moving across Europe. Not listings — people.
        </p>

        <div id="waitlist" className="relative">
          <WaitlistForm />
          <p className="text-soft-black/40 font-sans text-xs mt-4">
            Free forever during beta · No credit card · Europe only
          </p>
        </div>
      </section>

      {/* ── How it works ─────────────────────────────────────────── */}
      <section className="bg-soft-black px-6 md:px-12 py-20">
        <div className="max-w-5xl mx-auto">
          <p className="text-sage font-sans text-xs font-semibold tracking-widest uppercase text-center mb-4">
            How it works
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-cream text-center mb-16">
            Three steps to your next home.
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                number: '01',
                title: 'Build your profile',
                body: 'A 5-minute quiz about your lifestyle — sleep schedule, diet, guests policy, vibe. Add photos and your three signature prompts.',
              },
              {
                number: '02',
                title: 'Get matched',
                body: 'Our algorithm scores every candidate by real compatibility — not who posted most recently or paid for a boost.',
              },
              {
                number: '03',
                title: 'Connect',
                body: "When it's mutual, we reveal each other's Instagram and WhatsApp. No in-app messaging theatre — you already know how to talk.",
              },
            ].map((step) => (
              <div key={step.number} className="flex flex-col">
                <span className="font-serif text-5xl text-terracotta mb-5">{step.number}</span>
                <h3 className="font-serif text-2xl text-cream mb-3">{step.title}</h3>
                <p className="text-cream/60 font-sans text-base leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Romdott ──────────────────────────────────────────── */}
      <section className="px-6 md:px-12 py-20 max-w-5xl mx-auto">
        <p className="text-terracotta font-sans text-xs font-semibold tracking-widest uppercase text-center mb-4">
          Why Romdott
        </p>
        <h2 className="font-serif text-4xl md:text-5xl text-soft-black text-center mb-16">
          Idealista finds you a flat.<br />We find you someone to share it with.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              icon: '🔍',
              title: 'Compatibility over availability',
              body: 'We score by lifestyle match — sleep schedule, cleanliness, guests, diet, dealbreakers. Not by who responded first.',
            },
            {
              icon: '🔒',
              title: 'Safety by design',
              body: 'Rate limits, same-gender filters, human moderation. Your contact details are only revealed to people who mutually accept you.',
            },
            {
              icon: '🌍',
              title: 'Built for Europe',
              body: 'Data stays in the EU (Frankfurt). GDPR compliant from day one. Designed for Erasmus, exchange students, fashion week, and expats.',
            },
            {
              icon: '🎯',
              title: 'Free during beta',
              body: 'No subscription. No pay-to-boost. No fake matches. We succeed only when you find someone worth living with.',
            },
          ].map((card) => (
            <div
              key={card.title}
              className="bg-white/60 border border-soft-black/8 rounded-3xl p-8 hover:border-terracotta/30 transition-colors"
            >
              <span className="text-3xl mb-4 block">{card.icon}</span>
              <h3 className="font-serif text-xl text-soft-black mb-2">{card.title}</h3>
              <p className="text-soft-black/60 font-sans text-base leading-relaxed">{card.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Bottom CTA ───────────────────────────────────────────── */}
      <section className="bg-terracotta px-6 md:px-12 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-cream mb-4">
            Ready to find your person?
          </h2>
          <p className="text-cream/70 font-sans text-lg mb-10">
            Join the waitlist and be first to know when Romdott opens in your city.
          </p>
          <WaitlistForm />
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────────── */}
      <footer className="px-6 md:px-12 py-10 border-t border-soft-black/10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-serif text-xl text-soft-black">romdott.</span>
          <p className="text-soft-black/40 font-sans text-sm text-center">
            Built in Lisbon · Europe only · © 2026 Romdott
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-soft-black/40 hover:text-soft-black font-sans text-sm transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-soft-black/40 hover:text-soft-black font-sans text-sm transition-colors">
              Terms
            </Link>
            <a href="mailto:hello@romdott.com" className="text-soft-black/40 hover:text-soft-black font-sans text-sm transition-colors">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
