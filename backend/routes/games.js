const express = require("express");
const router = express.Router();
const Game = require("../models/Game");

// Create a new game
router.post("/", async (req, res) => {
  try {
    const games = await Game.insertMany(req.body);
    res.status(201).json(games);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Read all games
router.get("/", async (req, res) => {
  try {
    const games = await Game.find();
    res.json(games);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// get game data by ID
router.get("/:gameId", async (req, res) => {
  const { gameId } = req.params;
  try {
    const game = await Game.findById(gameId);
    if (!game) {
      return res.status(404).json({ message: "Game not found" });
    }
    res.status(200).json(game);
  } catch (error) {
    res.status(500).json({ message: "Error fetching game details" });
  }
});

// Read a single game by title
router.get("/:title", async (req, res) => {
  try {
    const game = await Game.findOne({ title: req.params.title });
    if (!game) return res.status(404).json({ message: "Game not found" });
    res.json(game);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a game by title
router.put("/:title", async (req, res) => {
  try {
    const game = await Game.findOneAndUpdate(
      { title: req.params.title },
      req.body,
      { new: true, runValidators: true }
    );
    if (!game) return res.status(404).json({ message: "Game not found" });
    res.json(game);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a game by title
router.delete("/:title", async (req, res) => {
  try {
    const game = await Game.findOneAndDelete({ title: req.params.title });
    if (!game) return res.status(404).json({ message: "Game not found" });
    res.json({ message: "Game deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
