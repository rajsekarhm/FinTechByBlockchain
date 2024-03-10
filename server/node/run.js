const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors")
const app = express();
app.use(cookieParser())
app.use(express.json());
app.use(cors())

// Middleware
app.use((req, res, next) => {
  console.log(`${req.method} request received for ${req.url}`);
  next();
});

// Routes
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/agents", (req, res) => {
  res.json(" ooooo");
});

app.get("/getUsers/:sector", (req, res) => {
  res.send("GET request received");
});

// POST method
app.post("/createUser/:sector", (req, res) => {
  res.send("POST request received");
});

// PUT method
app.put("/updateUser/:sector/:id", (req, res) => {
  res.send("PUT request received");
});

// DELETE method
app.delete("/removeUser/:sector/:id", (req, res) => {
  res.send("DELETE request received");
});

// Start server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
