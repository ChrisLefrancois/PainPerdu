const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1); // Exit process with failure
  }
};

process.on('unhandledRejection', (err, promise) => {
  console.log(`Logged Error: ${err}`);
  // Close server & exit process
  server.close(() => process.exit(1));
});


connectDB();

// Routes
app.use('/api', require('./routes/api'));

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
