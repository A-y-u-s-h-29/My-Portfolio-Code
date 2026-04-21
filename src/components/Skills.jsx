import React from "react";
import { motion } from "framer-motion";
import { 
  SiHtml5, SiCss3, SiJavascript, SiTypescript, 
  SiReact, SiNodedotjs, SiExpress, SiMongodb, SiMysql,
  SiGit, SiGithub, SiTailwindcss, SiFramer, SiNextdotjs,
  SiPython, SiFirebase, SiPostman, SiRedux,
  SiGraphql, SiDocker
} from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { FaJava, FaDatabase, FaServer } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <RiReactjsLine className="text-cyan-400" />,
      skills: [
        { name: "HTML5", icon: <SiHtml5 />, level: 95, color: "text-orange-500" },
        { name: "CSS3", icon: <SiCss3 />, level: 90, color: "text-blue-500" },
        { name: "JavaScript", icon: <SiJavascript />, level: 88, color: "text-yellow-400" },
        { name: "React.js", icon: <SiReact />, level: 85, color: "text-cyan-400" },
        { name: "Next.js", icon: <SiNextdotjs />, level: 70, color: "text-gray-300" },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 92, color: "text-teal-400" },
        { name: "Framer Motion", icon: <SiFramer />, level: 80, color: "text-pink-500" },
        { name: "Redux", icon: <SiRedux />, level: 75, color: "text-purple-500" },
      ]
    },
    {
      title: "Backend",
      icon: <FaServer className="text-green-400" />,
      skills: [
        { name: "Node.js", icon: <SiNodedotjs />, level: 80, color: "text-green-500" },
        { name: "Express.js", icon: <SiExpress />, level: 80, color: "text-gray-300" },
        { name: "Java", icon: <FaJava />, level: 50, color: "text-red-500" },
        { name: "REST APIs", icon: <SiPostman />, level: 75, color: "text-orange-500" },
      ]
    },
    {
      title: "Database",
      icon: <FaDatabase className="text-blue-400" />,
      skills: [
        { name: "MongoDB", icon: <SiMongodb />, level: 80, color: "text-green-600" },
        { name: "Firebase", icon: <SiFirebase />, level: 70, color: "text-yellow-500" },
      ]
    },
    {
      title: "Tools & Others",
      icon: <SiGit className="text-orange-400" />,
      skills: [
        { name: "Git", icon: <SiGit />, level: 90, color: "text-orange-500" },
        { name: "GitHub", icon: <SiGithub />, level: 88, color: "text-gray-300" },
        { name: "VS Code", icon: <VscVscode />, level: 95, color: "text-blue-400" },
        { name: "Postman", icon: <SiPostman />, level: 85, color: "text-orange-600" },
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const categoryVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    },
    hover: {
      y: -5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25
      }
    }
  };

  const skillVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: (i) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: i * 0.05,
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    }),
    hover: {
      scale: 1.1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const progressBarVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        delay: 0.5
      }
    })
  };

  const floatingIconVariant = (duration) => ({
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
        className="absolute top-20 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
        animate={{
          x: [0, -40, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 20,
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
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Technologies I work with and proficiency levels across different domains
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={categoryVariants}
              whileHover="hover"
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500" />
              
              <div className="relative p-6 md:p-8 rounded-2xl backdrop-blur-sm border border-white/10 bg-gradient-to-br from-gray-900/80 to-gray-800/80 h-full">
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <motion.div
                    variants={floatingIconVariant(2 + categoryIndex * 0.5)}
                    initial="initial"
                    animate="animate"
                    className="text-3xl"
                  >
                    {category.icon}
                  </motion.div>
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    {category.title}
                  </h2>
                </div>

                {/* Skills List */}
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      custom={skillIndex}
                      variants={skillVariants}
                      className="flex flex-col gap-2"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <motion.div
                            variants={floatingIconVariant(3)}
                            initial="initial"
                            animate="animate"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                            className={`text-2xl ${skill.color}`}
                          >
                            {skill.icon}
                          </motion.div>
                          <span className="text-gray-300 font-medium">{skill.name}</span>
                        </div>
                        <span className="text-gray-400 text-sm">{skill.level}%</span>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div 
                          custom={skill.level}
                          variants={progressBarVariants}
                          className={`h-full rounded-full bg-gradient-to-r ${skill.color.replace('text-', 'from-')} to-${skill.color.replace('text-', '').split('-')[0]}-300`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Floating Icons Showcase */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-300">
            Technical Stack
          </h3>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {skillCategories.flatMap(cat => cat.skills).slice(0, 12).map((skill, index) => (
              <motion.div
                key={skill.name}
                custom={index}
                variants={skillVariants}
                whileHover="hover"
                className="relative group"
              >
                <motion.div
                  variants={floatingIconVariant(2 + index * 0.1)}
                  initial="initial"
                  animate="animate"
                  className={`text-5xl md:text-6xl p-4 rounded-2xl backdrop-blur-sm border border-white/10 bg-gradient-to-br from-gray-900/50 to-gray-800/50 ${skill.color}`}
                >
                  {skill.icon}
                  {/* Tooltip */}
                  <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-gray-900/90 backdrop-blur-sm rounded-lg text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    {skill.name}
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-gray-900" />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-8 p-6 rounded-2xl backdrop-blur-sm border border-white/10 bg-gradient-to-br from-gray-900/80 to-gray-800/80">
            <div>
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                15+
              </div>
              <div className="text-gray-400 text-sm">Technologies</div>
            </div>
            <div className="h-8 w-px bg-gradient-to-b from-transparent via-gray-500 to-transparent" />
            <div>
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                4
              </div>
              <div className="text-gray-400 text-sm">Domains</div>
            </div>
            <div className="h-8 w-px bg-gradient-to-b from-transparent via-gray-500 to-transparent" />
            <div>
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Full-Stack
              </div>
              <div className="text-gray-400 text-sm">Expertise</div>
            </div>
          </div>
        </motion.div>

        {/* Floating Particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-cyan-400/30"
            animate={{
              y: [0, -20, 0],
              x: [0, i % 2 === 0 ? 15 : -15, 0],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: 2 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3
            }}
            style={{
              top: `${30 + i * 10}%`,
              left: `${10 + i * 10}%`,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;