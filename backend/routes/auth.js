// FULL CODE for: backend/routes/auth.js

const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();

// Import the security guard middleware
const auth = require('../middleware/auth');


// POST /api/auth/register (Your existing registration route)
router.post('/register', async (req, res) => {
    try {
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ msg: 'User with this email already exists' });
        }
        user = new User(req.body);
        await user.save();

        const payload = { user: { id: user.id } };
        jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '5h' }, (err, token) => {
            if (err) throw err;
            res.json({ token });
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// POST /api/auth/login (Your existing login route, with one change)
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }

        // --- CHANGE: ADD USER'S NAME TO THE TOKEN PAYLOAD ---
        const payload = {
            user: {
                id: user.id,
                name: user.fullName // This adds the user's name to the token
            }
        };

        jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '5h' }, (err, token) => {
            if (err) throw err;
            res.json({ token });
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});


// ---- NEW FEATURE: GET USER PROFILE ----
// GET /api/auth/me (This route is protected by our 'auth' middleware)
router.get('/me', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});


// ---- NEW FEATURE: UPDATE USER PROFILE ----
// PUT /api/auth/update (This route is also protected by our 'auth' middleware)
router.put('/update', auth, async (req, res) => {
    const { fullName, phoneNumber } = req.body;
    const userFields = {};
    if (fullName) userFields.fullName = fullName;
    if (phoneNumber) userFields.phoneNumber = phoneNumber;

    try {
        let user = await User.findByIdAndUpdate(
            req.user.id,
            { $set: userFields },
            { new: true }
        ).select('-password');

        if (!user) return res.status(404).json({ msg: 'User not found' });

        res.json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});


module.exports = router;