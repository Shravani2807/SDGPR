import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header'; // Use the reusable Header
import './SdgKnowledgePage.css';

function SdgKnowledgePage() {
    const overviewRef = useRef(null);
    const targetsRef = useRef(null);

    const handleScrollTo = (ref) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div className="knowledge-page-wrapper">
            
            <Header /> {/* Reusable Header component */}

            <nav className="navigation">
                <div className="container">
                    <ul className="nav-links">
                        <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
                        <li className="nav-item dropdown open">
                            <Link to="/sdg-knowledge" className="nav-link">SDG Knowledge ▼</Link>
                            <div className="dropdown-menu" style={{ display: 'block' }}>
                                <div className="dropdown-item" onClick={() => handleScrollTo(overviewRef)}>Overview</div>
                                <div className="dropdown-item" onClick={() => handleScrollTo(targetsRef)}>Goals & Targets</div>
                            </div>
                        </li>
                        <li className="nav-item"><Link to="/sdg10" className="nav-link">SDG 10</Link></li>
                        <li className="nav-item"><Link to="/sdg11" className="nav-link">SDG 11</Link></li>
                        <li className="nav-item"><Link to="/about" className="nav-link">About us</Link></li>
                    </ul>
                </div>
            </nav>

            <main className="main-content-knowledge">
                <section ref={overviewRef} id="overview" className="knowledge-section">
                    <div className="container">
                        <h1 className="knowledge-title">SDG Knowledge Overview</h1>
                        <p className="knowledge-intro">
                            The Sustainable Development Goals (SDGs) are a universal call to action to end poverty, protect the planet, and ensure that by 2030 all people enjoy peace and prosperity. This hub focuses on two critical, interconnected goals: SDG 10 and SDG 11.
                        </p>
                        <div className="overview-grid">
                            <div className="overview-card sdg10">
                                <h2>SDG 10: Reduced Inequalities</h2>
                                <p>This goal calls for reducing inequality within and among countries. It focuses on empowering and promoting the social, economic, and political inclusion of all, irrespective of age, sex, disability, race, ethnicity, origin, religion, or economic status.</p>
                            </div>
                            <div className="overview-card sdg11">
                                <h2>SDG 11: Sustainable Cities and Communities</h2>
                                <p>This goal aims to make cities and human settlements inclusive, safe, resilient, and sustainable. It addresses challenges like inadequate housing, air pollution, and the need for safe, accessible public spaces and sustainable transport systems for everyone, including people with disabilities.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section ref={targetsRef} id="targets" className="knowledge-section alt-background">
                    <div className="container">
                        <h2 className="section-title">Official Goals & Targets</h2>
                        
                        <div className="target-card">
                            <h3 className="target-title sdg10-title"><b>SDG 10 Targets</b></h3>
                            <ul className="target-list">
                                <li><strong>10.1</strong> By 2030, progressively achieve and sustain income growth of the bottom 40 per cent of the population at a rate higher than the national average.</li>
                                <li><strong>10.2</strong> By 2030, empower and promote the social, economic and political inclusion of all, irrespective of age, sex, disability, race, ethnicity, origin, religion or economic or other status.</li>
                                <li><strong>10.3</strong> Ensure equal opportunity and reduce inequalities of outcome, including by eliminating discriminatory laws, policies and practices and promoting appropriate legislation, policies and action in this regard.</li>
                                <li><strong>10.4</strong> Adopt policies, especially fiscal, wage and social protection policies, and progressively achieve greater equality.</li>
                            </ul>
                        </div>

                        <div className="target-card">
                            <h3 className="target-title sdg11-title"><b>SDG 11 Targets</b></h3>
                            <ul className="target-list">
                                <li><strong>11.1</strong> By 2030, ensure access for all to adequate, safe and affordable housing and basic services and upgrade slums.</li>
                                <li><strong>11.2</strong> By 2030, provide access to safe, affordable, accessible and sustainable transport systems for all, improving road safety, notably by expanding public transport, with special attention to the needs of those in vulnerable situations, women, children, persons with disabilities and older persons.</li>
                                <li><strong>11.3</strong> By 2030, enhance inclusive and sustainable urbanization and capacity for participatory, integrated and sustainable human settlement planning and management in all countries.</li>
                                <li><strong>11.7</strong> By 2030, provide universal access to safe, inclusive and accessible, green and public spaces, in particular for women and children, older persons and persons with disabilities.</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="footer">
                <div className="container">
                    <p>© 2025 SDG Knowledge Hub</p>
                </div>
            </footer>
        </div>
    );
}

export default SdgKnowledgePage;