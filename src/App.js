import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
import Home from "./components/Home";
import Office from "./components/Office";
import Reception from "./components/Reception";
import TVUnit from "./components/TVUnit";
import Kitchen from "./components/Kitchen";
import Bedroom from "./components/Bedroom";
import Residence from "./components/Residence";
import Contact from "./components/Contact";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/office" element={<Office />} />
          <Route path="/reception" element={<Reception />} />
          <Route path="/tvunit" element={<TVUnit />} />
          <Route path="/kitchen" element={<Kitchen />} />
          <Route path="/bedroom" element={<Bedroom />} />
          <Route path="/residence" element={<Residence />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
};

export default App;
