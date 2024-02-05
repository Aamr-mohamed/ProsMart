import { Response, Request } from "express";
import * as dotenv from "dotenv";
import { Item } from "../model/items";

dotenv.config();

export async function getAllItems(req: Request, res: Response) {
  try {
    const allItems = await prisma?.item.findMany();
    console.log(allItems);

    res.status(200).json(allItems);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
}

export async function getByCategory(req: Request, res: Response) {
  try {
    const validCategories = ["newArrivals", "bestSellers", "topRated"];
    // Convert binary image data to base64
    const { category } = req.params;

    if (!validCategories.includes(category)) {
      return res.status(400).json({ error: "Invalid category" });
    }

    const itemByCat = await prisma?.item.findMany({
      where: {
        category: category,
      },
    });
    res.status(200).json(itemByCat);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
}

export async function addItem(req: Request, res: Response) {
  try {
    const data = req.body;
    const createNewItem = await prisma?.item.create({
      data: data,
    });
    res.status(200).json(createNewItem);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
}
