import styled from 'styled-components';
import { withTranslation } from '../i18n';

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

function Resume({ forwardedRef, t }) {
  return (
    <StyledResume id="section3" ref={forwardedRef}>
      <div className="resume-container">
        <div className="resume-title">
          <h4>{t('educationTitle')}</h4>
        </div>
        <div className="resume-items">
          <div>
            <h5>{t('university')}</h5>
            <span>{t('grade')}</span>
            <span>{t('date')}</span>
          </div>
        </div>
      </div>
      <div className="resume-container">
        <div className="resume-title">
          <h4>{t('workTitle')}</h4>
        </div>
        <div className="resume-items">
          <div>
            <h5>{t('workCompany1')}</h5>
            <span>{t('workPosition1')}</span>
            <span>{t('workDate1')}</span>
          </div>
          <div>
            <h5>{t('workCompany2')}</h5>
            <span>{t('workPosition2')}</span>
            <span>{t('workDate2')}</span>
          </div>
        </div>
      </div>
    </StyledResume>
  );
}

Resume.getInitialProps = async () => ({
  namespacesRequired: ['resume'],
});

export default withTranslation('resume')(Resume);
