import express, { Request, Response } from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.get("/", (req: Request, res: Response) => {
  res.send("Server is runnig");
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`app is running on port ${port}`);
});
