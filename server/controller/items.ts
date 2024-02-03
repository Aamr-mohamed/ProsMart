import { Response, Request } from "express";
import * as dotenv from "dotenv";
import { Item } from "../model/items";

dotenv.config();

export async function getAllItems(req: Request, res: Response) {
  try {
    
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
}

export async function getByCategory(req: Request, res: Response) {
  const { category } = req.params;

  try {
    
        
      
   

    // Convert binary image data to base64
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
}
