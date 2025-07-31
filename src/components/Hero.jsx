import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto overflow-hidden`}>
      <div
        className={`absolute inset-0 top-[100px] sm:top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-3 sm:gap-5 z-10`}
      >
        <div className='flex flex-col justify-center items-center mt-3 sm:mt-5'>
          <div className='w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-32 violet-gradient' />
        </div>

        <div className='flex-1'>
          <h1 className={`${styles.heroHeadText}`}>
            <span className='text-white'>Hi, I'm </span><span className='bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent font-black'>Jai Vadula</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            <span className='bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold'>AI & ML Enthusiast | Problem Solver | Learning AI</span> <br className='sm:block hidden' />
            <span className='block sm:inline'>Building the future with AI-driven solutions</span>
          </p>
        </div>
      </div>

      <div className='absolute inset-0 top-[160px] sm:top-[200px] z-0'>
        <ComputersCanvas />
      </div>

      <div className='absolute xs:bottom-10 bottom-20 sm:bottom-32 w-full flex justify-center items-center z-10'>
        <a href='#about'>
          <div className='w-[28px] h-[56px] sm:w-[35px] sm:h-[64px] rounded-3xl border-3 sm:border-4 border-secondary flex justify-center items-start p-1 sm:p-2 hover:border-white transition-colors cursor-pointer'>
            <motion.div
              animate={{
                y: [0, 20, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
