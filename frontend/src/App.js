// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Notice there is no 'import "./App.css"' and no wrapper div with className="App"

// Import page components
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import SdgKnowledgePage from './pages/SdgKnowledgePage';
import SdgPage10 from './pages/SdgPage10';
import SdgPage11 from './pages/SdgPage11';
import AboutPage from './pages/AboutPage';
import Payment from './pages/Payment';


function App() {
  return (
    // The Router does not add any visual elements, it only handles logic.
    <Router>
      {/* 
        There is NO wrapper div here. This is key. 
        HomePage is now a top-level component that can be truly full-screen.
      */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sdg-knowledge" element={<SdgKnowledgePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/sdg10" element={<SdgPage10 />} />
        <Route path="/sdg11" element={<SdgPage11 />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/Payment" element={<Payment />} />

      </Routes>
    </Router>
  );
}

export default App;