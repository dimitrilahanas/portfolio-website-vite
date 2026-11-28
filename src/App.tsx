import Navbar from "./components/Navbar.tsx";
import About from "./sections/About.tsx";
import Contact from "./sections/Contact.tsx";
import Hero from "./sections/Hero.tsx";
import Projects from "./sections/Projects.tsx";

function App() {

  return (
    <>
    <Navbar />
    <Hero />
    <About />
    <Projects />
    <Contact />
    </>
  )
}

export default App;
