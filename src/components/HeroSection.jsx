import React from 'react';
import { motion } from "framer-motion";
import { HashLink } from 'react-router-hash-link';
import linkedinPhoto from "../assets/linkedin_photo.png";

const HeroSection = () => {
  // Improved animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const imageVariants = {
    hidden: { 
      scale: 0.8, 
      opacity: 0,
      rotate: -5 
    },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.5
      }
    },
    hover: {
      scale: 1.05,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const gradientVariants = {
    hidden: { backgroundPosition: "0% 50%" },
    visible: {
      backgroundPosition: "100% 50%",
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "linear"
      }
    }
  };

  return (
    <section className="relative overflow-hidden text-white py-20 px-6">
      {/* Animated background elements */}
      <motion.div 
        className="absolute top-10 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div 
        className="absolute bottom-10 right-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left side (text) */}
          <motion.div 
            className="w-full md:w-1/2"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-block px-3 py-1 text-sm font-semibold text-pink-300 bg-pink-900/30 rounded-full mb-4">
                Hello, I'm
              </span>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            >
              Ayush{' '}
              <span className="relative inline-block">
                <span className="relative z-10">Sharma</span>
                <motion.span 
                  className="absolute bottom-0 left-0 w-full h-3 bg-gradient-to-r from-pink-500/30 to-purple-500/30 -z-10"
                  animate={{
                    width: ["0%", "100%", "0%"],
                    left: ["0%", "0%", "100%"]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </span>
            </motion.h1>

            <motion.div variants={itemVariants} className="mb-6">
              <motion.span 
                variants={gradientVariants}
                initial="hidden"
                animate="visible"
                className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-[length:200%_auto] bg-clip-text text-transparent"
              >
                ReactJS Developer
              </motion.span>
            </motion.div>

            <motion.p 
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl"
            >
              Skilled Reactjs Developer with expertise in React, Node.js, Express.js , Java, and MySQL, 
              capable of building responsive front-end interfaces and robust back-end systems. 
              Focused on writing clean code and delivering scalable, user-friendly web applications.
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="flex gap-4"
            >
             <motion.button
  onClick={() => {
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth"
    });
  }}
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-pink-500/25 transition-shadow"
>
  View Projects
</motion.button>
              <motion.button 
               onClick={() => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth"
    });
  }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border-2 border-purple-500 rounded-lg font-semibold hover:bg-purple-500/10 transition-colors"
              >
                Contact Me
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right side (image) */}
          <motion.div 
            className="w-full md:w-1/2 flex justify-center"
            initial="hidden"
            animate="visible"
          >
            <div className="relative">
              <motion.div 
                className="absolute -inset-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-3xl blur-xl opacity-30"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <motion.div
                variants={imageVariants}
                whileHover="hover"
                className="relative"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
                <motion.img
                  src={linkedinPhoto}
                  alt="Ayush Sharma"
                  className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl object-cover border-4 border-transparent bg-gradient-to-r from-pink-500 to-purple-600 bg-origin-border"
                  whileHover={{ 
                    rotate: 0,
                    transition: { 
                      type: "spring",
                      stiffness: 300,
                      damping: 20
                    }
                  }}
                />
                
                {/* Floating elements around image */}
                {[1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    className={`absolute w-${i*4} h-${i*4} rounded-full bg-gradient-to-r from-pink-400/20 to-purple-400/20 border border-white/10`}
                    animate={{
                      y: [0, -20, 0],
                      x: [0, i%2 === 0 ? 15 : -15, 0],
                    }}
                    transition={{
                      duration: 2 + i,
                      repeat: Infinity,
                      delay: i * 0.5,
                      ease: "easeInOut"
                    }}
                    style={{
                      top: `${i * 20}%`,
                      left: `${i % 2 === 0 ? 80 : 20}%`,
                      width: `${i * 12}px`,
                      height: `${i * 12}px`
                    }}
                  />
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;