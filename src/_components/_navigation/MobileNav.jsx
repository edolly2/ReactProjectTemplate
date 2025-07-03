import "../../_styles/MobileNav.css";
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav>
      <div>
        <button onClick={toggleMenu}>
          <IoMdMenu />
        </button>
      </div>
      {isOpen ? (
        <ul className="mobile-nav">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Another</li>
          <li>AnotherAgain</li>
        </ul>
      ) : (
        <div></div>
      )}
    </nav>
  );
};

export default MobileNav;
