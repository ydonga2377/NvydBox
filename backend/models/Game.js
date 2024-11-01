const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  genre: {
    type: String,
    required: true,
  },
  releaseDate: {
    type: Date,
    required: true,
  },
  developer: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  rating: {
    type: Number,
    required: true,
    min: 0,
    max: 10
  }
});

module.exports = mongoose.model('Game', gameSchema);
