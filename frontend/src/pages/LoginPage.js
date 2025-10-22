// src/pages/LoginPage.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Import axios for backend communication
import './Login.css';

function LoginPage() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const { email, password } = formData;
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    // --- INTEGRATED SUBMISSION HANDLER ---
    const onSubmit = async e => {
        e.preventDefault();
        try {
            // Send a POST request to your backend's login endpoint
            const res = await axios.post('http://localhost:5000/api/auth/login', formData);

            // Assuming the backend sends back a token
            localStorage.setItem('token', res.data.token);
            alert('Login successful!');

            // Redirect user to the homepage after successful login
            window.location.href = '/';

        } catch (err) {
            // Use a specific error message from the backend if available
            const message = err.response?.data?.msg || 'Login failed. Please check your credentials.';
            console.error(err.response?.data || err.message);
            alert(message);
        }
    };

    return (
        <div className="login-page-container">
            <div className="login-form-container">
                <h2>Login Form</h2>
                <p>
                    Welcome! Please log in to access the Accessibility
                    Information Hub.
                </p>
                {/* The form now calls the async onSubmit function */}
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email id</label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={onChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            id="password"
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={onChange}
                            required
                        />
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