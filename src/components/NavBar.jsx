import React from 'react';
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { useState } from 'react';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    {
      href: "https://www.linkedin.com/in/ayush-sharma-a4604b335/",
      icon: <FaLinkedin />,
      label: "LinkedIn"
    },
    {
      href: "https://github.com/A-y-u-s-h-29",
      icon: <FaGithub />,
      label: "GitHub"
    },
    {
      href: "mailto:ayushsharma00123456@gmail.com",
      icon: <FaEnvelope />,
      label: "Email"
    }
  ];

  const logoVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.2
      }
    },
    hover: {
      scale: 1.1,
      rotate: [0, 10, -10, 0],
      transition: {
        rotate: {
          repeat: Infinity,
          duration: 1.5,
          ease: "easeInOut"
        },
        scale: {
          duration: 0.2
        }
      }
    }
  };

  const iconVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1 + 0.4,
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }),
    hover: {
      scale: 1.2,
      y: -3,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: { scale: 0.9 }
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const menuItemVariants = {
    closed: { x: 20, opacity: 0 },
    open: { 
      x: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24
      }
    }
  };

  return (
    <>
      <motion.nav 
        className="text-white fixed top-0 left-0 right-0 z-50 py-4 px-4 md:px-8 lg:px-12 backdrop-blur-md bg-gradient-to-b from-black/50 to-transparent border-b border-white/10"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <motion.div
            variants={logoVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            className="relative group"
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full blur opacity-0 group-hover:opacity-70 transition-opacity duration-300" />
            <div className="relative">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                AS
              </div>
              <motion.div 
                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-600 group-hover:w-full transition-all duration-300"
                animate={{ width: ["0%", "100%", "0%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <motion.div 
              className="flex items-center gap-6"
              initial="hidden"
              animate="visible"
            >
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  custom={i}
                  variants={iconVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  whileTap="tap"
                  className="relative group"
                  aria-label={link.label}
                >
                  <div className="absolute -inset-3 bg-gradient-to-r from-pink-500/0 to-purple-600/0 group-hover:from-pink-500/20 group-hover:to-purple-600/20 rounded-full blur transition-all duration-300" />
                  <div className="relative text-2xl md:text-2xl">
                    {link.icon}
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-600 group-hover:w-4 transition-all duration-300" />
                </motion.a>
              ))}
            </motion.div>

            {/* Connect Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden lg:inline-block px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full font-semibold text-sm hover:shadow-lg hover:shadow-pink-500/25 transition-shadow relative overflow-hidden group"
              >
                <span className="relative z-10">Let's Connect</span>
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-2xl relative z-50 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            <motion.div
              animate={isMenuOpen ? "open" : "closed"}
              className="relative w-6 h-6"
            >
              <motion.span
                className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full"
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: 45, y: 8 }
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="absolute top-2 left-0 w-full h-0.5 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full"
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 }
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full"
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: -45, y: -8 }
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        variants={menuVariants}
        initial="closed"
        animate={isMenuOpen ? "open" : "closed"}
        className="fixed inset-0 z-40 md:hidden"
        style={{ pointerEvents: isMenuOpen ? "auto" : "none" }}
      >
        {/* Backdrop */}
        {isMenuOpen && (
          <motion.div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMenuOpen(false)}
          />
        )}

        {/* Menu Content */}
        <div className="absolute top-0 right-0 h-full w-64 bg-gradient-to-b from-gray-900/95 to-black/95 backdrop-blur-xl border-l border-white/10 shadow-2xl">
          <div className="flex flex-col items-center justify-center h-full p-8 space-y-8">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={menuItemVariants}
                whileHover={{ x: 10 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-4 text-xl w-full p-4 rounded-lg hover:bg-white/5 transition-colors group"
              >
                <motion.div 
                  className="text-2xl"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {link.icon}
                </motion.div>
                <span className="font-medium bg-gradient-to-r from-pink-300 to-purple-400 bg-clip-text text-transparent">
                  {link.label}
                </span>
                <motion.div 
                  className="ml-auto w-2 h-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-600"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                />
              </motion.a>
            ))}

            {/* Mobile Connect Button */}
            <motion.a
              href="#contact"
              variants={menuItemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(false)}
              className="mt-8 px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full font-semibold text-center w-full relative overflow-hidden group"
            >
              <span className="relative z-10">Let's Connect</span>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default NavBar;