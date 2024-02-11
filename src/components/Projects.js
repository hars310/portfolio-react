import React from 'react';
import { fullStackProjectsData } from '../ProjectDetails';

const Projects = () => {
  return (
    <div className='px-4 py-4'>
      <h1 className='text-2xl font-bold'>Projects</h1>
      <div className='mt-2 px-2 ' >
        <h1 className='text-lg'>Fullstack</h1>
        <div className='overflow-x-auto'>

        <div className="w-full px-4 py-2 flex flex-nowrap gap-3" style={{ minWidth: 'fit-content' }}>
          {fullStackProjectsData.map(project => (
              <div key={project.id} className="w-52 bg-white min-h-[220px] max-h-fit rounded-md overflow-hidden relative ">
              <div className="rounded h-36 shadow-lg  ">
                <img  className="object-cover w-[100%] h-[100%]" src={project.imageUrl} alt={project.title} />
                <div className="absolute inset-0 flex items-end p-4">
                  <div>
                    <h3 className="font-bold text-black text-md leading-5 ">{project.title}</h3>
                    <p className="text-gray-900 text-xs break-all">{project.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
