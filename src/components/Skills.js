import React from 'react'

const Skills = () => {
    return (
        <div className='p-4  '>
            <h1 className='text-2xl font-bold'>Skills</h1>
            <div className='flex flex-wrap gap-6 md:px-4'>
            <div >
                <h2>Frontend</h2>
                <div className='bg-gray-600 p-2 w-fit min-w-[20%] rounded-md'>
                    <p align="left">
                        
                            <img className='h-10 md:h-auto' src="https://skillicons.dev/icons?i=html,css,js,nextjs,react,redux,tailwind,bootstrap,materialui,solidity" alt='' />
                        
                    </p>
                </div>
            </div>
            <div>
                <h2>Backend</h2>
                <div className='bg-gray-600 p-2 w-fit min-w-[20%] rounded-md'>
                    <p align="left">
                        
                            <img className='h-10 md:h-auto' src="https://skillicons.dev/icons?i=express,nodejs,python,cpp,c" alt='' />
                        
                    </p>
                </div>
            </div>
            <div>
                <h2>Databases</h2>
                <div className='bg-gray-600 p-2  min-w-[20%] rounded-md'>
                    <p align="left">
                        
                            <img className='h-10 md:h-auto' src="https://skillicons.dev/icons?i=mongo,mysql,aws" alt='' />
                        
                    </p>
                </div>
            </div>
            <div>
                <h2>Tools</h2>
                <div className='bg-gray-600 p-2 w-fit min-w-[20%] rounded-md'>
                    <p align="left">
                       
                            <img className='h-10 md:h-auto' src="https://skillicons.dev/icons?i=postman,netlify,npm,github,git,vscode,vercel" alt='' />
                       
                    </p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Skills