import React from 'react';
import ProjectCarrousel from '../components/ProjectCarrousel'; // Utilise ProjectCarousel ici

function Réalisations() {
  return (
    <section className="h-screen bg-gradient-to-b from-black to-[#1a1a1a] text-white flex flex-col items-center justify-start px-10 py-10">
      <h2 className="text-xl md:text-4xl font-bold mb-6">Mes Réalisations</h2>
      <ProjectCarrousel />
    </section>
  );
}

export default Réalisations;