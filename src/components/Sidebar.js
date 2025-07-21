import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import '../index.css';

const Sidebar = () => {
  const location = useLocation();
  const [isOrgOpen, setIsOrgOpen] = useState(false);
  const submenuRef = useRef(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    if (location.pathname.startsWith("/organization")) {
      setIsOrgOpen(true);
    }
  }, [location.pathname]);

  useEffect(() => {
    if (submenuRef.current) {
      if (isOrgOpen) {
        setHeight(`${submenuRef.current.scrollHeight}px`);
      } else {
        setHeight("0px");
      }
    }
  }, [isOrgOpen]);

  const toggleOrgMenu = () => setIsOrgOpen(prev => !prev);

  const getActiveClass = ({ isActive }) =>
    isActive ? "nav-link active-link text-white" : "nav-link text-white";

  // Dot style for bullets
  const Dot = () => (
    <span
      style={{
        display: "inline-block",
        width: "8px",
        height: "8px",
        backgroundColor: "white",
        borderRadius: "50%",
        marginRight: "0.5rem",
        verticalAlign: "middle",
      }}
    />
  );

  return (
    <div
      className="bg-dark text-white p-4"
      style={{ width: '250px', height: '100%', minHeight: '100vh' }}
    >
      <ul className="nav flex-column">

        {/* Dashboard */}
        <li className="nav-item" style={{ marginLeft: "-1rem", paddingTop: "3.5rem" }} >
          <NavLink to="/dashboard" end className={getActiveClass}>
            <Dot />
            Dashboard
          </NavLink>
        </li>

        {/* Organization */}
        <li
          className="nav-item mt-3 fw-bold"
          style={{ cursor: "pointer" }}
          onClick={toggleOrgMenu}
        >
          <Dot />
          Organization
          <span className="float-end">{isOrgOpen ? "▾" : "▸"}</span>
        </li>

        <ul
          ref={submenuRef}
          className="nav flex-column ms-3 mt-2 collapse-submenu"
          style={{
            height,
            overflow: "hidden",
            transition: "height 0.35s ease",
            display: "block",
          }}
        >
          <li className="nav-item">
            <NavLink to="/NPA/assets" className={getActiveClass}>
              <Dot />
              Assets
            </NavLink>
          </li>
        </ul>
 
        
      </ul>
    </div>
  );
};

export default Sidebar;
