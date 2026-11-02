import { Link } from 'react-router-dom';

// Shared button styles. Primary is ink on light and amber on dark, so text
// always has strong contrast; amber on light is kept for accents, not body text.
const variants = {
  primary:
    'bg-ink text-paper hover:bg-gray-700 dark:bg-amber-bright dark:text-ink dark:hover:bg-amber-deep',
  secondary:
    'border border-ink/20 text-ink hover:border-ink hover:bg-ink/5 dark:border-paper/30 dark:text-paper dark:hover:border-paper dark:hover:bg-paper/10',
  // For use on ink backgrounds only, where bright amber is on-brand.
  amber: 'bg-amber-bright text-ink hover:bg-amber-deep',
};

const base =
  'inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-deep';

export const ButtonLink = ({ to, href, variant = 'primary', className = '', children }) => {
  const classes = `${base} ${variants[variant]} ${className}`;
  if (href) {
    const external = href.startsWith('http');
    return (
      <a
        href={href}
        className={classes}
        {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
      >
        {children}
      </a>
    );
  }
  return (
    <Link to={to} className={classes}>
      {children}
    </Link>
  );
};

export const Eyebrow = ({ children, className = '' }) => (
  <p
    className={`font-mono text-xs font-medium tracking-widest text-amber-dot uppercase dark:text-amber-bright ${className}`}
  >
    {children}
  </p>
);

export const Section = ({ id, className = '', children }) => (
  <section id={id} className={`mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 ${className}`}>
    {children}
  </section>
);

export const SectionHeading = ({ eyebrow, title, intro, className = '' }) => (
  <div className={`max-w-2xl ${className}`}>
    {eyebrow && <Eyebrow className="mb-3">{eyebrow}</Eyebrow>}
    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
    {intro && <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">{intro}</p>}
  </div>
);
