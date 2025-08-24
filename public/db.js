const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Add your database name after the last slash
    await mongoose.connect(
      `mongodb+srv://generator-csp:chetna8869@cluster0.alet0au.mongodb.net/studentDB`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log('✅ MongoDB connected successfully');
  } catch (err) {
    console.error('❌ MongoDB connection failed:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
