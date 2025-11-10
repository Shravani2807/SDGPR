// FULL CODE for: backend/middleware/auth.js

const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
    // 1. Get token from the request header
    const token = req.header('x-auth-token');

    // 2. Check if there's no token
    if (!token) {
        return res.status(401).json({ msg: 'No token, authorization denied' });
    }

    // 3. Verify the token is valid
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // If valid, attach the user's info to the request and continue
        req.user = decoded.user;
        next();
    } catch (err) {
        // If not valid, send an error
        res.status(401).json({ msg: 'Token is not valid' });
    }
};