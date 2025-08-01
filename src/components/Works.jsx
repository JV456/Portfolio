import { motion } from "framer-motion";
import Tilt from "react-tilt";

import { github } from "../assets";
import { projects } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div 
      variants={fadeIn("up", "spring", index * 0.3, 0.75)}
      className="group w-full"
    >
      <Tilt
        options={{
          max: 25,
          scale: 1.02,
          speed: 400,
        }}
        className='relative overflow-hidden bg-gradient-to-br from-tertiary/80 to-black-200/60 backdrop-blur-sm p-4 sm:p-6 rounded-2xl sm:rounded-3xl w-full max-w-[380px] mx-auto border border-tertiary/20 hover:border-violet-500/40 transition-all duration-500 hover:shadow-2xl hover:shadow-violet-500/20'
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-600/5 via-transparent to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl sm:rounded-3xl"></div>
        
        {/* Image Container */}
        <div className='relative w-full h-[200px] sm:h-[240px] mb-4 sm:mb-6 overflow-hidden rounded-xl sm:rounded-2xl'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-700'
          />
          
          {/* Gradient Overlay on Image */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          {/* Enhanced GitHub Button */}
          <div className='absolute top-3 right-3 sm:top-4 sm:right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0'>
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open(source_code_link, "_blank")}
              className='bg-gradient-to-br from-violet-600/90 to-purple-700/90 backdrop-blur-md w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex justify-center items-center cursor-pointer border border-violet-400/30 hover:border-violet-300/50 transition-all duration-300 shadow-lg hover:shadow-violet-500/25'
            >
              <img
                src={github}
                alt='source code'
                className='w-4 h-4 sm:w-5 sm:h-5 object-contain'
              />
            </motion.div>
          </div>
        </div>

        {/* Content */}
        <div className='relative z-10'>
          {/* Title with Gradient */}
          <h3 className='text-white font-bold text-[18px] sm:text-[22px] lg:text-[26px] mb-2 sm:mb-3 group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-violet-200 group-hover:to-white group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 leading-tight'>
            {name}
          </h3>
          
          {/* Description */}
          <p className='text-gray-300 text-[13px] sm:text-[14px] lg:text-[15px] leading-relaxed mb-3 sm:mb-4 group-hover:text-gray-200 transition-colors duration-300'>
            {description}
          </p>

          {/* Enhanced Tags */}
          <div className='flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4'>
            {tags.map((tag, tagIndex) => (
              <motion.div
                key={`${name}-${tag.name}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 + tagIndex * 0.05 }}
                className={`px-2 sm:px-3 py-1 sm:py-1.5 text-[11px] sm:text-[12px] lg:text-[13px] font-medium rounded-full border backdrop-blur-sm transition-all duration-300 hover:scale-105 cursor-default
                  ${tag.color === 'text-blue-500' ? 'bg-blue-500/10 border-blue-400/30 text-blue-300 hover:bg-blue-500/20' : ''}
                  ${tag.color === 'text-green-500' ? 'bg-green-500/10 border-green-400/30 text-green-300 hover:bg-green-500/20' : ''}
                  ${tag.color === 'text-pink-500' ? 'bg-pink-500/10 border-pink-400/30 text-pink-300 hover:bg-pink-500/20' : ''}
                  ${tag.color === 'text-orange-500' ? 'bg-orange-500/10 border-orange-400/30 text-orange-300 hover:bg-orange-500/20' : ''}
                  ${tag.color === 'text-yellow-500' ? 'bg-yellow-500/10 border-yellow-400/30 text-yellow-300 hover:bg-yellow-500/20' : ''}
                  ${tag.color === 'text-purple-500' ? 'bg-purple-500/10 border-purple-400/30 text-purple-300 hover:bg-purple-500/20' : ''}
                  ${tag.color === 'text-red-500' ? 'bg-red-500/10 border-red-400/30 text-red-300 hover:bg-red-500/20' : ''}
                  ${tag.color === 'text-indigo-500' ? 'bg-indigo-500/10 border-indigo-400/30 text-indigo-300 hover:bg-indigo-500/20' : ''}
                  ${!['text-blue-500', 'text-green-500', 'text-pink-500', 'text-orange-500', 'text-yellow-500', 'text-purple-500', 'text-red-500', 'text-indigo-500'].includes(tag.color) ? 'bg-violet-500/10 border-violet-400/30 text-violet-300 hover:bg-violet-500/20' : ''}
                `}
              >
                #{tag.name}
              </motion.div>
            ))}
          </div>

          {/* Enhanced Action Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => window.open(source_code_link, "_blank")}
            className="w-full py-2.5 sm:py-3 bg-gradient-to-r from-violet-600/20 to-purple-600/20 hover:from-violet-600/30 hover:to-purple-600/30 border border-violet-500/30 hover:border-violet-400/50 rounded-lg sm:rounded-xl text-violet-200 hover:text-white font-medium text-sm transition-all duration-300 backdrop-blur-sm group-hover:shadow-lg group-hover:shadow-violet-500/20"
          >
            View Project →
          </motion.button>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -top-4 -right-4 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br from-violet-500/10 to-purple-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute -bottom-4 -left-4 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br from-blue-500/10 to-violet-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      {/* Enhanced Header */}
      <motion.div variants={textVariant()} className="text-center lg:text-left">
        <p className={`${styles.sectionSubText} text-violet-300`}>My work</p>
        <h2 className={`${styles.sectionHeadText} bg-gradient-to-r from-violet-400 via-purple-500 to-pink-500 bg-clip-text text-transparent`}>
          Projects
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full mx-auto lg:mx-0 mt-4"></div>
      </motion.div>

      {/* Enhanced Description */}
      <div className='w-full flex justify-center lg:justify-start'>
        <motion.div
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-6 sm:mt-8 lg:mt-10 p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-tertiary/30 to-black-200/20 backdrop-blur-sm border border-tertiary/20'
        >
          <p className='text-gray-300 text-[14px] sm:text-[16px] lg:text-[18px] xl:text-[20px] w-full max-w-none lg:max-w-5xl xl:max-w-6xl leading-[22px] sm:leading-[28px] lg:leading-[32px] xl:leading-[36px] font-light tracking-wide text-center sm:text-justify'>
            Following projects showcases my skills and experience through{" "}
            <span className="text-white font-medium">real-world examples</span>{" "}
            of my work. Each project is briefly described with
            links to{" "}
            <span className="text-white font-medium">code repositories and live demos</span>. 
            It reflects my ability to solve{" "}
            <span className="bg-gradient-to-r from-violet-400 to-purple-500 bg-clip-text text-transparent font-semibold">complex problems</span>, 
            work with different technologies, and manage projects effectively.
          </p>
        </motion.div>
      </div>

      {/* Enhanced Projects Grid */}
      <motion.div 
        variants={fadeIn("up", "tween", 0.2, 1)}
        className='mt-12 sm:mt-16 lg:mt-20'
      >
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-items-center'>
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Works, "works");
