import { useState } from "react";
import { CgNametag } from "react-icons/cg";
import { images } from "../assets";
import HamburgerIcon from "../assets/hamburgerIcon";

const Nav = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  return (
    <div>
      <div className="bg-[#FAFFF8] py-4 shadow-sm fixed left-0 right-0 z-50 w-full h-[120px] flex items-center justify-between p-4 md:p-8">
        <h1>
          <a
            className="text-[#C3990F] text-4xl flex items-center font-mono tracking-wider"
            href="#home"
          >
            <CgNametag />
            Maurice
          </a>
        </h1>
        <div className="md:flex items-center justify-center space-x-4 hidden">
          <li className="list-none">
            <a
              className="text-[#C3990F] text-xl hover:bg-indigo-800 rounded-full px-5 py-2"
              href="#skills"
            >
              Skills
            </a>
          </li>
          <li className="list-none">
            <a
              className="text-[#C3990F] text-xl hover:bg-indigo-800 rounded-full px-5 py-2"
              href="#projects"
            >
              Projects
            </a>
          </li>
          <li className="list-none">
            <a
              className="text-[#C3990F] text-xl hover:bg-indigo-800 rounded-full px-5 py-2"
              href="#contact"
            >
              Contact Me
            </a>
          </li>
        </div>
        <div onClick={handleNav} className="block md:hidden cursor-pointer">
          {nav ? (
            <img src={images.closebtn} className="w-6 h-6" alt="close" />
          ) : (
            <HamburgerIcon size={40} className="bg-[#C3990F]" />
          )}
        </div>
      </div>
      <div
        className={
          nav
            ? "fixed h-full left-0 top-0 w-[65%] bg-[#FAFFF8] z-50 space-y-3 mt-10 flex flex-col items-center border-r-2 border-gray-300 duration-500 ease-in-out"
            : "fixed left-[-100%] top-0 h-full bg-[#FAFFF8] z-50 flex flex-col items-center ease-in-out duration-500"
        }
      >
        <h1>
          <a
            className="text-[#C3990F] text-4xl flex items-center font-mono tracking-wider"
            href="#home"
            onClick={closeNav}
          >
            <CgNametag />
            Maurice
          </a>
        </h1>
        <li className="list-none">
          <a
            className="text-[#C3990F] text-xl hover:bg-indigo-800 rounded-full px-5 py-2"
            href="#skills"
            onClick={closeNav}
          >
            Skills
          </a>
        </li>
        <li className="list-none">
          <a
            className="text-[#C3990F] text-xl hover:bg-indigo-800 rounded-full px-5 py-2"
            href="#projects"
            onClick={closeNav}
          >
            Projects
          </a>
        </li>
        <li className="list-none">
          <a
            className="text-[#C3990F] text-xl hover:bg-indigo-800 rounded-full px-5 py-2"
            href="#contact"
            onClick={closeNav}
          >
            Contact
          </a>
        </li>
      </div>
    </div>
  );
};

export default Nav;