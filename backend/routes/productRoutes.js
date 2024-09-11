import express from "express";
import {
  getAllMenProducts,
  getAllProducts,
} from "../controllers/productController.js";

const router = express.Router();

router.get("/", getAllProducts);
router.get("/men", getAllMenProducts);

export default router;
