import React, { useState } from 'react';
import logo from '../assets/images/logo2.png'; 
import { Link } from 'react-scroll'; // Pour faire des liens vers différentes sections de la page
import { FaBars, FaEnvelope } from 'react-icons/fa'; // Icônes react

function Header() {
  const [menuOpen, setMenuOpen] = useState(false); // Pour gérer l'état du menu mobile

  // Fonction pour basculer l'affichage du menu sur petit écran
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="h-[80px] md:h-[100px] lg:h-[125px] bg-black text-white flex items-center justify-between px-12">
      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-[20vh] sm:h-[21vh] md:h-[22vh] lg:h-[30vh] w-auto" />
      </div>

      {/* Menu de navigation */}
      <nav className={`flex flex-col md:flex-row items-center font-[100] ${menuOpen ? 'block' : 'hidden'} md:block bg-black bg-opacity-80 p-4 absolute top-[80px] left-0 right-0 md:static md:flex md:bg-transparent md:p-0`}>
        <Link to="Présentation" smooth={true} duration={500} className="cursor-pointer hover:text-[#4FB3F4] p-2">Présentation</Link>
        <Link to="Réalisations" smooth={true} duration={500} className="cursor-pointer hover:text-[#4FB3F4] p-2">Réalisations</Link>
        <Link to="Compétences" smooth={true} duration={500} className="cursor-pointer hover:text-[#4FB3F4] p-2">Compétences</Link>
      </nav>

      {/* Icônes sur petit écran */}
      <div className="flex items-center md:hidden gap-4">
        <FaEnvelope className="ml-4 text-3xl cursor-pointer" /> {/* Icône enveloppe */}
        <FaBars onClick={toggleMenu} className="text-3xl cursor-pointer" /> {/* Icône hamburger */}
      </div>

      {/* Bouton bleu sur grand écran */}
      <button className="bg-[#4FB3F4] text-white font-bold text-sm py-2 px-6 rounded-full hover:bg-[#3b97c6] hover:scale-105 transition-transform duration-300 sm:text-sm md:text-[16px] md:py-2 md:px-6 md:py-2 hidden md:block">
        Contactez-moi
      </button>
    </header>
  );
}

export default Header;