import express from "express";
import dotenv from "dotenv";
import product from './routes/productRoutes.js';
import errorHandleMiddleware from "./middleware/error.js";


const app = express();

app.use(express.json());

app.use("/api/v1", product);
app.use(errorHandleMiddleware)
export default app;