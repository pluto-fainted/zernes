import Express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
const app = Express();
const PORT = process.env.PORT || 3001;
app.use(cors());
app.use(Express.json());
app.get("/", (req, res) => {
  res.send("Zernes API is calling");
});
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
