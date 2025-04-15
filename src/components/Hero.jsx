import React from 'react';
import Lottie from 'lottie-react'; // Utilisation du composant Lottie dans la version 2.x
import animationData from '../assets/animations/animation-bonjour.json'; // Le fichier JSON d'animation
import animationWebdev from '../assets/animations/animation-webdev.json';

function Hero() {
  return (
    <div className="h-screen bg-gradient-to-b from-black to-[#1a1a1a] text-white flex flex-col lg:flex-row justify-center items-center px-10">
      <div className="flex flex-col w-1/2 ml-[35px]">   
        <img
          src="/Portfolio-Dorian/images/profil.webp"
          alt="Photo de Dorian"
          width="462"
          height="570"
          loading="eager"
          className="w-48 h-48 rounded-full object-cover object-top border-2 border-white hover:scale-125 transition-transform duration-[500ms]"
        />
        <div className="text-1xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-center font-ooohbaby -rotate-12 inline-flex items-center whitespace-nowrap">
          Hello, moi c’est Dorian !
          <Lottie
            autoplay
            loop
            animationData={animationData}
            style={{ height: '50px', width: '50px', minHeight: '50px', minWidth: '50px'}} 
          />
        </div>
        
        <h1 className="text-1xl sm:text-3xl md:text-3xl lg:text-5xl font-bold mt-4 sm:mt-6 md:mt-14 lg:mt-20">
            Développeur web <span className="text-[#4FB3F4]">fullstack</span>
        </h1>
        <p className="text-1xl sm:text-1xl md:text-2xl lg:text-2xl font-light font-roboto">  
            J’adore créer des sites web modernes, dynamiques et réactifs !
        </p>
      </div>
      <div className="flex items-start justify-center w-1/2">
        <Lottie
          autoplay
          loop
          animationData={animationWebdev}  // Nouvelle animation importée
          style={{ height: 'auto', width: '100%', maxWidth: '400px'}} // Ajuste la taille si nécessaire
        />
      </div>
    </div>
  );
}

export default Hero;