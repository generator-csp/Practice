const express = require("express");
const mongoose = require("mongoose");
const connectDB = require("./db"); // your db.js
const subscriberRoutes = require("./routes/subscriberRoutes");
const path = require("path");

const app = express();

// Connect to MongoDB
// connectDB();
// Connect to MongoDB
mongoose.connect(`mongodb+srv://generator-csp:chetna8869@cluster0.alet0au.mongodb.net/studentFormDB`)
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.error("MongoDB connection error:", err));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static HTML, CSS, JS from 'public' folder
app.use(express.static(path.join(__dirname, "public")));

// Routes
// const subscriberRoutes = require("./routes/subscriberRoutes");
app.use("/subscriber", subscriberRoutes);

// Default route (index.html)
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
});
