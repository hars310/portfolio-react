import React from 'react';
import { FaLinkedin, FaTwitter, FaGithub, FaInstagram } from 'react-icons/fa';
import { TbBrandLeetcode } from 'react-icons/tb';

const Sidebar = () => {
  return (
    <div  className=' w-[30%]  md:flex hidden '>
      <div className='bg-[#1D1A23] w-full  h-[84vh] p-8 rounded-lg shadow-md'>
      <h1 className='text-xl mb-4'>Socials</h1>
      <ul className="space-y-6">
  <li>
    <a href="https://leetcode.com/harsh3108/" target="_blank" rel="noopener noreferrer" className="text-gray-500 flex flex-row items-center hover:text-orange-500 text-md transition-all duration-300 transform hover:scale-105">
      <TbBrandLeetcode className="text-xl mr-2 text-orange-500" /> LeetCode
    </a>
  </li>
  <li>
    <a href="https://www.linkedin.com/in/harshkumar3108/" target="_blank" rel="noopener noreferrer" className="text-gray-500 flex flex-row items-center hover:text-blue-500 text-md transition-all duration-300 transform hover:scale-105">
      <FaLinkedin className="text-blue-500 text-xl mr-2" /> LinkedIn
    </a>
  </li>
  <li>
    <a href="https://twitter.com/kumar__harsh" target="_blank" rel="noopener noreferrer" className="text-gray-500 flex flex-row items-center hover:text-violet-600 text-md transition-all duration-300 transform hover:scale-105">
      <FaTwitter className="text-violet-600 text-xl mr-2" /> Twitter
    </a>
  </li>
  <li>
    <a href="https://github.com/hars310" target="_blank" rel="noopener noreferrer" className="text-gray-500 flex flex-row items-center hover:text-green-500 text-md transition-all duration-300 transform hover:scale-105">
      <FaGithub className="text-green-500 text-xl mr-2" /> GitHub
    </a>
  </li>
  <li>
    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-gray-500 flex flex-row items-center hover:text-pink-500 text-md transition-all duration-300 transform hover:scale-105">
      <FaInstagram className="text-pink-500 text-xl mr-2" /> Instagram
    </a>
  </li>
</ul>
    </div>

    </div>
      );
};

export default Sidebar;