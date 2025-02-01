import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {

  const {isAuth, login , logout} = useAuth();
  return (
    <div>
      <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
        <Link to="/">
          <div className="text-xl font-bold">ASAP-FAQS</div>
        </Link>
        {isAuth ? (
          <button onClick={logout} className="px-4 py-2 rounded border border-white text-white">
            Logout
          </button>
        ) : (
          <Link to="/login">
            <button className="bg-blue-500 px-4 py-2 rounded text-white hover:bg-blue-600">Login</button>
          </Link>
        )}
      </nav>
      <Outlet />
    </div>
  );
};

export default Navbar;
