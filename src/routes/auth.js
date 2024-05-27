const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

router.post('/signup', async (req, res) => {
    const { email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).send('User already exists.');

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();

    // Generate token
    const token = jwt.sign({ _id: newUser._id }, process.env.JWT_SECRET);

    // Send response
    res.header('auth-token', token).send(token);
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) return res.status(400).send('Invalid email or password.');

    // Compare passwords
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) return res.status(400).send('Invalid email or password.');

    // Generate token
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);

    // Send response
    res.header('auth-token', token).send(token);
});

module.exports = router;
