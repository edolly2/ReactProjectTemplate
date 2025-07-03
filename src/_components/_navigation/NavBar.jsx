import "../../_styles/NavBar.css";
import useWindowSize from "../../_hooks/useWindowSize";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";

const NavBar = () => {
  const width = useWindowSize();
  const isMobile = width < 768;

  return isMobile ? <MobileNav /> : <DesktopNav />;
};

export default NavBar;
