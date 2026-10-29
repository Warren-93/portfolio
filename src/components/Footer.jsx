import { Link } from 'react-router-dom';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import Logo from './Logo';
import { contact } from '../data/offer';

const Footer = () => (
  <footer className="border-t border-ink/10 dark:border-paper/10">
    <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6 md:flex-row md:items-start md:justify-between">
      <div className="max-w-sm">
        <Logo />
        <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
          Fixed-price websites for grassroots football clubs and small businesses in Falkirk and
          Forth Valley.
        </p>
      </div>

      <nav aria-label="Footer" className="flex gap-12 text-sm">
        <ul className="flex flex-col gap-2">
          <li><Link to="/clubs" className="hover:underline">For clubs</Link></li>
          <li><Link to="/portfolio" className="hover:underline">Work</Link></li>
          <li><Link to="/about" className="hover:underline">About</Link></li>
          <li><Link to="/contact" className="hover:underline">Contact</Link></li>
        </ul>
        <div className="flex gap-4">
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FiLinkedin className="h-5 w-5" />
          </a>
          <a href={contact.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FiGithub className="h-5 w-5" />
          </a>
        </div>
      </nav>
    </div>
    <div className="border-t border-ink/10 dark:border-paper/10">
      <p className="mx-auto max-w-6xl px-4 py-5 text-xs text-gray-500 sm:px-6 dark:text-gray-400">
        © {new Date().getFullYear()} Mark Warren trading as Warren Digital · {contact.location}
      </p>
    </div>
  </footer>
);

export default Footer;
