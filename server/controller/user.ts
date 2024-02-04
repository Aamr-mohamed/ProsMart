import { Request, Response } from "express";
import prisma from "../lib/prisma";

export default async (req: Request, res: Response) => {
  if (req.method !== "POST") {
    return res.status(405).json({ massage: "Method not allowed" });
  }
  try {
    const { user } = req.body;
    // const user: Prisma.UserCreateInput = JSON.parse(req.body);
    const savedUser = await prisma.user.create({
      data: user,
    });
    res.status(200).json(savedUser);
  } catch (error) {
    res.status(400).json({ message: "Somethign went wrong" });
  }
};
