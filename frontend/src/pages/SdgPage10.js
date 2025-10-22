import React from 'react';
import { Link } from 'react-router-dom';
import './SdgPage10.css';

function SdgPage10() {
    return (
        <div className="sdg10-page-wrapper">
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
                        <li><Link to="/sdg10" className="nav-link" style={{ backgroundColor: '#34495e' }}>SDG 10</Link></li>
                        <li><Link to="/sdg11" className="nav-link">SDG 11</Link></li>
                        <li><a href="#" className="nav-link">About us</a></li>
                    </ul>
                </div>
            </nav>

            {/* Main Content */}
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
                        {/* --- MODIFIED SECTION --- */}
                        <div className="targets-container border-sdg-10">
                            <h2 className="targets-title">Key Targets for Accessibility</h2>
                            <ul className="targets-list">
                                <li>Empower and promote the social, economic, and political inclusion of all, explicitly including persons with disabilities.</li>
                                <li>Facilitate safe, orderly, and responsible migration and mobility, including for persons with disabilities fleeing conflict.</li>
                                {/* --- NEW TARGETS ADDED --- */}
                                <li>Ensure equal opportunity and reduce inequalities of outcome by eliminating discriminatory laws and policies.</li>
                                <li>Adopt policies, especially social protection policies, to progressively achieve greater equality for all.</li>
                            </ul>
                        </div>
                        {/* --- END OF MODIFIED SECTION --- */}
                    </div>

                    <div className="stats-section">
                        <h2 className="section-title">Impact & Accessibility Benefits</h2>
                        <div className="stats-grid">
                            <div className="stat-card border-sdg-10">
                                <div className="stat-number text-sdg-10">15%</div>
                                <div className="stat-label">Of the world's population live with some form of disability.</div>
                            </div>
                            <div className="stat-card border-sdg-10">
                                <div className="stat-number text-sdg-10">80%</div>
                                <div className="stat-label">Of persons with disabilities live in developing countries.</div>
                            </div>
                            <div className="stat-card border-sdg-10">
                                <div className="stat-number text-sdg-10">3x</div>
                                <div className="stat-label">More likely for children with disabilities to be out of school.</div>
                            </div>
                            <div className="stat-card border-sdg-10">
                                <div className="stat-number text-sdg-10">+20%</div>
                                <div className="stat-label">Increase in company revenue for those with inclusive disability practices.</div>
                            </div>
                        </div>
                    </div>

                    <div className="cta-card bg-sdg-10">
                        <h2 className="cta-title">How This Supports Our Platform</h2>
                        <p className="cta-text">SDG 10 is the core of our mission. By providing a platform to share accessibility information, we empower individuals to overcome physical and social barriers. Every rating and review you contribute helps reduce inequality.</p>
                    </div>
                </div>
            </main>

            {/* Footer remains the same and can be a shared component */}
        </div>
    );
}

export default SdgPage10;