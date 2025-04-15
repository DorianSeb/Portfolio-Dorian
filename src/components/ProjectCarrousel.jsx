import React, { useState } from 'react';
import projectsData from '../assets/data/projects.json'; 
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import ProjectCard from './ProjectCard'; 

const ProjectCarrousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length); // Boucle au premier projet
  };
  const prevProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projectsData.length) % projectsData.length); // Boucle à la dernière image
  };

  return (
    <div className="h-screen bg-transparent text-white flex flex-col justify-center items-center">
      <div className="w-[90%] mx-auto relative min-h-[450px] h-auto lg:h-[600px]">
        {/* Affichage du projet actuel */}
        {projectsData.length > 0 && <ProjectCard project={projectsData[currentIndex]} />}
        <button 
          onClick={prevProject} 
          className="absolute p-1.5 left-0 ml-[-40px] top-1/2 transform -translate-y-1/2 bg-transparent p-3 rounded-full text-white text-xl hover:bg-gray-600/50 transition-colors"
          aria-label="Projet précédent"
        >
          <SlArrowLeft />
        </button>
        <button 
          onClick={nextProject} 
          className="absolute p-1.5 right-0 mr-[-40px] top-1/2 transform -translate-y-1/2 bg-transparent p-3 rounded-full text-white text-xl hover:bg-gray-600/50 transition-colors"
          aria-label="Projet suivant"
       >
          <SlArrowRight />
        </button>
      </div>
    </div>
  );
};

export default ProjectCarrousel;