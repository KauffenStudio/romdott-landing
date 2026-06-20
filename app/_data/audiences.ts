export type Audience = {
  slug: string;
  name: string;
  shortLabel: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  painPoints: { title: string; body: string }[];
  howItHelps: { title: string; body: string }[];
  faq: { q: string; a: string }[];
};

export const audiences: Audience[] = [
  {
    slug: 'erasmus-students',
    name: 'Erasmus & exchange students',
    shortLabel: 'For Erasmus students',
    h1: 'Find Erasmus roommates you’ll actually click with',
    metaTitle: 'Roommates for Erasmus & Exchange Students in Europe',
    metaDescription:
      'Moving abroad for Erasmus? Find compatibility-matched roommates for your exchange semester — students who share your schedule, budget, and vibe. Free during beta.',
    intro:
      "An Erasmus semester is short, intense, and once-in-a-lifetime. The last thing you want is to spend it living with someone you clash with. Roomdott matches you with other students moving to your city for the same term — so you arrive with people who get the experience, not strangers from a rushed group chat.",
    painPoints: [
      {
        title: 'Everything happens last-minute',
        body: 'Placements get confirmed late, housing fills up fast, and you’re booking a room in a city you’ve never seen from hundreds of kilometres away.',
      },
      {
        title: 'Facebook groups are a gamble',
        body: '“DM me” posts, no profiles, no idea who you’re actually moving in with. Half the listings are scams and the other half are gone in an hour.',
      },
      {
        title: 'One bad flatmate ruins the semester',
        body: 'Different sleep schedules, party-vs-study clashes, nobody cleaning — when you only have four months, you can’t afford to lose them to housemate drama.',
      },
    ],
    howItHelps: [
      {
        title: 'Matched on lifestyle, not luck',
        body: 'A quick quiz scores compatibility — sleep schedule, study habits, guests, cleanliness, dealbreakers — so you connect with people who fit how you actually live.',
      },
      {
        title: 'Same city, same semester',
        body: 'We prioritise other students arriving in your destination for the same term, so you build your group before you even land.',
      },
      {
        title: 'Safe by design',
        body: 'Same-gender filters, human moderation, and contact details revealed only on a mutual match. Your Instagram and WhatsApp stay private until you both say yes.',
      },
    ],
    faq: [
      {
        q: 'Is Roomdott free for students?',
        a: 'Yes — it’s completely free during our beta. No subscription, no pay-to-boost, no hidden fees.',
      },
      {
        q: 'Does Roomdott find me the flat too?',
        a: 'Roomdott matches you with compatible people. You and your matches then find or split a flat together — we focus on the part listings sites ignore: who you live with.',
      },
      {
        q: 'Which cities does it cover?',
        a: 'We’re launching across Europe’s biggest student hubs first — Lisbon, Barcelona, Madrid, Milan, Paris, Berlin, Amsterdam, Vienna and more. Join the waitlist to get notified when your city opens.',
      },
    ],
  },
  {
    slug: 'models-and-creatives',
    name: 'Models & fashion creatives',
    shortLabel: 'For models & creatives',
    h1: 'Roommates for models and creatives on the move',
    metaTitle: 'Roommate & Housing Matching for Models and Fashion Creatives',
    metaDescription:
      'Moving for fashion week, a contract, or a creative gig? Find compatible roommates fast in Milan, Paris, London and beyond — matched on lifestyle, not listings.',
    intro:
      "Model apartments and short-term creative housing can be chaotic: strangers crammed together, mismatched schedules, no say in who you live with. Roomdott gives you control — match with compatible people for your stay in the fashion and creative capitals, whether it’s a season, a contract, or a single fashion week.",
    painPoints: [
      {
        title: 'You don’t choose who you live with',
        body: 'Agency model apartments put you in a room with whoever’s booked that week — different countries, schedules, and standards, with zero compatibility check.',
      },
      {
        title: 'Castings and call times wreck sleep',
        body: 'Early call times and late shoots only work if your flatmates respect quiet hours. One night owl in a shared room and your week falls apart.',
      },
      {
        title: 'Short stays, high stakes',
        body: 'You’re in a city for weeks, not years. There’s no time to “figure each other out” — you need a good fit from day one.',
      },
    ],
    howItHelps: [
      {
        title: 'Built for short, intense stays',
        body: 'Match on the things that matter for a season abroad — sleep schedule, quiet hours, tidiness, guests — and skip the agency-apartment lottery.',
      },
      {
        title: 'In the cities that matter',
        body: 'Milan, Paris, London and the rest of Europe’s fashion and creative hubs, where short-term housing demand peaks around the shows.',
      },
      {
        title: 'Privacy and safety first',
        body: 'Same-gender filters, moderation, and contact reveal only on mutual acceptance. You decide who gets your number — not an agency spreadsheet.',
      },
    ],
    faq: [
      {
        q: 'Can I find roommates just for fashion week?',
        a: 'Yes — Roomdott is ideal for short, high-demand windows like the shows, when housing is tight and you want compatible people fast.',
      },
      {
        q: 'Is it only for models?',
        a: 'No. Photographers, stylists, designers, interns and anyone in the creative industries moving city-to-city fit right in.',
      },
      {
        q: 'How does the matching work?',
        a: 'A short lifestyle quiz scores real compatibility. When two people mutually accept, you swap Instagram and WhatsApp and take it from there.',
      },
    ],
  },
  {
    slug: 'interns-and-young-professionals',
    name: 'Interns & young professionals',
    shortLabel: 'For interns & young pros',
    h1: 'Roommates for interns and young professionals relocating',
    metaTitle: 'Roommate Matching for Interns & Young Professionals in Europe',
    metaDescription:
      'Relocating for an internship or first job? Find compatible roommates in your new city — matched on schedule, lifestyle and budget. Free during beta.',
    intro:
      "Starting an internship or first job in a new city is exciting — and finding somewhere to live in time, with people you don’t dread coming home to, is the stressful part. Roomdott matches you with compatible flatmates so your relocation starts with a household that works, not a coin flip.",
    painPoints: [
      {
        title: 'Relocating on a tight timeline',
        body: 'Start dates don’t wait. You’re often signing for a room before you’ve set foot in the city or met a single flatmate.',
      },
      {
        title: 'Work-life balance starts at home',
        body: 'Early starts and big workdays don’t mix with a flat that treats every night like a weekend. The wrong household quietly burns you out.',
      },
      {
        title: 'New city, no network',
        body: 'You don’t know anyone yet, so the “people” part of moving is left entirely to chance — and to whoever replies first.',
      },
    ],
    howItHelps: [
      {
        title: 'Match on rhythm and budget',
        body: 'Find people whose schedule, cleanliness, and idea of a calm home match yours — so weekdays stay workable and weekends stay fun.',
      },
      {
        title: 'A head start on community',
        body: 'Your first matches can become your first friends in a new city, before day one at the office.',
      },
      {
        title: 'No agency markups',
        body: 'Free during beta, no pay-to-boost, no fake matches. We win only when you find someone worth living with.',
      },
    ],
    faq: [
      {
        q: 'I’m only here for a 6-month placement — is that fine?',
        a: 'Absolutely. Plenty of our users are on internships, secondments, and short contracts. Match on the lifestyle factors that matter for your stay.',
      },
      {
        q: 'Can I match with other professionals, not students?',
        a: 'Yes — your profile reflects your lifestyle, not just your status, so you connect with people on a similar rhythm.',
      },
      {
        q: 'When does my city open?',
        a: 'We’re rolling out across Europe’s major hubs. Join the waitlist and we’ll let you know the moment Roomdott is live where you’re headed.',
      },
    ],
  },
  {
    slug: 'expats-and-digital-nomads',
    name: 'Expats & digital nomads',
    shortLabel: 'For expats & nomads',
    h1: 'Roommates for expats and digital nomads in Europe',
    metaTitle: 'Roommate Matching for Expats & Digital Nomads in Europe',
    metaDescription:
      'Living and working remotely across Europe? Find compatible roommates city to city — matched on lifestyle, work hours and vibe. Free during beta.',
    intro:
      "When you move countries for work or the remote-work lifestyle, your home base sets the tone for everything. Roomdott helps expats and digital nomads match with compatible flatmates across Europe — people who respect a workday at the kitchen table and actually make a new city feel like home.",
    painPoints: [
      {
        title: 'You’re an outsider every time you move',
        body: 'New country, new language, no network — and you have to trust strangers with where you live, often sight unseen.',
      },
      {
        title: 'Remote work needs a calm base',
        body: 'Video calls and deep-work hours don’t survive a party flat. If your home doesn’t respect the workday, your job suffers.',
      },
      {
        title: 'Short leases, repeated gambles',
        body: 'Moving every few months means rolling the dice on flatmates again and again. Each bad match costs you time, money, and sanity.',
      },
    ],
    howItHelps: [
      {
        title: 'Match on work and lifestyle',
        body: 'Filter for people who get remote work — quiet hours, shared space etiquette, and a rhythm that fits yours.',
      },
      {
        title: 'City to city across Europe',
        body: 'Wherever you land next, match before you arrive instead of starting from zero in another Facebook group.',
      },
      {
        title: 'Trust built in',
        body: 'Profiles, moderation, and mutual-match contact reveal mean you’re connecting with real, compatible people — not whoever messaged first.',
      },
    ],
    faq: [
      {
        q: 'Is Roomdott good for short stays?',
        a: 'Yes — it’s designed for people on the move, including nomads staying a few months at a time. Match on what matters for your stay.',
      },
      {
        q: 'Does it work across multiple countries?',
        a: 'That’s the point. Roomdott is built for Europe, so the same profile helps you match in every city you move to.',
      },
      {
        q: 'Is my data safe across borders?',
        a: 'Your data stays in the EU and we’re GDPR compliant from day one. Contact details are only shared on a mutual match.',
      },
    ],
  },
];

export function getAudience(slug: string): Audience | undefined {
  return audiences.find((a) => a.slug === slug);
}
