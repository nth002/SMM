import React, { useEffect, useState, useRef } from "react";
import { FiLogIn, FiChevronDown  } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/images/Logo.png";

const Navbar = () => {
  const navigate = useNavigate();
  const [isNarrow, setIsNarrow] = useState(true);
  const [isFading, setIsFading] = useState(false);
  const fadeTimeout = useRef(null);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  useEffect(() => {
    const handleScroll = () => {
      const atTop = window.scrollY === 0;
      if ((atTop && !isNarrow) || (!atTop && isNarrow)) {
        setIsFading(true);
        clearTimeout(fadeTimeout.current);
        fadeTimeout.current = setTimeout(() => {
          setIsNarrow(atTop);
          setIsFading(false);
        }, 300);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(fadeTimeout.current);
    };
  }, [isNarrow]);

  return (
    <nav
      className={`navbar ${isNarrow ? "navbar-narrow" : "navbar-full"} ${
        isFading ? "navbar-fade-out" : "navbar-fade-in"
      }`}
      role="navigation"
    >
      <div className="navbar-left">
        <img
          src={logo}
          alt="Logo"
          className="navbar-logo"
          style={{ height: isNarrow ? "30px" : "40px", transition: "height 0.3s" }}
        />

        <ul className="navbar-menu">
          <li className="dropdown">
            <span className="dropbtn">Solutions <FiChevronDown className="dropdown-icon" /></span>
            <div className="dropdown-content">
              <a href="#npa">NPA Management</a>
              <a href="#recovery">Loan Recovery</a>
              <a href="#security">Asset Security</a>
            </div>
          </li>
          <li className="dropdown">
            <span className="dropbtn">Company <FiChevronDown className="dropdown-icon" /></span>
            <div className="dropdown-content">
              <a href="#about">About Us</a>
              <a href="#team">Team</a>
              <a href="#careers">Careers</a>
            </div>
          </li>
          <li className="dropdown">
            <span className="dropbtn">Support <FiChevronDown className="dropdown-icon" /></span>
            <div className="dropdown-content">
              <a href="#contact">Contact</a>
              <a href="#faq">FAQ</a>
              <a href="#help">Help Center</a>
            </div>
          </li>
        </ul>
      </div>

      <button
        onClick={handleLogout}
        className="btn btn-sm text-white"
        style={{ fontSize: "1.2rem" }}
        title="LogIn">
        <FiLogIn />
      </button>
    </nav>
  );
};

export default Navbar;
