import React from 'react';
import { motion } from "framer-motion";
import { FaCalendarAlt, FaCertificate, FaExternalLinkAlt, FaCode, FaDatabase, FaUsers } from "react-icons/fa";
import { SiReact, SiNodedotjs, SiExpress, SiMysql } from "react-icons/si";

const Experience = () => {
  const experience = {
    role: "Full Stack Intern",
    company: "CareerNest Technology",
    period: "July – August 2025",
    duration: "2 Months",
    description: "Worked on real-world projects involving React.js, Node.js, Express.js, and MySQL. Gained hands-on experience in full-stack development, API integration, and database management while enhancing teamwork and problem-solving skills. Collaborated with senior developers to deliver optimized, scalable, and user-friendly web solutions.",
    certificateUrl: "https://drive.google.com/file/d/154NOwmdSa4bI-cRzu44hjaNgY3FehgHP/view?usp=sharing",
    responsibilities: [
      "Developed responsive front-end interfaces using React.js",
      "Built RESTful APIs with Node.js and Express.js",
      "Managed database operations with MySQL",
      "Collaborated with senior developers on real projects",
      "Implemented scalable web solutions"
    ],
    technologies: [
      { name: "React.js", icon: <SiReact />, color: "text-cyan-400" },
      { name: "Node.js", icon: <SiNodedotjs />, color: "text-green-500" },
      { name: "Express.js", icon: <SiExpress />, color: "text-gray-300" },
      { name: "MySQL", icon: <SiMysql />, color: "text-blue-400" },
    ]
  };

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

  const cardVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.2
      }
    },
    hover: {
      y: -10,
      boxShadow: "0 25px 50px -12px rgba(0, 255, 255, 0.25)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: (i) => ({
      scale: 1,
      rotate: 0,
      transition: {
        delay: i * 0.1 + 0.5,
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    }),
    hover: {
      rotate: 360,
      transition: {
        duration: 0.6,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="py-20 px-4 md:px-8 lg:px-12 relative overflow-hidden">
      {/* Background Elements */}
      <motion.div 
        className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div 
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        animate={{
          x: [0, -50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Professional journey and hands-on experience in full-stack development
          </p>
        </motion.div>

        {/* Main Experience Card */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-6xl mx-auto"
        >
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="relative group"
          >
            {/* Glow Effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
            
            {/* Experience Card */}
            <div className="relative p-8 md:p-12 rounded-2xl backdrop-blur-sm border border-white/10 bg-gradient-to-br from-gray-900/80 to-gray-800/80 shadow-2xl">
              {/* Header Section */}
              <motion.div variants={itemVariants} className="flex flex-col md:flex-row md:items-center justify-between mb-8">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">
                    <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                      {experience.role}
                    </span>
                    <span className="text-gray-300"> – {experience.company}</span>
                  </h2>
                  <div className="flex items-center gap-6 text-gray-400">
                    <div className="flex items-center gap-2">
                      <FaCalendarAlt className="text-cyan-400" />
                      <span>{experience.period}</span>
                    </div>
                    <div className="px-3 py-1 bg-cyan-500/20 rounded-full text-sm text-cyan-300">
                      {experience.duration}
                    </div>
                  </div>
                </div>

                {/* Certificate Button */}
                <motion.a
                  href={experience.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 md:mt-0 inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-shadow group/btn"
                >
                  <FaCertificate className="text-lg" />
                  View Certificate
                  <FaExternalLinkAlt className="text-sm group-hover/btn:translate-x-1 transition-transform" />
                </motion.a>
              </motion.div>

              {/* Description */}
              <motion.div variants={itemVariants} className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <FaCode className="text-cyan-400 text-xl" />
                  <h3 className="text-xl font-semibold text-gray-300">Overview</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  {experience.description}
                </p>
              </motion.div>

              {/* Responsibilities */}
              <motion.div variants={itemVariants} className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <FaUsers className="text-blue-400 text-xl" />
                  <h3 className="text-xl font-semibold text-gray-300">Key Responsibilities</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {experience.responsibilities.map((responsibility, index) => (
                    <motion.div
                      key={index}
                      custom={index}
                      variants={itemVariants}
                      className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors group/item"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" />
                      <span className="text-gray-300 group-hover/item:text-white transition-colors">
                        {responsibility}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Technologies */}
              <motion.div variants={itemVariants}>
                <h3 className="text-xl font-semibold text-gray-300 mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-4">
                  {experience.technologies.map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      custom={index}
                      variants={iconVariants}
                      initial="hidden"
                      animate="visible"
                      whileHover="hover"
                      className="flex flex-col items-center gap-2 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors group/tech"
                    >
                      <div className={`text-3xl ${tech.color} group-hover/tech:scale-110 transition-transform`}>
                        {tech.icon}
                      </div>
                      <span className="text-gray-300 text-sm">{tech.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Decorative Elements */}
              <motion.div 
                className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-cyan-400/50 rounded-tl-xl"
                animate={{
                  rotate: [0, 90, 180, 270, 360]
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <motion.div 
                className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-blue-400/50 rounded-br-xl"
                animate={{
                  rotate: [360, 270, 180, 90, 0]
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />

              {/* Floating Badge */}
              <motion.div 
                className="absolute -top-6 -right-6"
                animate={{
                  y: [0, -10, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-sm font-bold">
                  Internship
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Timeline Indicator */}
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="mt-8 mx-auto w-48 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent rounded-full"
          />
        </motion.div>

        {/* Upcoming Experience CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 mb-6">Looking for new opportunities</p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-cyan-500/30 rounded-xl font-semibold hover:bg-cyan-500/10 transition-colors group/cta"
          >
            <span>Open to New Opportunities</span>
            <svg className="w-5 h-5 group-hover/cta:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;