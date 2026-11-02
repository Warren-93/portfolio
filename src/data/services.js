// Content for the Services page. The football section follows the no-prices
// club flyer. Prices are deliberately left off the site: every job gets a
// written fixed quote after a free chat.

export const generalServices = [
  {
    title: 'Websites',
    body: 'A clear, fast website for your business or project that works well on phones and is easy to keep up to date.',
  },
  {
    title: 'Web apps',
    body: 'Booking tools, dashboards, member areas and other apps that do a job for you, built with React.',
  },
  {
    title: 'APIs and back ends',
    body: 'The behind-the-scenes systems that store your data and connect your services, built with Java and Spring Boot.',
  },
  {
    title: 'Fixes and improvements',
    body: 'Already have a site or app? I can tidy it up, speed it up or add the feature you need.',
  },
];

export const packages = [
  {
    id: 'kick-off',
    name: 'Kick Off',
    readyIn: '2 weeks',
    includes: ['Up to 5 pages', 'Works on phones', 'Your club colours', 'Contact form', 'Set up on Google'],
  },
  {
    id: 'matchday',
    name: 'Matchday',
    readyIn: '3 weeks',
    includes: [
      'Everything in Kick Off',
      'A page for each team',
      'Fixtures, results and league tables',
      'News page volunteers can update',
    ],
    popular: true,
  },
  {
    id: 'club-hub',
    name: 'Club Hub',
    readyIn: '4–5 weeks',
    includes: [
      'Everything in Matchday',
      'Online player registration',
      'Members and subs tracker',
      'Admin login',
      'Handover for volunteers',
    ],
  },
];

export const launchOffer = 'Special prices for the first 10 clubs only.';

export const clubSteps = [
  { title: 'Free chat', body: '30 minutes about what your club needs.' },
  { title: 'Fixed quote', body: 'In writing, so there are no surprises.' },
  { title: 'Preview', body: 'See your site and ask for 2 rounds of changes.' },
  { title: 'Go live', body: 'You own your domain, content and photos.' },
];

export const generalSteps = [
  { title: 'Free chat', body: '30 minutes about what you need.' },
  { title: 'Fixed quote', body: 'A clear price in writing before any work starts.' },
  { title: 'Preview', body: 'See the work in progress and ask for changes.' },
  { title: 'Launch', body: 'You own the code, domain and content.' },
];

export const aftercare =
  'Hosting, updates and small changes are available every month after launch, so your volunteers are never left on their own.';
