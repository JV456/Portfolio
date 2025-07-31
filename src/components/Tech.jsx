import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const skillCategories = {
  "Programming": ["Python", "C++", "Git", "HTML", "CSS", "MySQL"],
  "Libraries and Frameworks": ["Numpy", "Pandas", "Matplotlib", "Scikit-Learn", "LangChain"],
  "Tools and Platforms": ["Jupyter Notebooks", "VS Code", "MS Office", "Google Cloud Platform (GCP)"]
};

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          My technical expertise
        </p>
        <h2 className={`${styles.sectionHeadText} text-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent`}>
          Skills
        </h2>
      </motion.div>

      <div className='mt-12 sm:mt-16 lg:mt-20 max-w-4xl mx-auto px-4 sm:px-0'>
        {Object.entries(skillCategories).map(([category, skills], categoryIndex) => (
          <motion.div
            key={category}
            variants={fadeIn("up", "spring", categoryIndex * 0.2, 0.75)}
            className='mb-8 sm:mb-12'
          >
            <div className='bg-tertiary rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg'>
              <h3 className='text-white text-[18px] sm:text-[20px] lg:text-[24px] font-bold mb-4 sm:mb-6 flex items-center'>
                <span className='w-1.5 sm:w-2 h-6 sm:h-8 bg-gradient-to-b from-purple-400 to-pink-500 rounded-full mr-3 sm:mr-4'></span>
                {category}
              </h3>
              <div className='flex flex-wrap gap-2 sm:gap-3'>
                {skills.map((skill, index) => (
                  <span
                    key={skill}
                    className='bg-black-200 text-gray-300 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-[12px] sm:text-[14px] lg:text-[16px] font-medium hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-500 hover:text-white transition-all duration-300 cursor-default'
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
