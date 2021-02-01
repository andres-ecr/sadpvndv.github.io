import { ThemeProvider } from 'styled-components';
import { appWithTranslation } from '../i18n';

// Imports Styles
import GlobalStyle from '../utils/globalStyle';
import theme from '../utils/theme';

function App({ Component, pageProps }) {
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

export default appWithTranslation(App);
