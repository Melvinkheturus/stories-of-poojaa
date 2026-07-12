import Footer from '@/components/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Education from '@/components/sections/Education';
import Experience from '@/components/sections/Experience';
import Skills from '@/components/sections/Skills';
import Blog from '@/components/sections/Blog';
import Contact from '@/components/sections/Contact';

export { metadata } from './metadata';

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
