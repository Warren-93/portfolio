import { ButtonLink, Section } from './ui';
import { contact } from '../data/contact';

const CallToAction = () => (
  <div className="bg-ink text-paper dark:bg-gray-800/60">
    <Section className="text-center">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Get in touch</h2>
      <p className="mx-auto mt-4 max-w-xl text-gray-300">
        Want to talk about a project, or about any of the work here? I'd be glad to hear from you.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <ButtonLink to="/contact" variant="amber">
          Contact me
        </ButtonLink>
        <ButtonLink
          href={contact.github}
          variant="secondary"
          className="border-paper/30 text-paper hover:border-paper hover:bg-paper/10"
        >
          GitHub
        </ButtonLink>
      </div>
    </Section>
  </div>
);

export default CallToAction;
