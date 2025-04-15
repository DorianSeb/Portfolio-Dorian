import React from 'react';
import { FaDownload } from 'react-icons/fa';

function Presentation() {
  return (
    <section className="flex flex-col h-screen bg-gradient-to-b from-black to-[#1a1a1a] text-white font-[100] px-4 py-4 sm:px-6 md:px-10 py-10">
      <h2 className="flex text-xl md:text-4xl font-bold justify-center w-full text-center">Présentation</h2>
    <div className="flex flex-col flex-grow md:flex-row h-full items-center justify-center">
      
      <div className="flex flex-col w-full lg:w-1/2">
      
        <p className="text-sm md:text-base lg:text-base mt-4">
          Bonjour ! Je suis Dorian, développeur web junior passionné, actuellement en fin de formation full-stack.
        </p>

        <p className="text-sm md:text-base lg:text-base mt-4">
          Mes compétences clés : HTML, CSS, JavaScript, React, ainsi que la maîtrise de Figma pour l’intégration de maquettes. 
          S'ajoute une petite couche du CMS WordPress.
        </p>

        <p className="text-sm md:text-base lg:text-base mt-4">
          Ce que je propose :<br />
          • Intégration de maquettes responsives (mobile / desktop)<br />
          • Création de pages dynamiques en JavaScript<br />
          • Composants React simples et efficaces<br />
          • Amélioration ou refonte visuelle de sites existants
        </p>

        <p className="text-sm md:text-base lg:text-base mt-4">
          Mes plus :<br />
          • Sérieux, réactif, orienté solution<br />
          • Expérience professionnelle dans différents environnements (France, Espagne, Australie)<br />
          • Trilingue 🇫🇷🇪🇸🇬🇧 pour les projets internationaux
        </p>

        <p className="text-sm md:text-base lg:text-base mt-4 text-[#4FB3F4] font-bold font-[500]">
          🚀 Vous avez un projet ? Je suis prêt à le réaliser !<br />
          Avec simplicité, clarté et passion, je m’engage à offrir un travail de qualité.
        </p>

        <p className="text-sm md:text-base lg:text-base mt-4">
          Discutons de votre projet !
        </p>
      </div>

      {/* Section d'aperçu et téléchargement du CV */}
      <div className="flex flex-col items-center justify-center w-full lg:w-1/2 lg:h-screen mt-8 lg:mt-0">
        <div className="flex flex-col items-center justify-center md:border-2 md:border-dotted md:border-gray-700 space-around md:px-6 md:py-8">
        <h3 className="text-sm md:text-2xl font-bold text-center mb-2">Téléchargez mon CV</h3>

        {/* Aperçu du CV */}
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg mb-4 hidden md:block w-full max-w-[250px] lg:max-w-[300px] mt-6">
          <img
            src="/cv-dorian.png" // Remplace par l'image de l'aperçu de ton CV
            alt="Aperçu du CV de Dorian Sebille"
            width="1190"
            height="1684"
            className="w-full max-w-[300px] h-auto rounded-lg cursor-pointer"
            onClick={() => window.open('/cv-dorian.png', '_blank')} // Ouvre le PDF en cliquant sur l'image
            loading="lazy"
          />
        </div>

        {/* Bouton de téléchargement */}
        <a href="/public/cv-dorian.pdf" download="cv-dorian.pdf" aria-label="Télécharger le CV de Dorian Sebille">
          <button className="bg-[#4FB3F4] text-white font-bold py-2 px-6 rounded-full flex items-center gap-2 hover:bg-[#3b97c6] transition-transform duration-300">
            <FaDownload className="text-xl" />
            <span className="sr-only">Télécharger le CV</span>
          </button>
        </a>
        </div>
      </div>
    </div>
    </section>
  );
}

export default Presentation;