import React from 'react';
import { Link } from 'react-router-dom';
import './SdgPage11.css';

function SdgPage11() {
    return (
        <div className="sdg11-page-wrapper">
            {/* Header */}
            <header className="header">
                <div className="container header-content">
                    <Link to="/" className="logo">
                        <span role="img" aria-label="globe" className="logo-icon"></span>
                        <span className="logo-text">SDG Knowledge Hub</span>
                    </Link>
                    <div className="header-actions">
                        <Link to="/login" className="header-link">Login</Link>
                        <Link to="/register" className="header-link">Registration</Link>
                    </div>
                </div>
            </header>

            {/* Navigation Bar */}
            <nav className="navigation">
                <div className="container">
                    <ul className="nav-links">
                        <li><Link to="/" className="nav-link">Home</Link></li>
                        <li><Link to="/sdg-knowledge" className="nav-link">SDG Knowledge ▼</Link></li>
                        <li><Link to="/sdg10" className="nav-link">SDG 10</Link></li>
                        <li><Link to="/sdg11" className="nav-link" style={{ backgroundColor: '#34495e' }}>SDG 11</Link></li>
                        <li><Link to="/about" className="nav-link">About us</Link></li>                    </ul>
                </div>
            </nav>

            {/* Main Content */}
            <main className="main-content">
                <div className="container content-container">
                    <Link to="/" className="back-link">← Back to Home</Link>

                    <header className="page-header">
                        <h1 className="main-title text-sdg-11">SDG 11: Sustainable Cities</h1>
                        <p className="subtitle">Make cities and human settlements inclusive, safe, resilient, and sustainable for all inhabitants.</p>
                    </header>

                    <div className="main-grid">
                        <div className="image-container">
                            <img src="https://cdn-images-1.medium.com/max/1600/1*pzaKKrNoh-HCz162NrEHXQ.png" alt="SDG 11 Logo" className="image" />
                        </div>
                        <div className="targets-container border-sdg-11">
                            <h2 className="targets-title">Key Targets for Accessibility</h2>
                            <ul className="targets-list">
                                <li>Ensure access for all to adequate, safe, and affordable housing, with a focus on upgrading slums with accessible infrastructure.</li>
                                <li>Provide access to safe, affordable, accessible, and sustainable transport systems for all, notably through expanding public transport.</li>
                                <li>Enhance inclusive and sustainable urbanization, with capacity for participatory and integrated settlement planning.</li>
                                <li>Provide universal access to safe, inclusive and accessible, green and public spaces for all.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="stats-section">
                        <h2 className="section-title">Impact & Accessibility Benefits</h2>
                        <div className="stats-grid">
                            <div className="stat-card border-sdg-11">
                                <div className="stat-number text-sdg-11">55%</div>
                                <div className="stat-label">Of the world's population currently lives in urban areas.</div>
                            </div>
                            <div className="stat-card border-sdg-11">
                                <div className="stat-number text-sdg-11">1B+</div>
                                <div className="stat-label">People live in slums, often with poor accessibility.</div>
                            </div>
                            <div className="stat-card border-sdg-11">
                                <div className="stat-number text-sdg-11">90%</div>
                                <div className="stat-label">Of city dwellers breathe polluted air.</div>
                            </div>
                            <div className="stat-card border-sdg-11">
                                <div className="stat-number text-sdg-11">2x</div>
                                <div className="stat-label">The rate at which urban land is expanding compared to population growth.</div>
                            </div>
                        </div>
                    </div>

                    <div className="cta-card bg-sdg-11">
                        <h2 className="cta-title">Shape Your Sustainable City</h2>
                        <p className="cta-text">SDG 11's vision is built on shared knowledge. By sharing information about accessible locations, you actively help build a more inclusive urban environment. Your contributions are vital data for city planners and fellow citizens.</p>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default SdgPage11;