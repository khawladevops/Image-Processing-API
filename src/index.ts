import express, { Router } from "express";
import routes from "./routes/index";

const app = express();

const port: number = 3000;

app.use("/", routes);

app.listen(port, (): void => {
  console.log(`server started at localhost:${port}`);
});

export default app;
