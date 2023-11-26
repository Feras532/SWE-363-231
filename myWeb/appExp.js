const express = require("express");
const path = require("path");
const app = express();
const port = 1000;

app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/myWork", (req, res) => {
  res.sendFile(path.join(__dirname, "myWork.html"));
});

app.get("/order", (req, res) => {
  res.sendFile(path.join(__dirname, "order.html"));
});
app.get("/aboutMe", (req, res) => {
  res.sendFile(path.join(__dirname, "aboutMe.html"));
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
