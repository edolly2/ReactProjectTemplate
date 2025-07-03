import "../_styles/SiteBrand.css";
import Logo from "../_assets/logo.png";

const SiteBrand = () => {
  return (
    <div>
      <img className="logo" src={Logo} alt="Logo" />
    </div>
  );
};

export default SiteBrand;
