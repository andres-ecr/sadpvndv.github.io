import React from 'react';
import Main from './Main';
import About from './About';
import Resume from './Resume';
import Work from './Work';
import Contact from './Contact';

function Sections({ forwardedRef }) {
  return (
    <div>
      <Main />
      <About forwardedRef={forwardedRef} />
      <Resume />
      <Work />
      <Contact />
    </div>
  );
}

export default Sections;
