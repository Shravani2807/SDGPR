const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// --- Middlewares ---
app.use(cors()); // Allows cross-origin requests
app.use(express.json()); // Allows us to parse JSON in the request body

// --- Database Connection ---
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected successfully.'))
.catch(err => console.error(err));

// --- API Routes ---
app.use('/api/auth', require('./routes/auth'));

// --- Start The Server ---
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});