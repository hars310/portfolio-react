import React from 'react'

const Skills = () => {
    return (
        <div className='p-4  '>
            <h1 className='text-2xl font-bold'>Skills</h1>
            <div className='flex flex-wrap gap-6 px-4'>
            <div >
                <h2>Frontend</h2>
                <div className='bg-gray-600 p-2 w-fit min-w-[20%] rounded-md'>
                    <p align="left">
                        
                            <img src="https://skillicons.dev/icons?i=html,css,js,react,tailwind,bootstrap" alt='' />
                        
                    </p>
                </div>
            </div>
            <div>
                <h2>Backend</h2>
                <div className='bg-gray-600 p-2 w-fit min-w-[20%] rounded-md'>
                    <p align="left">
                        
                            <img src="https://skillicons.dev/icons?i=express,nodejs,python,cpp" alt='' />
                        
                    </p>
                </div>
            </div>
            <div>
                <h2>Databases</h2>
                <div className='bg-gray-600 p-2  min-w-[20%] rounded-md'>
                    <p align="left">
                        
                            <img src="https://skillicons.dev/icons?i=mongo,mysql" alt='' />
                        
                    </p>
                </div>
            </div>
            <div>
                <h2>Tools</h2>
                <div className='bg-gray-600 p-2 w-fit min-w-[20%] rounded-md'>
                    <p align="left">
                       
                            <img src="https://skillicons.dev/icons?i=postman,netlify,github,git,vscode" alt='' />
                       
                    </p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Skills