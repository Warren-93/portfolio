import ContactDetails from '../components/ContactDetails';
import { Section, SectionHeading } from '../components/ui';
import { steps } from '../data/offer';

const Contact = () => (
  <Section className="grid gap-12 md:grid-cols-2">
    <div>
      <SectionHeading
        eyebrow="Contact"
        title="Book a free 30-minute chat"
        intro="Tell me a bit about your club or business and what you'd like your website to do. There's no obligation, and you'll get a written fixed quote afterwards."
      />
      <div className="mt-10">
        <ContactDetails />
      </div>
    </div>
    <div className="rounded-xl border border-ink/10 p-6 sm:p-8 dark:border-paper/10">
      <h2 className="text-xl font-bold">What happens next</h2>
      <ol className="mt-6 flex flex-col gap-5">
        {steps.map((step, index) => (
          <li key={step.title} className="flex gap-4">
            <span className="font-mono text-sm font-extrabold text-amber-dot dark:text-amber-bright">
              {String(index + 1).padStart(2, '0')}
            </span>
            <div>
              <h3 className="font-semibold">{step.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">{step.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  </Section>
);

export default Contact;
