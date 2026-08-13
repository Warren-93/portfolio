import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <h1>404 — Page not found</h1>
      <Link to="/">Back home</Link>
    </div>
  );
};

export default NotFound;
