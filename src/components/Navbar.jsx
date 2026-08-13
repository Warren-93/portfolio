import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiGithub, FiLinkedin, FiMenu, FiX } from 'react-icons/fi';
import ThemeToggle from './ThemeToggle';

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About Me' },
  { to: '/resume', label: 'Resume' },
  { to: '/portfolio', label: 'Portfolio' },
];

const navLinkClasses = ({ isActive }) =>
  `text-sm font-medium transition-colors ${
    isActive
      ? 'text-cyan-700 dark:text-cyan-300'
      : 'text-neutral-600 hover:text-cyan-700 dark:text-neutral-300 dark:hover:text-cyan-300'
  }`;

const SocialLinks = () => (
  <div className="flex items-center gap-4">
    <a
      href="https://www.linkedin.com/in/mark-warren93"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
    >
      <FiLinkedin className="h-5 w-5 text-cyan-700 transition-colors hover:text-cyan-900 dark:text-cyan-300 dark:hover:text-cyan-100" />
    </a>
    <a
      href="https://github.com/Warren-93"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="GitHub"
    >
      <FiGithub className="h-5 w-5 text-cyan-700 transition-colors hover:text-cyan-900 dark:text-cyan-300 dark:hover:text-cyan-100" />
    </a>
  </div>
);

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-cyan-100 bg-white/80 backdrop-blur dark:border-cyan-900 dark:bg-neutral-900/80">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <span className="text-lg font-semibold text-cyan-900 dark:text-cyan-100">
          MWarren93
        </span>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.end} className={navLinkClasses}>
              {link.label}
            </NavLink>
          ))}
          <SocialLinks />
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            className="rounded-md p-2 text-cyan-800 hover:bg-cyan-100 dark:text-cyan-300 dark:hover:bg-cyan-900/40"
          >
            {menuOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="flex flex-col gap-4 border-t border-cyan-100 px-6 py-4 md:hidden dark:border-cyan-900">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              onClick={closeMenu}
              className={navLinkClasses}
            >
              {link.label}
            </NavLink>
          ))}
          <SocialLinks />
        </div>
      )}
    </header>
  );
};

export default Navbar;
