import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';

const Portfolio = () => (
  <div className="mx-auto max-w-5xl px-6 py-16">
    <h1 className="mb-10 text-center text-3xl font-semibold text-cyan-900 dark:text-cyan-100">
      Portfolio
    </h1>
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  </div>
);

export default Portfolio;
