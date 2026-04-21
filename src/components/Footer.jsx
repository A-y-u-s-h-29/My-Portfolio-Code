import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  const links = [
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/ayush-sharma-a4604b335",
      color: "hover:text-blue-400",
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      url: "https://github.com/A-y-u-s-h-29",
      color: "hover:text-gray-300",
    },
    {
      name: "LeetCode",
      icon: <SiLeetcode />,
      url: "https://leetcode.com/u/Ayushsharma2004/",
      color: "hover:text-yellow-400",
    },
    {
      name: "Email",
      icon: <FaEnvelope />,
      url: "https://mail.google.com/mail/?view=cm&fs=1&to=ayushsharma00123456@gmail.com",
      color: "hover:text-red-400",
    },
    {
      name: "Phone",
      icon: <FaPhone />,
      url: "tel:7982474628",
      color: "hover:text-green-400",
    },
  ];

  return (
    <footer className="relative py-12 px-4 md:px-8 lg:px-12 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border-t border-white/10 overflow-hidden" id="contact">
      
      {/* Glow Background */}
      <motion.div
        className="absolute top-0 left-1/3 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, -20, 0] }}
        transition={{ duration: 15, repeat: Infinity }}
      />

      <div className="max-w-6xl mx-auto relative z-10 text-center">
        
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"
        >
          Let’s Connect 🚀
        </motion.h2>

        {/* Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex flex-wrap justify-center gap-6 mb-8"
        >
          {links.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-gray-300 ${link.color} transition-all`}
            >
              <span className="text-lg">{link.icon}</span>
              {link.name}
            </motion.a>
          ))}
        </motion.div>

        {/* Copyright */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-gray-500 text-sm"
        >
          © {new Date().getFullYear()} Ayush Sharma. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;