const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// --- START OF CHANGES ---

// 1. Define the specific frontend URL that is allowed to make requests
const corsOptions = {
    origin: "https://shravani2807.github.io", // Your live frontend URL
    optionsSuccessStatus: 200
};

// 2. Use the new cors configuration
app.use(cors(corsOptions));

// --- END OF CHANGES ---


app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('MongoDB connected successfully.'))
    .catch(err => console.error(err));

app.use('/api/auth', require('./routes/auth'));

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});