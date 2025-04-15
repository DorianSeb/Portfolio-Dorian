import React from "react";
import { FaHtml5, FaJs, FaReact, FaTools, FaBug, FaRocket } from "react-icons/fa";

const Competences = () => {
  return (
    <section className="min-h-screen px-8 py-12 bg-gradient-to-b from-black to-[#1a1a1a] text-white">
      <h2 className="text-xl md:text-4xl font-bold mb-6 font-bold text-center">Mes compétences</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Bloc HTML / CSS */}
        <div className="border-l-[1px] border-[#4FB3F4] pl-4 bg-[#1f1f1f] rounded-lg p-6 shadow-md hover:scale-[1.02] transition-transform duration-300">
          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
            <FaHtml5 className="text-orange-400" /> Intégration web avec HTML & CSS
          </h3>
          <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
            <li>Intégrer une maquette en HTML/CSS</li>
            <li>Mettre en place une interface responsive</li>
            <li>Saisie de texte</li>
          </ul>
        </div>

        {/* Bloc JavaScript */}
        <div className="border-l-[1px] border-[#4FB3F4] pl-4 bg-[#1f1f1f] rounded-lg p-6 shadow-md hover:scale-[1.02] transition-transform duration-300">
          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
            <FaJs className="text-yellow-400" /> Développement web avec JavaScript
          </h3>
          <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
            <li>Manipuler les éléments du DOM</li>
            <li>Récupérer les données des formulaires</li>
            <li>Gérer les événements utilisateurs</li>
          </ul>
        </div>

        {/* Bloc React */}
        <div className="border-l-[1px] border-[#4FB3F4] pl-4 bg-[#1f1f1f] rounded-lg p-6 shadow-md hover:scale-[1.02] transition-transform duration-300">
          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
            <FaReact className="text-cyan-400" /> Développement avec React
          </h3>
          <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
            <li>Initialiser une app avec Create React App</li>
            <li>Configurer React Router</li>
            <li>Créer des composants réutilisables</li>
          </ul>
        </div>

        {/* Bloc Gestion de projet & outils */}
        <div className="border-l-[1px] border-[#4FB3F4] pl-4 bg-[#1f1f1f] rounded-lg p-6 shadow-md hover:scale-[1.02] transition-transform duration-300">
          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
            <FaTools className="text-pink-400" /> Gestion de projet & outils développeurs
          </h3>
          <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
            <li>Utilisation de Git et GitHub</li>
            <li>Organisation de projet avec découpage en tâches</li>
            <li>Rédaction des spécifications techniques</li>
            <li>Présentation d'une solution technique</li>
            <li>Veille technologique</li>
            <li>Installation d’un environnement de dev front-end</li>
          </ul>
        </div>

        {/* Bloc Optimisation & Debug */}
        <div className="border-l-[1px] border-[#4FB3F4] pl-4 bg-[#1f1f1f] rounded-lg p-6 shadow-md hover:scale-[1.02] transition-transform duration-300">
          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
            <FaBug className="text-red-400" /> Optimisation & Debug
          </h3>
          <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
            <li>Optimisation des performances avec Lighthouse</li>
            <li>Accessibilité avec Wave</li>
            <li>Debug avec Chrome DevTools</li>
            <li>Rédaction d’un cahier de recette</li>
          </ul>
        </div>

        {/* Bloc Publication */}
        <div className="border-l-[1px] border-[#4FB3F4] pl-4 bg-[#1f1f1f] rounded-lg p-6 shadow-md hover:scale-[1.02] transition-transform duration-300">
          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
            <FaRocket className="text-purple-400" /> Publication d’un site
          </h3>
          <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
            <li>Déployer un site statique en ligne</li>
          </ul>
        </div>

        {/* Bloc Compétences à développer */}
        <div className="border-l-[1px] border-[#4FB3F4] pl-4 bg-[#1f1f1f] rounded-lg p-6 shadow-md hover:scale-[1.02] transition-transform duration-300">
          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
            <FaTools className="text-gray-400" /> Prochaines compétences à développer
          </h3>
          <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
            <li>Développement en PHP / MySQL</li>
            <li>TypeScript</li>
            <li>Next.js</li>
            <li>Tests unitaires</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Competences;