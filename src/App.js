import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Skills from "./components/skills";
import Project from "./components/projects";
import Contact from "./components/contact";
import Footer from "./components/footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Project />
      <Contact/>
      <Footer />
    </div>
  );
}

export default App;
