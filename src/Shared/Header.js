import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { AuthContext } from "../contexts/AuthProvider/AuthProvider";
import "../App.css";
const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const createTheme = () => {};

  const menuItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/shop">Shop</Link>
      </li>
      {user?.email ? (
        <li>
          <Link to="/orders">Orders</Link>
        </li>
      ) : (
        <li>
          <Link to="/login">Login</Link>
        </li>
      )}
    </>
  );
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="h-20 mb-8 pt-8 navbar bg-base-100">
      <div className="navbar-start font-semibold">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
      <div className="navbar-end">
        <select className="gradientselect" data-choose-theme>
          <option disabled value="">
            Pick a theme
          </option>
          <option value="">Default</option>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>

        {user?.uid ? (
          <>
            <div className="dropdown dropdown-hover">
              <label tabIndex={0} className="btn m-1">
                My Account
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box"
              >
                <div className="w-8 h-8 rounded-full">
                  <img
                    src={user?.photoURL}
                    alt=""
                    className="rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mb-8"
                  />
                </div>
                <li>
                  <Link to="/orders">Orders</Link>
                </li>
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
                <li>
                  <button
                    onClick={handleLogOut}
                    className="btn btn-sm hover:btn-accent text-white"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <Link to="/login" className="btn">
            Get started
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
