import React from 'react'
import { motion } from 'framer-motion'

const Project = () => {
  // Animation variants for rotation
  const cardVariant = (duration) => ({
    initial: { rotate: -3 },
    animate: {
      rotate: [3, -3], // rotates back and forth
      transition: {
        duration: duration,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  });

  return (
    <section className="py-20 text-white flex flex-col items-center">
      <h1 className="text-5xl font-bold mb-12">Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full px-6">
        
        {/* Project 1 */}
        <motion.div
          variants={cardVariant(1.8)}
          initial="initial"
          animate="animate"
          className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
        >
          <a 
            href="https://ayush-chat-bot.netlify.app/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="block"
          >
            <h2 className="text-xl font-semibold text-indigo-400">AI Chat Bot</h2>
            <p className="text-gray-400 text-sm mt-2">
              Developed using React with Google Gemini API.
            </p>
          </a>
        </motion.div>

        {/* Project 2 */}
        <motion.div
          variants={cardVariant(2)}
          initial="initial"
          animate="animate"
          className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
        >
          <a 
            href="https://ayush-quiz-game.netlify.app/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="block"
          >
            <h2 className="text-xl font-semibold text-indigo-400">Quiz Game</h2>
            <p className="text-gray-400 text-sm mt-2">
              Responsive quiz game built with React.
            </p>
          </a>
        </motion.div>

        {/* Project 3 */}
        <motion.div
          variants={cardVariant(2.4)}
          initial="initial"
          animate="animate"
          className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
        >
          <a 
            href="https://currency-convertor-by-js.netlify.app/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="block"
          >
            <h2 className="text-xl font-semibold text-indigo-400">Currency Converter</h2>
            <p className="text-gray-400 text-sm mt-2">
              Real-time currency conversion using JavaScript API.
            </p>
          </a>
        </motion.div>

        {/* Project 4 */}
        <motion.div
          variants={cardVariant(2.8)}
          initial="initial"
          animate="animate"
          className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
        >
          <a 
            href="https://ayush-todo-by-reduxtoolkit.netlify.app/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="block"
          >
            <h2 className="text-xl font-semibold text-indigo-400">Todo App (Redux Toolkit)</h2>
            <p className="text-gray-400 text-sm mt-2">
              Task management app using Redux Toolkit for state handling.
            </p>
          </a>
        </motion.div>

      </div>
    </section>
  )
}

export default Project
