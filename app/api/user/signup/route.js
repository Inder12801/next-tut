import { connectToDB } from "@/dbConfig/connectToDB.js";
import { User } from "@/models/userModel.js";
import bcryptjs from "bcryptjs";

connectToDB();

export async function POST(req, res) {
  try {
    const { username, email, password } = req.body;
    // Check if user already exists in the database
    const existUser = await User.findOne({ email });
    if (existUser) {
      res.status(400).json({ success: false, error: "User already exists" });
    }
    // Create a new user
    const salt = bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      success: true,
      data: user,
      message: "User created successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
}
