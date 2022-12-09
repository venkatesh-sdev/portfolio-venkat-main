import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Myimage from "../Assets/my_image.jpg";
import { motion } from "framer-motion";

const Hero = () => {
  const [text, count] = useTypewriter({
    words: ["Hi I'm Venkat", "I'm Developer", "I'm Designer"],
    loop: true,
    delaySpeed: 1500,
  });

  return (
    <div className="max-w-7xl mx-auto p-5 relative select-none">
      <motion.h1
        initial={{
          x: 500,
          opacity: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="text-3xl font-bold text-skin-bodyText text-right mr-3 mt-10  
      sm:mr-20 sm:text-5xl"
      >
        {text}
        <Cursor cursorColor="#d902ee" />
      </motion.h1>

      <motion.div
        initial={{
          x: -500,
          opacity: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="w-64 h-28 mt-16 ml-5 lg:absolute left-0 lg:mt-0 relative"
      >
        <Link href="#projects" className="button ">
          Projects
        </Link>
        <Link href="#experience" className="button absolute right-0 bottom-0">
          Experience
        </Link>
      </motion.div>

      <motion.div
        initial={{
          x: -1000,
          opacity: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex justify-center items-center  flex-col  mt-10 lg:mt-10"
      >
        <Image src={Myimage} alt="MyImage" className="w-80 rounded-[50%]" />
        <p className="tracking-[5px] font-semibold text-skin-bodyText uppercase text-center">
          developer
        </p>
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="w-64 h-28 mt-10 absolute right-5 mr-5 lg:right-0 lg:mt-[-5rem] "
      >
        <Link href="#about" className="button">
          About
        </Link>
        <Link href="#experience" className="button absolute right-0 bottom-0">
          Contact
        </Link>
      </motion.div>
    </div>
  );
};

export default Hero;