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
        <Head>
          <link rel="shortcut icon" href="/favicon.ico" />
          <meta name="description" content="lorem ipsum"></meta>
          <title>Portfolio | Andres Carrasco</title>
        </Head>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
