import "express-async-errors";
import express, { Application } from "express";
import { handleErrors } from "./errors/AppError";
import cors from "cors";

const app: Application = express();
app.use(express.json());

app.use(cors());

app.use(handleErrors);

export default app;
