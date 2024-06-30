import React, { useState } from 'react';
import passport from '../images/portfolio-bg.jpg';
import { IoMdClose } from 'react-icons/io';

const Hero = () => {
  const [showAboutMe, setShowAboutMe] = useState(false);

  return (
    <div className='w-full md:h-36 flex-col md:flex-row py-2 md:p-4 flex justify-between' style={{ background: 'linear-gradient(90deg, rgba(135,73,176,1) 21%, rgba(56,166,166,1) 63%, rgba(92,156,99,1) 80%)' }}>
      <div className=' w-full flex  flex-col md:flex-row    items-center gap-2 md:gap-12'>
        <div className='md:w-30  md:h-30 p-1 rounded-full bg-white flex items-center justify-center md:ml-4'>
          <div className='w-24  h-24 md:w-28 md:h-28 rounded-full overflow-hidden relative'>
            <img src={passport} className='w-[100%] h-[100%] md:w-[120%] md:h-[120%] object-cover scale-105' alt="" />
          </div>
        </div>
        <div className='w-[70%] text-center md:text-start'>
          <h1 className='text-xl md:text-4xl leading-4 md:leading-9 font-bold '>Harsh Kumar</h1>
          <h4 className='text-xs md:text-lg w-full text-black font-semibold '>Full Stack Developer</h4>
        </div>
      </div>
      <div className='flex w-full md:justify-end justify-center items-center px-2'>
        <button onClick={() => setShowAboutMe(true)} className='w-[25%] md:w-[40%] bg-violet-900 mt-1 p-1 px-2 md:px-6 md:text-lg text-sm rounded-lg font-bold text-gray-300 transition-all duration-500 hover:scale-110 hover:bg-zinc-900'>Profile</button>
      </div>

      {showAboutMe && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-zinc-900 p-8 m-2 rounded-lg shadow-md md:max-w-[65%] max-h-[80vh] overflow-y-auto relative">
            <button onClick={() => setShowAboutMe(false)} className="absolute text-2xl font-bold m-2 right-2 top-2 px-4 text-zinc-200 rounded-md"><IoMdClose /> </button>

            <p className="mt-3 p-1 rounded-md">👋 Hey there! I'm Harsh Kumar, a passionate software engineer with a keen interest in exploring various facets of technology. Currently, I'm pursuing my B.Tech in Computer Science at Delhi Technological University (DTU), New Delhi.</p>

            <p className="p-1">
              <span className='text-green-500'>🎓 Education:</span> <br />
              I'm currently enrolled in the Computer Science program at DTU, with a strong focus on coursework covering Data Structures, Computer Networks, Algorithms Analysis, Operating Systems, Database Management Systems, and Object-Oriented Programming Systems.
            </p>

            <p className="p-1">
              <span className='text-green-500'>🔍 Experience:</span> <br />
              In my ongoing research internship at DTU under Dr. Rahul Kataria's mentorship, I'm delving into the captivating realm of blockchain technology, particularly within the domain of Internet of Medical Things (IoMT) and healthcare systems. My primary focus revolves around exploring blockchain's potential applications in enhancing healthcare systems, designing innovative solutions for secure medical data management, and evaluating performance and scalability within healthcare infrastructures.
            </p>

            <p className="p-1">
              <span className='text-green-500'>💼 Skills:</span> <br />
              My proficiency spans across languages like C/C++, JavaScript, HTML, CSS, and Solidity. Additionally, I'm well-versed in technologies and libraries such as ReactJS, Tailwind CSS, Node.js, Express.js, MongoDB, Socket.io.
            </p>

            <p className="p-1">
              <span className='text-green-500'>🌱 Extracurricular Activities/Achievements:</span> <br />
              Beyond academics, I'm an avid problem solver, having tackled over 700 DSA questions on diverse platforms. Currently, I'm actively delving into Web3 technologies to explore decentralized applications and blockchain development, fueled by my insatiable curiosity for emerging tech trends.
            </p>

            {/* <a href="https://drive.google.com/file/d/1RZpomyXFAdsaKg5u2WtcpNu0j_DZd7Ck/view?usp=sharing"  className="p-2 bg-green-500 w-fit rounded-md text-zinc-800 text-sm font-bold  block mt-2">Resume</a> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
