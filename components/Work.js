import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import styled from 'styled-components';
import FlipCard from '../components/FlipCard';

const StyledWork = styled.section`
  background: ${({ theme }) => theme.colors.lightGray};
  padding: 8rem 3rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  text-align: center;

  h3 {
    font-size: ${({ theme }) => theme.typography.medium};
    color: ${({ theme }) => theme.colors.tertiary};
    padding-bottom: 5rem;
  }

  .card-wrapper {
    display: flex;
    justify-content: space-between;
    padding-bottom: 2rem;
    flex-wrap: wrap;
    width: 80vw;

    @media (min-width: 1440px) {
      width: 70vw;
    }

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
    }
  }

  .flip-box {
    background-color: transparent;
    width: 300px;
    height: 200px;
    perspective: 1000px;
    text-align: center;
  }

  .flip-box-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 1s;
    transform-style: preserve-3d;
  }

  .flip-box:hover .flip-box-inner {
    transform: rotateY(180deg);
  }

  .flip-box-front,
  .flip-box-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border-radius: 10px;
  }

  .flip-box-front img {
    border-radius: 10px;
  }

  .flip-box-back {
    background-color: #444;
    color: white;
    transform: rotateY(180deg);
  }

  .flip-box-back h2 {
    margin-top: 50px;
  }

  p {
    color: slategrey;
  }

  img {
    width: 300px;
    height: 200px;
    filter: grayscale(100%);
  }
`;

function Work({ forwardedRef }) {
  return (
    <StyledWork id="section4" ref={forwardedRef}>
      <h3>Check out some of my works</h3>
      <div className="card-wrapper">
        <FlipCard
          title="Alchlab"
          img="assets/img/alchlab-project.png"
          link="https://alchlab.com"
        />
        <FlipCard
          title="Cleverwolf Technologies"
          img="assets/img/cwt-project.png"
          link="https://cwtweb-eyac6kc85.vercel.app/"
        />
        <FlipCard
          title="White Security"
          img="assets/img/whitesec-project.png"
          link="https://whitesec.com.mx"
        />
        <FlipCard
          title="Alchlab"
          img="assets/img/alchlab-project.png"
          link="https://alchlab.com"
        />
        <FlipCard
          title="Cleverwolf Technologies"
          img="assets/img/cwt-project.png"
          link="https://cwtweb-eyac6kc85.vercel.app/"
        />
        <FlipCard
          title="White Security"
          img="assets/img/whitesec-project.png"
          link="https://whitesec.com.mx"
        />
      </div>
    </StyledWork>
  );
}

export default Work;
