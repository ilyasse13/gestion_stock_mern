import User from "../models/User.js";
import fs from "fs";
import path from "path";
import { SendAddingUserEmail } from "../mailtrap/email.js";

export const fetchUsers = async (req, res) => {
    try {
        const { stock_id } = req.params; // Correctly destructure stock_id from req.params
        const users = await User.find({ stock_id }); // Await the database query

        // Return the fetched users as a response
        res.status(200).json(users);
    } catch (error) {
        // Handle any errors
        res.status(500).json({ message: "Error fetching users", error });
    }
};

export const addUser = async (req, res) => {
    try {
        // Find the requesting user by ID
        const requestingUser = await User.findById(req.user_id);

        // Check if the requesting user is an admin
        if (requestingUser.type !== "admin") {
            return res.status(403).json({ message: "Access denied. Only admins can add users." });
        }

        // Generate a smaller random password (5 bytes = 10 characters in hex)
        const generatedPassword = crypto.randomBytes(5).toString("hex");

        // Get the user details from request body
        const { name, email, type } = req.body;
        const hashedPassword = await bcrypt.hash(generatedPassword, 10); // You can adjust the salt rounds as needed

        const newUser = new User({
            name,
            email,
            type,
            password: hashedPassword, // Store the hashed password
        });
        await newUser.save();
        SendAddingUserEmail(newUser.email,generatedPassword,newUser.name,requestingUser.name )
        res.status(201).json({ message: "User added successfully", user: newUser });
    } catch (error) {
        res.status(500).json({ message: "Error adding user", error });
    }
};

export const updateUserSelf = async (req, res) => {
    try {
        const { userId } = req.params;

        // Find the user by ID
        const existingUser = await User.findById(userId);

        if (!existingUser) {
            return res.status(404).json({ message: "User not found" });
        }

        // Create an object to hold updated data
        const updatedData = {
            name: req.body.name || existingUser.name,
            email: req.body.email || existingUser.email,
            password: req.body.password ? await bcrypt.hash(req.body.password, 10) : existingUser.password,
            type: existingUser.type
        };

        // Update the user with the new data, preserving existing values where needed
        const updatedUser = await User.findByIdAndUpdate(userId, updatedData, { new: true });

        res.status(200).json({ message: "User updated successfully", user: updatedUser });
    } catch (error) {
        res.status(500).json({ message: "Error updating user", error });
    }
};

export const changeUserType = async (req, res) => {
    try {

        const { userId } = req.params;
        const requestingUser = await User.findById(req.user_id);

        // Check if the requesting user is an admin
        if (requestingUser.type !== "admin") {
            return res.status(403).json({ message: "Access denied. Only admins can add users." });
        }

        // Find the user by ID
        const userToUpdate = await User.findById(userId);
        if (!userToUpdate) {
            return res.status(404).json({ message: "User not found" });
        }

        // Change the user type
        const { newType } = req.body; // Expecting newType in request body
        if (!newType) {
            return res.status(400).json({ message: "New type is required" });
        }

        userToUpdate.type = newType;

        // Save the updated user
        await userToUpdate.save();

        res.status(200).json({ message: "User type updated successfully", user: userToUpdate });
    } catch (error) {
        res.status(500).json({ message: "Error changing user type", error });
    }
};

export const deleteUser = async (req, res) => {
    try {
        const { userId } = req.params;

        // Find the user by ID
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Check if the user has an image and delete it if it exists
        if (user.image) {
            const imagePath = path.join('./uploads/', user.image);
            console.log('Image path:', imagePath); // Log the path for debugging

            // Delete the image file if it exists
            if (fs.existsSync(imagePath)) {
                fs.unlinkSync(imagePath); // Synchronously delete the image
                console.log('Image deleted successfully');
            } else {
                console.log('Image not found, skipping delete');
            }
        }

        // Delete the user from the database
        await User.findByIdAndDelete(userId);

        res.status(200).json({ message: "User and associated image deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting user", error });
    }
};

