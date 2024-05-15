import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

const Navbar = () => {
  const [showNavMenu, setShowNavMenu] = useState(false);
  const toggleMenu = () => {
    setShowNavMenu(!showNavMenu);
  };
  return (
    <div className="text-white flex items-center justify-between h-24 px-4 md:mx-auto md:max-w-[1240px]">
      <Link className="text-3xl w-full font-bold" to="/">
        <h1>Project</h1>
      </Link>
      <ul className="md:flex md:gap-20 md:text-xl hidden">
        <Link className="" to="/register">
          <h1>Register</h1>
        </Link>
        <Link className="" to="/login">
          <h1>Login</h1>
        </Link>
        <button>
          <Link>
            <h1>Logout</h1>
          </Link>
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
          <Link className="border-b border-gray-500 py-2" to="/">
            <h1>Home</h1>
          </Link>
          <div className="flex flex-col gap-10 text-xl">
            <Link className="border-b border-gray-500 py-2" to="/login">
              Login
            </Link>
            <Link className="border-b border-gray-500 py-2" to="/register">
              Register
            </Link>
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
