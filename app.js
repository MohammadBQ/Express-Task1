const PORT = 8000;
const express = require("express");
const data = require("./data");
const app = express();

app.use(express.json());

app.get("/api/products", (req, res) => {
  console.log(`localhost: ${PORT}/api/products`);
  return res.status(200).json({ data: data });
});

app.listen(PORT, () => {
  console.log(`server is running at port: ${PORT}\nlocalhost:${PORT}`);
});