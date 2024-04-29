import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import ConnectDB from "./config/db.js";
import authRoute from "./routes/authRoute.js";
import categoryRoute from "./routes/CategoryRoutes.js";
import productRoute from "./routes/ProductRoutes.js";
import cors from "cors";

//configure dotenv
dotenv.config();

ConnectDB();
//rest object
const app = express();

//middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/category", categoryRoute);
app.use("/api/v1/product", productRoute);

//rest API
app.get("/", (req, res) => {
  res.send("<h1>Welcome to The GalaxyEra</h1>");
});

//PORT
const PORT = process.env.PORT;

//run listen
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
