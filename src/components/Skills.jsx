import React from 'react';
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn } from "../utils/motion";
import {
  SiC, SiCplusplus, SiPython, SiJavascript, SiReact, SiMongodb,
  SiMysql, SiExpress, SiNodedotjs, SiFlask, SiHtml5, SiCss3, SiGit
} from "react-icons/si";
import { FaLink } from "react-icons/fa";

const skills = [
  { name: "C", icon: <SiC className="text-blue-500" /> },
  { name: "C++", icon: <SiCplusplus className="text-blue-400" /> },
  { name: "Python", icon: <SiPython className="text-yellow-400" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" /> },
  { name: "React.js", icon: <SiReact className="text-blue-300" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-400" /> },
  { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
  { name: "Flask", icon: <SiFlask className="text-white" /> },
  { name: "HTML", icon: <SiHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <SiCss3 className="text-blue-500" /> },
  { name: "Git", icon: <SiGit className="text-red-500" /> }
];

const Skills = () => {
  return (
    <div className="text-center md:text-left md:px-20 lg:px-40">
      {/* Section Heading */}
      <motion.div variants={fadeIn("up", "spring", 0, 0.75)}>
        <h2 className={`${styles.sectionText}`}>Skills & Problem Solving</h2>
      </motion.div>
      

      {/* LeetCode & Problem-Solving Section */}
      <motion.div
        variants={fadeIn("up", "spring", 0.2, 0.75)}
        className="mt-10 bg-gray-900 p-6 md:p-10 rounded-lg shadow-lg"
      >
        <h3 className="text-white text-xl md:text-2xl font-semibold">
          Problem Solving & LeetCode
        </h3>
        <p className="mt-3 text-secondary text-sm md:text-md">
          I have strong problem-solving skills and enjoy tackling algorithmic challenges on platforms like LeetCode.
          I actively solve Data Structures and Algorithms (DSA) problems, improving my logical thinking and coding efficiency.
        </p>
        <a
          href="https://leetcode.com/u/singhananyaas294" // Replace with your LeetCode profile link
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded-lg transition"
        >
          <FaLink /> Visit My LeetCode
        </a>
      </motion.div>

  
      {/* Skills Grid */}
      <motion.div
        variants={fadeIn("up", "spring", 0.4, 0.75)}
        className="mt-10 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 justify-items-center"
      >
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="text-4xl">{skill.icon}</div>
            <p className="mt-2 text-white text-sm md:text-md">{skill.name}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Skills, "skills");