// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      {/* Our navigation bar */}
      <Header />

      {/* The container where pages get rendered */}
      <Routes>
        {/* Redirect the home path to /about (optional) */}
        <Route path="/" element={<Navigate to="/about" />} />

        {/* Define each page route */}
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />

        {/* Catch-all for any undefined route */}
        <Route path="*" element={<Navigate to="/about" />} />
      </Routes>
    </Router>
  );
}

export default App;
