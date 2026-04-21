import React from 'react';
import { motion } from "framer-motion";
import { FaCalendarAlt, FaCertificate, FaExternalLinkAlt, FaCode, FaDatabase, FaUsers, FaCreditCard } from "react-icons/fa";
import { SiReact, SiNodedotjs, SiExpress, SiMongodb, SiNextdotjs, SiTailwindcss, SiCloudinary } from "react-icons/si";

const Experience = () => {
  const experience = {
    role: "React.js Developer",
    company: "Digital Express India",
    period: "2025",
    duration: "Ongoing",
    description: "Worked on real-world production-level applications as a React.js Developer, building secure authentication-based systems, integrating Razorpay for payments, and developing admin dashboards. Gained hands-on experience in full-stack development using modern technologies while focusing on performance, scalability, and user experience.",
    certificateUrl: "",
    responsibilities: [
      "Developed authentication-based applications with secure login & signup",
      "Integrated Razorpay for secure online payment processing",
      "Built admin dashboards for managing users, products, and data",
      "Designed responsive UI using Tailwind CSS",
      "Developed RESTful APIs using Node.js and Express.js",
      "Managed database operations using MongoDB",
      "Integrated Cloudinary for media storage",
      "Worked on deployment and hosting of applications",
      "Collaborated on scalable and production-ready solutions"
    ],
    technologies: [
      { name: "React.js", icon: <SiReact />, color: "text-cyan-400" },
      { name: "Next.js", icon: <SiNextdotjs />, color: "text-white" },
      { name: "Node.js", icon: <SiNodedotjs />, color: "text-green-500" },
      { name: "Express.js", icon: <SiExpress />, color: "text-gray-300" },
      { name: "MongoDB", icon: <SiMongodb />, color: "text-green-400" },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-cyan-400" },
      { name: "Cloudinary", icon: <SiCloudinary />, color: "text-blue-400" },
      { name: "Razorpay", icon: <FaCreditCard />, color: "text-indigo-500" }
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
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
            
            <div className="relative p-8 md:p-12 rounded-2xl backdrop-blur-sm border border-white/10 bg-gradient-to-br from-gray-900/80 to-gray-800/80 shadow-2xl">
              
              {/* Header */}
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
                      variants={itemVariants}
                      className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" />
                      <span className="text-gray-300">
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
                      className="flex flex-col items-center gap-2 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors"
                    >
                      <div className={`text-3xl ${tech.color}`}>
                        {tech.icon}
                      </div>
                      <span className="text-gray-300 text-sm">{tech.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;