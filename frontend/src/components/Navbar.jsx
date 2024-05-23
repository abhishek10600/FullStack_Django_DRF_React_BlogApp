import { Link, NavLink } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const authStatus = useSelector((state) => state.auth.state);
  console.log(authStatus);
  const [showNavMenu, setShowNavMenu] = useState(false);
  const toggleMenu = () => {
    setShowNavMenu(!showNavMenu);
  };
  return (
    <div className="text-white flex items-center justify-between h-24 px-4 md:mx-auto md:max-w-[1240px]">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `text-4xl w-full font-bold hover:text-blue-300 ${
            isActive ? "text-blue-300" : "text-white"
          }`
        }
      >
        LALA
      </NavLink>
      <ul className="md:flex md:gap-20 md:text-xl hidden">
        <NavLink
          to="/register"
          className={({ isActive }) =>
            `hover:text-blue-300 ${isActive ? "text-blue-300" : "text-white"}`
          }
        >
          Register
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `hover:text-blue-300 ${isActive ? "text-blue-300" : "text-white"}`
          }
          to="/login"
        >
          Login
        </NavLink>
        <button>
          <Link>Logout</Link>
        </button>
      </ul>
      {/* Condition to show the menu and close button in mobile devices */}
      <div onClick={toggleMenu} className="block md:hidden">
        {showNavMenu ? (
          <AiOutlineClose size={30} />
        ) : (
          <AiOutlineMenu size={30} />
        )}
      </div>
      {/* Navigation for mobile devices */}
      <div
        className={
          showNavMenu
            ? "md:hidden fixed left-0 top-20 px-4 border-r border-gray-500 min-w-[50%] h-full ease-in-out duration-700 bg-[#080518]"
            : "md:hidden fixed -left-[100%]"
        }
      >
        <ul className="flex flex-col gap-10 text-xl">
          <NavLink
            className={({ isActive }) =>
              `border-b border-gray-500 py-2 ${
                isActive ? "text-blue-300" : "text-white"
              }`
            }
            to="/"
          >
            <h1>Home</h1>
          </NavLink>
          <div className="flex flex-col gap-10 text-xl">
            <NavLink
              className={({ isActive }) =>
                `border-b border-gray-500 py-2 ${
                  isActive ? "text-blue-300" : "text-white"
                }`
              }
              to="/login"
            >
              Login
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `border-b border-gray-500 py-2 ${
                  isActive ? "text-blue-300" : "text-white"
                }`
              }
              to="/register"
            >
              Register
            </NavLink>
          </div>
          <button className="border-b border-gray-500 py-2 flex">
            <h1>Logout</h1>
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
