import { ThemeProvider } from 'styled-components';
import Head from 'next/head';

// Imports Styles
import GlobalStyle from '../utils/globalStyle';
import theme from '../utils/theme';

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
