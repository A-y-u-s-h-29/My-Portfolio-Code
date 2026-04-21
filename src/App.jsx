import { FaCertificate } from "react-icons/fa"
import Education from "./components/Education"
import Experience from "./components/Experience"
import HeroSection from "./components/HeroSection"
import NavBar from "./components/NavBar"
import Project from "./components/Project"
import Skills from "./components/Skills"
import Certificates from "./components/certificates"
import Footer from "./components/Footer"
const App = () => {
  return (
    <>
    <div className="fixed top-0 left-0 -z-10 w-full h-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
    <NavBar />
    <HeroSection />
    <Education />
    <Skills />
    <Experience />
    <Project />
    <Certificates />
    <Footer />
    </>
  )
}

export default App
