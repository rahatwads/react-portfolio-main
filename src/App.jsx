import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import Paper from "./components/Paper/paper";
import { Projects } from "./components/Projects/Projects";
import Footer   from "./components/Footer/footer";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Paper />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
