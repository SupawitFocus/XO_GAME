import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
        <Link to="/"><button className="btn-link">Home</button></Link>
        <Link to="/history"> <button className="btn-link">History</button></Link>
        <Outlet />
    </>
  )
};

export default Layout;