import { createClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

const EU_COUNTRIES = new Set([
  'AT','BE','BG','HR','CY','CZ','DK','EE','FI','FR','DE','GR','HU','IE','IT',
  'LV','LT','LU','MT','NL','PL','PT','RO','SK','SI','ES','SE',
  // EEA
  'IS','LI','NO',
  // UK + CH
  'GB','CH',
]);

export async function POST(req: NextRequest) {
  const { email, source } = await req.json();

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
  }

  const country =
    req.headers.get('cf-ipcountry') ??
    req.headers.get('x-vercel-ip-country') ??
    null;

  const is_international = country ? !EU_COUNTRIES.has(country) : false;

  const { error } = await supabase.from('waitlist').upsert(
    { email: email.trim().toLowerCase(), source: source ?? null, country, is_international },
    { onConflict: 'email', ignoreDuplicates: true },
  );

  if (error) {
    console.error('Waitlist insert error:', error);
    return NextResponse.json({ error: 'Could not save' }, { status: 500 });
  }

  return NextResponse.json({ ok: true, is_international });
}
