// src/App.js (FINAL, UPDATED CODE)

import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

// Import all your page components
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import SdgKnowledgePage from './pages/SdgKnowledgePage';
import SdgPage10 from './pages/SdgPage10';
import SdgPage11 from './pages/SdgPage11';
import AboutPage from './pages/AboutPage';
import Payment from './pages/Payment';
import ProfilePage from './pages/ProfilePage'; // <-- Import the new page

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/sdg-knowledge" element={<SdgKnowledgePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegistrationPage />} />
                <Route path="/sdg10" element={<SdgPage10 />} />
                <Route path="/sdg11" element={<SdgPage11 />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/profile" element={<ProfilePage />} /> {/* <-- Add the new route */}
            </Routes>
        </Router>
    );
}

export default App;