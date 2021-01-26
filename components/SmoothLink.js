import React from 'react';
import { Link } from 'react-scroll';

function SmoothLink({ to, children }) {
  return (
    <Link to={to} smooth="true" spy={true}>
      {children}
    </Link>
  );
}

export default SmoothLink;
