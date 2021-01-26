import styled from 'styled-components';
import {
  FaBeer,
  FaFacebook,
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa';

const Main = styled.section`
  font-size: 50px;
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .bg-video {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
    overflow: hidden;
    filter: grayscale(100%) brightness(15%);
  }

  h1 {
    color: white;
  }

  p {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.primary};
  }

  .socials {
    padding: 1rem 0;

    svg {
      width: 7rem;
      padding: 1rem;
      fill: ${({ theme }) => theme.colors.tertiary};
      transition: all 0.3s;

      &:hover {
        fill: ${({ theme }) => theme.colors.primary};
      }
    }
  }
`;

export default function Home() {
  return (
    <>
      <Main>
        <div className="bg-video">
          <video autoPlay="autoplay" loop="loop" muted>
            <source src="assets/video/background.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <h1>Hi i'm Andres Carrasco</h1>
        <p>
          I'm a Lima - Perú based front-end developer specialized in ReactJs,
          always trying to improve and do better thigs.
        </p>
        <div className="socials">
          <a href="https://www.facebook.com/andresecr/">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/andresecr_/">
            <FaInstagram />
          </a>
          <a href="https://github.com/sadpvndv">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/andresecr/">
            <FaLinkedin />
          </a>
        </div>
      </Main>
    </>
  );
}
