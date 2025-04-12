import styles from "./App.module.css";

import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import { Skill } from "./components/Skill/Skill";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Skill/>
      <Projects />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
