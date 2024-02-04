import { Request, Response } from "express";
import prisma from "../lib/prisma";

async function createUser(req: Request, res: Response) {
  try {
    const user = req.body;
    // const user: Prisma.UserCreateInput = JSON.parse(req.body);
    const savedUser = await prisma.user.create({
      data: user,
    });
    res.status(200).json(savedUser);
  } catch (error: any) {
    res
      .status(400)
      .json({ message: "Something went wrong", error: error.message });
  }
}
export default createUser;
