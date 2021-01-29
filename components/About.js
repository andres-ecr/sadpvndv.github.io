import { FaFileDownload } from 'react-icons/fa';
import styled from 'styled-components';

const StyledAbout = styled.section`
  background: ${({ theme }) => theme.colors.black};
  padding: 8rem 3rem;
  transition: all 0.3s;
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${({ theme }) => theme.typography.medium};
  }

  p {
    color: white;
    width: 40rem;
    font-size: ${({ theme }) => theme.typography.small};
    padding: 1rem 0;
  }

  a {
    background: ${({ theme }) => theme.colors.darkGray};
    border: none;
    padding: 1rem;
    border-radius: 0.2rem;
    transition: all ease-out 0.5s;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    width: 18rem;
    font-size: 1.2rem;
    color: white;
    margin-top: 2rem;

    svg {
      fill: white;
      margin-right: 0.5rem;
      transition: all 0.3s;
    }

    &:hover {
      color: ${({ theme }) => theme.colors.primary};

      svg {
        fill: ${({ theme }) => theme.colors.primary};
      }
    }
  }
`;

function About({ forwardedRef }) {
  return (
    <StyledAbout id="section2" ref={forwardedRef}>
      <div>
        <h3>About me</h3>
        <p>
          I'm a Developer. I graduated from Rafael Belloso Chacin's University
          in 2018 for Informatics Engineer Degree.{' '}
        </p>
        <p>
          I consider myself as a 'forever student', fueled by passion for
          development, continued my career growing as a self-taught, mainly
          focused on the front end development, growing and improving, staying
          in tune with the latest technologies.
        </p>
        <a href="https://github.com/sadpvndv/resume/raw/main/Andres-ESP.pdf">
          <FaFileDownload />
          Download resume
        </a>
      </div>
    </StyledAbout>
  );
}

export default About;
