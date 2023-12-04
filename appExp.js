const express = require("express");
const path = require("path");
const app = express();
const port = 5500;

app.use(express.static(__dirname));

// This middleware will parse the form data
app.use(express.urlencoded({ extended: true }));
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

// Middleware to parse POST request bodies
app.use(
  express.urlencoded({
    extended: true,
  })
);

// POST endpoint at /submitOrder
app.post("/submitOrder", (req, res) => {
  console.log(req.body); // Logs the request body to the console
  res.status(200).send("Form submission received!");
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
