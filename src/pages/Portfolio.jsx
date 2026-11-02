import CallToAction from '../components/CallToAction';
import ProjectCard from '../components/ProjectCard';
import { Section, SectionHeading } from '../components/ui';
import { projects } from '../data/projects';

const featured = projects.filter((project) => project.featured);
const other = projects.filter((project) => !project.featured);

const Portfolio = () => (
  <>
    <Section>
      <SectionHeading
        eyebrow="Work"
        title="Things I've built"
        intro="Real projects, with live sites and code you can look through."
      />
      <h2 className="mt-12 mb-6 font-mono text-sm font-medium text-gray-500 dark:text-gray-400">
        Grassroots football
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        {featured.map((project) => (
          <ProjectCard key={project.id} project={project} large />
        ))}
      </div>

      <h2 className="mt-16 mb-6 font-mono text-sm font-medium text-gray-500 dark:text-gray-400">
        Other projects
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {other.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
    <CallToAction />
  </>
);

export default Portfolio;
