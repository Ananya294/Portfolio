import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";


const myPhoto = "/ananya.JPG";

const About = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("show");
    }
  }, [controls, inView]);

  return (
    <div className='text-center md:text-left md:px-20 lg:px-40'>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionText}`}>About Me</h2>
      </motion.div>

      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={fadeIn("up", "spring", 0, 0.75)}
        className='w-full mt-10 flex flex-col md:flex-row gap-10 md:gap-20 items-center'
      >
        {/* Image Section */}
        <div className='relative w-full md:w-2/5 flex justify-center'>
          <img
            src={myPhoto}
            alt="My Photo"
            className="w-[450px] h-[450px] object-cover rounded-full shadow-lg"
          />

        </div>

        {/* Text Section */}
        <div className='w-full md:w-3/5 flex flex-col justify-center px-6 md:px-10'>
          <h3 className='text-white font-medium text-xl md:text-2xl lg:text-3xl'>
            Hi, I'm Ananya Singh
          </h3>
          <p className='mt-4 text-secondary text-sm md:text-md lg:text-lg'>
            I'm a passionate AI & Data Science student with a love for web development,
            data analytics, and machine learning. I enjoy working on innovative projects
            and always strive to learn and grow. When I'm not coding, I love watching movies,
            working on design projects, and spending time with my cats.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(About, "about");

