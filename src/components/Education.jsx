import React from "react";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <div className="pb-20 text-white flex items-center flex-col">
      <h1 className="text-5xl font-bold mb-8">Education</h1>

      {/* B.Tech */}
      <motion.div
        // initial={{ opacity: 0, y: 50 }}        
        // animate={{ opacity: 1, y: 0 }}          
        transition={{ duration: 0.4, delay: 0.1 }}
        whileHover={{ scale: 1.05 }}           
        whileTap={{ scale: 0.95 }}
        className="p-6 m-2 rounded-xl w-fit flex items-center flex-col bg-gray-900"
      >
        <h2 className="text-xl font-semibold text-indigo-400">
          Bachelor of Technology (B.Tech)
        </h2>
        <p className="text-gray-300">Computer Science & Engineering</p>
        <p className="text-gray-400 text-sm">
          Dr. A.P.J. Abdul Kalam Technical University • 2022 - 2026
        </p>
      </motion.div>

      {/* 12th */}
      <motion.div
        // initial={{ opacity: 0, y: 50 }}
        // animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1}}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="p-6 m-2 rounded-xl w-fit flex items-center flex-col bg-gray-900"
      >
        <h2 className="text-xl font-semibold text-indigo-400">
          Senior Secondary (12th)
        </h2>
        <p className="text-gray-300">CBSE Board</p>
        <p className="text-gray-400 text-sm">2021 – 2022</p>
      </motion.div>

      {/* 10th */}
      <motion.div
        // initial={{ opacity: 0, y: 50 }}
        // animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="p-6 m-2 rounded-xl w-fit flex items-center flex-col bg-gray-900"
      >
        <h2 className="text-xl font-semibold text-indigo-400">Secondary (10th)</h2>
        <p className="text-gray-300">CBSE Board</p>
        <p className="text-gray-400 text-sm">2019 – 2020</p>
      </motion.div>
    </div>
  );
};

export default Education;
