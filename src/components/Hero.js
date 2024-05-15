import React from 'react'
import passport from '../images/portfolio-bg.jpg'
const Hero = () => {
  return (
    <div className='h-20 w-full md:h-36   md:p-4  flex justify-between' style={{background: 'linear-gradient(90deg, rgba(135,73,176,1) 21%, rgba(56,166,166,1) 63%, rgba(92,156,99,1) 80%)'}}>
     <div className='flex items-center gap-6 md:gap-12'>
        <div className=' md:w-30 md:h-30 ml-4 p-1 rounded-full bg-white flex items-center justify-center'>
        <div className='w-16 h-16 md:w-28 md:h-28  rounded-full overflow-hidden'>
            <img src={passport} className='w-[100%] h-[100%] md:w-[120%] md:h-[120%] object-cover' alt="" />
        </div>
        </div>
        <div className='w-[70%]'>
        <h1 className='text-xl  md:text-4xl leading-4 md:leading-9 font-bold '>Harsh Kumar</h1>
        <h4 className='text-xs md:text-lg w-full  text-black leading-5 font-semibold '>Full Stack Developer</h4>
        </div>

     </div>
     <div className='flex items-center pr-4 '>
        <button className='bg-violet-600 p-2 px-6 rounded-lg font-bold text-gray-300'>Resume</button>
     </div>
    </div>
  )
}

export default Hero
