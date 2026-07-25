import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Opportunities from "./pages/Opportunities";
import Details from "./pages/Details";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/opportunities" element={<Opportunities />} />
      <Route path="/details" element={<Details />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;