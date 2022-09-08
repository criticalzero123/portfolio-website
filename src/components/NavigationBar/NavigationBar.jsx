import React, { useState } from "react";
import { Link } from "react-scroll";

import "./NavigationBar.css";

const NavigationBar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div className="sticky top-0 z-10 shadow-xl">
      <div
        className="flex flex-row my-5 container mx-auto p-3 items-center"
        style={{ backgroundColor: "#141414" }}
      >
        <div className="mr-auto cursor-pointer">
          <Link to="header" spy={true} smooth={true} offset={-80}>
            <p className="text-transparent bg-clip-text bg-gradient-to-r to-[#EE6352] from-[#95A7EF] text-4xl font-extrabold">
              JDC.
            </p>
          </Link>
        </div>
        {/* For the bigger screen */}
        <div className="hidden lg:flex">
          <Link to="about" spy={true} smooth={true} offset={-50}>
            <div className="mx-6 nav-text">
              <span className="nav-number">#0.</span> About
            </div>
          </Link>
          <Link to="projects" spy={true} smooth={true} offset={-130}>
            <div className="mx-6 nav-text">
              <span className="nav-number">#1.</span> Projects
            </div>
          </Link>

          <Link to="contact" spy={true} smooth={true} offset={-50}>
            <div className="mx-6 nav-text">
              <span className="nav-number">#2.</span> Contact
            </div>
          </Link>
        </div>
        {/* Hamburger Nav */}
        {showSidebar ? (
          <button
            className="flex text-4xl text-white items-center cursor-pointer fixed right-8 top-3 z-50 lg:hidden"
            onClick={() => setShowSidebar(!showSidebar)}
          >
            x
          </button>
        ) : (
          <div
            className="flex lg:hidden cursor-pointer right-8 top-5 fixed"
            onClick={() => setShowSidebar(!showSidebar)}
          >
            <div className="space-y-2">
              <span className="block w-6 h-0.5 nav-burger-color"></span>
              <span className="block w-6 h-0.5 nav-burger-color"></span>
              <span className="block w-3.5 h-0.5 nav-burger-color"></span>
            </div>
          </div>
        )}

        <div
          className={`lg:hidden top-0 right-0 w-[100vw] sm:w-[40vw] drawer-style pl-5 sm:pl-7 fixed h-full z-40 ease-in-out duration-300 ${
            showSidebar ? "translate-x-0 " : "translate-x-full"
          }`}
        >
          <div className="mt-20">
            <div className="mb-5 cursor-pointer drawer-item">
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-50}
                onClick={() => setShowSidebar(!showSidebar)}
              >
                <span className="nav-number">#0.</span> About
              </Link>
            </div>
            <div className="mb-5 cursor-pointer drawer-item">
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-130}
                onClick={() => setShowSidebar(!showSidebar)}
              >
                <span className="nav-number">#1.</span> Projects
              </Link>
            </div>
            <div className="mb-5 cursor-pointer drawer-item">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-40}
                onClick={() => setShowSidebar(!showSidebar)}
              >
                <span className="nav-number">#2.</span> Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
