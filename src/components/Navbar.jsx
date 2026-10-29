import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';
import { ButtonLink } from './ui';

const links = [
  { to: '/clubs', label: 'For clubs' },
  { to: '/portfolio', label: 'Work' },
  { to: '/about', label: 'About' },
];

const navLinkClasses = ({ isActive }) =>
  `text-sm font-medium transition-colors ${
    isActive
      ? 'text-ink underline decoration-amber-deep decoration-2 underline-offset-8 dark:text-paper dark:decoration-amber-bright'
      : 'text-gray-600 hover:text-ink dark:text-gray-300 dark:hover:text-paper'
  }`;

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/85 backdrop-blur dark:border-paper/10 dark:bg-ink/85">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link to="/" onClick={closeMenu} aria-label="warren.digital home" className="p-1">
          <Logo />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className={navLinkClasses}>
              {link.label}
            </NavLink>
          ))}
          <ThemeToggle />
          <ButtonLink to="/contact" className="py-2">
            Book a free chat
          </ButtonLink>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            className="rounded-md p-2 hover:bg-ink/5 dark:hover:bg-paper/10"
          >
            {menuOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="flex flex-col gap-5 border-t border-ink/10 px-4 py-5 md:hidden dark:border-paper/10">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} onClick={closeMenu} className={navLinkClasses}>
              {link.label}
            </NavLink>
          ))}
          <NavLink to="/contact" onClick={closeMenu} className={navLinkClasses}>
            Contact
          </NavLink>
        </div>
      )}
    </header>
  );
};

export default Navbar;
