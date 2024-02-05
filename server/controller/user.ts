import { Request, Response } from "express";
import prisma from "../lib/prisma";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const createUser = async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, email, password, picture, picturePath, role } =
      req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const existingUser = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }
    // const user: Prisma.UserCreateInput = JSON.parse(req.body);
    const savedUser = await prisma.user.create({
      data: {
        firstName,
        lastName,
        email,
        password: hashedPassword,
        picture,
        picturePath,
        role,
      },
    });

    res.status(200).json(savedUser);
  } catch (error: any) {
    res
      .status(400)
      .json({ message: "Something went wrong", error: error.message });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    // Find the user by email
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    console.log(user);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Compare the provided password with the stored hashed password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Generate a token
    // const token = jwt.sign({ userId: user.id }, SECRET_KEY, {
    // expiresIn: "1h",
    // });
    const token = jwt.sign(user, process.env.SECRET_KEY, {
      expiresIn: "1h",
    });

    // res.json({ token });
    res.status(200).json({ user, token });
  } catch (error: any) {
    console.error("Login error:", error);
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
};

export default loginUser;
