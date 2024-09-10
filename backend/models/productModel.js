import mongoose from "mongoose";

const sizeColorSchema = mongoose.Schema({
  size: { type: String, required: true },
  color: { type: String, required: true },
  stock: { type: Number, required: true, min: 0 },
});

const productSchema = mongoose.Schema({
  name: { type: String, required: true },
  productCategory: {
    type: String,
    required: true,
    enum: ["tshirt", "pants", "shoes", "hat"],
  },
  gender: {
    type: String,
    required: true,
    enum: ["men", "women", "kid", "unisex"],
  },
  variations: [sizeColorSchema],
  price: {
    type: Number,
    required: true,
    min: 1,
  },
  description: {
    type: String,
    required: true,
  },
});

const Product = mongoose.model("Product", productSchema);

export default Product;
