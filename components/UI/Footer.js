import styled from 'styled-components';
import Social from '../Social';

const StyledFooter = styled.footer`
  padding: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: black;

  span {
    color: ${({ theme }) => theme.colors.white};

    a {
      color: ${({ theme }) => theme.colors.primary};
      transition: all 0.3s;

      &:hover {
        color: ${({ theme }) => theme.colors.secondary};
      }
    }
  }
`;

function Footer() {
  return (
    <StyledFooter>
      <Social />
      <span>
        <a href="https://www.linkedin.com/in/andresecr/" target="_blank">
          Andres Carrasco &copy; 2021
        </a>
      </span>
    </StyledFooter>
  );
}

export default Footer;
