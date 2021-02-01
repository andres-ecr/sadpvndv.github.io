import { withTranslation } from '../../i18n';
import SmoothLink from '../SmoothLink';

function HeaderItems({ t }) {
  return (
    <>
      <SmoothLink to="section1" smooth="true">
        {t('home')}
      </SmoothLink>
      <SmoothLink to="section2" smooth="true">
        {t('about')}
      </SmoothLink>
      <SmoothLink to="section3" smooth="true">
        {t('resume')}
      </SmoothLink>
      <SmoothLink to="section4" smooth="true">
        {t('works')}
      </SmoothLink>
      <SmoothLink to="section5" smooth="true">
        {t('contact')}
      </SmoothLink>
    </>
  );
}

HeaderItems.getInitialProps = async () => ({
  namespacesRequired: ['navbar'],
});

export default withTranslation('navbar')(HeaderItems);
