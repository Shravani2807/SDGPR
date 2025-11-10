// src/components/Header.js (FINAL CODE)

import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

function Header() {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    // This effect runs on component load to check for an existing token
    useEffect(() => {
        try {
            const token = localStorage.getItem('token');
            if (token) {
                const decodedToken = jwtDecode(token);
                // Check if the token is expired
                const isExpired = decodedToken.exp * 1000 < Date.now();
                if (isExpired) {
                    handleLogout();
                } else {
                    setUser(decodedToken.user);
                }
            }
        } catch (error) {
            // If token is malformed, log out
            console.error("Invalid token found", error);
            handleLogout();
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        setUser(null);
        // We use window.location here to force a full refresh, which can help clear any old state
        window.location.href = '/#/login'; 
    };

    return (
        <header className="header">
            <div className="container header-content">
                <div className="logo">
                    <span role="img" aria-label="globe" className="logo-icon">🌍</span>
                    <span className="logo-text">SDG Knowledge Hub</span>
                </div>
                <div className="header-actions">
                    {user ? (
                        // If user IS logged in, show this
                        <>
                            <Link to="/profile" className="header-link">
                                Hi, {user.name}
                            </Link>
                            <button onClick={handleLogout} className="header-link" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, fontFamily: 'inherit' }}>
                                Logout
                            </button>
                        </>
                    ) : (
                        // If user IS NOT logged in, show this
                        <>
                            <Link to="/login" className="header-link">Login</Link>
                            <Link to="/register" className="header-link">Registration</Link>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;