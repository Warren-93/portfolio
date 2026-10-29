// Single source for the business offer. Prices and package names must match
// the Warren Digital knowledge file exactly, so change them here and nowhere else.

export const contact = {
  // Placeholders until Mark adds his business email and phone number.
  // Leave as null to show "coming soon" text; set a string to turn on the link.
  email: null,
  phone: null,
  linkedin: 'https://www.linkedin.com/in/mark-warren93',
  github: 'https://github.com/Warren-93',
  location: 'Falkirk, Scotland',
};

export const packages = [
  {
    id: 'kick-off',
    name: 'Kick Off',
    price: '£595',
    readyIn: '2 weeks',
    summary: 'A smart, simple website to get your club online.',
    includes: [
      'Up to 5 pages',
      'Works well on phones',
      'Your club colours',
      'Contact form',
      'Basic Google setup',
    ],
  },
  {
    id: 'matchday',
    name: 'Matchday',
    price: '£995',
    readyIn: '3 weeks',
    summary: 'Everything in Kick Off, plus a home for every team.',
    includes: [
      'Everything in Kick Off',
      'A page for each team',
      'Fixtures, results and league tables',
      'A news page your volunteers can update',
    ],
    popular: true,
  },
  {
    id: 'club-hub',
    name: 'Club Hub',
    price: '£1,750',
    readyIn: '4–5 weeks',
    summary: 'Everything in Matchday, plus the admin side of running a club.',
    includes: [
      'Everything in Matchday',
      'Online player registration',
      'Members and subs tracker',
      'Admin login',
      'Volunteer handover',
    ],
  },
];

export const carePlan = {
  name: 'Care Plan',
  price: '£25',
  per: 'month',
  includes: ['Hosting', 'Security updates', 'Backups', 'Up to 1 hour of small changes'],
  notice: "30 days' notice to cancel.",
};

export const addOns = [
  { name: 'Extra team page', price: '£50' },
  { name: 'Sponsor showcase', price: '£75' },
  { name: 'Club email setup', price: '£75' },
  { name: 'Extra work', price: '£30/hour' },
];

export const foundingOffer = {
  title: 'Founding club offer',
  body: 'The first 3 clubs get 20% off any package, in exchange for a testimonial and permission to show your site in my portfolio.',
};

export const steps = [
  { title: 'Free 30-minute chat', body: 'Tell me about your club and what you need. No obligation.' },
  { title: 'Written fixed quote', body: 'You get a clear price in writing, so there are no surprises.' },
  { title: '50% deposit', body: 'Half up front to book your slot and get started.' },
  { title: 'Preview and changes', body: 'You see the site before it goes live, with 2 rounds of changes.' },
  { title: '50% on launch', body: 'The rest is paid when your site goes live.' },
];

export const ownership =
  "Your club owns its domain (registered in the club's name), its content and its photos. If you ever move on, everything comes with you.";
