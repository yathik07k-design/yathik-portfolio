import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import CareerSnapshot from "./components/CareerSnapshot";
import Strengths from "./components/Strengths";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Training from "./components/Training";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Languages from "./components/Languages";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <CareerSnapshot />
        <Strengths />
        <Skills />
        <Experience />
        <Training />
        <Projects />
        <Education />
        <Certifications />
        <Languages />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
