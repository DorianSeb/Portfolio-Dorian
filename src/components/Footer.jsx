import React from "react";
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-200 py-6 text-center text-sm">
      {/* Icônes avec liens */}
      <div className="flex justify-center gap-6 mb-3">
        <a
          href="mailto:sebilledorian@gmail.com"
          className="hover:text-[#4FB3F4]"
          aria-label="Email"
        >
          <FaEnvelope className="text-2xl" />
        </a>
        <a
          href="https://github.com/DorianSeb"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#4FB3F4]"
          aria-label="GitHub"
        >
          <FaGithub className="text-2xl" />
        </a>
        <a
          href="https://www.linkedin.com/in/dorian-sebille-6b1365119"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#4FB3F4]"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="text-2xl" />
        </a>
      </div>

      {/* Phrase stylée */}
      <p className="text-gray-200 italic mb-1">
        Développé avec React, Tailwind & beaucoup de café ☕
      </p>
      <p className="text-gray-200">© {new Date().getFullYear()} Dorian Sebille. Tous droits réservés.</p>
    </footer>
  );
};

export default Footer;