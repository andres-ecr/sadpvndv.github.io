import { createGlobalStyle } from 'styled-components';
import fonts from './fonts';

const GlobalStyle = createGlobalStyle`

${fonts
  .map((font) => {
    return `
      @font-face {
        font-family: 'Inter';
        src: url("/vendors/fonts/${font.otf}") format('opentype');
        font-weight: ${font.weight};
      }`;
  })
  .join(' ')}

*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: #0c0c0c;
}

body {
  font-family: "Inter";
  font-weight: 400;
}

::selection {
  background-color: #00cd0e8a;
  color: #fff;
}

html {
  font-size: 62.5%;
}


@media (max-width: 1440px) {
  html {
    font-size: 50%;
  }
}

@media (max-width: 1024px) {
  html {
    font-size: 48%;
  }
}

@media (max-width: 750px) {
  html {
    font-size: 45%;
  }
}


a {
  text-decoration: none;
  cursor: pointer;
}

.header {
  position: absolute;
  top: 5%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
}

.sticky-header {
  position: fixed;
  top: 5%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  background: black;
  padding: 1rem;
}
`;

export default GlobalStyle;
