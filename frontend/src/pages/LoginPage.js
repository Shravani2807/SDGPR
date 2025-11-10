// src/pages/LoginPage.js (FINAL, UPDATED CODE)

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios';
import './Login.css';

function LoginPage() {
    const navigate = useNavigate(); // Initialize navigate hook
    const [formData, setFormData] = useState({ email: '', password: '' });
    const { email, password } = formData;
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        try {
            const res = await axios.post('https://sdgpr-backend.onrender.com/api/auth/login', formData);
            localStorage.setItem('token', res.data.token);
            alert('Login successful!');

            // *** CHANGE: Use navigate for a smooth redirect ***
            // window.location.href = '/'; 
            navigate('/');

        } catch (err) {
            const message = err.response?.data?.msg || 'Login failed. Please check your credentials.';
            console.error(err.response?.data || err.message);
            alert(message);
        }
    };

    return (
        <div className="login-page-container">
            <div className="login-form-container">
                <h2>Login Form</h2>
                <p>Welcome! Please log in to access the Accessibility Information Hub.</p>
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email id</label>
                        <input type="email" id="email" name="email" placeholder="Enter your email" value={email} onChange={onChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" placeholder="Enter your password" value={password} onChange={onChange} required />
                    </div>
                    <button type="submit">Login</button>
                </form>
                <div className="register-link-container">
                    <p>Don't have an account? <Link to="/register">Register</Link></p>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;