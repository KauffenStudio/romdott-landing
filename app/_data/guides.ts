export type Block =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'ol'; items: string[] };

export type Guide = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  excerpt: string;
  datePublished: string;
  dateModified: string;
  readingTime: string;
  category: string;
  blocks: Block[];
  related: string[];
};

export const guides: Guide[] = [
  {
    slug: 'how-to-find-a-compatible-roommate-in-europe',
    title: 'How to Find a Compatible Roommate in Europe (2026 Guide)',
    shortTitle: 'Finding a compatible roommate',
    description:
      'A practical, step-by-step guide to finding a roommate in Europe you’ll actually enjoy living with — what compatibility really means, where to look, and how to avoid the common traps.',
    excerpt:
      'Where to look, what compatibility actually means, and how to avoid the mistakes that turn a good flatshare into a bad one.',
    datePublished: '2026-06-20',
    dateModified: '2026-06-20',
    readingTime: '8 min read',
    category: 'Getting started',
    blocks: [
      { type: 'p', text: 'Finding a place to live in a European city is hard. Finding the right people to live with is harder — and far more important. A beautiful flat with the wrong flatmates becomes somewhere you avoid; an ordinary flat with the right ones becomes home. Yet almost every housing platform is built around the room, not the people. This guide flips that around.' },
      { type: 'p', text: 'Below is a practical playbook for finding a compatible roommate anywhere in Europe — whether you’re an Erasmus student landing in Barcelona, a model heading to Milan for the season, or a remote worker setting up in Lisbon.' },

      { type: 'h2', text: 'What “compatibility” actually means' },
      { type: 'p', text: 'People say they want a “chill, clean, friendly” flatmate, but those words mean different things to different people. Compatibility isn’t about finding someone identical to you — it’s about aligning on the handful of things that cause daily friction when they don’t match. In practice, that comes down to a few concrete dimensions:' },
      { type: 'ul', items: [
        'Sleep schedule — early riser vs night owl is the single most underrated source of flatshare tension.',
        'Cleanliness — not just how tidy you are, but how quickly mess bothers you and whose job it is to fix it.',
        'Guests — partners staying over, friends visiting, parties: how often, and how much notice.',
        'Noise and shared space — calls, music, cooking smells, and whether the living room is social or quiet.',
        'Dealbreakers — smoking, pets, diet in shared kitchens, and anything you simply won’t compromise on.',
      ]},
      { type: 'p', text: 'If you align on these five, you can be very different people in every other way and still live together happily. If you clash on even two of them, no amount of “we got on great at the viewing” will save you.' },

      { type: 'h2', text: 'Where people look for roommates in Europe' },
      { type: 'p', text: 'Each option has trade-offs. Knowing them saves you weeks.' },
      { type: 'h3', text: 'Facebook groups and WhatsApp chats' },
      { type: 'p', text: 'Fast and free, but a free-for-all. Posts disappear in hours, there’s rarely a real profile behind a name, and scams are common. You’re judging a future flatmate from a single photo and a one-line message — almost no signal on compatibility.' },
      { type: 'h3', text: 'Listing sites (Idealista, Spotahome, HousingAnywhere, etc.)' },
      { type: 'p', text: 'Great for finding the flat itself, especially across borders. But they’re built around the property, not the people. You’ll learn the square metres and the deposit — not whether your future flatmate sleeps at 2am or hosts dinner parties on Tuesdays.' },
      { type: 'h3', text: 'University and agency housing' },
      { type: 'p', text: 'Convenient and often safer, but you rarely get a say in who you live with. Model apartments and student halls assign rooms by availability, not fit — which is exactly why so many people end up with mismatched flatmates.' },
      { type: 'h3', text: 'Compatibility-first matching' },
      { type: 'p', text: 'The newer approach — and the one Roomdott is built on — starts with the person, not the property. You answer a short lifestyle quiz, get scored against other people moving to the same city, and only swap contact details on a mutual match. It’s slower than firing off ten DMs, but it solves the part that actually determines whether you’ll be happy.' },

      { type: 'h2', text: 'A step-by-step approach' },
      { type: 'ol', items: [
        'Get honest about your own habits first. You can’t match well if you describe an idealised version of yourself. Are you actually tidy, or do you mean well?',
        'Write down your three real dealbreakers. Not preferences — the things that would genuinely make you move out.',
        'Start early. The best matches and the best rooms both go to people who aren’t panicking two weeks before move-in.',
        'Match on people before you commit to a place. It’s far easier to find a flat together with a compatible person than to inherit strangers in a flat you already signed for.',
        'Have a real conversation before saying yes. Ask about a normal weekday and a normal weekend. Listen for mismatches, not just good vibes.',
        'Protect yourself. Never pay a deposit before seeing the place (or a verified video), and keep contact on platforms with moderation until you trust someone.',
      ]},

      { type: 'h2', text: 'Questions that reveal compatibility fast' },
      { type: 'p', text: 'A pleasant chat tells you someone is nice. These questions tell you whether you can live together:' },
      { type: 'ul', items: [
        '“Walk me through a normal weekday for you — when do you wake up, when do you sleep?”',
        '“How often do you have people over, and would you give a heads-up?”',
        '“What does ‘clean enough’ look like to you in the kitchen?”',
        '“What’s the last flatmate situation that didn’t work, and why?”',
        '“Is there anything you absolutely can’t live with?”',
      ]},

      { type: 'h2', text: 'The bottom line' },
      { type: 'p', text: 'The room is temporary; the daily experience of living with someone is what you actually remember. Spend your energy on compatibility — sleep, cleanliness, guests, noise, dealbreakers — and the rest tends to work itself out. That’s the whole idea behind Roomdott: match on how people actually live, then find the flat together.' },
    ],
    related: ['roommate-red-flags-warning-signs', 'roommate-compatibility-checklist'],
  },

  {
    slug: 'roommate-red-flags-warning-signs',
    title: 'Roommate Red Flags: 11 Warning Signs Before You Move In',
    shortTitle: 'Roommate red flags',
    description:
      'The warning signs to watch for before signing a lease or sending a deposit — from scam patterns to subtle compatibility red flags that predict a miserable flatshare.',
    excerpt: 'From outright scams to subtle compatibility mismatches — the signals worth walking away from.',
    datePublished: '2026-06-20',
    dateModified: '2026-06-20',
    readingTime: '7 min read',
    category: 'Safety',
    blocks: [
      { type: 'p', text: 'Most bad flatshares were predictable. The warning signs were there at the viewing or in the first few messages — they just got ignored in the rush to lock something down. Here are the red flags worth slowing down for, split into safety red flags (which can cost you money) and compatibility red flags (which cost you your peace of mind).' },

      { type: 'h2', text: 'Safety red flags: protect your money' },
      { type: 'h3', text: '1. They want a deposit before you’ve seen the place' },
      { type: 'p', text: 'The classic scam. A too-good listing, a “landlord travelling abroad,” and an urgent request to wire a deposit to hold the room. Never pay before viewing in person or over a live video call. If they can’t do either, walk away.' },
      { type: 'h3', text: '2. The price is suspiciously low' },
      { type: 'p', text: 'A central, photogenic room far below market rate is bait. Scammers price to trigger urgency. Know the going rate in the city and treat outliers with suspicion.' },
      { type: 'h3', text: '3. They refuse a contract' },
      { type: 'p', text: 'No written agreement means no protection. A flatmate or landlord who resists putting anything in writing is keeping their options open at your expense.' },
      { type: 'h3', text: '4. Everything is rushed' },
      { type: 'p', text: 'Pressure — “three other people want it, decide tonight” — is a tactic. Real situations can wait for a viewing and a conversation. Manufactured urgency is a reason to slow down, not speed up.' },
      { type: 'h3', text: '5. No verifiable identity' },
      { type: 'p', text: 'No real profile, no social presence, vague answers about who actually lives there. You’re about to share a home and money — you’re allowed to know who with.' },

      { type: 'h2', text: 'Compatibility red flags: protect your peace' },
      { type: 'h3', text: '6. They’re vague about their daily routine' },
      { type: 'p', text: 'When you ask what a normal week looks like and get a non-answer, it’s often because the honest answer would put you off. Push gently; the dodge is the data.' },
      { type: 'h3', text: '7. They badmouth every previous flatmate' },
      { type: 'p', text: 'If every past housemate was “crazy” or “dirty” or “impossible,” the common factor is sitting in front of you. One bad experience is normal; a pattern is a warning.' },
      { type: 'h3', text: '8. Different clocks, brushed aside' },
      { type: 'p', text: 'You’re up at 7, they’re up at noon and out till 4. That can work — but only if both of you take it seriously. “It’ll be fine” without a plan for quiet hours rarely is.' },
      { type: 'h3', text: '9. Mismatched cleanliness — and no system' },
      { type: 'p', text: 'It’s not about finding someone equally tidy; it’s about agreeing how the shared space gets maintained. If they shrug at “how do we handle cleaning?”, expect to become the unpaid cleaner.' },
      { type: 'h3', text: '10. Money vagueness' },
      { type: 'p', text: 'Evasiveness about how bills are split, when rent is paid, or who owes what is a preview of every future awkward conversation. Clarity now prevents resentment later.' },
      { type: 'h3', text: '11. The vibe is off and you can’t explain why' },
      { type: 'p', text: 'Sometimes everything checks out on paper and your gut still says no. After enough viewings, that instinct is pattern recognition, not paranoia. You don’t owe anyone a reason to keep looking.' },

      { type: 'h2', text: 'How to screen before it gets to this' },
      { type: 'p', text: 'The best defence is matching on compatibility before you ever discuss a specific room. When you start with sleep schedules, cleanliness, guests, and dealbreakers — and only exchange contact details on a mutual match — most of these red flags surface early, or never reach you at all. That’s the model Roomdott is built around: people first, room second.' },
    ],
    related: ['how-to-find-a-compatible-roommate-in-europe', 'roommate-compatibility-checklist'],
  },

  {
    slug: 'roommate-compatibility-checklist',
    title: 'The Ultimate Roommate Compatibility Checklist',
    shortTitle: 'Compatibility checklist',
    description:
      'A complete checklist of the questions and topics to cover before moving in with a roommate — lifestyle, money, space, and dealbreakers, all in one place.',
    excerpt: 'Every topic to cover before you move in together — lifestyle, money, space, and dealbreakers.',
    datePublished: '2026-06-20',
    dateModified: '2026-06-20',
    readingTime: '6 min read',
    category: 'Getting started',
    blocks: [
      { type: 'p', text: 'Use this checklist before you commit to living with someone — whether you found them through a friend, a listing, or a matching app. Work through it together over a coffee or a call. The goal isn’t to interrogate anyone; it’s to surface mismatches while they’re still cheap to discover.' },

      { type: 'h2', text: '1. Daily rhythm' },
      { type: 'ul', items: [
        'What time do you usually wake up and go to sleep — weekdays and weekends?',
        'Do you work or study from home? How often?',
        'Are you a “quiet evenings in” or “out most nights” person?',
        'How do you feel about noise — music, calls, TV — in shared areas?',
      ]},

      { type: 'h2', text: '2. Cleanliness and chores' },
      { type: 'ul', items: [
        'How tidy do you keep shared spaces day to day?',
        'How quickly does mess start to bother you?',
        'How should cleaning be divided — rota, app, or “whoever notices”?',
        'Are we splitting the cost of shared cleaning supplies?',
      ]},

      { type: 'h2', text: '3. Guests and relationships' },
      { type: 'ul', items: [
        'How often do you have friends over?',
        'Would a partner be staying regularly — and is that a shared cost or just a presence?',
        'Are parties or gatherings on the table, and with how much notice?',
        'What’s the expectation around overnight guests you don’t know?',
      ]},

      { type: 'h2', text: '4. Money' },
      { type: 'ul', items: [
        'How is rent paid, and on what date?',
        'How do we split bills — evenly, by room size, or by usage?',
        'How do we handle shared groceries and household items?',
        'What happens if someone’s late on their share, or wants to move out early?',
      ]},

      { type: 'h2', text: '5. Shared space and food' },
      { type: 'ul', items: [
        'Do we share food and cooking, or keep things separate?',
        'Any dietary needs that affect the shared kitchen?',
        'How do we handle the fridge, shelves, and shared cupboards?',
        'Is the living room a social space or a calm one — or both, at different times?',
      ]},

      { type: 'h2', text: '6. Dealbreakers' },
      { type: 'ul', items: [
        'Smoking or vaping — indoors, on the balcony, or not at all?',
        'Pets — existing, or planning to get one?',
        'Any allergies or hard limits the household needs to respect?',
        'Is there anything you simply will not live with?',
      ]},

      { type: 'h2', text: '7. The honesty check' },
      { type: 'p', text: 'Finally, turn the checklist on yourself. The most common reason flatshares fail isn’t a bad flatmate — it’s two people who both described an idealised version of themselves. Answer every question above about your own habits, honestly, before you ask anyone else. A match that’s built on who you really are will outlast one built on who you hoped to be.' },
      { type: 'p', text: 'Want this scored automatically against other people moving to your city? That’s exactly what Roomdott’s compatibility quiz does — turning this checklist into a match, not a guess.' },
    ],
    related: ['how-to-find-a-compatible-roommate-in-europe', 'how-to-split-rent-and-bills-fairly'],
  },

  {
    slug: 'how-to-split-rent-and-bills-fairly',
    title: 'How to Split Rent and Bills Fairly With Roommates',
    shortTitle: 'Splitting rent & bills fairly',
    description:
      'Fair ways to divide rent, utilities, and shared costs in a flatshare — including when to split evenly, when to split by room, and how to avoid money fights.',
    excerpt: 'When to split evenly, when to split by room size, and how to keep money from poisoning the flat.',
    datePublished: '2026-06-20',
    dateModified: '2026-06-20',
    readingTime: '6 min read',
    category: 'Living together',
    blocks: [
      { type: 'p', text: 'Money is the number-one thing flatmates fall out over — not because anyone is unreasonable, but because nobody agreed the rules upfront. Sort this out in the first week and you’ll avoid most of the resentment that quietly builds over a year. Here’s how to split things fairly.' },

      { type: 'h2', text: 'Rent: even vs by room size' },
      { type: 'p', text: 'There are two fair models, and the right one depends on the flat.' },
      { type: 'h3', text: 'Split evenly' },
      { type: 'p', text: 'Simplest and best when bedrooms are roughly equal. Everyone pays the same, no spreadsheets required. If the rooms are genuinely similar, don’t overthink it.' },
      { type: 'h3', text: 'Split by room size and features' },
      { type: 'p', text: 'Fairer when rooms differ a lot — a big room with an ensuite and a balcony shouldn’t cost the same as a box room with no window. A common method: estimate each room’s share of the total value (size, light, private bathroom, storage) and divide rent in those proportions. Agree it openly, together, before anyone moves in.' },

      { type: 'h2', text: 'Utilities and bills' },
      { type: 'p', text: 'For electricity, gas, water, and internet, even splits are usually fairest and least dramatic — trying to meter individual usage creates more conflict than it solves. The exceptions worth discussing:' },
      { type: 'ul', items: [
        'Someone who works from home all day every day, when others are out — a small adjustment can feel fairer to everyone.',
        'A partner who effectively lives in but isn’t on the lease — agree whether they contribute to bills.',
        'Wildly different heating habits in winter — set a shared norm rather than fighting over the thermostat.',
      ]},

      { type: 'h2', text: 'Shared household costs' },
      { type: 'p', text: 'Cleaning supplies, toilet paper, bin bags, dish soap, the occasional shared item — these are small but add up, and they’re where “I always buy it” resentment grows. Two clean options:' },
      { type: 'ol', items: [
        'A small shared kitty everyone tops up monthly for household basics.',
        'A rotating “whoever runs out buys the next one” system, tracked in a shared note so it stays even over time.',
      ]},

      { type: 'h2', text: 'Groceries and food' },
      { type: 'p', text: 'Decide early whether you’re a “share everything and cook together” house or a “label your own shelf” house. Both work; the misery comes from a mismatch — one person assuming it’s communal while another counts every egg. Say it out loud in week one.' },

      { type: 'h2', text: 'Tools that prevent fights' },
      { type: 'p', text: 'Use a shared expense app (Splitwise, Tricount, or similar) so nobody has to be the accountant or the nag. Logging shared costs as they happen removes the awkward “you owe me” conversations and keeps everything transparent.' },

      { type: 'h2', text: 'Put it in writing' },
      { type: 'p', text: 'A simple shared document — who pays what, on which date, and how bills are divided — protects every flatmate. It’s not about distrust; it’s about removing ambiguity so a forgotten payment is an honest mistake, not a betrayal. The flatshares that handle money best are the ones that treated it like a normal agreement from day one.' },
      { type: 'p', text: 'The easiest way to avoid money tension entirely is to live with people whose budget and habits matched yours in the first place — which is exactly what compatibility matching is for.' },
    ],
    related: ['roommate-compatibility-checklist', 'how-to-find-a-compatible-roommate-in-europe'],
  },

  {
    slug: 'erasmus-housing-guide',
    title: 'Erasmus Housing Guide: Finding Roommates Abroad',
    shortTitle: 'Erasmus housing guide',
    description:
      'How to find housing and compatible roommates for your Erasmus or exchange semester in Europe — timelines, where to look, scams to avoid, and how to land with the right people.',
    excerpt: 'Timelines, where to look, scams to dodge, and how to arrive with people who’ll make the semester.',
    datePublished: '2026-06-20',
    dateModified: '2026-06-20',
    readingTime: '8 min read',
    category: 'Students',
    blocks: [
      { type: 'p', text: 'Your Erasmus semester is short and unrepeatable, and where you live — and with whom — shapes the whole experience. This guide walks through the timeline, the options, the scams, and how to make sure you land with people who make the months abroad better, not stressful.' },

      { type: 'h2', text: 'Start with the timeline' },
      { type: 'p', text: 'Erasmus housing rewards the early. Demand spikes around the academic calendar, so the people who sort things in good time get both better rooms and better flatmates. A rough plan:' },
      { type: 'ul', items: [
        'As soon as your placement is confirmed: research neighbourhoods and typical rents in your host city.',
        '2–3 months before: start matching with potential flatmates and shortlisting areas.',
        '1–2 months before: lock in a room or a group to flat-hunt with on arrival.',
        'On arrival: view in person before signing anything long-term if you possibly can.',
      ]},

      { type: 'h2', text: 'Your housing options' },
      { type: 'h3', text: 'Student halls / university residences' },
      { type: 'p', text: 'Easiest and safest, and a fast way to meet people — but places are limited, fill early, and you don’t choose your flatmates. Apply the moment applications open.' },
      { type: 'h3', text: 'Private shared flats' },
      { type: 'p', text: 'The classic Erasmus experience: more freedom, often better value, and you can choose who you live with — if you put in the work to find compatible people rather than grabbing the first room going.' },
      { type: 'h3', text: 'Temporary first, then settle' },
      { type: 'p', text: 'A smart play: book a short stay (hostel, sublet, or a couple of weeks in a room) for arrival, then find your real flat once you can view in person and meet people. It costs a little more upfront and saves you from signing for a room you’ve never seen.' },

      { type: 'h2', text: 'Avoiding Erasmus housing scams' },
      { type: 'p', text: 'International students are prime targets precisely because they’re booking remotely, under time pressure, in an unfamiliar city. The rules that keep you safe:' },
      { type: 'ul', items: [
        'Never pay a deposit before viewing in person or over live video — photos and floor plans aren’t proof.',
        'Be suspicious of prices well below the local norm; they’re bait.',
        'Insist on a written contract, even for a single semester.',
        'Don’t let manufactured urgency rush you into a wire transfer.',
        'Keep early conversations on platforms with real profiles and moderation.',
      ]},

      { type: 'h2', text: 'Finding flatmates who make the semester' },
      { type: 'p', text: 'The best Erasmus memories almost always involve the people you lived with. The worst stories involve flatmates you clashed with for four months you couldn’t get back. With a stay this short, compatibility isn’t a luxury — it’s the whole game. Match on the essentials:' },
      { type: 'ul', items: [
        'Schedule — are they here to study hard, party hard, or both, and does that fit you?',
        'Cleanliness — agree how the flat gets kept before you’re living in it.',
        'Social style — do you want a tight flat-family or independent housemates?',
        'Budget — aligned spending avoids the most common source of tension.',
      ]},

      { type: 'h2', text: 'How Roomdott helps Erasmus students' },
      { type: 'p', text: 'Roomdott was built for exactly this moment. You complete a short lifestyle quiz, get matched with other students arriving in your host city for the same semester, and only swap Instagram and WhatsApp on a mutual match — so you build your group before you land, safely. It’s free during beta, GDPR-compliant, and live across Europe’s biggest student hubs. Join the waitlist and we’ll tell you the moment it opens in your city.' },
    ],
    related: ['how-to-find-a-compatible-roommate-in-europe', 'roommate-red-flags-warning-signs'],
  },
];

export function getGuide(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}
