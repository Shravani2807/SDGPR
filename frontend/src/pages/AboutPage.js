import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header'; // Use the reusable Header
import './AboutPage.css';

const AboutPage = () => {
    return (
        <div className="about-page-wrapper">
            
            <Header /> {/* Reusable Header component */}

            <nav className="navigation">
                <div className="container">
                    <ul className="nav-links">
                        <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
                        <li className="nav-item"><Link to="/sdg-knowledge" className="nav-link">SDG Knowledge</Link></li>
                        <li className="nav-item"><Link to="/sdg10" className="nav-link">SDG 10</Link></li>
                        <li className="nav-item"><Link to="/sdg11" className="nav-link">SDG 11</Link></li>
                        <li className="nav-item"><Link to="/about" className="nav-link active">About us</Link></li>
                    </ul>
                </div>
            </nav>

            <main className="about-main-content">
                <section className="about-hero">
                    <div className="container">
                        <h1 className="about-hero-title">Empowering Inclusive Communities</h1>
                        <p className="about-hero-subtitle">
                            We are dedicated to bridging the information gap for people with disabilities, creating a world where every public space is accessible to everyone.
                        </p>
                    </div>
                </section>

                <section className="mission-section">
                    <div className="container mission-content">
                        <div className="mission-text">
                            <h2>Our Mission</h2>
                            <p>
                                People with disabilities often lack up-to-date, reliable information on accessible public spaces, services, or emergency assistance. This barrier limits mobility, independence, and full participation in society.
                            </p>
                            <p>
                                The <strong>SDG Knowledge Hub</strong> is a collaborative platform for users to share, rate, and discover accessible locations—from restaurants and transport hubs to hospitals and parks. By leveraging community-sourced data, we aim to build a comprehensive, user-friendly guide for accessible living in any city.
                            </p>
                        </div>
                        <div className="mission-image-container">
                            <img src="https://images.pexels.com/photos/3283186/pexels-photo-3283186.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="City with accessible pathways" className="mission-image" />
                        </div>
                    </div>
                </section>

                <section className="initiatives-section">
                    <div className="container">
                        <h2 className="section-title">Join Our Initiatives</h2>
                        <p className="section-subtitle">
                            These programs are the backbone of our mission. Your participation is key to building truly sustainable and equitable communities.
                        </p>
                        <div className="initiatives-grid">
                            <div className="initiative-card">
                                <h3 className="initiative-title">Urban Equality Program</h3>
                                <p className="initiative-description">Help map and review the accessibility of public buildings...</p>
                                <button className="initiative-btn"><Link to="/payment">Volunteer Now</Link></button>
                            </div>
                            <div className="initiative-card">
                                <h3 className="initiative-title">Green Infrastructure Initiative</h3>
                                <p className="initiative-description">Contribute to creating accessible green spaces...</p>
                                <button className="initiative-btn"><Link to="/payment">Get Involved</Link></button>
                            </div>
                            <div className="initiative-card">
                                <h3 className="initiative-title">Inclusive Housing Project</h3>
                                <p className="initiative-description">Advocate for and contribute data on accessible housing...</p>
                                <button className="initiative-btn">Share Your Ideas</button>
                            </div>
                            <div className="initiative-card">
                                <h3 className="initiative-title">Sustainable Transport Network</h3>
                                <p className="initiative-description">Rate and review the accessibility of your local public transport system...</p>
                                <button className="initiative-btn">Share Your Experience</button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="footer">
                <div className="container">
                    <div className="footer-content">
                        <div className="footer-section">
                            <h4 className="footer-title">SDG Knowledge Hub</h4>
                            <p>A platform dedicated to achieving SDGs 10 and 11.</p>
                        </div>
                        <div className="footer-section">
                            <h4 className="footer-title">Quick Links</h4>
                            <ul><li><a href="#">About Us</a></li><li><a href="#">Get Involved</a></li></ul>
                        </div>
                        <div className="footer-section">
                            <h4 className="footer-title">Contact</h4>
                            <ul><li>Shravani Nikte</li><li>Sakshi Pandey</li><li>Suman Panigrahi</li><li>Mudra Pawar</li></ul>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p>© 2025 SDG Knowledge Hub</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default AboutPage;