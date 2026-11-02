import Availability from '../components/Availability';
import ContactDetails from '../components/ContactDetails';
import { Section, SectionHeading } from '../components/ui';

const Contact = () => (
  <Section className="min-h-[60vh]">
    <SectionHeading
      eyebrow="Contact"
      title="Get in touch"
      intro="I'm looking for a developer role and I'm also open to freelance projects. Whether it's a job, a project or something you've seen here, I'd be glad to hear from you."
    />
    <Availability className="mt-6" />
    <div className="mt-10">
      <ContactDetails />
    </div>
  </Section>
);

export default Contact;
