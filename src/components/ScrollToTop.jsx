import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// React Router keeps the scroll position between pages. Reset it on each new
// page, but let links with a #hash (like /clubs#matchday) jump to their target.
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
