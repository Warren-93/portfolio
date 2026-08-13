import { Link } from 'react-router-dom';
import TypewriterHeading from '../components/TypewriterHeading';

const Home = () => (
  <div className="flex min-h-[calc(100vh-4.5rem)] flex-col items-center justify-center gap-8 bg-cyan-50 px-6 text-center dark:bg-neutral-950">
    <TypewriterHeading />
    <div className="flex flex-wrap justify-center gap-4">
      <Link
        to="/portfolio"
        className="rounded-md bg-cyan-600 px-6 py-3 font-medium text-white transition-colors hover:bg-cyan-700"
      >
        Portfolio
      </Link>
      <Link
        to="/about"
        className="rounded-md bg-cyan-800 px-6 py-3 font-medium text-white transition-colors hover:bg-cyan-900"
      >
        About Me
      </Link>
      <Link
        to="/resume"
        className="rounded-md border border-cyan-600 px-6 py-3 font-medium text-cyan-700 transition-colors hover:bg-cyan-100 dark:border-cyan-300 dark:text-cyan-300 dark:hover:bg-cyan-900/40"
      >
        Resume
      </Link>
    </div>
  </div>
);

export default Home;
