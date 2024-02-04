import express, { Express } from "express";
import { getAllItems, getByCategory } from "../controller/items";

const router = express.Router();

router.get("/all", getAllItems);
router.get("/:category", getByCategory);

export default router;
