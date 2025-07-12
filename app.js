// app.js
const express = require("express");
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
const userRoutes = require("./routes/userRoutes");
app.use(userRoutes);

// error handling middleware (optional)
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ status: "Something went wrong", error: err.message });
});

// ✅ Properly export the app
module.exports = app;
