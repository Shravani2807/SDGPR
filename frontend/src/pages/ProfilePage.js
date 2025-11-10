// src/pages/ProfilePage.js (FINAL CODE)

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header'; // <-- Import the reusable header
import './ProfilePage.css';

function ProfilePage() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        phoneNumber: '',
    });
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUser = async () => {
            const token = localStorage.getItem('token');
            if (!token) {
                navigate('/login');
                return;
            }

            try {
                const config = { headers: { 'x-auth-token': token } };
                const res = await axios.get('https://sdgpr-backend.onrender.com/api/auth/me', config);
                setUser(res.data);
                setFormData({
                    fullName: res.data.fullName,
                    phoneNumber: res.data.phoneNumber,
                });
            } catch (err) {
                console.error('Failed to fetch user', err);
                localStorage.removeItem('token');
                navigate('/login');
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, [navigate]);

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSave = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        try {
            const config = { headers: { 'x-auth-token': token } };
            const res = await axios.put('https://sdgpr-backend.onrender.com/api/auth/update', formData, config);
            setUser(res.data);
            setIsEditing(false);
            alert('Profile updated successfully!');
        } catch (err) {
            alert('Failed to update profile. Please try again.');
        }
    };

    if (loading) return <div>Loading...</div>;

    return (
        <div>
            <Header /> {/* Using the reusable header */}
            <div className="profile-container">
                <h1>My Profile</h1>
                {isEditing ? (
                    <form onSubmit={handleSave} className="profile-form">
                        <div className="form-group"><label>Full Name:</label><input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange}/></div>
                        <div className="form-group"><label>Email:</label><input type="email" value={user.email} disabled/></div>
                        <div className="form-group"><label>Phone Number:</label><input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange}/></div>
                        <div className="form-group"><label>Gender:</label><input type="text" value={user.gender} disabled/></div>
                        <div className="form-actions"><button type="submit" className="save-btn">Save Changes</button><button type="button" onClick={() => setIsEditing(false)} className="cancel-btn">Cancel</button></div>
                    </form>
                ) : (
                    <div className="profile-details">
                        <p><strong>Full Name:</strong> {user.fullName}</p>
                        <p><strong>Email:</strong> {user.email}</p>
                        <p><strong>Phone Number:</strong> {user.phoneNumber}</p>
                        <p><strong>Gender:</strong> {user.gender}</p>
                        <button onClick={() => setIsEditing(true)} className="edit-btn">Edit Profile</button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProfilePage;