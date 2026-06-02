import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import FeaturedProject from '@/components/FeaturedProject';
import Learning from '@/components/Learning';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <FeaturedProject />
      <Learning />
      <Contact />
      <Footer />
    </main>
  );
}
