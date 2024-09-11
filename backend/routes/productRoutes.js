import express from "express";
import {
  getAllMenProducts,
  getAllProducts,
  getAllWomenProducts,
} from "../controllers/productController.js";

const router = express.Router();

router.get("/", getAllProducts);
router.get("/men", getAllMenProducts);
router.get("/women", getAllWomenProducts);

export default router;
