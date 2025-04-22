import Header from '../app/(main)/components/Header/Header';
import Hero from '../app/(main)/components/Hero/Hero';
import About from '../app/(main)/components/About/About';
import Experience from '../app/(main)/components/Experience/Experience';
import Projects from '../app/(main)/components/Projects/Projects';
import Contact from '../app/(main)/components/Contact/Contact';
import Footer from '../app/(main)/components/Footer/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}