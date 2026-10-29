import { FiCheck } from 'react-icons/fi';

// Club-facing, so it uses the club sub-brand: Archivo headings and pitch green.
const PackageCard = ({ pkg }) => (
  <article
    className={`relative flex flex-col rounded-xl border bg-white p-6 dark:bg-gray-800/50 ${
      pkg.popular
        ? 'border-pitch ring-2 ring-pitch dark:border-paper/40 dark:ring-paper/40'
        : 'border-ink/10 dark:border-paper/10'
    }`}
  >
    {pkg.popular && (
      <span className="absolute -top-3 left-6 rounded-full bg-pitch px-3 py-1 text-xs font-semibold text-paper">
        Most popular
      </span>
    )}
    <h3 className="font-club text-2xl font-extrabold">{pkg.name}</h3>
    <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{pkg.summary}</p>
    <p className="mt-6 font-club text-4xl font-extrabold">{pkg.price}</p>
    <p className="text-sm text-gray-500 dark:text-gray-400">
      Fixed price · ready in {pkg.readyIn}
    </p>
    <ul className="mt-6 flex flex-1 flex-col gap-3 text-sm">
      {pkg.includes.map((item) => (
        <li key={item} className="flex gap-2">
          <FiCheck
            aria-hidden="true"
            className="mt-0.5 h-4 w-4 shrink-0 text-pitch dark:text-paper"
          />
          {item}
        </li>
      ))}
    </ul>
  </article>
);

export default PackageCard;
