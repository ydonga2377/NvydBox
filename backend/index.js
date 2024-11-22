const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const authRoutes = require("./routes/auth");
const gameRoutes = require("./routes/games");
const reviewRoutes = require("./routes/review");
const cartRoutes = require("./routes/cart");
const blogRoutes = require("./routes/blogRoutes");
const commentRoutes = require('./routes/commentRoutes');
const checkoutRoutes = require('./routes/checkoutRoutes');
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/games", gameRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/blogRoutes", blogRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/checkoutRoutes", checkoutRoutes);
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected successfully!");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });
