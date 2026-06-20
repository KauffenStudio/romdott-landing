import WaitlistForm from './WaitlistForm';

export default function CTA({
  heading = 'Ready to find your person?',
  sub = 'Join the waitlist and be first to know when Roomdott opens in your city.',
}: {
  heading?: string;
  sub?: string;
}) {
  return (
    <section id="waitlist" className="bg-terracotta px-6 md:px-12 py-20">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-serif text-4xl md:text-5xl text-cream mb-4">{heading}</h2>
        <p className="text-cream/70 font-sans text-lg mb-10">{sub}</p>
        <WaitlistForm />
        <p className="text-cream/50 font-sans text-xs mt-4">
          Free forever during beta · No credit card · Europe only
        </p>
      </div>
    </section>
  );
}
