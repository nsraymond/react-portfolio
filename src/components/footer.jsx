import React from 'react'
import {FaGithub, FaLinkedin, FaTwitter, FaInstagram} from 'react-icons/fa';

const Footer = () => {
  return (
     
     <div className='lg:hidden   text-gray-300 bg-[#f0f3f8] items-center w-full h-full pt-20 pb-20'>
        {/* social icons */}
     <ul className='flex justify-center'>
       <li className='bg-blue-600 p-2 m-2'><a href="https://www.linkedin.com/in/nsiegbunam-raymond-8570a9225/"><FaLinkedin size={20}/></a></li>
       <li className='bg-[#333333] p-2 m-2'><a href="https://github.com/nsraymond"><FaGithub size={20} /></a></li>
       <li className='bg-[#6fc2b0] p-2 m-2'><a href="https://twitter.com/nsraymond10"><FaTwitter size={20}/></a></li>
       <li className='bg-[#565f69] p-2 m-2'><a href="https://www.instagram.com/nsraymond10/"><FaInstagram size={20}/></a></li>
     </ul>
     </div>
  )
}

export default Footer;