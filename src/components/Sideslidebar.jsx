import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaLinkedin, FaTwitter, FaGithub, FaInstagram } from "react-icons/fa";
import { TbBrandLeetcode } from "react-icons/tb";

const SideSlideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        className="block md:hidden text-gray-300 hover:text-gray-500 focus:outline-none"
        onClick={toggleSidebar}
      >
        {isOpen ? (
          <FaTimes className="w-6 h-6" />
        ) : (
          <FaBars className="w-6 h-6" />
        )}
      </button>
      <div
        className={`fixed inset-y-0 left-0 z-50 bg-gray-900 w-64 md:w-96 p-8 transition-transform duration-300 ease-in-out transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="bg-[#1D1A23] w-full  h-fit p-8 rounded-lg shadow-md">
          <h1 className="text-xl mb-4">Socials</h1>
          <ul className="space-y-6">
            <li>
              <a
                href="https://leetcode.com/harsh3108/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 flex flex-row items-center hover:text-orange-500 text-md"
              >
                <TbBrandLeetcode className=" text-xl mr-2 text-orange-500" />{" "}
                LeetCode
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/harshkumar3108/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 flex flex-row items-center hover:text-blue-500 text-md"
              >
                <FaLinkedin className="text-blue-500 text-xl mr-2 " /> LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/kumar__harsh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 flex flex-row items-center hover:text-violet-600 text-md"
              >
                <FaTwitter className="text-violet-600 text-xl mr-2" /> X
              </a>
            </li>
            <li>
              <a
                href="https://github.com/hars310"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 flex flex-row items-center hover:text-green-500 text-md"
              >
                <FaGithub className="text-green-500 text-xl mr-2" /> GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 flex flex-row items-center hover:text-pink-500 text-md"
              >
                <FaInstagram className=" text-pink-500 text-xl mr-2" />{" "}
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideSlideBar;
