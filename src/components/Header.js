import { useState, useRef } from "react";
import { AiOutlineMenuUnfold, AiOutlineClose } from "react-icons/ai";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const sideNav = useRef();

  function openNav() {
    sideNav.current.classList.toggle("-ml-52");
    setIsOpen((prev) => {
      console.log(sideNav);
      return !prev;
    });
  }
  let navIcon = isOpen ? <AiOutlineClose /> : <AiOutlineMenuUnfold />;
  return (
    <div className="Header text-white flex items-center justify-between max-w-vw mx-auto py-4 lg:py-8 font-PT-Sans-Narrow relative px-4">
      <button
        className="nav-icon md:hidden hover:border-pale-azure text-xl p-2 border rounded active:scale-75 mr-4 transition-all duration-300"
        onClick={openNav}
      >
        {navIcon}
      </button>
      <div className="logo  text-3xl sm:text-5xl text-Iris cursor-pointer font-satisfy w-full md:w-auto text-center md:text-left">
        crossswirex
      </div>
      <div className="Navbar hidden md:block font-semibold">
        <ul className="flex">
          <li className="border-b-2 border-transparent hover:border-pale-azure rounded mx-6 transition-all duration-500">
            <a href="/" className="px-2 py-1 inline-block">
              Home
            </a>
          </li>
          <li className="border-b-2 border-transparent hover:border-pale-azure rounded mx-6 transition-all duration-500">
            <a href="#services" className="px-2 py-1 inline-block">
              Services
            </a>
          </li>
          <li className="border-b-2 border-transparent hover:border-pale-azure rounded mx-6 transition-all duration-500">
            <a href="#project" className="px-2 py-1 inline-block">
              Project
            </a>
          </li>
          <li className="border-b-2 border-transparent hover:border-pale-azure rounded mx-6 transition-all duration-500">
            <a href="#team" className="px-2 py-1 inline-block">
              Team
            </a>
          </li>
        </ul>
      </div>
      <div className="hidden lg:block">
        <div className="border border-white hover:border-pale-azure hover:text-pale-azure transition-all duration-500">
          <a href="#contact" className="py-2 px-4 inline-block">
            Contact us
          </a>
        </div>
      </div>
      <div
        className="side-nav bg-Indigo w-40 text-center text-sm font-meduim rounded-md absolute top-24 -ml-52 md:hidden transistion-all duration-700"
        ref={sideNav}
      >
        <ul className="w-full flex flex-col">
          <li className="hover:bg-Iris rounded border-b border-tropical-indigo">
            <a href="/" className="py-2 inline-block w-full">
              Home
            </a>
          </li>
          <li className="hover:bg-Iris rounded border-b border-tropical-indigo">
            <a href="#services" className="py-2 inline-block w-full">
              Services
            </a>
          </li>
          <li className="hover:bg-Iris rounded border-b border-tropical-indigo">
            <a href="#Projects" className="py-2 inline-block w-full">
              Projects
            </a>
          </li>
          <li className="hover:bg-Iris rounded  border-b border-tropical-indigo">
            <a href="Team" className="py-2 inline-block w-full">
              Team
            </a>
          </li>
          <li className="hover:bg-Iris rounded">
            <a href="#contact" className="py-2 inline-block w-full">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
