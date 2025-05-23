import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";

import { assets } from "@/assets/assets";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [scroll, setScroll] = useState(false);

  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };

  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  }, []);

  return (
    <React.Fragment>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
        <Image src={assets.header_bg_color} alt="" className="w-full" />
      </div>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex justify-between items-center ${
          scroll
            ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm z-50 dark:bg-darkTheme dark:shadow-white/20"
            : "z-50"
        }`}
      >
        <a href="#top">
          <h1 className="w-full text-3xl cursor-pointer">
            Francisco J. Cuello
          </h1>
        </a>
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
            scroll ? "" : "bg-white shadow-sm bg-opacity-30 dark:border dark:border-white/50 dark:bg-transparent"
          } `}
        >
          <li>
            <a href="#top" className="font-Ovo">
              Home
            </a>
          </li>
          <li className="font-Ovo">
            <a href="#about" className="font-Ovo">
              About Me
            </a>
          </li>
          <li className="font-Ovo">
            <a href="#services" className="font-Ovo">
              Services
            </a>
          </li>
          <li className="font-Ovo">
            <a href="#work" className="font-Ovo">
              My Work
            </a>
          </li>
          <li className="font-Ovo">
            <a href="#contact" className="font-Ovo">
              Contact Me
            </a>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <button onClick={() => setIsDarkMode((prev) => !prev)}>
            <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt="" className="w-6" />
          </button>
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo"
          >
            Contact <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} alt="" className="w-3" />
          </a>
          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt="" className="w-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        <ul
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-darkHover dark:text-white"
          ref={sideMenuRef}
        >
          <div className="absolute top-6 right-6" onClick={closeMenu}>
            <Image
              src={isDarkMode ? assets.close_white : assets.close_black}
              alt=""
              className="w-5 cursor-pointer"
            />
          </div>
          <li>
            <a href="#top" className="font-Ovo" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li className="font-Ovo">
            <a href="#about" className="font-Ovo" onClick={closeMenu}>
              About Me
            </a>
          </li>
          <li className="font-Ovo">
            <a href="#services" className="font-Ovo" onClick={closeMenu}>
              Services
            </a>
          </li>
          <li className="font-Ovo">
            <a href="#work" className="font-Ovo" onClick={closeMenu}>
              My Work
            </a>
          </li>
          <li className="font-Ovo">
            <a href="#contact" className="font-Ovo">
              Contact Me
            </a>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
