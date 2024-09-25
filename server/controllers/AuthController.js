// server/controllers/authController.js

import User from '../models/User.js';
import jwt from 'jsonwebtoken';
import Stock from '../models/Stock.js'; 

// Generate JWT token
const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, name: user.name, email: user.email }, // Payload
    process.env.JWT_SECRET, // Secret key
    { expiresIn: '24h' } // Options: Token expiration
  );
};

// Register new user
export const registerUser = async (req, res) => {
  const { name, email, password, password_confirmation, stockName } = req.body;

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Check if passwords match
    if (password !== password_confirmation) {
      return res.status(400).json({ message: 'Passwords do not match' });
    }

    // Create a new stock
    const stock = new Stock({ name: stockName });
    await stock.save();

    // Create new user
    const user = new User({
      name,
      email,
      password, // You may want to hash the password before saving it
      type: "admin",
      image: null, // Modify this part based on image handling
      stock_id: stock._id, // Assign the stock's id to the user
    });

    await user.save();

    // Generate JWT token
    const token = generateToken(user);

    res.status(201).json({ token, user });
  } catch (error) {
    console.error('Error during user registration:', error); // Log error details
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};


// Log in user
export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user by email and check password
    const user = await User.findOne({ email });
    if (!user || !(await user.matchPassword(password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = generateToken(user);

    res.status(200).json({ token,user });
  } catch (error) {
    console.error('Error during user login:', error); // Log error details
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Log out user
export const logoutUser = (req, res) => {
  res.status(200).json({ message: 'Logged out successfully' });
};
