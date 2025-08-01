
import { styles } from "../styles";

const Hero = () => {
  return (
    <section className={`relative w-full h-[60vh] sm:h-[65vh] mx-auto overflow-hidden`}>
      <div
        className={`absolute inset-0 top-[80px] sm:top-[100px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-3 sm:gap-5 z-10`}
      >
        <div className='flex flex-col justify-center items-center mt-3 sm:mt-5'>
          <div className='w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-60 h-24 violet-gradient' />
        </div>

        <div className='flex-1'>
          <h1 className={`${styles.heroHeadText}`}>
            <span className='text-white'>Hi, I'm </span><span className='bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent font-black'>Jai Vadula</span>
          </h1>
          <p className={`${styles.heroSubText} mt-4 sm:mt-6 text-white-100`}>
            <span className='bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold'>AI & ML Enthusiast | Problem Solver | Learning AI</span>
          </p>
          <p className={`${styles.heroSubText} mt-2 sm:mt-3 text-white-100`}>
            <span className='block'>Building the future with AI-driven solutions</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
