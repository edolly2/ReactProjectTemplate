import "../_styles/Header.css";
import NavBar from "./_navigation/NavBar";
import SiteBrand from "../_components/SiteBrand";

const Header = () => {
  return (
    <header>
      <SiteBrand brandTitle="Website" />
      <NavBar />
    </header>
  );
};

export default Header;
