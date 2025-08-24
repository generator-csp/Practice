const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const connectDB = require('./db'); // Make sure file name matches

const Student = require('./models/student');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to DB
connectDB();

// Subscribe route
app.post('/subscribe', async (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }
  try {
    const student = new Student({ email });
    await student.save();
    res.json({ message: "Subscription successful!" });
  } catch (err) {
    if (err.code === 11000) {
      res.status(400).json({ error: "Email already subscribed" });
    } else {
      res.status(500).json({ error: "Failed to save email" });
    }
  }
});

// Add student with name
app.post('/students', async (req, res) => {
  try {
    const { name, email } = req.body;
    const student = new Student({ name, email });
    await student.save();
    res.status(201).json({ message: 'Student saved successfully', student });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Serve index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start server
app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});
