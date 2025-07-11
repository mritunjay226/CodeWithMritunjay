import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Projects from "./components/Project";
import AOS from "aos";
import { Toaster } from "react-hot-toast";

export default function App() {
  const [dark, setDark] = useState(() => localStorage.getItem("theme") === "dark");

  useEffect(() => {
    document.title = "Mritunjay | Portfolio";
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  useEffect(() => {
  AOS.init({ once: true, duration: 800 });
}, []);
  return (
    <div className="font-ibm transition-colors duration-500 bg-white dark:bg-black text-black dark:text-white scroll-smooth">
      
      <Navbar dark={dark} setDark={setDark} />
      <Toaster position="top-center" />
      <Hero dark={dark} />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
