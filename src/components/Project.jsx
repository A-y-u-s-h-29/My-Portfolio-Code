import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaReact, FaNodeJs, FaCode, FaDatabase } from 'react-icons/fa';
import { SiRedux, SiJavascript, SiGooglechat } from 'react-icons/si';

const Projects = () => {
  const projects = [
    {
  id: 1,
  title: "Soorveer Yuva Sangthan – Volunteer Management System",
  description: "Web application for managing volunteers with secure authentication, database storage, and digital ID card generation.",
  technologies: ["React", "Node.js", "Express", "MongoDB"],
  liveLink: "#",
  githubLink: "https://github.com/A-y-u-s-h-29",
  icon: <SiGooglechat />,
  gradient: "from-cyan-500 to-blue-600",
  color: "text-cyan-400",
  features: [
    "Secure login & signup",
    "Volunteer data stored in database",
    "Volunteer ID card generation",
    "Admin management system"
  ]
},
{
  id: 2,
  title: "KuntalAgro – E-Commerce Website with Dashboard",
  description: "Full-stack e-commerce platform with real-time product management, stock tracking, and admin dashboard.",
  technologies: ["React", "Node.js", "Express", "MongoDB"],
  liveLink: "#",
  githubLink: "https://github.com/A-y-u-s-h-29",
  icon: <FaCode />,
  gradient: "from-purple-500 to-pink-600",
  color: "text-purple-400",
  features: [
    "Real-time product management",
    "Stock & inventory tracking",
    "Admin dashboard",
    "Responsive UI"
  ]
},
{
  id: 3,
  title: "BookingsHSRP – Live QR Code Booking System",
  description: "QR-based booking system with admin dashboard, Cloudinary image storage, and automated email integration.",
  technologies: ["React", "Node.js", "Express", "MongoDB", "Cloudinary"],
  liveLink: "#",
  githubLink: "https://github.com/A-y-u-s-h-29",
  icon: <FaDatabase />,
  gradient: "from-green-500 to-emerald-600",
  color: "text-green-400",
  features: [
    "QR code upload & management",
    "Admin dashboard",
    "Email form submission",
    "Dynamic QR linking"
  ]
},
{
  id: 4,
  title: "Balloon Decoration Service Website",
  description: "Service-based website to showcase balloon decoration services using dynamic datasets and optimized image rendering.",
  technologies: ["React", "JavaScript", "CSS"],
  liveLink: "#",
  githubLink: "https://github.com/A-y-u-s-h-29",
  icon: <SiRedux />,
  gradient: "from-orange-500 to-red-600",
  color: "text-orange-400",
  features: [
    "Dynamic service listing",
    "Optimized image handling",
    "Structured datasets",
    "Performance optimized UI"
  ]
},
{
  id: 5,
  title: "Portfolio Website",
  description: "Personal portfolio website showcasing projects with clean UI, animations, and responsive layout.",
  technologies: ["React", "Framer Motion", "Tailwind CSS"],
  liveLink: "#",
  githubLink: "#",
  icon: <FaReact />,
  gradient: "from-blue-500 to-indigo-600",
  color: "text-blue-400",
  features: [
    "Responsive design",
    "Smooth animations",
    "Dark theme",
    "Modern UI"
  ]
},
{
  id: 6,
  title: "E-Commerce Backend System",
  description: "Backend system supporting authentication, product management, and scalable REST APIs for e-commerce platforms.",
  technologies: ["Node.js", "Express", "MongoDB"],
  liveLink: "#",
  githubLink: "#",
  icon: <FaNodeJs />,
  gradient: "from-yellow-500 to-green-600",
  color: "text-yellow-400",
  features: [
    "RESTful APIs",
    "JWT authentication",
    "Product & order management",
    "Admin-ready architecture"
  ]
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
      y: -15,
      scale: 1.05,
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
        className="absolute top-20 left-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"
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
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            A collection of my recent work showcasing full-stack development skills and modern web technologies
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover="hover"
              className="relative group"
            >
              {/* Card Glow Effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${project.gradient} rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500`} />
              
              {/* Project Card */}
              <div className="relative p-6 rounded-2xl backdrop-blur-sm border border-white/10 bg-gradient-to-br from-gray-900/80 to-gray-800/80 h-full">
                {/* Icon Header */}
                <motion.div
                  variants={iconVariants}
                  whileHover="hover"
                  className="mb-6"
                >
                  <div className={`text-4xl ${project.color} mb-4`}>
                    {project.icon}
                  </div>
                </motion.div>

                {/* Project Title */}
                <h3 className="text-xl font-bold text-white mb-3">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Features List */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-3">Features</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 + 0.3 }}
                        className="px-3 py-1 text-xs bg-white/5 rounded-full text-gray-300 border border-white/10"
                      >
                        {feature}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + 0.4 }}
                        className={`px-3 py-1 text-xs bg-gradient-to-r ${project.gradient} rounded-full text-white font-medium`}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-8">
                  <motion.a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-indigo-500/25 transition-shadow group/btn"
                  >
                    <FaExternalLinkAlt className="text-sm" />
                    Live Demo
                  </motion.a>
                  <motion.a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 border-2 border-white/20 rounded-lg font-semibold hover:bg-white/10 transition-colors group/btn"
                  >
                    <FaGithub />
                    Code
                  </motion.a>
                </div>

                {/* Floating Elements */}
                <motion.div
                  variants={floatingVariant(3)}
                  initial="initial"
                  animate="animate"
                  className={`absolute -top-3 -right-3 w-6 h-6 rounded-full bg-gradient-to-r ${project.gradient}`}
                />
                <motion.div
                  variants={floatingVariant(4)}
                  initial="initial"
                  animate="animate"
                  className={`absolute -bottom-3 -left-3 w-4 h-4 rounded-full bg-gradient-to-r ${project.gradient}`}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="text-center mt-16"
        >
          <motion.a
            href="https://github.com/A-y-u-s-h-29"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 border-2 border-white/20 rounded-xl font-semibold hover:bg-white/10 transition-colors group/cta"
          >
            <FaGithub className="text-2xl" />
            <span>View All Projects on GitHub</span>
            <svg className="w-5 h-5 group-hover/cta:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Projects Completed", value: "6+" },
              { label: "Technologies Used", value: "12+" },
              { label: "Live Demos", value: "4" },
              { label: "GitHub Repos", value: "10+" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 + index * 0.1 }}
                className="text-center p-6 rounded-2xl backdrop-blur-sm border border-white/10 bg-gradient-to-br from-gray-900/50 to-gray-800/50"
              >
                <div className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;