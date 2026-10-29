import { FiCheck } from 'react-icons/fi';
import CallToAction from '../components/CallToAction';
import ClubMark from '../components/ClubMark';
import PackageCard from '../components/PackageCard';
import { ButtonLink, Section, SectionHeading } from '../components/ui';
import { addOns, carePlan, foundingOffer, ownership, packages, steps } from '../data/offer';

const questions = [
  {
    q: 'Can our volunteers update the site themselves?',
    a: 'Yes. Matchday and Club Hub include a news page your volunteers can update, and Club Hub comes with a handover session so your committee knows how everything works.',
  },
  {
    q: 'Who owns the website?',
    a: ownership,
  },
  {
    q: "What about players' personal details?",
    a: "Club Hub registrations often include children's details. Your club stays in charge of that information. I'll sign a data processing agreement with you and follow your club's data protection policy.",
  },
  {
    q: 'What happens after launch?',
    a: `You can join the ${carePlan.name} for ${carePlan.price} a month. It covers hosting, security updates, backups and up to 1 hour of small changes each month.`,
  },
];

// The whole page is club-facing, so it uses the club sub-brand (Archivo, pitch green).
const Clubs = () => (
  <>
    <div className="bg-pitch text-paper">
      <Section className="flex flex-col gap-10 md:flex-row md:items-center">
        <div className="flex-1">
          <p className="font-club text-sm font-medium tracking-widest uppercase opacity-90">
            Websites for grassroots clubs
          </p>
          <h1 className="mt-4 font-club text-4xl font-extrabold tracking-tight sm:text-6xl">
            Fixtures, results, teams and registrations. All in one place.
          </h1>
          <p className="mt-6 max-w-2xl text-lg opacity-90">
            Clubs around Falkirk and Forth Valley are run by volunteers with little spare time. I
            build club websites that are simple to keep up to date, at a fixed price.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <ButtonLink to="/contact" variant="light">
              Book a free 30-minute chat
            </ButtonLink>
            <a
              href="#packages"
              className="inline-flex items-center rounded-md border border-paper/40 px-5 py-3 text-sm font-semibold hover:bg-paper/10"
            >
              See packages
            </a>
          </div>
        </div>
        <ClubMark className="hidden h-48 w-48 shrink-0 rounded-2xl ring-2 ring-paper/30 md:block" />
      </Section>
    </div>

    <Section id="packages">
      <SectionHeading
        title={<span className="font-club font-extrabold">Club packages</span>}
        intro="Every package is a fixed price, works well on phones and uses your club colours."
      />
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {packages.map((pkg) => (
          <div key={pkg.id} id={pkg.id} className="scroll-mt-28">
            <PackageCard pkg={pkg} />
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-col gap-4 rounded-xl border-2 border-dashed border-pitch p-6 sm:flex-row sm:items-center dark:border-paper/40">
        <p className="font-club text-xl font-extrabold text-pitch-deep dark:text-paper">
          {foundingOffer.title}
        </p>
        <p className="text-gray-700 sm:flex-1 dark:text-gray-300">{foundingOffer.body}</p>
      </div>
    </Section>

    <div className="bg-white dark:bg-gray-800/30">
      <Section className="grid gap-12 lg:grid-cols-2">
        <div>
          <h2 className="font-club text-3xl font-extrabold">{carePlan.name}</h2>
          <p className="mt-2 font-club text-4xl font-extrabold">
            {carePlan.price}
            <span className="text-lg font-medium text-gray-500 dark:text-gray-400">
              /{carePlan.per}
            </span>
          </p>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Keep your site safe and up to date without anyone at the club needing to worry about it.
          </p>
          <ul className="mt-6 flex flex-col gap-3">
            {carePlan.includes.map((item) => (
              <li key={item} className="flex gap-2">
                <FiCheck aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-pitch dark:text-paper" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">{carePlan.notice}</p>
        </div>

        <div>
          <h2 className="font-club text-3xl font-extrabold">Add-ons</h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Add these to any package when you need them.
          </p>
          <dl className="mt-6 divide-y divide-ink/10 dark:divide-paper/10">
            {addOns.map((addOn) => (
              <div key={addOn.name} className="flex justify-between py-3">
                <dt>{addOn.name}</dt>
                <dd className="font-club font-extrabold">{addOn.price}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>
    </div>

    <Section>
      <SectionHeading
        title={<span className="font-club font-extrabold">How it works</span>}
        intro="Simple steps, and you always know what's next."
      />
      <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {steps.map((step, index) => (
          <li key={step.title} className="rounded-xl border border-ink/10 p-5 dark:border-paper/10">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-pitch font-club font-extrabold text-paper">
              {index + 1}
            </span>
            <h3 className="mt-4 font-bold">{step.title}</h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{step.body}</p>
          </li>
        ))}
      </ol>
      <p className="mt-8 max-w-3xl text-gray-700 dark:text-gray-300">
        <strong>You own it.</strong> {ownership}
      </p>
    </Section>

    <div className="bg-white dark:bg-gray-800/30">
      <Section>
        <SectionHeading title={<span className="font-club font-extrabold">Common questions</span>} />
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {questions.map((item) => (
            <div key={item.q}>
              <h3 className="font-bold">{item.q}</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">{item.a}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>

    <CallToAction
      title="Let's talk about your club"
      body="Book a free 30-minute chat with no obligation. Afterwards you'll get a written fixed quote."
    />
  </>
);

export default Clubs;
