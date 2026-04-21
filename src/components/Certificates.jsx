import React from 'react';
import { motion } from 'framer-motion';
import { FaCertificate, FaExternalLinkAlt, FaCalendarAlt, FaGraduationCap, FaCode, FaDatabase } from 'react-icons/fa';
import { SiReact, SiNodedotjs, SiFirebase, SiMysql } from 'react-icons/si';

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      title: "FullStack Internship Certificate",
      issuer: "CareerNest Technology",
      date: "August 2025",
      description: "Successfully completed internship focused on full-stack development with React, Node.js, and MySQL.",
      link: "https://drive.google.com/file/d/154NOwmdSa4bI-cRzu44hjaNgY3FehgHP/view?usp=sharing",
      icon: <FaGraduationCap />,
      gradient: "from-blue-500 to-cyan-400",
      color: "text-cyan-400",
      technologies: ["React", "Node.js", "MySQL", "Express"]
    },
    {
      id: 2,
      title: "Mastering React Node.js Firebase Authentication",
      issuer: "Udemy",
      date: "2024",
      description: "Comprehensive course covering authentication systems using Firebase with React and Node.js.",
      link: "https://drive.google.com/file/d/1Yqs_imcPRTKSMMQ2OG-Uyog_GPCBQMmW/view?usp=sharing",
      icon: <SiFirebase />,
      gradient: "from-orange-500 to-yellow-400",
      color: "text-orange-400",
      technologies: ["React", "Node.js", "Firebase", "Authentication"]
    },
    {
      id: 3,
      title: "React Certification",
      issuer: "Scrimba",
      date: "2024",
      description: "Advanced React concepts including hooks, context API, and modern React patterns.",
      link: "https://drive.google.com/file/d/1W29weQCvwzz4mtQIQ4e6ybdsz0kZf1hD/view?usp=sharing",
      icon: <SiReact />,
      gradient: "from-cyan-500 to-blue-400",
      color: "text-blue-400",
      technologies: ["React", "Hooks", "Context API", "Components"]
    },
    {
      id: 4,
      title: "Web Design Certification",
      issuer: "FreeCodeCamp",
      date: "2024",
      description: "Fundamentals of responsive web design, CSS grid, flexbox, and modern web design principles.",
      link: "https://drive.google.com/file/d/1YHrVsqTW00KkRu07gAPFvvmOBal9MEdE/view?usp=sharing",
      icon: <FaCode />,
      gradient: "from-purple-500 to-pink-400",
      color: "text-purple-400",
      technologies: ["HTML5", "CSS3", "Responsive Design", "Flexbox"]
    },
    {
      id: 5,
      title: "Node.js Backend Development",
      issuer: "LinkedIn Learning",
      date: "2023",
      description: "Building RESTful APIs, middleware, authentication, and server-side development with Node.js.",
      link: "#",
      icon: <SiNodedotjs />,
      gradient: "from-green-500 to-green-300",
      color: "text-green-400",
      technologies: ["Node.js", "Express", "REST APIs", "Backend"]
    }
  ];

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

  const cardVariants = {
    hidden: { 
      y: 50, 
      opacity: 0,
      scale: 0.8 
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    },
    hover: {
      y: -10,
      scale: 1.03,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: 0.5
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

  const floatingVariant = (duration) => ({
    initial: { y: 0 },
    animate: {
      y: [10, -10, 10],
      transition: {
        duration: duration,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  });

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
        className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
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
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Certifications
            </span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Professional certifications and qualifications validating my technical expertise
          </p>
        </motion.div>

        {/* Certificates Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {certificates.map((certificate) => (
            <motion.div
              key={certificate.id}
              variants={cardVariants}
              whileHover="hover"
              className="relative group"
            >
              {/* Card Glow Effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${certificate.gradient} rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500`} />
              
              {/* Certificate Card */}
              <div className="relative p-6 rounded-2xl backdrop-blur-sm border border-white/10 bg-gradient-to-br from-gray-900/80 to-gray-800/80 h-full">
                {/* Certificate Icon */}
                <motion.div
                  variants={iconVariants}
                  whileHover="hover"
                  className="mb-6"
                >
                  <div className={`text-4xl ${certificate.color} mb-4`}>
                    {certificate.icon}
                  </div>
                </motion.div>

                {/* Certificate Badge */}
                <motion.div
                  variants={floatingVariant(3)}
                  initial="initial"
                  animate="animate"
                  className="absolute top-4 right-4"
                >
                  <FaCertificate className={`text-xl ${certificate.color}`} />
                </motion.div>

                {/* Certificate Title */}
                <h3 className="text-xl font-bold text-white mb-3 pr-8">
                  {certificate.title}
                </h3>

                {/* Issuer and Date */}
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{certificate.issuer}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCalendarAlt />
                    <span>{certificate.date}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed text-sm">
                  {certificate.description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {certificate.technologies.map((tech, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 + 0.3 }}
                        className="px-3 py-1 text-xs bg-white/5 rounded-full text-gray-300 border border-white/10"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* View Certificate Button */}
                <motion.a
                  href={certificate.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r ${certificate.gradient} rounded-lg font-semibold hover:shadow-lg transition-shadow group/btn`}
                >
                  <span>View Certificate</span>
                  <FaExternalLinkAlt className="text-sm group-hover/btn:translate-x-1 transition-transform" />
                </motion.a>

                {/* Decorative Elements */}
                <motion.div
                  variants={floatingVariant(4)}
                  initial="initial"
                  animate="animate"
                  className={`absolute -bottom-2 -left-2 w-4 h-4 rounded-full bg-gradient-to-r ${certificate.gradient}`}
                />
                <motion.div
                  variants={floatingVariant(5)}
                  initial="initial"
                  animate="animate"
                  className={`absolute -top-2 -right-2 w-3 h-3 rounded-full bg-gradient-to-r ${certificate.gradient}`}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        
        
      </div>
    </section>
  );
};

export default Certificates;