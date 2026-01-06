import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaCalendarAlt, FaUniversity } from "react-icons/fa";
import { GiDiploma } from "react-icons/gi";

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: "Bachelor of Technology (B.Tech)",
      field: "Computer Science & Engineering",
      institution: "Dr. A.P.J. Abdul Kalam Technical University",
      period: "2022 - 2026",
      icon: <FaUniversity />,
      description: "Currently pursuing degree with focus on software development, algorithms, and web technologies.",
      gradient: "from-blue-500 to-cyan-400",
      bgGradient: "from-gray-900/50 to-gray-800/50",
      status: "Ongoing"
    },
    {
      id: 2,
      degree: "Senior Secondary (12th)",
      field: "Science Stream (PCM)",
      institution: "CBSE Board",
      period: "2021 – 2022",
      icon: <GiDiploma />,
      description: "Completed with focus on Physics, Chemistry, and Mathematics. Scored 85% aggregate.",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-gray-900/50 to-gray-800/50",
      status: "Completed"
    },
    {
      id: 3,
      degree: "Secondary (10th)",
      field: "General Education",
      institution: "CBSE Board",
      period: "2019 – 2020",
      icon: <FaGraduationCap />,
      description: "Completed foundation education with distinction in Mathematics and Science.",
      gradient: "from-green-500 to-emerald-400",
      bgGradient: "from-gray-900/50 to-gray-800/50",
      status: "Completed"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9 
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    },
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25
      }
    }
  };

  const iconVariants = {
    hidden: { rotate: -180, scale: 0 },
    visible: {
      rotate: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    },
    hover: {
      rotate: 360,
      transition: {
        duration: 0.8,
        ease: "easeInOut"
      }
    }
  };

  const progressBarVariants = {
    hidden: { width: 0 },
    visible: (status) => ({
      width: status === "Ongoing" ? "75%" : "100%",
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        delay: 0.5
      }
    })
  };

  return (
    <section className="py-20 px-4 md:px-8 lg:px-12 relative overflow-hidden">
      {/* Background Elements */}
      <motion.div 
        className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        animate={{
          x: [0, -30, 0],
          y: [0, 20, 0],
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
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Education
            </span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            My academic journey and qualifications that shape my technical expertise
          </p>
        </motion.div>

        {/* Timeline Container */}
        <motion.div 
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500/20 via-purple-500/20 to-pink-500/20 hidden md:block" />
          
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              variants={itemVariants}
              whileHover="hover"
              className={`relative flex flex-col md:flex-row items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline Node */}
              <motion.div 
                className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full z-20 hidden md:flex items-center justify-center"
                variants={iconVariants}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${edu.gradient} rounded-full blur-md`} />
                <div className={`relative w-6 h-6 rounded-full bg-gradient-to-r ${edu.gradient} flex items-center justify-center`}>
                  <div className="text-white text-sm">
                    {edu.icon}
                  </div>
                </div>
              </motion.div>

              {/* Education Card */}
              <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <motion.div 
                  className={`relative p-6 md:p-8 rounded-2xl backdrop-blur-sm border border-white/10 bg-gradient-to-br ${edu.bgGradient} shadow-2xl overflow-hidden group`}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Animated Background */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(45deg, ${edu.gradient.replace('from-', '').replace('to-', '').replace(' ', ', ')})`
                    }}
                  />
                  
                  {/* Status Badge */}
                  <motion.span 
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 }}
                    className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${
                      edu.status === 'Ongoing' 
                        ? 'bg-blue-500/20 text-blue-300' 
                        : 'bg-green-500/20 text-green-300'
                    }`}
                  >
                    {edu.status}
                  </motion.span>

                  {/* Degree */}
                  <motion.h2 
                    className={`text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r ${edu.gradient} bg-clip-text text-transparent`}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    {edu.degree}
                  </motion.h2>

                  {/* Field */}
                  <motion.p 
                    className="text-gray-300 text-lg mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    {edu.field}
                  </motion.p>

                  {/* Institution & Period */}
                  <motion.div 
                    className="flex items-center gap-4 text-gray-400 mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <span className="flex items-center gap-2">
                      <FaUniversity className="text-blue-400" />
                      {edu.institution}
                    </span>
                    <span className="flex items-center gap-2">
                      <FaCalendarAlt className="text-purple-400" />
                      {edu.period}
                    </span>
                  </motion.div>

                  {/* Description */}
                  <motion.p 
                    className="text-gray-400 mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    {edu.description}
                  </motion.p>

                  {/* Progress Bar */}
                  <motion.div 
                    className="mt-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                  >
                    <div className="flex justify-between text-sm text-gray-500 mb-2">
                      <span>Progress</span>
                      <span>{edu.status === 'Ongoing' ? '75%' : '100%'}</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <motion.div 
                        custom={edu.status}
                        variants={progressBarVariants}
                        className={`h-full rounded-full bg-gradient-to-r ${edu.gradient}`}
                      />
                    </div>
                  </motion.div>

                  {/* Decorative Elements */}
                  <motion.div 
                    className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-500"
                    style={{
                      background: `radial-gradient(circle, ${edu.gradient.replace('from-', '').replace('to-', '').replace(' ', ', ')})`
                    }}
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 180, 360]
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                </motion.div>
              </div>

              {/* Year Display for Mobile */}
              <div className="mt-4 md:hidden">
                <div className={`px-4 py-2 rounded-full bg-gradient-to-r ${edu.gradient} text-white font-semibold`}>
                  {edu.period}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Floating Particles */}
        {[1, 2, 3, 4, 5].map((i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-blue-400/30"
            animate={{
              y: [0, -30, 0],
              x: [0, i % 2 === 0 ? 20 : -20, 0],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              delay: i * 0.5
            }}
            style={{
              top: `${i * 20}%`,
              left: `${i * 15}%`,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Education;
