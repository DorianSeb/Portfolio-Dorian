import React from 'react';
import logo from '../assets/images/logo2.png';  // Import du logo
import { Link } from 'react-scroll';  // Pour faire des liens vers différentes sections de la page

function Header() {
  return (
    <header className="h-[80px] md:h-[100px] lg:h-[125px] bg-black text-white flex items-center justify-between px-12">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-[30vh] w-auto" />
      </div>
      
      {/* Menu de navigation */}
      <nav className="flex space-x-6 text-xl font-light font-roboto">
        <Link to="Présentation" smooth={true} duration={500} className="cursor-pointer hover:text-[#4FB3F4]">Présentation</Link>
        <Link to="Réalisations" smooth={true} duration={500} className="cursor-pointer hover:text-[#4FB3F4]">Réalisations</Link>
        <Link to="Compétences" smooth={true} duration={500} className="cursor-pointer hover:text-[#4FB3F4]">Compétences</Link>
      </nav>
      
      {/* Bouton bleu */}
      <button className="bg-[#4FB3F4] text-white font-bold text-xl py-4 px-12 rounded-full hover:bg-[#3b97c6] hover:scale-105 transition-transform duration-300">
        Contactez-moi
      </button>
    </header>
  );
}

export default Header;