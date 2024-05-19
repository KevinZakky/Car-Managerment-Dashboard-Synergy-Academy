import express from "express";
import FileUpload from "express-fileupload";
import cors from "cors";
import carRoute from "./routes/carRoute.js";
import userRoute from "./routes/userRoute.js";
import dotenv from "dotenv";
import session from "express-session";
import cookieParser from "cookie-parser";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
dotenv.config();

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);
app.use(express.json());
app.use(FileUpload());
// app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());
app.use(carRoute);
app.use(userRoute);
app.use(
  session({
    secret: "My secret key",
    saveUninitialized: true,
    resave: false,
  })
);

app.set("view engine", "ejs");

app.listen(5000, () => console.log(`Server Up and Running...`));
