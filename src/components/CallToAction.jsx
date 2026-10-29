import { ButtonLink, Section } from './ui';

const CallToAction = ({
  title = "Let's talk about your website",
  body = "Book a free 30-minute chat. No jargon and no obligation. You'll get a written fixed quote afterwards.",
}) => (
  <div className="bg-ink text-paper dark:bg-gray-800/60">
    <Section className="text-center">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      <p className="mx-auto mt-4 max-w-xl text-gray-300">{body}</p>
      <div className="mt-8">
        <ButtonLink to="/contact" variant="amber">
          Book a free chat
        </ButtonLink>
      </div>
    </Section>
  </div>
);

export default CallToAction;
