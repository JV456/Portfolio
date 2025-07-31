import { motion } from "framer-motion";
import Tilt from "react-tilt";

import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const certifications = [
  {
    title: "GitHub Foundations Certification",
    organization: "GitHub",
    date: "2025",
    description: "Mastered version control fundamentals and collaborative development workflows.",
    icon: "🏆"
  },
  {
    title: "Machine Learning Specialization",
    organization: "Coursera",
    date: "2024", 
    description: "Comprehensive machine learning curriculum covering supervised and unsupervised learning.",
    icon: "🤖"
  }
];

const CertificationCard = ({ index, title, organization, date, description, icon }) => (
  <Tilt className='xs:w-[320px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <div className='text-4xl mb-4'>{icon}</div>
        
        <h3 className='text-white text-[20px] font-bold text-center mb-2'>
          {title}
        </h3>
        
        <p className='text-secondary text-[16px] font-semibold text-center mb-2'>
          {organization}
        </p>
        
        <p className='text-secondary text-[14px] text-center mb-4'>
          {date}
        </p>
        
        <p className='text-white-100 text-[14px] text-center leading-[20px]'>
          {description}
        </p>
      </div>
    </motion.div>
  </Tilt>
);

const Certifications = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Recognition</p>
        <h2 className={`${styles.sectionHeadText} bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent`}>Certifications</h2>
      </motion.div>

      <div className='mt-20 flex flex-wrap gap-10 justify-center'>
        {certifications.map((certification, index) => (
          <CertificationCard key={certification.title} index={index} {...certification} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Certifications, "certifications");
