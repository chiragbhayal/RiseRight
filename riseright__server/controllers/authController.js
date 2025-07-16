// 📁 server/controllers/authController.js

const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// ENV secret
const JWT_SECRET = process.env.JWT_SECRET || 'default_secret';

// ✅ Generate JWT Token
const generateToken = (userId) => {
  return jwt.sign({ id: userId }, JWT_SECRET, {
    expiresIn: '7d',
  });
};

// 🔐 @desc   Register new user
// 📍 @route  POST /api/auth/register
exports.registerUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    // Validate
    if (!name || !email || !password) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    // Check user exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'Email already in use.' });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    // Respond with token
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } catch (err) {
    next(err);
  }
};

// 🔐 @desc   Login user
// 📍 @route  POST /api/auth/login
exports.loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Find user
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Invalid credentials.' });

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials.' });

    // Respond with token
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } catch (err) {
    next(err);
  }
};

// 🔓 @desc   Get current logged in user (protected route)
// 📍 @route  GET /api/auth/me
exports.getMe = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};
