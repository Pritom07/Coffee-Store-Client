import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { GiCoffeeCup } from "react-icons/gi";
import { ImUsers } from "react-icons/im";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink to="/">
          <FaHome className="inline" />
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/addcoffee">
          <GiCoffeeCup className="inline" /> Add Coffee
        </NavLink>
      </li>
      <li>
        <NavLink to="/users">
          <ImUsers className="inline" /> Users
        </NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-[#6F4E37]">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-semibold"
            >
              {navLinks}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            <img src="Images/more/2.png" className="w-14"></img>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-white font-semibold text-[16px]">
            {navLinks}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="bg-cyan-500 text-white btn border-2 border-cyan-500">
            SignIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
