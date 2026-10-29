import ContactDetails from '../components/ContactDetails';
import { Section, SectionHeading } from '../components/ui';

const Contact = () => (
  <Section className="min-h-[60vh]">
    <SectionHeading
      eyebrow="Contact"
      title="Get in touch"
      intro="Whether it's about a project, a role or something you've seen here, I'd be glad to hear from you."
    />
    <div className="mt-10">
      <ContactDetails />
    </div>
  </Section>
);

export default Contact;
