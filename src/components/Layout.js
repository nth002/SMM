import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <div style={{ display: "flex", height: "calc(100vh - 56px)" }}>
        <Sidebar />
        <div style={{ flex: 1, padding: "1rem", marginTop: "4.5rem", overflowY: "auto" }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
