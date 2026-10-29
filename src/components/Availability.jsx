import { availability } from '../data/contact';

const Availability = ({ className = '' }) =>
  availability ? (
    <p
      className={`inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white px-4 py-1.5 text-sm font-medium dark:border-paper/15 dark:bg-gray-800/60 ${className}`}
    >
      <span aria-hidden="true" className="relative flex h-2.5 w-2.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-bright opacity-60 motion-reduce:animate-none" />
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-amber-deep dark:bg-amber-bright" />
      </span>
      {availability}
    </p>
  ) : null;

export default Availability;
