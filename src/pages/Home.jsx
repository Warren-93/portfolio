import { FiArrowRight, FiDownload } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Availability from '../components/Availability';
import CallToAction from '../components/CallToAction';
import ProjectCard from '../components/ProjectCard';
import { ButtonLink, Eyebrow, Section, SectionHeading } from '../components/ui';
import { projects } from '../data/projects';
import { skills } from '../data/skills';

const featured = projects.filter((project) => project.featured);

const Home = () => (
  <>
    <Section className="pt-20 sm:pt-28">
      <Availability className="mb-8" />
      <Eyebrow className="mb-6">Software developer · Falkirk</Eyebrow>
      <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
        Hi, I'm Mark. I build web apps and the APIs behind them.
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-gray-600 sm:text-xl dark:text-gray-300">
        I work mostly with Java and Spring Boot on the back end and React on the front end. Lately
        I've been building tools for grassroots football.
      </p>
      <div className="mt-10 flex flex-wrap gap-4">
        <ButtonLink to="/portfolio">See my work</ButtonLink>
        <ButtonLink href="/resume/Resume.pdf" variant="secondary">
          <FiDownload aria-hidden="true" /> Download my CV
        </ButtonLink>
      </div>
      <ul className="mt-12 flex flex-wrap gap-3" aria-label="Skills">
        {skills.map((skill) => (
          <li
            key={skill}
            className="rounded-md border border-ink/10 px-3 py-1.5 font-mono text-sm dark:border-paper/15"
          >
            {skill}
          </li>
        ))}
      </ul>
    </Section>

    <div className="bg-white dark:bg-gray-800/30">
      <Section>
        <SectionHeading
          eyebrow="Featured work"
          title="Built for grassroots football"
          intro="Two projects I've built for the grassroots game, from the API up."
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

    <CallToAction />
  </>
);

export default Home;
