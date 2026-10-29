import { Mark } from '../components/Logo';
import { ButtonLink, Section } from '../components/ui';

const NotFound = () => (
  <Section className="flex min-h-[60vh] flex-col items-center justify-center text-center">
    <Mark className="text-6xl" />
    <h1 className="mt-8 text-3xl font-bold">Page not found</h1>
    <p className="mt-3 text-gray-600 dark:text-gray-300">
      The page you're looking for has moved or doesn't exist.
    </p>
    <ButtonLink to="/" className="mt-8">
      Back to the home page
    </ButtonLink>
  </Section>
);

export default NotFound;
