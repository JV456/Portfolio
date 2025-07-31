import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { close, github, menu } from "../assets";
import { navLinks } from "../constants";
import { styles } from "../styles";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <p className='text-white text-[18px] font-bold cursor-pointer flex '>
            JAI VADULA &nbsp;
            <span className='sm:block hidden'> | AI & ML Portfolio</span>
          </p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10 items-center'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
          <li className='flex gap-3 ml-4 items-center'>
            <a 
              href='https://drive.google.com/file/d/1eHFud5PGbsYw_MrGrIpjs9Kx-6Cjy8Wr/view?usp=sharing'
              target='_blank'
              rel='noopener noreferrer'
              className='bg-gradient-to-r from-purple-500 to-cyan-500 py-2 px-4 rounded-lg text-white font-semibold text-sm hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105'
            >
              Resume
            </a>
            <a
              href='https://github.com/JV456'
              target='_blank'
              rel='noopener noreferrer'
              className='group relative p-2.5 rounded-xl bg-gradient-to-br from-black/20 via-gray-900/10 to-transparent border border-white/10 hover:border-white/30 transition-all duration-500 hover:shadow-lg hover:shadow-white/10 hover:scale-110 backdrop-blur-sm'
            >
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <img src={github} alt='GitHub' className='w-5 h-5 relative z-10 group-hover:brightness-125 transition-all duration-300' />
            </a>
            <a
              href='https://www.linkedin.com/in/jai-vadula/'
              target='_blank'
              rel='noopener noreferrer'
              className='group relative p-2.5 rounded-xl bg-gradient-to-br from-blue-500/20 via-blue-600/10 to-transparent border border-blue-400/20 hover:border-blue-300/50 transition-all duration-500 hover:shadow-lg hover:shadow-blue-500/20 hover:scale-110 backdrop-blur-sm'
            >
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <svg className='w-5 h-5 fill-blue-100 group-hover:fill-white relative z-10 transition-all duration-300' viewBox='0 0 24 24'>
                <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'/>
              </svg>
            </a>
          </li>
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
              <li>
                <a 
                  href='https://drive.google.com/file/d/1eHFud5PGbsYw_MrGrIpjs9Kx-6Cjy8Wr/view?usp=sharing'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='bg-gradient-to-r from-purple-500 to-cyan-500 py-2 px-4 rounded-lg text-white font-semibold text-sm hover:from-purple-600 hover:to-cyan-600 transition-all duration-300'
                  onClick={() => setToggle(!toggle)}
                >
                  Download Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
