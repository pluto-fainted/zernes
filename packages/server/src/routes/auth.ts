import { Router } from "Express";
import bcrypt from "bcryptjs";
import { User } from "../models/User";
const router = Router();
import jwt from "jsonwebtoken";
router.post("/login", async (req, res) => {try {const { email, password } = req.body;if (!email || !password) {return res.status(400).json({ message: "Email and password required" });}const user = await User.findOne({ email });if (!user) {return res.status(400).json({ message: "Invalid credentials" });}const isMatch = await bcrypt.compare(password, user.password);if (!isMatch) {return res.status(400).json({ message: "Invalid credentials" });}const token = jwt.sign({ userId: user._id },process.env.JWT_SECRET as string,{ expiresIn: "1d" }); res.json({ message: "Login successful", token }); } catch (error) { console.error(error); res.status(500).json({ message: "Server error" }); } });
router.post("/register", async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) { return res.status(400).json({ message: "Email and password required" }); }
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ email, password: hashedPassword });
        res.status(201).json({ message: "User registered successfully", userId: user._id });
    } catch (error) { console.error(error); res.status(5000).json({ message: "Server error" }); }
});
export default router;