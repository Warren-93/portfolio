const ProjectCard = ({ project }) => (
  <div className="flex flex-col overflow-hidden rounded-lg border border-cyan-100 bg-white shadow-sm transition-shadow hover:shadow-md dark:border-cyan-900 dark:bg-neutral-900">
    <img src={project.image} alt="" className="h-40 w-full object-cover" />
    <div className="flex flex-1 flex-col gap-3 p-5">
      <h3 className="text-lg font-semibold text-cyan-900 dark:text-cyan-100">{project.title}</h3>
      <p className="flex-1 text-sm text-neutral-600 dark:text-neutral-300">
        {project.description}
      </p>
      <div className="flex flex-col gap-2 pt-2">
        {project.links.map((link, index) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`rounded-md px-4 py-2 text-center text-sm font-medium transition-colors ${
              index === 0
                ? 'bg-cyan-600 text-white hover:bg-cyan-700'
                : 'bg-cyan-900 text-white hover:bg-cyan-800 dark:bg-cyan-100 dark:text-cyan-900 dark:hover:bg-cyan-200'
            }`}
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  </div>
);

export default ProjectCard;
