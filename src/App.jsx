import "./App.css";
import React, { useState } from "react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Portfolio from "./Pages/Portfolio";
import Resume from "./Pages/Resume";
import Contact from "./Pages/Contact";
import Navbar from "./Components/Navbar";

function App() {
  const [displayState, setDisplayState] = useState('')

  const DisplaySwitch = (state) => {
    switch (state) {
      case 'Home':
        return <Home />
      case 'About':
        return <About />
      case 'Portfolio':
        return <Portfolio />
      case 'Resume':
        return <Resume />
      case 'Contact':
        return <Contact />
      default:
        return <Home />
    }
  }

  return (
<>
    <Navbar setDisplayState={setDisplayState} />
    {DisplaySwitch(displayState)}
</>
  );
}

export default App;