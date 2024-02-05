import express, { Express, Request, Response, Application } from "express";
import dotenve from "dotenv";
import itemsRoutes from "./routes/items.route";
import userRoutes from "./routes/user.route";
import helmet from "helmet";
import cors from "cors";
import { createUser, loginUser } from "./controller/user";

const multer = require("multer");

dotenve.config();

const app: Application = express();
const port = process.env.PORT || 8000;

app.use(
  cors({
    origin: process.env.FRONT_URL || "http://localhost:3000",
    credentials: true,
  })
);

// Example using Express to serve images

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
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(port, () => {
  console.log(`server is fire at http://localhost:${port}`);
});

app.use("/item", itemsRoutes);
app.use("/api", userRoutes);

interface CustomRequest extends Request {
  file: any;
}

app.use("/uploads/images", express.static("uploads/images"));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/images");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

app.post("/api/user/register", upload.single("picture"), createUser);

// Upload route
app.post("/upload", upload.single("image"), (req: Request, res: Response) => {
  // Save file path in the database
  const imagePath = (req as CustomRequest).file.path;
  // Save 'imagePath' in the database for the corresponding item
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
