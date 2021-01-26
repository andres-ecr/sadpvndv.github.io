import SmoothLink from '../SmoothLink';

function HeaderItems() {
  return (
    <>
      <SmoothLink to="section1" smooth="true">
        home
      </SmoothLink>
      <SmoothLink to="section2" smooth="true">
        about
      </SmoothLink>
      <SmoothLink to="section3" smooth="true">
        resume
      </SmoothLink>
      <SmoothLink to="section4" smooth="true">
        works
      </SmoothLink>
      <SmoothLink to="section5" smooth="true">
        contact
      </SmoothLink>
    </>
  );
}

export default HeaderItems;
