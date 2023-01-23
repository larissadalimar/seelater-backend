import express, { Request, Response } from "express";
import cors from 'cors';
import dotenv from 'dotenv';
import contentsRouter from "./routers/contents-route.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (req: Request, res: Response) => res.send("OK!"))
.use("/contents", contentsRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Running server in port ${PORT}`));