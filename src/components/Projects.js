import React from 'react';
import { fullStackProjectsData } from '../ProjectDetails';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

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
    <div className='px-2 md:px-4 py-4 md:h-fit'>
      <h1 className='text-2xl font-bold'>Projects</h1>
      <div className='mt-2 md:px-2'>
        <div className='overflow-x-auto  h-44 md:h-auto flex items-center'>
          <div className="w-full  md:px-4 md:py-2 flex flex-nowrap gap-4 overflow-hidden" style={{ minWidth: 'fit-content' }}>
            {fullStackProjectsData.map(project => (
              <div
                key={project.id}
                className="w-44 md:w-56 bg-white h-auto  rounded-md overflow-hidden relative cursor-pointer transform transition-transform duration-300 hover:scale-110 shadow-lg hover:shadow-xl"
                style={{ transitionProperty: 'transform, box-shadow' }}
              >
                <div onClick={(e) => openProjectLink(e, project.link)} className="rounded h-32 md:h-40 overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src={project.imageUrl}
                    alt={project.title}
                  />
                  <div className="absolute inset-0  flex items-end p-2 bg-black bg-opacity-60 transition-opacity duration-300 opacity-0 hover:p-4 hover:opacity-100">
                    <div className='w-full text-white'>
                      <h3 className="font-bold text-md leading-4">{project.title}</h3>
                      <p className="text-gray-100 text-xs leading-3">{project.description}</p>
                      <div className='flex justify-between mt-4'>
                        <a href={'/'} onClick={(e) => openCodeLink(e, project.code)} className="text-green-600 hover:text-green-400">
                          <FaGithub className='text-xl'/>
                        </a>
                        <a href={'/'} onClick={(e) => openProjectLink(e, project.link)} className="text-green-600 hover:text-green-400">
                          <FaExternalLinkAlt className='text-xl'/>
                        </a>
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
