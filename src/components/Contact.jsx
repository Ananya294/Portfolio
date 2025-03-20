import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    controls.start("show");
  }, [controls]);

  return (
    <div className="md:m-12 md:px-48 flex flex-col sm:flex-row gap-10 overflow-hidden">
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          hidden: {
            opacity: 0,
            y: 100,
          },
          show: {
            opacity: 1,
            y: 0,
            transition: {
              type: "tween",
              duration: 1,
              delay: 0.2,
            },
          },
        }}
        className='flex-[0.8] md:pb-40 mx-4 sm:mx-auto'
      >
        <h3 className={styles.sectionText}>Contact</h3>

        {/* Contact Form */}
        <form
          action="https://getform.io/f/amdkgqyb"
          method="POST"
          className="mt-12 gap-4 flex flex-col"
        >
          <span className='text-white font-medium mt-3'>Full Name</span>
          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            className="bg-tertiary p-4 text-white border font-medium rounded-lg"
          />
          <span className='text-white font-medium mt-3'>Email Address</span>
          <input
            type="text"
            name="email"
            placeholder="Enter your email address"
            className="bg-tertiary p-4 text-white border font-medium rounded-lg"
          />
          <span className='text-white font-medium mt-3'>Message</span>
          <textarea
            name="message"
            placeholder="Enter your message"
            rows="10"
            className="bg-tertiary p-4 text-white border font-medium rounded-lg"
          />
          <button
            type='submit'
            className='bg-tertiary py-3 px-8 w-fit text-white font-bold shadow-md shadow-primary rounded-lg'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>


        {/* Contact Information Section */}
        <div className="mt-12 flex flex-col items-center gap-4 text-white">
          <p className="text-lg font-semibold">Connect with me:</p>

          {/* Email */}
          <a href="mailto:ananya.singh0942@gmail.com" className="flex items-center gap-2 text-lg hover:text-blue-400">
            <MdEmail size={24} /> ananya.singh0942@gmail.com
          </a>

          {/* GitHub */}
          <a href="https://github.com/Ananya294" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-lg hover:text-blue-400">
            <FaGithub size={24} /> github.com/Ananya294
          </a>

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/ananya-singh9" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-lg hover:text-blue-400">
            <FaLinkedin size={24} /> linkedin.com/in/ananya-singh9
          </a>
        </div>

      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
