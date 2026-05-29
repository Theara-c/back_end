import express from "express";
import { articles, categories, journalists } from "./models/data.js";
import articleRoute from "./routes/articleRoute.js";
import categoryRoute from './routes/categoryRoute.js';
import journalRoute from './routes/journalRoute.js';
const app = express();

app.use(express.json());
app.use("/articles",articleRoute);
app.use("/categories", categoryRoute);
app.use("/journalists",journalRoute);

export default app;