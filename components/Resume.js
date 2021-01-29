import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import styled from 'styled-components';

const StyledResume = styled.section`
  background: ${({ theme }) => theme.colors.white};
  padding: 5rem 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .resume-container {
    width: 70vw;
    display: flex;
    justify-content: space-around;
    padding-bottom: 4rem;

    h4 {
      font-size: ${({ theme }) => theme.typography.medium};
      padding-bottom: 0.25rem;
      text-decoration: underline ${({ theme }) => theme.colors.primary};
      max-width: 14rem;
    }

    h5 {
      font-size: ${({ theme }) => theme.typography.medium};
    }
  }

  .resume-title {
    width: 30%;
  }

  .resume-items {
    width: 50%;
    div {
      display: flex;
      flex-direction: column;
      padding-bottom: 2rem;

      span {
        font-size: ${({ theme }) => theme.typography.small};
      }
    }
  }
`;

function Resume({ forwardedRef }) {
  return (
    <StyledResume id="section3" ref={forwardedRef}>
      <div className="resume-container">
        <div className="resume-title">
          <h4>Education</h4>
        </div>
        <div className="resume-items">
          <div>
            <h5>Dr. Rafael Belloso Chacin University</h5>
            <span>Bachelor of Engineering</span>
            <span>Aug. 2014 - Jul. 2018</span>
          </div>
        </div>
      </div>
      <div className="resume-container">
        <div className="resume-title">
          <h4>Work</h4>
        </div>
        <div className="resume-items">
          <div>
            <h5>Smartphones Peru</h5>
            <span>Front-end developer</span>
            <span>Mar. 2019 - Sept. 2019</span>
          </div>
          <div>
            <h5>Freelancer</h5>
            <span>Front-end developer</span>
            <span>Sept. 2018 - Present</span>
          </div>
        </div>
      </div>
    </StyledResume>
  );
}

export default Resume;
