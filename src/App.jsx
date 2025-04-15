import Header from './components/Header';
import Hero from './components/Hero';
import Presentation from './pages/Presentation'; 
import Realisations from './pages/Realisations'; 
import Competences from './pages/Competences';  
import Contact from './components/Contact'; 
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div id="Hero">
        <Header />
        <Hero />
      </div>
      
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

      <section id="Contact">
        <Contact />
      </section>

      <Footer />
    </>
  );
}

export default App;