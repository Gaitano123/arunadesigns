import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Service from "./components/Service"
import About from "./components/About"
import Footer from "./components/Footer"
import Portfolio from "./components/Portfolio"
import Contact from "./components/Contact";

function App() {

  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/our-services" element={<Service />} />
        <Route path="/our-story" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
