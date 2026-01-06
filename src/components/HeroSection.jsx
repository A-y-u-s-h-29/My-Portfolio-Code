import React from 'react'
import { motion, scale } from "framer-motion"
import linkedinPhoto from "../assets/linkedin_photo.png";


const HeroSection = () => {
  const conater = (delay)=>({
    hidden: {x:-100, opacity: 0},
    visible: {
      x:0,
      opacity:1,
      transition:{duration:1, delay: delay}
    }
  })
  return (
    <>
      <section className="text-white flex items-center pb-20  px-6">
        <div className="flex justify-center w-full flex-col md:flex-row items-center ">
          
          {/* Left side (text) */}
          <div className="w-[90%] sm:w-[80%] md:w-[60%] mx-auto text-center">
  <motion.h1 
    variants={conater(0)}
    initial="hidden"
    animate="visible"
    className="text-5xl font-bold m-8"
  >
    Ayush Sharma
  </motion.h1>

  <motion.span 
  variants={conater(0.5)}
    initial="hidden"
    animate="visible"
     className="text-3xl bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent">
    Full Stack Developer
  </motion.span>

  <motion.p 
  variants={conater(1)}
    initial="hidden"
    animate="visible"
  className="text-lg m-8">
    Skilled Full-Stack Developer with expertise in React, Node.js, Java, and MySQL, 
    capable of building responsive front-end interfaces and robust back-end systems. 
    Focused on writing clean code and delivering scalable, user-friendly web applications.
  </motion.p>
</div>
 

          {/* Right side (image) */}
          <div className="flex justify-center">
            <motion.img
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}   // ✅ use "animate", not "animation"
            transition={{ duration: 1, delay: 0.1 }} 
            whileHover={{scale:1.2}}
            src={linkedinPhoto} className="w-50 sm:w-[140px] md:w-[250px] rounded-lg animate-fadeIn" />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
