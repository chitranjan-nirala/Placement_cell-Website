const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Create an Express app
const app = express();

// Middleware for parsing JSON and handling CORS
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000', // Or your React frontend URL
    optionsSuccessStatus: 200,
  }));
  

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a simple test route
app.get('/', (req, res) => {
  res.send('backend');
});

// Import routes for admin and student
const adminRoutes = require('./routes/admin');
const studentRoutes = require('./routes/student');

// Use the routes
app.use('/api/admin', adminRoutes);
app.use('/api/student', studentRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
