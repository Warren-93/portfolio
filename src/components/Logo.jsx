// The primary <W/> warren.digital mark, set in JetBrains Mono as the brand
// sheet specifies (800 for the mark, 500 for the wordmark). The outlined SVG
// from the logo pack can replace this later without changing any callers.
export const Mark = ({ className = '' }) => (
  <span
    aria-hidden="true"
    className={`font-mono font-extrabold leading-none tracking-tight ${className}`}
  >
    <span>&lt;</span>
    <span className="text-amber-deep dark:text-amber-bright">W</span>
    <span>/&gt;</span>
  </span>
);

export const Wordmark = ({ className = '' }) => (
  <span className={`font-mono font-medium leading-none ${className}`}>
    warren<span className="text-amber-dot dark:text-amber-bright">.</span>digital
  </span>
);

const Logo = ({ className = '' }) => (
  <span className={`inline-flex items-center gap-3 ${className}`}>
    <Mark className="text-[28px]" />
    <Wordmark className="text-lg" />
    <span className="sr-only">warren.digital</span>
  </span>
);

export default Logo;
