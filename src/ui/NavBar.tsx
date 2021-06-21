import React, {FC, useEffect, useState} from "react";
import "./NavBar.css";
const NavBar: FC = () => {
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setShow(true);
      } else {
        setShow(false);
      }

      return () => {
        window.removeEventListener("scroll", () => {});
      };
    });
  }, []);

  return (
    <div className={`navbar ${show && "black_navbar"}`}>
      <img
        alt="Netflix Logo"
        className="navbar-logo"
        src="https://www.androidpolice.com/wp-content/uploads/2015/02/nexus2cee_Netflix_Logo_Digital-Video-e1424532515143.png"
      />
      <img
        alt="Netflix avatar"
        className="navbar-avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
      />
    </div>
  );
};

export default NavBar;
