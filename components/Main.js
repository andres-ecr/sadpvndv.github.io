import styled from 'styled-components';
import { withTranslation } from '../i18n';
import Social from './Social';

const StyledMain = styled.section`
  font-size: 50px;
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  padding: 0 3rem;

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
    font-size: 9rem;
  }

  p {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

function Main({ t }) {
  return (
    <>
      <div id="section1">
        <StyledMain>
          <div className="bg-video">
            <video autoPlay="autoplay" loop="loop" muted>
              <source src="assets/video/background.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <h1>{t('title')}</h1>
          <p>{t('description')}</p>
          <Social />
        </StyledMain>
      </div>
    </>
  );
}

Main.getInitialProps = async () => ({
  namespacesRequired: ['main'],
});

export default withTranslation('main')(Main);
