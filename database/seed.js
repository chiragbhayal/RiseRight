// database/seed.js

const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Business = require("../models/Business");
const User = require("../models/User");

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/riseright";

// Sample Data
const users = [
  {
    name: "Admin User",
    email: "admin@riseright.com",
    password: "hashed_password_here", // hash this using bcrypt if needed
    role: "admin",
  },
];

const businesses = [
  {
    name: "Rise Cafe",
    description: "A coffee shop with a modern twist.",
    category: "Food & Beverages",
    location: "Vadodara",
    ownerEmail: "admin@riseright.com",
  },
];

async function seedDB() {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Connected to MongoDB ✅");

    await User.deleteMany();
    await Business.deleteMany();

    await User.insertMany(users);
    await Business.insertMany(businesses);

    console.log("Database seeded successfully 🌱");
    process.exit();
  } catch (err) {
    console.error("Seeding failed ❌", err);
    process.exit(1);
  }
}

seedDB();
