import React from "react";
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  return (
    <div className="h-full w-full max-w-3xl bg-transparent border border-gray-700 text-white p-6 rounded-lg shadow-lg flex flex-col">
      <img
        src={project.image}
        alt={project.title}
        width={1200}
        height={650}
        className="w-full object-cover object-top rounded-md mb-4 h-48 md:h-64 lg:h-72"
        loading="lazy"
      />
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-xl md:text-4xl font-[300]">{project.title}</h3>
        <div className="flex flex-col justify-center items-center">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-xs rounded-full inline-block mb-2"
            aria-label={`Voir le projet ${project.title} sur GitHub`}
          >
            Voir le projet
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Voir le projet ${project.title} sur GitHub`}
          >
            <FaGithub className="text-3xl" />
          </a>
        </div>
      </div>
      <h4 className="text-sm md:text-xl font-[200] mb-2">{project.subtitle}</h4>
      <p className="text-xs md:text-base font-[100]">{project.description}</p>

      {project.skillsLearned && (
        <p className="mt-2 text-xs text-gray-300">
          Compétences développées : {project.skillsLearned.join(', ')}
        </p>
      )}

      {project.tools && (
        <div className="mt-1 flex flex-wrap gap-2">
          {project.tools.map((tool, index) => (
            <span
              key={index}
              className="bg-gray-700 text-white text-[10px] px-2 py-1 rounded-full uppercase tracking-wider"
            >
              {tool}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectCard;