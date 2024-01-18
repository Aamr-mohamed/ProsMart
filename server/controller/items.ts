import { Response, Request } from "express";
import * as mySql from "mysql";
import * as dotenv from "dotenv";
import { Item } from "../model/items";

dotenv.config();

const pool = mySql.createPool({
  connectionLimit: 10,
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "prosmart_db",
});

export async function getAllItems(req: Request, res: Response) {
  try {
    pool.getConnection((err, connection) => {
      if (err) throw err;

      connection.query(
        "SELECT name,category,price,shortDescription,longDescription,image FROM items",
        (err, rows) => {
          connection.release();
          if (!err) {
            const itemsWithBase64Images = rows.map((item) => ({
              name: item.name,
              price: item.price,
              category: item.category,
              shortDescription: item.shortDescription,
              longDescription: item.longDescription,
              image: Buffer.from(item.image).toString("base64"),
            }));
            console.log("Binary Image Data:", rows[0].image);

            res.send(itemsWithBase64Images);
          } else {
            console.log(err);
          }
        }
      );
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
}

export async function getByCategory(req: Request, res: Response) {
  const { category } = req.params;

  try {
    pool.getConnection((err, connection) => {
      if (err) throw err;

      connection.query(
        "SELECT name,category,price,shortDescription,longDescription,image FROM items WHERE category = ?",
        [category],
        (err, rows) => {
          connection.release();
          if (!err) {
            const itemsWithBase64Images = rows.map((item) => ({
              name: item.name,
              price: item.price,
              category: item.category,
              shortDescription: item.shortDescription,
              longDescription: item.longDescription,
              image: Buffer.from(item.image).toString("base64"),
            }));

            res.send(itemsWithBase64Images);
          }
        }
      );
    });

    // Convert binary image data to base64
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
}
