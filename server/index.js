import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import { register } from "./controllers/auth.js";
import authRoutes from "./routes/auth.js";

//Configuration
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();
const app = express();

//middlewares
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/assets", express.static(path.join(__dirname, "public/assets")));

//File Storage - when upload the file by client it will stored on this location
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cd(null, "public/assets");
  },
  filename: function (req, file, cb) {
    cd(null, file, file.originalname);
  },
});
const uplaod = multer({ storage });

//Routes with file register -> due to use of upload we can't this API to routes folder
app.post("/auth/register", uplaod.single("picture"), register);

//Routes
app.use("/auth",authRoutes);

//Mongoose Setup
const PORT = process.env.PORT || 6001;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
  })
  .catch((error) => console.log(`${error} did not connect`));
