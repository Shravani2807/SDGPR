import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header'; // Use the reusable Header
import './SdgPage10.css';

function SdgPage10() {
    return (
        <div className="sdg10-page-wrapper">
            
            <Header /> {/* Reusable Header component */}

            <nav className="navigation">
                <div className="container">
                    <ul className="nav-links">
                        <li><Link to="/" className="nav-link">Home</Link></li>
                        <li><Link to="/sdg-knowledge" className="nav-link">SDG Knowledge ▼</Link></li>
                        <li><Link to="/sdg10" className="nav-link" style={{ backgroundColor: '#34495e' }}>SDG 10</Link></li>
                        <li><Link to="/sdg11" className="nav-link">SDG 11</Link></li>
                        <li><Link to="/about" className="nav-link">About us</Link></li>
                    </ul>
                </div>
            </nav>

            <main className="main-content">
                <div className="container content-container">
                    <Link to="/" className="back-link">← Back to Home</Link>
                    <header className="page-header">
                        <h1 className="main-title text-sdg-10">SDG 10: Reduced Inequalities</h1>
                        <p className="subtitle">Reduce inequality within and among countries, ensuring no one is left behind, especially persons with disabilities.</p>
                    </header>
                    <div className="main-grid">
                        <div className="image-container">
                            <img src="https://www.its.ac.id/sustainability/wp-content/uploads/sites/120/2020/08/SDG_10-1-1024x1024.png" alt="SDG 10 Logo" className="image" />
                        </div>
                        <div className="targets-container border-sdg-10">
                            <h2 className="targets-title">Key Targets for Accessibility</h2>
                            <ul className="targets-list">
                                <li>Empower and promote the social, economic, and political inclusion of all...</li>
                                <li>Facilitate safe, orderly, and responsible migration and mobility...</li>
                                <li>Ensure equal opportunity and reduce inequalities of outcome...</li>
                                <li>Adopt policies, especially social protection policies...</li>
                            </ul>
                        </div>
                    </div>
                    <div className="stats-section">
                        <h2 className="section-title">Impact & Accessibility Benefits</h2>
                        <div className="stats-grid">
                            <div className="stat-card border-sdg-10"><div className="stat-number text-sdg-10">15%</div><div className="stat-label">Of the world's population...</div></div>
                            <div className="stat-card border-sdg-10"><div className="stat-number text-sdg-10">80%</div><div className="stat-label">Of persons with disabilities...</div></div>
                            <div className="stat-card border-sdg-10"><div className="stat-number text-sdg-10">3x</div><div className="stat-label">More likely for children...</div></div>
                            <div className="stat-card border-sdg-10"><div className="stat-number text-sdg-10">+20%</div><div className="stat-label">Increase in company revenue...</div></div>
                        </div>
                    </div>
                    <div className="cta-card bg-sdg-10">
                        <h2 className="cta-title">How This Supports Our Platform</h2>
                        <p className="cta-text">SDG 10 is the core of our mission...</p>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default SdgPage10;