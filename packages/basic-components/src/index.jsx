import { lazy } from 'react';

// The library has to maintain a list of all the components it exports
// it needs to always use default export for lazy to work
const components = {
  Page: lazy(() => import('./components/page.jsx')),
  Hidden: lazy(() => import('./components/hidden.jsx')),
};

export default components;