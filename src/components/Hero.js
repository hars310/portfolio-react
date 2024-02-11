import React from 'react'
import passport from '../passportsize-removebg-preview.png'
const Hero = () => {
  return (
    <div className=' h-36  p-4  flex justify-between' style={{background: 'linear-gradient(90deg, rgba(135,73,176,1) 21%, rgba(56,166,166,1) 63%, rgba(92,156,99,1) 80%)'}}>
     <div className='flex items-center gap-12'>
        <div className='w-30 h-30 ml-4 p-1 rounded-full bg-white flex items-center justify-center'>
        <div className='w-28 h-28  rounded-full overflow-hidden'>
            <img src={passport} className='w-[120%] h-[120%] object-cover' alt="" />
        </div>
        </div>
        <div>
        <h1 className='text-4xl leading-8 font-bold '>Harsh Kumar</h1>
        <h4 className='text-md text-black font-semibold '>Full Stack Developer</h4>
        </div>

     </div>
     <div className='flex items-center pr-4 '>
        <button className='bg-violet-600 p-2 px-6 rounded-lg font-bold text-gray-300'>Resume</button>
     </div>
    </div>
  )
}

export default Hero