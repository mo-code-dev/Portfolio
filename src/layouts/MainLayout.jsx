import Navbar from "../components/Navbar/Navbar";

import Hero from "../sections/Hero/Hero";
import About from "../sections/About/About";
import Skills from "../sections/Skills/Skills";
import Projects from "../sections/Projects/Projects";
import Experience from "../sections/Experience/Experience";
import Education from "../sections/Education/Education";
import Certificates from "../sections/Certificates/Certificates";
import Contact from "../sections/Contact/Contact";

import Footer from "../components/Footer/Footer";

function MainLayout() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f8fbff] text-slate-900">
      <Navbar />

      <main>
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Skills Section */}
        <Skills />

        {/* Projects Section */}
        <Projects />

        {/* Experience Section */}
        <Experience />

        {/* Education Section */}
        <Education />

        {/* Certificates Section */}
        <Certificates />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default MainLayout;