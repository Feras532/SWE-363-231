const express = require("express");
const path = require("path");
const app = express();
const port = 999;

// Create a new router
const router = express.Router();

app.use(express.static(__dirname));

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "home.html"));
});

router.get("/myWork", (req, res) => {
  res.sendFile(path.join(__dirname, "myWork.html"));
});

router.get("/order", (req, res) => {
  res.sendFile(path.join(__dirname, "order.html"));
});

router.get("/aboutMe", (req, res) => {
  res.sendFile(path.join(__dirname, "aboutMe.html"));
});

// Use the router
app.use("/", router);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
