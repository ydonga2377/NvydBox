const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  items: [
    {
      gameId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Game",
        required: true,
      },
    },
  ],
});

module.exports = mongoose.model("Cart", cartSchema);
