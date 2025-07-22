import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";

const Layout = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 1000); // fake route load time
    return () => clearTimeout(timeout);
  }, [location.pathname]);

  return (
    <>
      {loading && <Loader />}
      <div>
        <Navbar />
        <div style={{ display: "flex", marginTop: "2.3rem", height: "calc(100vh - 56px)" }}>
          <Sidebar />
          <div style={{ flex: 1, padding: "1rem", marginTop: "0rem", overflowY: "auto" }}>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
