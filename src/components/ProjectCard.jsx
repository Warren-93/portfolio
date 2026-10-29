import { FiArrowUpRight } from 'react-icons/fi';
import { Mark } from './Logo';

const Thumbnail = ({ project }) =>
  project.image ? (
    <img
      src={project.image}
      alt={`Screenshot of ${project.title}`}
      loading="lazy"
      className={`h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] ${
        project.imagePosition === 'top' ? 'object-top' : 'object-center'
      }`}
    />
  ) : (
    <div className="flex h-full w-full items-center justify-center bg-ink text-paper">
      <Mark className="text-4xl opacity-80" />
    </div>
  );

const ProjectCard = ({ project, large = false }) => (
  <article className="group flex flex-col overflow-hidden rounded-xl border border-ink/10 bg-white dark:border-paper/10 dark:bg-gray-800/50">
    <div className="relative aspect-video w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
      <Thumbnail project={project} />
      {project.status && (
        <span className="absolute top-3 right-3 rounded-full bg-ink px-3 py-1 font-mono text-xs font-medium text-amber-bright">
          {project.status}
        </span>
      )}
    </div>
    <div className={`flex flex-1 flex-col gap-3 ${large ? 'p-6 sm:p-8' : 'p-5'}`}>
      <div>
        <h3 className={`font-bold ${large ? 'text-2xl' : 'text-lg'}`}>{project.title}</h3>
        {project.subtitle && (
          <p className="text-sm text-gray-500 dark:text-gray-400">{project.subtitle}</p>
        )}
      </div>
      <p className="flex-1 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
        {project.description}
      </p>
      {project.tags && (
        <ul className="flex flex-wrap gap-2" aria-label="Built with">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded bg-ink/5 px-2 py-0.5 font-mono text-xs text-gray-700 dark:bg-paper/10 dark:text-gray-300"
            >
              {tag}
            </li>
          ))}
        </ul>
      )}
      <div className="flex flex-wrap gap-x-5 gap-y-2 pt-2">
        {project.links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm font-semibold text-amber-dot hover:underline dark:text-amber-bright"
          >
            {link.label}
            <FiArrowUpRight aria-hidden="true" />
          </a>
        ))}
      </div>
    </div>
  </article>
);

export default ProjectCard;
