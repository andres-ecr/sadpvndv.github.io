import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import HeaderItems from '../components/UI/HeaderItems';
import Sections from '../components/Sections';
import Footer from '../components/UI/Footer';

const StyledHeader = styled.header`
  .active {
    color: ${({ theme }) => theme.colors.primary};
  }

  a {
    color: ${({ theme }) => theme.colors.white};
    font-size: 2.5rem;
    cursor: pointer;
    padding: 0 1rem;
  }
`;

export default function Home() {
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
      <StyledHeader className={isSticky ? 'sticky-header' : 'header'}>
        <HeaderItems />
      </StyledHeader>
      <Sections forwardedRef={childRef} />
      <Footer />
    </>
  );
}
