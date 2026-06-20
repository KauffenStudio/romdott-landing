export type City = {
  slug: string;
  name: string;
  country: string;
  intro: string;
  scene: string;
  avgRoomRent: string;
  bestFor: string;
  neighborhoods: { name: string; note: string }[];
  universities: string[];
};

export const cities: City[] = [
  {
    slug: 'lisbon',
    name: 'Lisbon',
    country: 'Portugal',
    intro:
      "Lisbon has become one of Europe's busiest landing pads for students, remote workers, and creatives — and that demand has made finding a room here genuinely competitive. Listings vanish within hours, and the hard part was never the flat: it's ending up with a flatmate whose schedule, cleanliness, and idea of \"home\" actually match yours.",
    scene:
      'Between Erasmus arrivals at NOVA and Universidade de Lisboa, a deep startup scene around Marvila, and a steady flow of digital nomads, Lisbon mixes more lifestyles under one roof than almost anywhere. That variety is exactly why compatibility matters more here than a good photo of the room.',
    avgRoomRent: '€450–€700 / month',
    bestFor: 'Erasmus students, remote workers, and creatives',
    neighborhoods: [
      { name: 'Arroios & Anjos', note: 'Central, diverse, well-connected — the classic shared-flat belt.' },
      { name: 'Alvalade', note: 'Quieter and residential, popular with students near the universities.' },
      { name: 'Marvila', note: 'Younger, cheaper, and rising fast with the creative crowd.' },
      { name: 'Graça & Mouraria', note: 'Characterful old Lisbon, great for those who want neighbourhood life.' },
    ],
    universities: ['Universidade de Lisboa', 'NOVA University Lisbon', 'ISCTE', 'Católica Lisbon'],
  },
  {
    slug: 'porto',
    name: 'Porto',
    country: 'Portugal',
    intro:
      "Porto offers a lot of what Lisbon does at a calmer pace and a lower price — which is exactly why it's pulling in more international students and remote workers every year. The flats are out there; the challenge is finding people to share one with who match how you actually live day to day.",
    scene:
      "With the University of Porto anchoring a huge student population and a growing tech and design community downtown, the city blends academic and creative crowds. Knowing your flatmate's rhythm matters here — student nightlife and an early remote-work start don't always mix.",
    avgRoomRent: '€350–€550 / month',
    bestFor: 'Students and budget-conscious remote workers',
    neighborhoods: [
      { name: 'Cedofeita & Bonfim', note: 'Central, arty, full of shared flats and cafés.' },
      { name: 'Paranhos', note: 'The student heartland, right by the main university campuses.' },
      { name: 'Foz', note: 'Coastal and calmer — pricier, but loved by sea-lovers.' },
      { name: 'Campanhã', note: 'Up-and-coming and affordable, well-linked by the new transport hub.' },
    ],
    universities: ['University of Porto', 'Católica Porto', 'ISEP', 'Lusíada'],
  },
  {
    slug: 'barcelona',
    name: 'Barcelona',
    country: 'Spain',
    intro:
      "Barcelona's room market moves fast and the competition is fierce — between students, exchange programs, and a massive international community, the best shares are gone almost as soon as they appear. Speed helps, but landing with the wrong flatmates is how a great year goes sideways.",
    scene:
      'Home to one of the largest Erasmus communities in Europe plus design schools, business programs, and a beach-city creative scene, Barcelona attracts people from everywhere. That international mix is brilliant — and a reason to match on lifestyle, not just budget and location.',
    avgRoomRent: '€500–€800 / month',
    bestFor: 'Erasmus, design and business students, creatives',
    neighborhoods: [
      { name: 'Gràcia', note: 'Village-like, social, the go-to for international sharers.' },
      { name: 'El Born & Gòtic', note: 'Central and lively, if you want to be in the middle of it.' },
      { name: 'Poblenou', note: 'Beach-adjacent and design-heavy — the 22@ tech district.' },
      { name: 'Eixample', note: 'Grid-perfect, central, with bigger flats for sharing.' },
    ],
    universities: ['Universitat de Barcelona', 'UPF', 'UAB', 'ESADE', 'IED Barcelona'],
  },
  {
    slug: 'madrid',
    name: 'Madrid',
    country: 'Spain',
    intro:
      "Madrid runs on a huge student and young-professional population, which keeps the room market busy all year — not just in September. Finding a flat is doable; finding flatmates who match your hours in a city that genuinely runs late is the part worth getting right.",
    scene:
      'With several major universities, big business schools, and a relentless social calendar, Madrid draws ambitious students and young workers from across Spain and abroad. Late dinners and later nights are the norm, so a flatmate on a different clock can quietly wear you down.',
    avgRoomRent: '€450–€750 / month',
    bestFor: 'University students and young professionals',
    neighborhoods: [
      { name: 'Malasaña & Chueca', note: 'Central, alternative, the heart of young Madrid.' },
      { name: 'Lavapiés', note: 'Diverse and affordable, a long-time favourite for sharers.' },
      { name: 'Moncloa & Argüelles', note: 'Right by the main campuses — pure student territory.' },
      { name: 'La Latina', note: 'Classic Madrid with great weekends, central and social.' },
    ],
    universities: ['Universidad Complutense', 'UAM', 'UC3M', 'IE University', 'Universidad Politécnica'],
  },
  {
    slug: 'milan',
    name: 'Milan',
    country: 'Italy',
    intro:
      "Milan is Italy's magnet for fashion, design, and business — and its rooms are some of the most expensive and hardest to land in the country. Demand spikes around fashion weeks and the academic intake, so matching with the right flatmates quickly is half the battle.",
    scene:
      "Between Bocconi, Politecnico, the fashion houses, and the design world, Milan's incoming crowd skews ambitious and international. Models, interns, and design students often arrive on short, intense timelines — which is exactly when a compatible, drama-free flatmate is worth the most.",
    avgRoomRent: '€600–€900 / month',
    bestFor: 'Fashion, design, and business students; models and interns',
    neighborhoods: [
      { name: 'Navigli', note: 'Canal-side nightlife and creative energy — very popular for sharing.' },
      { name: 'Isola & Porta Garibaldi', note: 'Modern, central, design-forward and well-connected.' },
      { name: 'Città Studi', note: 'The student district by Politecnico and Statale.' },
      { name: 'Porta Romana', note: 'Stylish and residential, handy for Bocconi and Fondazione Prada.' },
    ],
    universities: ['Bocconi', 'Politecnico di Milano', 'Università Statale', 'IED', 'NABA', 'Istituto Marangoni'],
  },
  {
    slug: 'paris',
    name: 'Paris',
    country: 'France',
    intro:
      "Paris is famously tough for housing — small flats, high prices, and paperwork that rewards anyone who can move fast with the right people. Sharing is the sane way to live centrally, which makes who you share with the single biggest factor in whether the city feels generous or exhausting.",
    scene:
      'With the Sorbonne, the grandes écoles, art and fashion schools, and a vast international student body, Paris packs an enormous range of lifestyles into very tight square metres. In small flats, compatibility on noise, guests, and cleanliness isn\'t a nicety — it\'s survival.',
    avgRoomRent: '€700–€1,100 / month',
    bestFor: 'Students, art and fashion creatives, young professionals',
    neighborhoods: [
      { name: 'Le Marais', note: 'Central, lively, and creative — always in demand.' },
      { name: 'Belleville & Ménilmontant', note: 'Arty, diverse, and more affordable for sharers.' },
      { name: 'Latin Quarter', note: 'Classic student Paris around the Sorbonne.' },
      { name: 'Canal Saint-Martin', note: 'Young, social, and design-conscious.' },
    ],
    universities: ['Sorbonne', 'Sciences Po', 'PSL', 'ESSEC', 'Parsons Paris', 'Institut Français de la Mode'],
  },
  {
    slug: 'berlin',
    name: 'Berlin',
    country: 'Germany',
    intro:
      "Berlin's WG (Wohngemeinschaft) culture makes shared living the default, not the exception — but the flip side is brutal competition for every good room, often decided by a casting-style viewing. Standing out matters, and so does finding flatmates whose vibe genuinely fits yours.",
    scene:
      'Artists, founders, students, and creatives from all over the world land in Berlin every month, and the city\'s flatshares are as varied as its scenes. The WG-casting ritual exists precisely because people here take compatibility seriously — match on lifestyle first and the room follows.',
    avgRoomRent: '€500–€800 / month',
    bestFor: 'Artists, founders, students, and creatives',
    neighborhoods: [
      { name: 'Neukölln', note: 'Young, international, and endlessly social — sharer central.' },
      { name: 'Kreuzberg', note: 'Iconic, creative, and always in demand.' },
      { name: 'Friedrichshain', note: 'Nightlife and students, east-side energy.' },
      { name: 'Prenzlauer Berg', note: 'Calmer and leafier, popular with creative professionals.' },
    ],
    universities: ['Humboldt', 'Freie Universität', 'TU Berlin', 'UdK', 'ESMT'],
  },
  {
    slug: 'amsterdam',
    name: 'Amsterdam',
    country: 'Netherlands',
    intro:
      "Amsterdam has one of Europe's tightest housing markets, and rooms here are scarce enough that scams and rushed decisions are common. Sharing is almost mandatory for newcomers — which makes a trustworthy, compatible flatmate not just nicer, but a genuine safeguard.",
    scene:
      'A huge international student population, a strong startup scene, and a creative class drawn to the canals keep Amsterdam in constant motion. With rooms this hard to find, people often settle for the first yes — matching properly upfront is how you avoid regretting it.',
    avgRoomRent: '€650–€1,000 / month',
    bestFor: 'International students, startup folks, and creatives',
    neighborhoods: [
      { name: 'De Pijp', note: 'Buzzy, central, and beloved by young internationals.' },
      { name: 'Oost', note: 'Diverse, increasingly popular, and better value.' },
      { name: 'West (Jordaan-adjacent)', note: 'Charming and social, close to the centre.' },
      { name: 'Noord', note: 'Creative and up-and-coming across the IJ.' },
    ],
    universities: ['University of Amsterdam', 'VU Amsterdam', 'Amsterdam UAS', 'Gerrit Rietveld Academie'],
  },
  {
    slug: 'vienna',
    name: 'Vienna',
    country: 'Austria',
    intro:
      "Vienna pairs a high quality of life with relatively sane rents for a capital, which makes it a favourite for international students — and keeps its flatshare market steady and social. The rooms are findable; the win is matching with flatmates who share your sense of a calm, well-run home.",
    scene:
      'With large public universities and a strong music, design, and research community, Vienna draws a studious, international crowd that values a tidy, considerate household. It\'s a city where compatibility on cleanliness and quiet hours tends to matter as much as location.',
    avgRoomRent: '€400–€650 / month',
    bestFor: 'International students, researchers, and musicians',
    neighborhoods: [
      { name: 'Neubau (7th)', note: 'Creative, central, and full of cafés — top pick for sharers.' },
      { name: 'Leopoldstadt (2nd)', note: 'Close to the centre and increasingly popular with students.' },
      { name: 'Favoriten (10th)', note: 'Affordable and well-connected, a budget favourite.' },
      { name: 'Josefstadt (8th)', note: 'Elegant, quiet, and handy for the universities.' },
    ],
    universities: ['University of Vienna', 'TU Wien', 'WU Vienna', 'University of Applied Arts', 'mdw'],
  },
  {
    slug: 'london',
    name: 'London',
    country: 'United Kingdom',
    intro:
      "London is vast, expensive, and fast — and sharing isn't optional for most newcomers, it's the only way in. With rents this high and commutes this long, the right flatmates in the right zone make the difference between London feeling like home and feeling like a transaction.",
    scene:
      "From world-leading universities to finance, fashion, and a bottomless creative scene, London pulls in ambitious people on every kind of schedule. In a city this stretched out, matching on lifestyle and location together — not just one or the other — is what keeps a flatshare working.",
    avgRoomRent: '£800–£1,200 / month',
    bestFor: 'Students, young professionals, and creatives',
    neighborhoods: [
      { name: 'Hackney & Dalston', note: 'Young, creative, and social — east London sharer heartland.' },
      { name: 'Peckham', note: 'Arty and lively south of the river, better value.' },
      { name: 'Camden & Kentish Town', note: 'Central, musical, and well-connected.' },
      { name: 'Clapham', note: 'A long-standing favourite for young professional sharers.' },
    ],
    universities: ['UCL', 'King’s College London', 'Imperial', 'LSE', 'Central Saint Martins', 'LCF'],
  },
];

export function getCity(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}
