const express = require('express');
const mongoose = require('mongoose');
const Parser = require('body-parser');
const Routes = require('./routes/route');

const app = express();
// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/nodejs-auth');

// Middleware
app.use(Parser.json());

// Routes
app.use('/api/auth', Routes);

// Start server
app.listen(8000, () => {
  console.log(`Server is running on port 8000`);
});
