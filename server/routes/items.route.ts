import express, { Express } from "express";
import { addItem, getAllItems, getByCategory } from "../controller/items";

const router = express.Router();

router.get("/all", getAllItems);
router.get("/:category", getByCategory);
router.post("/add", addItem);

export default router;
