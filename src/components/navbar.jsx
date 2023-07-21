import { useState } from 'react';
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaTwitter, FaInstagram} from 'react-icons/fa';

import { Link } from 'react-scroll';
import React from "react";

const Navbar = () => {



  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="relative w-full h-[60px] text-white flex justify-between items-center px-4 bg-[#0a192f]">
      <div>
      <p className='text-2xl'> rCN </p>
      </div>

         {/* menu */}
      <ul className='hidden md:flex'>
        <li>
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to='projects' smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li>
          <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>


      {/* hamburger */}
      <div className='md:hidden z-10' onClick={handleClick}>{!nav ? <FaBars /> : <FaTimes />}</div>

      {/* mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-5 pt-6 left-0 w-full h-100 bg-[#0a192f] flex flex-col justify-left items-left'
        }
      >
        <li className='py-2 text-xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-2 text-xl'>
          {' '}
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-2 text-xl'>
          {' '}
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-2 text-xl'>
          {' '}
          <Link onClick={handleClick} to='projects' smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className='py-2 text-xl'>
          {' '}
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
      <ul>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-100 bg-blue-600'>
          <a className='flex justify-between items-center w-full text-gray-300' href="https://www.linkedin.com/in/nsiegbunam-raymond-8570a9225/">
            Linkedin <FaLinkedin size={30}/>
            </a>
        </li>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-100 bg-[#333333]'>
          <a className='flex justify-between items-center w-full text-gray-300' href="https://github.com/nsraymond">
            Github <FaGithub size={30} />
            </a>
        </li>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-100 bg-[#6fc2b0]'>
          <a className='flex justify-between items-center w-full text-gray-300' href="https://twitter.com/nsraymond10">
            Twitter <FaTwitter size={30}/>
            </a>
        </li>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-100 bg-[#565f69]'>
          <a className='flex justify-between items-center w-full text-gray-300' href="https://www.instagram.com/nsraymond10/">
            Instagram <FaInstagram size={30}/>
            </a>
        </li>
      </ul>
      </div>
    </div>
  )
}

export default Navbar;