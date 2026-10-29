import { FiDownload } from 'react-icons/fi';
import CallToAction from '../components/CallToAction';
import { ButtonLink, Section, SectionHeading } from '../components/ui';
import { contact } from '../data/offer';

const experience = [
  { title: 'Java Developer', place: 'Sky (through FDM)', dates: '2022 – 2023' },
  { title: 'Associate Java Developer', place: 'FDM Consultancy', dates: '2022 – 2023' },
];

const education = [
  { title: 'BSc Computing', place: 'University of Abertay Dundee', dates: '2018 – 2021' },
  { title: 'HND Software Development', place: 'Dundee & Angus College', dates: '2016 – 2018' },
];

const skills = ['Java', 'Spring Boot', 'React + Vite', 'Docker', 'MongoDB', 'REST APIs', 'CI/CD with GitHub'];

const Timeline = ({ heading, items }) => (
  <div>
    <h2 className="mb-6 font-mono text-sm font-medium text-gray-500 dark:text-gray-400">{heading}</h2>
    <ol className="flex flex-col gap-6 border-l-2 border-amber-deep pl-6 dark:border-amber-bright">
      {items.map((item) => (
        <li key={item.title}>
          <h3 className="font-bold">{item.title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            {item.place} · {item.dates}
          </p>
        </li>
      ))}
    </ol>
  </div>
);

const About = () => (
  <>
    <Section>
      <SectionHeading eyebrow="About" title="Hi, I'm Mark Warren" />
      <div className="mt-6 max-w-2xl space-y-4 text-lg text-gray-600 dark:text-gray-300">
        <p>
          I'm a software developer based in {contact.location}. I trade as Warren Digital,
          building websites and web apps for grassroots football clubs and small businesses in
          Falkirk and Forth Valley.
        </p>
        <p>
          My background is in Java and Spring Boot, building the kind of systems that sit behind
          big websites. I bring the same care to smaller sites: they should be quick, safe, easy to
          update and built to last.
        </p>
      </div>
      <div className="mt-8 flex flex-wrap gap-4">
        <ButtonLink href="/resume/Resume.pdf" variant="secondary">
          <FiDownload aria-hidden="true" /> Download my CV
        </ButtonLink>
        <ButtonLink href={contact.github} variant="secondary">
          GitHub
        </ButtonLink>
      </div>
    </Section>

    <Section className="grid gap-12 pt-0 sm:pt-0 md:grid-cols-2">
      <Timeline heading="Experience" items={experience} />
      <Timeline heading="Education" items={education} />
    </Section>

    <Section className="pt-0 sm:pt-0">
      <h2 className="mb-6 font-mono text-sm font-medium text-gray-500 dark:text-gray-400">
        What I work with
      </h2>
      <ul className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <li
            key={skill}
            className="rounded-md border border-ink/10 px-3 py-1.5 font-mono text-sm dark:border-paper/15"
          >
            {skill}
          </li>
        ))}
      </ul>
    </Section>

    <CallToAction />
  </>
);

export default About;
