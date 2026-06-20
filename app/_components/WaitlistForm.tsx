'use client';

import { useState } from 'react';

export default function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [state, setState] = useState<'idle' | 'loading' | 'success' | 'international' | 'error'>('idle');

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setState('loading');

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'landing' }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      setState(data.is_international ? 'international' : 'success');
    } catch {
      setState('error');
    }
  };

  if (state === 'success') {
    return (
      <div className="bg-sage/20 border border-sage/40 rounded-2xl px-6 py-5 text-center max-w-md mx-auto">
        <p className="text-soft-black font-serif text-xl mb-1">You're on the list.</p>
        <p className="text-soft-black/60 font-sans text-sm">
          We'll reach out before Roomdott opens. Tell a friend who's moving too.
        </p>
      </div>
    );
  }

  if (state === 'international') {
    return (
      <div className="bg-sage/20 border border-sage/40 rounded-2xl px-6 py-5 text-center max-w-md mx-auto">
        <p className="text-soft-black font-serif text-xl mb-1">Got it — we'll keep you posted.</p>
        <p className="text-soft-black/60 font-sans text-sm">
          Roomdott is launching in Europe first. We'll let you know when we reach your region.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto w-full">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        className="flex-1 bg-white/80 border border-soft-black/10 rounded-full px-5 py-3.5 text-soft-black font-sans text-base outline-none focus:border-terracotta transition-colors placeholder:text-soft-black/40"
      />
      <button
        type="submit"
        disabled={state === 'loading'}
        className="bg-terracotta hover:bg-terracotta/90 disabled:bg-terracotta/50 text-cream font-sans font-semibold text-base rounded-full px-7 py-3.5 transition-colors whitespace-nowrap cursor-pointer"
      >
        {state === 'loading' ? 'Joining…' : 'Get early access'}
      </button>
      {state === 'error' && (
        <p className="absolute mt-16 text-terracotta font-sans text-sm">Something went wrong — try again.</p>
      )}
    </form>
  );
}
