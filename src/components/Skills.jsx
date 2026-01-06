import React from "react";
import { motion } from "framer-motion";
import { RiReactjsLine } from "react-icons/ri";   // React
import { 
  SiHtml5, 
  SiCss3, 
  SiJavascript, 
  SiNodedotjs, 
  SiExpress, 
  SiMysql 
} from "react-icons/si"; 

const Skills = () => {
  // Animation variant factory
  const iconVariant = (duration) => ({
    initial: { y: -10 },
    animate: {
      y: [10, -10],
      transition: {
        duration: duration,
        ease: "linear",   // use "ease" not easeIn
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  });

  return (
    <div className="py-20 text-white flex flex-col items-center">
      <h1 className="text-5xl font-bold mb-8">Skills</h1>

      <div className="gap-5 text-6xl flex flex-row items-center">
        {/* HTML */}
        <motion.div
          variants={iconVariant(2)}
          initial="initial"
          animate="animate"
        >
          <SiHtml5 className="text-orange-500" title="HTML5" />
        </motion.div>

        {/* CSS */}
        <motion.div
          variants={iconVariant(2.5)}
          initial="initial"
          animate="animate"
        >
          <SiCss3 className="text-blue-500" title="CSS3" />
        </motion.div>

        {/* JS */}
        <motion.div
          variants={iconVariant(3)}
          initial="initial"
          animate="animate"
        >
          <SiJavascript className="text-yellow-400" title="JavaScript" />
        </motion.div>

        {/* React */}
        <motion.div
          variants={iconVariant(2)}
          initial="initial"
          animate="animate"
        >
          <RiReactjsLine className="text-cyan-400" title="React.js" />
        </motion.div>

        {/* Node */}
        <motion.div
          variants={iconVariant(2.5)}
          initial="initial"
          animate="animate"
        >
          <SiNodedotjs className="text-green-500" title="Node.js" />
        </motion.div>

        {/* Express */}
        <motion.div
          variants={iconVariant(3)}
          initial="initial"
          animate="animate"
        >
          <SiExpress className="text-gray-400" title="Express.js" />
        </motion.div>

        {/* MySQL */}
        <motion.div
          variants={iconVariant(2.5)}
          initial="initial"
          animate="animate"
        >
          <SiMysql className="text-blue-600" title="MySQL" />
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
