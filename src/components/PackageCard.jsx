// Club-facing, so it uses the club sub-brand: Archivo headings and pitch green.
// Layout follows the club flyer: name, what's included, then how long it takes.
const PackageCard = ({ pkg }) => (
  <article
    className={`flex flex-col rounded-xl bg-white p-6 dark:bg-gray-800/50 ${
      pkg.popular
        ? 'border-2 border-pitch dark:border-paper/50'
        : 'border border-ink/15 dark:border-paper/15'
    }`}
  >
    <h3 className="font-club text-2xl font-extrabold text-pitch-deep dark:text-paper">
      {pkg.name}
    </h3>
    <ul className="mt-4 flex flex-1 flex-col gap-2.5">
      {pkg.includes.map((item) => (
        <li key={item} className="flex gap-3">
          <span
            aria-hidden="true"
            className="mt-2 h-2 w-2 shrink-0 rounded-full bg-pitch dark:bg-paper"
          />
          {item}
        </li>
      ))}
    </ul>
    <p className="mt-6 text-sm font-semibold text-pitch-deep dark:text-gray-300">
      Ready in {pkg.readyIn}
    </p>
  </article>
);

export default PackageCard;
