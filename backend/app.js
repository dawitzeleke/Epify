import express from "express";
import dotenv from "dotenv";
import product from './routes/productRoutes.js';


const app = express();

app.use(express.json());
app.use("/api/v1", product);

export default app;