import { NavLink} from "react-router-dom";
import '../index.css';

const Sidebar = () => {

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
      className="text-white sidebarMain p-4"
      style={{ width: '250px', height: '100%', minHeight: '100vh'}}
    >
      <ul className="nav flex-column">

        {/* Dashboard */}
        <li className="nav-item" style={{ marginLeft: "-1rem", paddingTop: "0rem" }} >
          <NavLink to="/dashboard" end className={getActiveClass}>
            <Dot />
            Dashboard
          </NavLink>
        </li>        
      </ul>
    </div>
  );
};

export default Sidebar;
