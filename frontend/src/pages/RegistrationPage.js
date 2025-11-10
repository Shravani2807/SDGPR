// src/pages/RegistrationPage.js

import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios'; // Re-added for backend communication
import './Registration.css';
import { FaStar } from 'react-icons/fa';

function RegistrationPage() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const password = watch('password', '');

    const getPasswordStrength = () => {
        // ... (this function remains the same as your "before" code)
        if (!password) return { score: 0, label: '', color: '#e0e0e0' };
        let score = 0;
        if (password.length >= 8) score++;
        if (/[A-Z]/.test(password)) score++;
        if (/[0-9]/.test(password)) score++;
        if (/[^A-Za-z0-9]/.test(password)) score++;

        switch (score) {
            case 1: return { score, label: 'Weak', color: '#D32F2F' };
            case 2: return { score, label: 'Fair', color: '#FBC02D' };
            case 3: return { score, label: 'Good', color: '#7CB342' };
            case 4: return { score, label: 'Strong', color: '#43A047' };
            default: return { score: 0, label: '', color: '#e0e0e0' };
        }
    };
    const strength = getPasswordStrength();

    // --- INTEGRATED SUBMISSION HANDLER ---
    const onSubmit = async (data) => {
        // Optionally, you can remove the confirmPassword field before sending
        delete data.confirmPassword;

        try {
            // Send the form data to your backend registration endpoint
            const res = await axios.post('https://sdgpr-backend.onrender.com/api/auth/register', data);

            console.log(res.data); // Should show server response (e.g., token)
            alert('Registration successful!');

            // Redirect to login page upon successful registration
            // window.location.href = '/login';

        } catch (err) {
            // Use a specific error message from the backend if available
            const message = err.response?.data?.msg || 'Registration failed. Please try again.';
            console.error(err.response?.data || err.message);
            alert(message);
        }
    };

    return (
        <div className="registration-container">
            <div className="registration-form">
                <h2>Registration Form</h2>
                <p>Join us in promoting SDG 10 & 11 initiatives</p>
                {/* The form uses handleSubmit to call our new async onSubmit */}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <label>Full Name</label>
                        <input type="text" placeholder="Enter your full name"
                            {...register("fullName", { required: "Full Name is required" })} />
                        {errors.fullName && <p className="error-message">{errors.fullName.message}</p>}
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" placeholder="Enter your email"
                            {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" } })} />
                        {errors.email && <p className="error-message">{errors.email.message}</p>}
                    </div>
                    <div className="split-group">
                        <div className="form-group">
                            <label>Phone Number</label>
                            <input type="tel" placeholder="Enter your phone number"
                                {...register("phoneNumber", { required: "Phone number is required" })} />
                            {errors.phoneNumber && <p className="error-message">{errors.phoneNumber.message}</p>}
                        </div>
                        <div className="form-group">
                            <label>Gender</label>
                            <select {...register("gender", { required: "Please select your gender" })}>
                                <option value="">Select your gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                                <option value="prefer-not-to-say">Prefer not to say</option>
                            </select>
                            {errors.gender && <p className="error-message">{errors.gender.message}</p>}
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" placeholder="Enter your password"
                            {...register("password", { required: "Password is required", minLength: { value: 8, message: "Password must be at least 8 characters long" } })} />
                        <div className="password-strength-indicator">
                            <div className="password-strength-stars">
                                {[...Array(4)].map((_, index) => (
                                    <FaStar
                                        key={index}
                                        className="strength-star"
                                        color={index < strength.score ? strength.color : '#e4e5e9'}
                                        size={20}
                                    />
                                ))}
                            </div>
                            <span className="password-strength-label" style={{ color: strength.color }}>{strength.label}</span>
                        </div>
                        {errors.password && <p className="error-message">{errors.password.message}</p>}
                    </div>
                    <div className="form-group">
                        <label>Confirm Password</label>
                        <input type="password" placeholder="Confirm your password"
                            {...register("confirmPassword", { required: "Please confirm your password", validate: value => value === password || "The passwords do not match" })} />
                        {errors.confirmPassword && <p className="error-message">{errors.confirmPassword.message}</p>}
                    </div>
                    <button type="submit" className="register-btn">Register</button>
                </form>
            </div>
        </div>
    );
}

export default RegistrationPage;