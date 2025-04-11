import Header from './components/Header';
import Hero from './components/Hero';
import Presentation from './pages/Présentation';  // Importation de la page Présentation
import Realisations from './pages/Réalisations';  // Importation de la page Réalisations
import Competences from './pages/Compétences';   // Importation de la page Compétences

function App() {
  return (
    <>
      <Header />
      <Hero />
      
      {/* Sections avec leurs IDs pour pouvoir scroller */}
      <section id="Présentation">
        <Presentation />
      </section>

      <section id="Réalisations">
        <Realisations />
      </section>

      <section id="Compétences">
        <Competences />
      </section>
    </>
  );
}

export default App;