const express = require("express");
const router = express.Router();
const userModel = require("../models/User");

// GET all users
router.get("/", async (req, res) => {
  try {
    const users = await userModel.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET a specific user by ID
router.get("/:id", async (req, res) => {
  try {
    const user = await userModel.findById(req.params.id);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST a new user
router.post("/", async (req, res) => {
  try {
    const { name, email, password, isAdmin } = req.body;
    const newUser = new userModel({
      name,
      email,
      password,
      isAdmin,
    });
    const savedUser = await newUser.save();
    res.json(savedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// UPDATE a user by ID
router.put("/:id", async (req, res) => {
  try {
    const { name, email, password, isAdmin } = req.body;
    const updatedUser = await userModel.findByIdAndUpdate(
      req.params.id,
      { name, email, password, isAdmin },
      { new: true }
    );
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE a user by ID
router.delete("/:id", async (req, res) => {
  try {
    const deletedUser = await userModel.findByIdAndDelete(req.params.id);
    res.json(deletedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Register a new user
router.post("/register", async (req, res) => {
    try {
      const { name, email, password } = req.body;
  
      // Check if the user already exists
      const existingUser = await userModel.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ error: "User already exists" });
      }
  
      // Create a new user
      const newUser = new userModel({
        name,
        email,
        password,
      });
  
      // Save the user to the database
      const savedUser = await newUser.save();
  
      res.json(savedUser);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

module.exports = router;
