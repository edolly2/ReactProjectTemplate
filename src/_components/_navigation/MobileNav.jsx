import "../../_styles/MobileNav.css";
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import Logo from "../../_assets/logo.png";
import Container from "../../_layout/Container";

const MobileNav = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav>
      <Container className="space-between">
        <div>
          <img className="logo" src={Logo} alt="logo" />
        </div>
        <div className="flex items-end justify-center">
          {/* <button > */}
          <IoMdMenu onClick={toggleMenu} />
          {/* </button> */}
        </div>
      </Container>
      {isOpen ? (
        <Container className="flex-col">
          <h1 className="text-center">{props.brandTitle}</h1>
          <ul className="mobile-nav">
            <li onClick={() => setIsOpen(false)}>Home</li>
            <li onClick={() => setIsOpen(false)}>About</li>
            <li onClick={() => setIsOpen(false)}>Contact</li>
            <li onClick={() => setIsOpen(false)}>Another</li>
            <li onClick={() => setIsOpen(false)}>AnotherAgain</li>
          </ul>
        </Container>
      ) : (
        <div></div>
      )}
    </nav>
  );
};

export default MobileNav;
