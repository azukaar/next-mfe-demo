"use client";

import React from 'react';
import components from './components';

// Entry of the demo
export default function Home() {
  const [show, setShow] = React.useState(false);

  // search for ?no-hydrate, to disable client hydration (for debug)
  const isClient = typeof window !== 'undefined' && window.location.search.indexOf('no-hydrate') !== -1;

  // for demo purpose, but in reality you would reach components[library][componentRef] from CMS
  const Page = components['basic']['Page'];
  const Hidden = components['basic']['Hidden'];
  const Carousel = components['fancy']['Carousel'];

  return !isClient ? <main>
  {/* This page component is rendered from the basic library */}
  <Page title="This is a cool page from the basic library" />

  <hr />

  {/* This carousel component is rendered from a different package */}
  <Carousel />

  <hr />

  {/* This component downloads only when it is shown in the page */}
  <button onClick={() => setShow(true)}>Click to show the Hidden component, and see the new request in the browser</button>
  {show && <Hidden />}
  </main> : null;
}
