import { FiLinkedin, FiMail, FiPhone } from 'react-icons/fi';
import { contact } from '../data/contact';

// Email and phone are placeholders until they're set in data/contact.js.
const Placeholder = ({ children }) => (
  <span className="rounded border border-dashed border-amber-deep px-2 py-0.5 font-mono text-xs text-amber-dot dark:border-amber-bright dark:text-amber-bright">
    {children}
  </span>
);

const Row = ({ icon: Icon, label, children }) => (
  <li className="flex items-center gap-3">
    <Icon aria-hidden="true" className="h-5 w-5 shrink-0" />
    <span className="sr-only">{label}: </span>
    {children}
  </li>
);

const ContactDetails = () => (
  <ul className="flex flex-col gap-4">
    <Row icon={FiMail} label="Email">
      {contact.email ? (
        <a href={`mailto:${contact.email}`} className="font-semibold hover:underline">
          {contact.email}
        </a>
      ) : (
        <Placeholder>Email address coming soon</Placeholder>
      )}
    </Row>
    <Row icon={FiPhone} label="Phone">
      {contact.phone ? (
        <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="font-semibold hover:underline">
          {contact.phone}
        </a>
      ) : (
        <Placeholder>Phone number coming soon</Placeholder>
      )}
    </Row>
    <Row icon={FiLinkedin} label="LinkedIn">
      <a
        href={contact.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold hover:underline"
      >
        Message me on LinkedIn
      </a>
    </Row>
  </ul>
);

export default ContactDetails;
