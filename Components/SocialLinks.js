import React from 'react'
import { SocialIcon } from 'react-social-icons'
import {motion} from 'framer-motion'


const iconColor = "#ffd79d";

const SocialLinks = () => {
  return (
    <motion.div 
    initial={{
      y:-400,
      opacity:0.5,
    }}
    animate={{
      y:0,
      opacity:1,
    }}
    transition={{
      duration:1.5,
    }}
    className="flex gap-2 flex-row ">
        <SocialIcon
          url="https://linkedin.com/"
          fgColor={`${iconColor}`}
          bgColor="transparent"
          className="cursor-pointer rounded-md"
        />
        <SocialIcon
          url="https://youtube.com/"
          fgColor={`${iconColor}`}
          bgColor="transparent"
          className="cursor-pointer rounded-md"
        />
        <SocialIcon
          url="https://instagram.com/"
          fgColor={`${iconColor}`}
          bgColor="transparent"
          className="cursor-pointer rounded-md"
        />
        <SocialIcon
          url="https://github.com/venkatesh-sdev"
          fgColor={`${iconColor}`}
          bgColor="transparent"
          className="cursor-pointer rounded-md"
        />
      </motion.div>
  )
}

export default SocialLinks