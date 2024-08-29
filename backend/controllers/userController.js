import User from "../models/userModel.js";
import { errorHandler } from "../utils/errorHandler.js";

export const getUser = async (req, res, next) => {
  try {
    const { userId } = req.params;

    const user = await User.findById(userId).select("-password");

    if (!user) return next(errorHandler(404, "User not found"));

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: `Error in auth register: ${error.message}` });
    console.log(error.message);
  }
};

export const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find({}).select("-password");

    if (!users) return next(errorHandler(404, "Users not found"));

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: `Error in auth register: ${error.message}` });
    console.log(error.message);
  }
};
