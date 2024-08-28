import bcrypt from "bcrypt";
import User from "../models/userModel.js";
import { errorHandler } from "../utils/errorHandler.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res) => {
  try {
    const { email, username, password } = req.body;

    const hashedPassword = bcrypt.hashSync(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) return next(errorHandler(401, "user not found"));

    const validPassword = bcrypt.compareSync(password, user.password);

    if (!validPassword) return next(errorHandler(401, "Invalid Credentials!"));

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    const { password: pass, ...rest } = user._doc;

    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(rest);
  } catch (error) {
    res.status(500).json({ error: `Error in auth register: ${error.message}` });
    console.log(error.message);
  }
};

export const logout = async (req, res) => {
  try {
    res.clearCookie("access_token");
    res.status(200).json("User has been logged out");
  } catch (error) {
    res.status(500).json({ error: `Error in auth logout: ${error.message}` });
    console.log(error.message);
  }
};
