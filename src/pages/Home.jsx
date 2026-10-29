import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import CallToAction from '../components/CallToAction';
import ProjectCard from '../components/ProjectCard';
import { ButtonLink, Eyebrow, Section, SectionHeading } from '../components/ui';
import { projects } from '../data/projects';
import { foundingOffer, packages } from '../data/offer';

const featured = projects.filter((project) => project.featured);

const audiences = [
  {
    title: 'Grassroots football clubs',
    body: 'Fixtures, results, team pages and registrations in one place, easy enough for volunteers to keep up to date.',
    to: '/clubs',
    cta: 'See club packages',
  },
  {
    title: 'Local small businesses',
    body: 'A clear, fast website that tells people what you do and how to get in touch. Tell me what you need and I will give you a fixed price in writing.',
    to: '/contact',
    cta: 'Book a free chat',
  },
];

const Home = () => (
  <>
    <Section className="pt-20 sm:pt-28">
      <Eyebrow className="mb-6">Falkirk · Forth Valley</Eyebrow>
      <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
        Websites for grassroots clubs and small businesses.
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-gray-600 sm:text-xl dark:text-gray-300">
        I'm Mark, a software developer in Falkirk. I build websites at a fixed price, so you know
        exactly what you're getting and what it costs before we start.
      </p>
      <div className="mt-10 flex flex-wrap gap-4">
        <ButtonLink to="/contact">Book a free 30-minute chat</ButtonLink>
        <ButtonLink to="/clubs" variant="secondary">
          See club packages
        </ButtonLink>
      </div>
    </Section>

    <Section className="pt-0 sm:pt-0">
      <div className="grid gap-6 md:grid-cols-2">
        {audiences.map((item) => (
          <div
            key={item.title}
            className="flex flex-col rounded-xl border border-ink/10 p-6 sm:p-8 dark:border-paper/10"
          >
            <h2 className="text-xl font-bold">{item.title}</h2>
            <p className="mt-3 flex-1 text-gray-600 dark:text-gray-300">{item.body}</p>
            <Link
              to={item.to}
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-amber-dot hover:underline dark:text-amber-bright"
            >
              {item.cta} <FiArrowRight aria-hidden="true" />
            </Link>
          </div>
        ))}
      </div>
    </Section>

    <div className="bg-white dark:bg-gray-800/30">
      <Section>
        <SectionHeading
          eyebrow="Recent work"
          title="Built for grassroots football"
          intro="Two projects I've built for the grassroots game, so you can see the kind of thing I make."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} large />
          ))}
        </div>
        <Link
          to="/portfolio"
          className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-amber-dot hover:underline dark:text-amber-bright"
        >
          See all my work <FiArrowRight aria-hidden="true" />
        </Link>
      </Section>
    </div>

    <Section>
      <SectionHeading
        eyebrow="Club packages"
        title="Three clear packages. One fixed price."
        intro="No hourly meter running. Pick the package that fits your club, and add extras only if you need them."
      />
      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        {packages.map((pkg) => (
          <Link
            key={pkg.id}
            to={`/clubs#${pkg.id}`}
            className="rounded-xl border border-ink/10 p-6 transition-colors hover:border-pitch dark:border-paper/10 dark:hover:border-paper/40"
          >
            <p className="font-club text-lg font-extrabold">{pkg.name}</p>
            <p className="mt-2 font-club text-3xl font-extrabold">{pkg.price}</p>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Ready in {pkg.readyIn}</p>
          </Link>
        ))}
      </div>
      <p className="mt-6 rounded-lg bg-pitch px-5 py-4 text-sm text-paper">
        <strong>{foundingOffer.title}:</strong> {foundingOffer.body}
      </p>
    </Section>

    <CallToAction />
  </>
);

export default Home;
