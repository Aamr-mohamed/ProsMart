import express from "express";
import loginUser from "../controller/user";

const router = express.Router();

router.post("/user/login", loginUser);

export default router;
