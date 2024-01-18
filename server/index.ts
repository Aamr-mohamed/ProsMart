import express, { Express, Request, Response, Application } from "express";
import dotenve from "dotenv";
import itemsRoutes from "./routes/items";
import helmet from "helmet";
import cors from "cors";

const mySql = require("mysql");

dotenve.config();

const app: Application = express();
const port = process.env.PORT || 8000;

app.use(
  cors({
    origin: process.env.FRONT_URL || "http://localhost:3000",
    credentials: true,
  })
);

app.use("/static", express.static("./uploads"));

app.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Origin",
    process.env.FRONT_URL || "http://localhost:3000"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE, OPTIONS"
  );
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

app.use(helmet());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(port, () => {
  console.log(`server is fire at http://localhost:${port}`);
});

app.use("/getItems", itemsRoutes);
