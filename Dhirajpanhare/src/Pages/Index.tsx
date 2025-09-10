import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Resume from '@/components/Resume';
import Skills from '@/components/Skills';
import Portfolio from '@/components/Portfolio';
import Footer from '@/components/Footer';
import { ThemeToggle } from '@/components/ThemeToggle';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <ThemeToggle />
      <Hero />
      <About />
      <Resume />
      <Skills />
      <Portfolio />
      <Footer />
    </div>
  );
};

export default Index;
