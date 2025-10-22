import React, { useState, useEffect, useRef } from 'react'; // Import new hooks
import { Link } from 'react-router-dom';
import "./HomePage.css";

function HomePage() {
    // --- CHANGE #1: Simplified state to a single boolean for the dropdown ---
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [activeGoal, setActiveGoal] = useState(null);
    const dropdownRef = useRef(null); // Create a ref to reference the dropdown element

    const sdgGoals = [
        { number: 10, title: "Reduced Inequalities", color: "#d91667", icon: "⚖️" },
        { number: 11, title: "Sustainable Cities and Communities", color: "#fca315", icon: "🏙️" },
    ];

    // --- CHANGE #2: A simple function to toggle the state ---
    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    // --- CHANGE #3: Hook to handle clicks outside the dropdown ---
    useEffect(() => {
        const handleClickOutside = (event) => {
            // If the dropdown is open and the click is outside the dropdown menu, close it
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        };

        // Add the event listener when the component mounts
        document.addEventListener("mousedown", handleClickOutside);

        // Cleanup the event listener when the component unmounts
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []); // The empty array ensures this effect runs only once


    return (
        <div className="homepage-wrapper">
            <header className="header">
                <div className="container header-content">
                    <div className="logo">
                        <span role="img" aria-label="globe" className="logo-icon">🌍</span>
                        <span className="logo-text">SDG Knowledge Hub</span>
                    </div>
                    <div className="header-actions">
                        <Link to="/login" className="header-link">Login</Link>
                        <Link to="/register" className="header-link">Registration</Link>
                    </div>
                </div>
            </header>

            <nav className="navigation">
                <div className="container">
                    <ul className={`nav-links`}>
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>

                        {/* --- CHANGE #4: Attach the ref and add conditional class + onClick event --- */}
                        <li
                            ref={dropdownRef}
                            className={`nav-item dropdown ${isDropdownOpen ? 'open' : ''}`}
                        >
                            {/* The link now acts as a button to toggle the dropdown */}
                            <a href="#" className="nav-link" onClick={toggleDropdown}>
                                SDG Knowledge ▼
                            </a>
                            <div className="dropdown-menu">
                                <Link to="/sdg-knowledge#overview" onClick={() => setDropdownOpen(false)}>Overview</Link>
                                <Link to="/sdg-knowledge#targets" onClick={() => setDropdownOpen(false)}>Goals & Targets</Link>
                            </div>
                        </li>

                        <li className="nav-item"><Link to="/sdg10" className="nav-link">SDG 10</Link></li>
                        <li className="nav-item"><Link to="/sdg11" className="nav-link">SDG 11</Link></li>
                        <li className="nav-item"><Link to="/about" className="nav-link">About us</Link></li>
                    </ul>
                </div>
            </nav>

            <main className="main-content">
                <section className="hero">
                    <div className="container">
                        <h1 className="hero-title">Sustainable Development Goals</h1>
                        <p className="hero-subtitle">Transforming our world through reduced inequalities and sustainable communities.</p>
                        <div className="hero-buttons">
                            <button className="cta-btn primary"><Link to="/about"> Explore Initiatives</Link></button>

                            <button className="cta-btn secondary"><Link to="/payment">Take Action</Link></button>
                        </div>
                    </div>
                </section>
                <section className="goals-section">
                    <div className="container">
                        <div className="goals-grid">
                            {sdgGoals.map((goal) => (
                                <Link
                                    key={goal.number}
                                    to={`/sdg${goal.number}`}
                                    className={`goal-card ${activeGoal === goal.number ? "active" : ""}`}
                                    style={{ borderTopColor: goal.color, textDecoration: 'none' }}
                                    onMouseEnter={() => setActiveGoal(goal.number)}
                                    onMouseLeave={() => setActiveGoal(null)}
                                >
                                    <div className="goal-icon">{goal.icon}</div>
                                    <div className="goal-number">{goal.number}</div>
                                    <div className="goal-title">{goal.title}</div>
                                    <span className="goal-explore">Explore →</span>
                                </Link>
                            ))}
                            <Link
                                to="/about"
                                className={`goal-card ${activeGoal === 'initiatives' ? "active" : ""}`}
                                style={{ borderTopColor: '#4C9F38', textDecoration: 'none' }}
                                onMouseEnter={() => setActiveGoal('initiatives')}
                                onMouseLeave={() => setActiveGoal(null)}
                            >
                                <div className="goal-icon">🌏</div>
                                <h3 className="goal-title">Featured Initiatives</h3>
                                <p className="initiatives-list">
                                    Urban Equality Program <br />
                                    Green Infrastructure Initiative <br />
                                    Inclusive Housing Project <br />
                                    Sustainable Transport Network
                                </p>
                                <span className="goal-explore">Explore →</span>
                            </Link>
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
                            <ul>
                                <li><Link to ="/about">About Us</Link></li>
                                <li><Link to ="/payment">Get Involved</Link></li>
                            </ul>
                        </div>
                        <div className="footer-section">
                            <h4 className="footer-title">Contact</h4>
                            <ul>
                                <li>Shravani Nikte</li>
                                <li>Sakshi Pandey</li>
                                <li>Suman Panigrahi</li>
                                <li>Mudra Pawar</li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p>© 2025 SDG Knowledge Hub</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default HomePage;