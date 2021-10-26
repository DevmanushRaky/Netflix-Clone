import React, { useState, useEffect } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png"
        alt="Netflix Logo"
      />

      <img
        className="nav__avatar"
        src="https://instagram.flko3-1.fna.fbcdn.net/v/t51.2885-19/s150x150/95901982_3093688824024443_2287546139295088640_n.jpg?_nc_ht=instagram.flko3-1.fna.fbcdn.net&_nc_ohc=wg2uGszVk6EAX-Cf9lb&tp=1&oh=6889a18d083bd0d24f74863e432eafdb&oe=603DD7BF"
        alt="Netflix Logo"
      />
    </div>
  );
}

export default Nav;
