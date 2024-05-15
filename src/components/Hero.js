import React, { useState } from 'react';
import passport from '../images/portfolio-bg.jpg';

import { IoMdClose } from 'react-icons/io';

const Hero = () => {
  const [showAboutMe, setShowAboutMe] = useState(false);

  return (
    <div className='w-full md:h-36 flex-col md:flex-row py-2 md:p-4 flex justify-between' style={{ background: 'linear-gradient(90deg, rgba(135,73,176,1) 21%, rgba(56,166,166,1) 63%, rgba(92,156,99,1) 80%)' }}>
      <div className='flex items-center gap-6 md:gap-12'>
        <div className='md:w-30 md:h-30 ml-4 p-1 rounded-full bg-white flex items-center justify-center'>
          <div className='w-16 h-16 md:w-28 md:h-28 rounded-full overflow-hidden relative'>
            <img src={passport} className='w-[100%] h-[100%] md:w-[120%] md:h-[120%] object-cover scale-105' alt="" />
          </div>
        </div>
        <div className='w-[70%]'>
          <h1 className='text-xl md:text-4xl leading-4 md:leading-9 font-bold '>Harsh Kumar</h1>
          <h4 className='text-xs md:text-lg w-full text-black font-semibold '>Full Stack Developer</h4>
        </div>
      </div>
      <div className='flex items-center px-2 '>
        <button onClick={() => setShowAboutMe(true)} className='w-full bg-violet-600 mt-1 p-1 px-2 md:px-6 md:text-lg text-xs rounded-lg font-bold text-gray-300'>Profile</button>
      </div>
      {showAboutMe && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 m-2 rounded-lg shadow-md max-w-md z-99 relative">
  <button onClick={() => setShowAboutMe(false)} className="absolute text-2xl font-bold m-2 right-2 top-2 px-4 text-zinc-900 rounded-md"><IoMdClose/> </button>
  <p className="text-gray-700 mt-2 ">I'm Harsh Kumar, a Computer Science Engineering student at Delhi Technological University, graduating in 2025. Passionate about 💰 crypto, 📈 trading, and currently learning 🌐 Web3 and 🦀 Rust.</p>
</div>
        </div>
      )}
    </div>
  );
};

export default Hero;
