import CallToAction from '../components/CallToAction';
import PackageCard from '../components/PackageCard';
import { ButtonLink, Section, SectionHeading } from '../components/ui';
import {
  aftercare,
  clubSteps,
  generalServices,
  generalSteps,
  launchOffer,
  packages,
} from '../data/services';

const Steps = ({ steps, numberClass }) => (
  <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
    {steps.map((step, index) => (
      <li key={step.title}>
        <span
          className={`flex h-9 w-9 items-center justify-center rounded-full font-extrabold ${numberClass}`}
        >
          {index + 1}
        </span>
        <h3 className="mt-3 font-bold">{step.title}</h3>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{step.body}</p>
      </li>
    ))}
  </ol>
);

const Services = () => (
  <>
    <Section>
      <SectionHeading
        eyebrow="Services"
        title="Need something built?"
        intro="Alongside looking for a developer role, I take on freelance work. Every job gets a free chat and a fixed price agreed in writing before any work starts."
      />
      <nav aria-label="Services" className="mt-8 flex flex-wrap gap-4">
        <ButtonLink href="#projects" variant="secondary">
          General projects
        </ButtonLink>
        <ButtonLink href="#football" variant="secondary">
          Grassroots football clubs
        </ButtonLink>
      </nav>
    </Section>

    {/* General projects: primary warren.digital brand. */}
    <div id="projects" className="scroll-mt-20 bg-white dark:bg-gray-800/30">
      <Section>
        <SectionHeading
          eyebrow="General projects"
          title="Websites, web apps and APIs"
          intro="For small businesses, individuals and teams. Tell me what you need and I'll give you a fixed quote."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {generalServices.map((service) => (
            <div
              key={service.title}
              className="rounded-xl border border-ink/10 p-6 dark:border-paper/10"
            >
              <h3 className="text-lg font-bold">{service.title}</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">{service.body}</p>
            </div>
          ))}
        </div>
        <h3 className="mt-14 mb-6 font-mono text-sm font-medium text-gray-500 dark:text-gray-400">
          How it works
        </h3>
        <Steps
          steps={generalSteps}
          numberClass="bg-ink font-mono text-sm text-amber-bright dark:bg-amber-bright dark:text-ink"
        />
      </Section>
    </div>

    {/* Football: club sub-brand, following the club flyer (no prices). */}
    <section id="football" className="scroll-mt-20">
      <div className="relative overflow-hidden bg-pitch text-paper">
        <svg
          aria-hidden="true"
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          className="absolute -top-16 -right-40 h-[28rem] w-[28rem] opacity-10"
        >
          <circle cx="50" cy="50" r="34" />
          <line x1="-50" y1="50" x2="150" y2="50" />
          <circle cx="50" cy="50" r="1.8" fill="currentColor" stroke="none" />
        </svg>
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <img
            src="/brand/club-logo-white.svg"
            alt="Warren Digital: Websites for grassroots clubs"
            className="h-14 w-auto sm:h-16"
          />
          <h2 className="mt-10 max-w-3xl font-club text-4xl font-extrabold tracking-tight sm:text-5xl">
            Fixtures, results and teams. All in one place.
          </h2>
          <p className="mt-5 max-w-2xl text-lg opacity-95">
            A proper club website your volunteers can keep up to date themselves. Built locally in
            Falkirk, at a fixed price agreed up front.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-16 font-club sm:px-6 sm:py-20">
        <p className="border-l-4 border-pitch bg-pitch/10 px-5 py-4 text-pitch-deep dark:border-paper/60 dark:bg-paper/10 dark:text-paper">
          <strong className="font-extrabold">Launch offer:</strong> {launchOffer}
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {packages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>

        <p className="mt-8 max-w-4xl text-lg text-gray-600 dark:text-gray-300">
          <strong className="font-semibold text-ink dark:text-paper">
            Fixed price, agreed in writing
          </strong>{' '}
          before any work starts. {aftercare}
        </p>

        <div className="mt-14">
          <Steps steps={clubSteps} numberClass="bg-pitch text-sm text-paper" />
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-ink/10 pt-10 sm:flex-row sm:items-center sm:justify-between dark:border-paper/10">
          <div>
            <p className="text-2xl font-extrabold text-pitch-deep dark:text-paper">
              Book your free 30-minute chat
            </p>
            <p className="mt-1 text-gray-600 dark:text-gray-300">
              Serving clubs across Falkirk and Forth Valley.
            </p>
          </div>
          <ButtonLink to="/contact" variant="pitch">
            Get in touch
          </ButtonLink>
        </div>
      </div>
    </section>

    <CallToAction />
  </>
);

export default Services;
