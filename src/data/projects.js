// `featured` projects are the proof projects shown first, on the home page and
// at the top of the Work page. Projects without an `image` get a branded tile.
export const projects = [
  {
    id: 'denny-warriors-fc',
    title: 'Denny Warriors',
    subtitle: 'Club website and API',
    description:
      'Website for Denny Warriors Football Club, backed by a Spring Boot API that pulls in fixtures and league tables and stores them in MongoDB.',
    image: '/thumbnails/denny-warriors-fc.webp',
    tags: ['Spring Boot', 'MongoDB', 'React'],
    featured: true,
    links: [
      { label: 'View live site', href: 'https://denny-warriors-football-club.vercel.app/' },
      { label: 'View code', href: 'https://github.com/Warren-93/DennyWarriorsFootballClub' },
    ],
  },
  {
    id: 'pitchmate',
    title: 'Pitchmate',
    subtitle: 'Grassroots Football Friendly Hub',
    description:
      'Find, match and play grassroots football friendlies together. Built for the web and mobile.',
    image: '/thumbnails/pitchmate.webp',
    tags: ['Web', 'Mobile'],
    featured: true,
    status: 'In development',
    links: [
      { label: 'View live site', href: 'https://grassroots-football-friendly-hub-we.vercel.app/welcome' },
      { label: 'View code', href: 'https://github.com/Warren-93/GrassrootsFootballFriendlyHubWeb' },
    ],
  },
  {
    id: 'movies-api',
    title: 'Movies API',
    description:
      'React frontend with a Spring Boot backend, powered by the TMDB API. Browse movies by category, search titles, watch trailers and leave reviews.',
    tags: ['Spring Boot', 'React'],
    links: [
      { label: 'View live demo', href: 'https://movies-two-hazel.vercel.app/' },
      { label: 'View client code', href: 'https://github.com/Warren-93/movies-client' },
      { label: 'View API code', href: 'https://github.com/Warren-93/movies-api' },
    ],
  },
  {
    id: 'weather-app',
    title: 'Weather App',
    description: 'Simple weather app using WeatherAPI, with search by city.',
    image: '/thumbnails/weather-app.webp',
    imagePosition: 'top',
    tags: ['JavaScript'],
    links: [
      { label: 'View live demo', href: 'https://warren-93.github.io/weather-app-client/' },
      { label: 'View code', href: 'https://github.com/Warren-93/weather-app-client' },
    ],
  },
  {
    id: 'in-your-shoes',
    title: 'In Your Shoes',
    description:
      'Mental health app designed around a support group format, with an emoji mood tracker and journal.',
    tags: ['Mobile'],
    links: [{ label: 'View code', href: 'https://github.com/Warren-93/InYourShoes' }],
  },
];
