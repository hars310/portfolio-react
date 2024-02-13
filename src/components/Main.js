import React from 'react'
import Projects from './Projects'
import Hero from './Hero'
import Skills from './Skills'
import Other from './Other'


const Main = () => {
  return (
    <div className=' w-[100%] max-h-[84vh] md:m-4 mr-0   overflow-y-auto '>
        <Hero />
        <Projects />
        <Skills />
        <Other />
    </div>
  )
}

export default Main