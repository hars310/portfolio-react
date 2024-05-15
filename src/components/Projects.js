import React from 'react';
import { fullStackProjectsData } from '../ProjectDetails';

const Projects = () => {
  function openProjectLink(e, link) {
    e.preventDefault();
    window.open(link, '_blank'); // Open the link in a new tab
  }

  function openCodeLink(e, codeLink) {
    e.preventDefault();
    e.stopPropagation(); // Prevent the click event from bubbling up to the parent container
    window.open(codeLink, '_blank'); // Open the code link in a new tab
  }

  return (
    <div className='px-2 md:px-4 py-4'>
      <h1 className='text-2xl font-bold'>Projects</h1>
      <div className='mt-2 md:px-2'>
        <div className='overflow-x-auto'>
          <div className="w-full md:px-4 md:py-2 flex flex-nowrap gap-3" style={{ minWidth: 'fit-content' }}>
            {fullStackProjectsData.map(project => (
              <div key={project.id} className="w-40 md:w-52 bg-white min-h-48 md:min-h-[230px] max-h-fit rounded-md overflow-hidden relative cursor-pointer">
                <div onClick={(e) => openProjectLink(e, project.link)} className="rounded h-28 md:h-36 shadow-lg">
                  <img
                    className="w-full h-full md:w-full md:h-full hover:scale-110"
                    src={project.imageUrl}
                    alt={project.title}
                  />
                  <div className="absolute inset-0 flex items-end p-2">
                    <div className=''>
                      <h3 className="font-bold text-black text-sm leading-5">{project.title}</h3>
                      <p className="text-gray-900 text-[10px] md:text-xs break-all leading-3">{project.description}</p>
                      <div className='flex flex-row justify-between pr-4 mt-1'>
                        <a href={'/'} onClick={(e) => openCodeLink(e, project.code)} className="text-blue-700 font-bold text-sm">Code</a>
                        <a href={'/'} onClick={(e) => openProjectLink(e, project.link)} className="text-blue-700 font-bold text-sm">Live</a>
                      </div>
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
