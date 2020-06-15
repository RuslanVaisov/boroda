import React from "react";
import Navbar from "./components/Navbar";
import Showcase from "./components/Showcase";
import Services from "./components/Services";
import About from "./components/About";
import Instagram from "./components/Instagram";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Showcase />
      <Services />
      <About />
      <Instagram />
      <Footer />
    </div>
  );
}

export default App;
