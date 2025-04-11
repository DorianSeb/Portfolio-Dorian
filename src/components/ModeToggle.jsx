import React, { useState, useEffect } from 'react';

function ModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  // Lorsque le mode sombre est changé, on applique ou retire la classe 'dark' du body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)} // Bascule l'état du mode sombre
      className="py-2 px-4 bg-[#4FB3F4] text-white rounded-lg hover:bg-[#3b97c6] transition-all duration-300"
    >
      {darkMode ? 'Passer en mode clair' : 'Passer en mode sombre'}
    </button>
  );
}

export default ModeToggle;