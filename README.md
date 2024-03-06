# Example of Next JS + Library

This repo demonstrate the usage of Next JS with a collection of libraries downloaded using a microfrontend approach (aka. downloaded at runtime when required). The repository uses a monorepo for simplicity, but it would work the same without it. The NextJS is importing the libraries from the node_modules folder, as it would be in a real world scenario.

The repo is divided in 3 folders:

- `nextjs-ui`: The main NextJS application
- `basic-components`: A library that is used by the NextJS application
- `fancy-components`: A library that is used by the NextJS application

# The nextjs-ui

First, we setup a basic NextJS app. This app needs to maintain a list of libraries it has access to. See [packages/nextjs-ui/app/components.tsx](packages/nextjs-ui/app/components.tsx) for the list of libraries.

```tsx
// this allows addressing libraries with
// components[libraryName][componentName]
const components = {
  basic: basicComponents,
  fancy: fancyComponents,
};
```

Then, when rendering a component, we can use the `components` object to render the component from the component. For example see [packages/nextjs-ui/app/pages/page.tsx](packages/nextjs-ui/app/pages/page.tsx).

```tsx
  const Page = components['basic']['Page'];
  ...
  <Page title="This is a cool page from the basic library" />
```

# The libraries

In order to work with React.lazy, the library must export components as default, in directly addressable folders. For example see [packages/basic-components/src/components/page.jsx](packages/basic-components/src/components/page.jsx).

```tsx
const React = require('react');

const Page = ({title}) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>Page content</p>
    </div>
  );
};

export default Page;
```

This component is then referenced in the main library file (ex. [packages/basic-components/src/index.js](packages/basic-components/src/index.js)). In order to be able to import the component from the library. This is where React.lazy is used to delay the import to the last moment. (React.Lazy is the same as Next.dynamic, but specific for React).

```tsx
const components = {
  Page: lazy(() => import('./components/page.jsx')),
  Hidden: lazy(() => import('./components/hidden.jsx')),
};
```

# Running the example

To run the example, you need to install the dependencies via Lerna and then run the NextJS app.

```bash
npm install
cd packages/nextjs-ui
npm run dev
```