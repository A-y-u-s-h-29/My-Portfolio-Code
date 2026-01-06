import React from 'react'
import {motion} from "framer-motion"

const Experience = () => {
  return (
    <section className="py-20 text-white flex flex-col items-center">
      <h1 className="text-5xl font-bold mb-8">Experience</h1>

      <motion.div 
      initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1}}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      className="max-w-4xl bg-gray-900 p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-medium mb-4">
          Full Stack Internship – CareerNest Technology
        </h2>
        <p className="text-gray-300">
          July – August 2025
        </p>
        <p className="text-gray-400 mt-4 leading-relaxed">
          Worked on real-world projects involving React.js, Node.js, Express.js, and MySQL. 
          Gained hands-on experience in full-stack development, API integration, and database 
          management while enhancing teamwork and problem-solving skills. 
          Collaborated with senior developers to deliver optimized, scalable, and user-friendly web solutions.
        </p>
        <a href='https://drive.google.com/file/d/154NOwmdSa4bI-cRzu44hjaNgY3FehgHP/view?usp=sharing' className='text-cyan-900'>Certificate</a>
      </motion.div>
    </section>
  )
}

export default Experience
