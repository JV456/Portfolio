import { motion } from "framer-motion";
import Tilt from "react-tilt";

import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='w-full max-w-[280px] mx-auto'>
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
        className='bg-tertiary rounded-[20px] py-5 px-6 sm:px-12 min-h-[250px] sm:min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-12 h-12 sm:w-16 sm:h-16 object-contain'
        />

        <h3 className='text-white text-[16px] sm:text-[18px] lg:text-[20px] font-bold text-center leading-tight'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="text-center lg:text-left">
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={`${styles.sectionHeadText} bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent`}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-6 sm:mt-8 text-gray-300 text-[14px] sm:text-[16px] lg:text-[18px] xl:text-[20px] w-full max-w-none lg:max-w-5xl xl:max-w-6xl leading-[22px] sm:leading-[28px] lg:leading-[32px] xl:leading-[36px] font-light tracking-wide px-2 sm:px-0 text-center sm:text-justify'
      >
        I'm a passionate developer with a knack for building intelligent, real-world solutions—especially in{" "}
        <span className="text-white font-medium">artificial intelligence, machine learning, and multimodal systems</span>. 
        My background in{" "}
        <span className="text-white font-medium">Python, C++, and a diverse set of data science libraries</span>{" "}
        lets me tackle problems creatively and effectively. Whether it's developing{" "}
        <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent font-semibold">advanced chatbots that understand voice, images, and text</span>{" "}
        for better healthcare accessibility, or designing{" "}
        <span className="text-white font-medium">conversational analytics tools for e-commerce</span>, 
        I strive to blend technical rigor with tangible impact. I enjoy{" "}
        <span className="text-white font-medium">integrating APIs, creating intuitive interfaces, and shipping robust applications</span>{" "}
        that solve meaningful problems and elevate the user experience. My goal is simple:{" "}
        <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent font-semibold">use technology to make a difference where it matters most</span>.
      </motion.p>
    </>
  );
};

export default SectionWrapper(About, "about");
