const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // Database name is "studentFormDB"
        await mongoose.connect(
           `mongodb+srv://generator-csp:chetna8869@cluster0.alet0au.mongodb.net/studentFormDB`,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        );
        console.log('MongoDB connected successfully');
    } catch (err) {
        console.error('MongoDB connection failed:', err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
