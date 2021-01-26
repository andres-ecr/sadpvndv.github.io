import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import styled from 'styled-components';

const StyledSocial = styled.section`
  padding: 1rem 0;

  svg {
    fill: ${({ theme }) => theme.colors.tertiary};
    transition: all 0.3s;
    margin: 0 0.5rem;

    &:hover {
      fill: ${({ theme }) => theme.colors.primary};
    }
  }
`;

function Social() {
  return (
    <StyledSocial>
      <a href="https://www.facebook.com/andresecr/">
        <FaFacebook size={25} />
      </a>
      <a href="https://www.instagram.com/andresecr_/">
        <FaInstagram size={25} />
      </a>
      <a href="https://github.com/sadpvndv">
        <FaGithub size={25} />
      </a>
      <a href="https://www.linkedin.com/in/andresecr/">
        <FaLinkedin size={25} />
      </a>
    </StyledSocial>
  );
}

export default Social;
