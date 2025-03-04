import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

import { assets, infoList } from "@/assets/assets";

const About = ({ isDarkMode }) => {
  return (
    <motion.div
      className="w-full px-[12%] py-10 scroll-mt-20 text-center"
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h4 className="mb-2 text-lg font-Ovo">Introduction</motion.h4>
      <motion.h2 className="text-5xl font-Ovo">About Me</motion.h2>
      <motion.div className="flex flex-col items-center gap-10 my-16 max-w-4xl mx-auto">
        <motion.div className="w-full sm:w-[60%] max-w-md mx-auto rounded-3xl">
          <Image
            src={assets.my_pic}
            alt="user"
            className="w-full h-auto rounded-3xl"
          />
        </motion.div>
        <motion.p className="max-w-2xl mx-auto font-Ovo">
          I am a full stack developer with several projects to showcase. Feel
          free to contact me for more information!
        </motion.p>
        <motion.ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {infoList.map(({ icon, iconDark, title, description }, index) => (
            <motion.li
              key={index}
              className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50"
            >
              <Image
                src={isDarkMode ? iconDark : icon}
                alt={title}
                className="w-7 mt-3"
              />
              <h3 className="my-4 font-semibold text-gray-700 dark:text-white">
                {title}
              </h3>
              <p className="text-gray-600 text-sm dark:text-white/80">
                {description}
              </p>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </motion.div>
  );
};

export default About;
