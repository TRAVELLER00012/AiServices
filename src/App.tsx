
import "./App.css";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Knowledge from "./components/Knowledge";
import ParticleBackground from "./components/ParticleBackground";

const App = () => {


  return (
    <>
      <ParticleBackground />
      {/* <Navigation about={true}/> */}
      <About />
      <Knowledge />

    </>
  );
};

export default App;