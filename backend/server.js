require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(express.json());

/* ✅ CONNECT DB */
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ DB Connected"))
  .catch(err => console.log(err));

/* ✅ ROUTES */
const bookRoutes = require("./routes/bookRoutes");
app.use("/api/books", bookRoutes);

/* ✅ TEST ROUTE */
app.get("/", (req, res) => {
  res.send("Backend running ✅");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});