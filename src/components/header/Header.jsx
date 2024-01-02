import React, { useRef, useEffect, useState } from "react";
import "./header.scss";
import logo from "../../assets/image/logo.png";
const headerNav = [
  {
    display: "Home",
    path: "#hero",
    // class: 'active'
  },

  {
    display: "Skills",
    path: "#skills",
  },
  {
    display: "Portfolio",
    path: "#projects",
  },
  {
    display: "About",
    path: "#about",
  },
  {
    display: "Contact",
    path: "#contact",
  },
];
const Header = () => {
  // const {pathname} = useLocation();
  const headerRef = useRef(null);
  const logoRef = useRef(null);
  const header__nav = useRef(null);
  // const active = headerNav.findIndex((item)=>item.path === pathname)
  const [menu, setMenu] = useState("menu");

  const handleMenuButton = () => {
    if (menu === "menu") {
      setMenu("x");
      header__nav.current.classList.add("active");
    } else {
      setMenu("menu");
      header__nav.current.classList.remove("active");
    }
  };

  useEffect(() => {
    const shrinkHeader = () => {
      if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
      ) {
        headerRef.current.classList.add("shrink");
        logoRef.current.classList.add("sm-logo");
      } else {
        headerRef.current.classList.remove("shrink");
        logoRef.current.classList.remove("sm-logo");
      }
    };
    window.addEventListener("scroll", shrinkHeader);

    return () => {
      window.removeEventListener("scroll", shrinkHeader);
    };
  }, []);

  return (
    <>
      <div ref={headerRef} className="header" >
        {/* <div className="header__wrap container"> */}
        <div className="logo">
          {/* <ul> */}

          <img src={logo} ref={logoRef} alt="logo" />
          <a href="/">maan</a>

          {/* </ul> */}
        </div>

        <div
          className={`bx bx-${menu}`}
          onClick={handleMenuButton}
          id="menu-icon"
        ></div>
        
        <ul className="header__nav" ref={header__nav}>
          {headerNav.map((item, i) => (
            <li
              key={i}
              // className={`${i === active ? 'active' : ""}`}
              className={item.class}
            >
              <a href={item.path}>{item.display}</a>
            </li>
          ))}
        </ul>
      </div>
      {/* </div> */}
    </>
  );
};

export default Header;
