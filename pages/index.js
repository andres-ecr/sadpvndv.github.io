import { useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import { withTranslation } from '../i18n';
import styled from 'styled-components';
import HeaderItems from '../components/UI/HeaderItems';
import Sections from '../components/Sections';
import Footer from '../components/UI/Footer';

const StyledHeader = styled.header`
  .active {
    color: ${({ theme }) => theme.colors.secondary};
  }

  a {
    color: ${({ theme }) => theme.colors.white};
    font-size: 2.5rem;
    cursor: pointer;
    padding: 0 1rem;
    transition: all 0.3s;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

function Home({ t }) {
  const [isSticky, setSticky] = useState(false);
  const childRef = useRef(null);
  const handleScroll = () => {
    if (childRef.current) {
      setSticky(childRef.current.getBoundingClientRect().top <= 0);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, []);

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="description" content="lorem ipsum"></meta>
        <title>{t('metaTitle')}</title>
      </Head>
      <StyledHeader className={isSticky ? 'sticky-header' : 'header'}>
        <HeaderItems />
      </StyledHeader>
      <Sections forwardedRef={childRef} />
      <Footer />
    </>
  );
}

Home.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default withTranslation('common')(Home);
