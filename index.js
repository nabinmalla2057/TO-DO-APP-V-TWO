require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();

const PORT = process.env.PORT || 3000; // Use parseInt() if you want to parse it as an integer
const DB_URL = process.env.DB_URL; // Store the DB URL in a variable

mongoose
  .connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Database connected...");
  })
  .catch((error) => {
    console.error("Database connection error:", error);
  });

app.use(express.json());

const indexRouter = require("./routes"); // Import your routes at this point

app.use("/", indexRouter);

app.use((err, req, res, next) => {
  // Correct the order of parameters in this middleware function
  err = err.toString() || "Something went wrong...";
  res.status(500).json({ data: "", msg: err });
});

app.listen(PORT, () => {
  console.log("App is running on port:", PORT);
});
