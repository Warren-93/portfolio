const ProjectCard = ({ project }) => (
  <div className="flex flex-col overflow-hidden rounded-lg border border-cyan-100 bg-white shadow-sm transition-shadow hover:shadow-md dark:border-cyan-900 dark:bg-neutral-900">
    <div className="relative aspect-video w-full overflow-hidden bg-cyan-100 dark:bg-cyan-950">
      <img
        src={project.image}
        alt=""
        className={`h-full w-full object-cover ${
          project.imagePosition === 'top' ? 'object-top' : 'object-center'
        }`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
      <h3 className="absolute right-4 bottom-3 left-4 text-lg leading-tight font-semibold text-white drop-shadow-sm">
        {project.title}
      </h3>
      {project.comingSoon && (
        <span className="absolute top-3 right-3 rounded-full bg-cyan-600 px-3 py-1 text-xs font-semibold tracking-wide text-white uppercase">
          Coming Soon
        </span>
      )}
    </div>
    <div className="flex flex-1 flex-col gap-3 p-5">
      <p className="flex-1 text-sm text-neutral-600 dark:text-neutral-300">
        {project.description}
      </p>
      {!project.comingSoon && (
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
      )}
    </div>
  </div>
);

export default ProjectCard;
