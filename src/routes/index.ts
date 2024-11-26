import express, { Request, Response, Router } from "express";
import path from "path/posix";
import imgRoute from "../routes/api/Image1";

const api: Router = express.Router();

api.get("/api", (req: Request, res: Response) => {
  res.send("You are in the main page.");
});

api.use("/image", imgRoute);

export default api;
