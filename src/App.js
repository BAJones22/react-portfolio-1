import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Portfolio />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;