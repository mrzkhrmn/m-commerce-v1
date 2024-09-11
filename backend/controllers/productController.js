import Product from "../models/productModel.js";

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const getAllMenProducts = async (req, res) => {
  try {
    const products = await Product.find({ gender: { $in: ["men", "unisex"] } });
    res.status(200).json(products);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};
