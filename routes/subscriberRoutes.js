const express = require("express");
const Subscriber = require("../models/subscriber");

const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const { email } = req.body;

        if (!email) {
            return res.status(400).json({ success: false, message: "Email is required" });
        }

        const newSubscriber = new Subscriber({ email });
        await newSubscriber.save();

        res.json({ success: true, message: "Subscription successful!" });
    } catch (err) {
        console.error(err); // Log error to see details
        if (err.code === 11000) {
            res.status(400).json({ success: false, message: "Email already subscribed." });
        } else {
            res.status(500).json({ success: false, message: "Error subscribing." });
        }
    }
});

module.exports = router;
