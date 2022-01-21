import express from "express";
import { hello } from "../services/hello";

const app = express();
const PORT = 8000;
app.get('/', (req, res) => {
    res.send(hello())
});
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});