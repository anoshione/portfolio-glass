import { ThemeProvider } from './context/ThemeContext';
import { BackgroundMesh } from './components/BackgroundMesh';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { SelectedWork } from './components/SelectedWork';
import { Process } from './components/Process';
import { Pricing } from './components/Pricing';
import { Reviews } from './components/Reviews';
import { FAQ } from './components/FAQ';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen selection:bg-indigo-500/20 selection:text-indigo-900 dark:selection:text-indigo-200">
        {/* Fixed subtle shifting gradient mesh */}
        <BackgroundMesh />

        {/* Floating glass pill navbar */}
        <Navbar />

        {/* Kinetic Page Content */}
        <main className="relative z-10">
          <Hero />
          <Services />
          <Skills />
          <SelectedWork />
          <Process />
          <Pricing />
          <Reviews />
          <FAQ />
          <Contact />
        </main>

        {/* Minimal Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}

