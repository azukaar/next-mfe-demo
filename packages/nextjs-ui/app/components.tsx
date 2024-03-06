
import basicComponents from '@demo/basic-components';
import fancyComponents from '@demo/fancy-components';

// this is the list of components library that we have to maintain in the next-js UI
// this allows addressing libraries with
// components[libraryName][componentName]
const components = {
  basic: basicComponents,
  fancy: fancyComponents,
};

export default components;
