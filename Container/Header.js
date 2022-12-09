import React, { useState } from "react";
import { SocialIcon } from "react-social-icons";
import { SocialLinks } from "../Components";
import {motion} from 'framer-motion'



const Header = () => {

  const [iconColor, setIconColor] = useState("#f162ff");
  return (
    <header className="bg-skin-fill shadow-sm shadow-slate-500/50 flex justify-between p-4 max-w-7xl mx-auto sticky top-0 z-50">
      <SocialLinks/>
      <motion.div 
      initial={{
        x:-400,
        opacity:0.5,
      }}
      animate={{
        x:0,
        opacity:1,
      }}
      transition={{
        duration:1.5,
      }} className="flex items-center cursor-pointer">
        <SocialIcon
          network="email"
          url="https://www.gmail.com/"
          fgColor={`${iconColor}`}
          bgColor="transparent"
          className="cursor-pointer rounded-md"
        />
        <p
          className={` uppercase hidden text-skin-icon
          md:inline-flex text-xs pr-1`}
        >
          Hit to contact me
        </p>
      </motion.div>
    </header>
  );
};

export default Header;
