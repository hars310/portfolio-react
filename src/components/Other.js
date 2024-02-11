import React from 'react';
import { basicProjects, frontendProjectsData } from '../ProjectDetails';

const Other = () => {
  return (
    <div className='px-4 py-4'>
        <h1 className='text-2xl font-bold'>Other Projects</h1>
      <div className='mt-2 px-2 ' >
        <h1 className='text-lg'>Frontend</h1>
        <div className='overflow-x-auto'>

        <div className="w-full px-4 py-2 flex flex-nowrap gap-3" style={{ minWidth: 'fit-content' }}>
          {frontendProjectsData.map(project => (
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
      <div className='mt-8 px-2 ' >
        <h1 className='text-lg'>Basic Projects</h1>
        <div className='overflow-x-auto'>

        <div className="w-full px-4 py-2 flex flex-nowrap gap-3" style={{ minWidth: 'fit-content' }}>
          {basicProjects.map(project => (
              <div key={project.id} className="w-52 bg-white min-h-[220px] max-h-fit rounded-md overflow-hidden relative ">
              <div className="rounded h-36 shadow-lg  ">
                <img className="object-cover  h-[100%] w-[100%] " src={project.imageUrl} alt={project.title} />
                <div className="absolute inset-0 flex items-end p-4">
                  <div>
                    <h3 className="font-bold text-black text-md leading-4 ">{project.title}</h3>
                    <p className="text-gray-900 text-xs break-all">{project.description}</p>
                    <a href={project.link}  className="text-blue-700 font-bold text-md">Live</a>

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

export default Other;
