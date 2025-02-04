import React from "react";
import Image from "next/image";

import { assets } from "@/assets/assets";

const Footer = ({ isDarkMode }) => {
  return (
    <div className="mt-20">
      <div className="text-center ">
        <h1 className="text-3xl">Francisco J. Cuello</h1>
        <div className="w-max flex items-center gap-2 mx-auto">
          <Image
            src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
            alt=""
            className="w-6"
          />
          <h3>fcuel566@gmail.com</h3>
        </div>
      </div>
      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>&copy; 2025 Francisco J. Cuello. All Rights Reserved.</p>
        <ul className="flex items-center justify-center gap-10 mt-4 sm:mt-0">
          <li>
            <a href="http://www.github.com/fcuello1223" target="_blank">
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/francisco-cuello-2791741b5/"
              target="_blank"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              Twitter
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
