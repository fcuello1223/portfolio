import React from "react";
import { motion } from "motion/react";

import { serviceData } from "@/assets/assets";

const Services = ({ isDarkMode }) => {
  return (
    <motion.div
      id="services"
      className="w-full px-[12%] py-10 scroll-mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h4
        className="text-center mb-2 text-lg font-Ovo"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        What I Offer
      </motion.h4>
      <motion.h2
        className="text-center text-5xl font-Ovo"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        My Services...
      </motion.h2>
      <motion.p
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        I am a full stack developer with several projects to showcase. Feel free
        to contact me for more information!
      </motion.p>
      <motion.div
        className="grid grid-cols-auto gap-6 my-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
      >
        {serviceData.map(({ title, description }, index) => {
          return (
            <motion.div
              key={index}
              className="border border-gray-400 rounded-lg px-4 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white"
              whileHover={{scale: 1.05}}
            >
              <h3 className="text-lg my-4 text-gray-700 text-center dark:text-white">
                {title}
              </h3>
              <p className="text-sm text-gray-500 leading-5 text-center dark:text-white/80">
                {description}
              </p>
              {/* <a href={link} className="flex items-center gap-2 text-sm mt-5">
                Read More{" "}
                <Image src={assets.right_arrow} alt="" className="w-4" />
              </a> */}
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default Services;
