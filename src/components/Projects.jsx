import { motion } from 'framer-motion';
import { React, useEffect, useState } from 'react';

import { projects } from '../data';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { textVariant } from '../utils/motion';

const ProjectCard = ({ project, onClick, isActive }) => {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer sm:mb-5 p-5 max-w-xl relative sm:text-left text-center`}
    >
      {isActive && (
        <div className="absolute left-0 top-0 bottom-0 w-3 md:w-5 bg-tertiary my-6 sm:block hidden"></div>
      )}
      <h3
        className={`text-xl lg:text-2xl xl:text-3xl font-bold sm:pl-8 ${
          isActive ? "text-quaternary" : "text-slate-600"
        }`}
      >
        {project.title}
      </h3>
    </div>
  );
};

const ProjectDetails = ({ project }) => {
  return (
    <div className="mt-5 w-full">
      <ul className="max-w-7xl list-none space-y-4 border-4 lg:border-8 rounded-xl lg:rounded-3xl p-6">
        {project.details.map((detail, index) => (
          <li
            key={`project-detail-${index}`}
            className="text-slate-500 font-semibold text-[10px] xs:text-[14px] md:text-[18px] lg:text-[22px] xl:text-[28px] lg:leading-[30px]"
            dangerouslySetInnerHTML={{ __html: detail }}
          />
        ))}
      </ul>
    </div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize(); // Check initial screen size
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="sm:my-20">
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionText} text-center`}>Projects</h2>
      </motion.div>

      <div className="relative mt-10 md:mt-20 md:p-20 flex flex-col items-center sm:flex-row sm:items-start">
        <div className="flex flex-col z-10 sm:w-auto sm:w-full">
          {projects.map((project, index) => (
            <ProjectCard
              key={`project-${index}`}
              project={project}
              onClick={() => setSelectedProject(project)}
              isActive={selectedProject === project}
            />
          ))}
        </div>

        {/* Show Project Details only when a project is selected */}
        {selectedProject && (
          <div className={`flex justify-center z-10 w-full ${isMobile ? "mt-5" : ""}`}>
            <ProjectDetails project={selectedProject} />
          </div>
        )}
      </div>
    </div>
  );
};

export default SectionWrapper(Projects, "portfolio");