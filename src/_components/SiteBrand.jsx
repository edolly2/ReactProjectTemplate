import "../_styles/SiteBrand.css";
import Logo from "../_assets/logo.png";
import Container from "../_layout/Container";
import useWindowSize from "../_hooks/useWindowSize";

const SiteBrand = (props) => {
  const width = useWindowSize();
  const isMobile = width < 768;

  return isMobile ? (
    <></>
  ) : (
    <Container className="flex-row items-center justify-center">
      <div className="align-self-start">
        <img className="logo" src={Logo} alt="Logo" />
      </div>
      <div className="align-self-center">
        <h1>{props.brandTitle}</h1>
      </div>
    </Container>
  );
};

export default SiteBrand;
