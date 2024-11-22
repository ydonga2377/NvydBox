const mongoose = require('mongoose');
const Comment = require('./Comment');
const blogPostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: String, required: true },
  feature_image: { type: String, required: false }, // Add feature image column
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
  created_at: { type: Date, default: Date.now },
  
});

module.exports = mongoose.model('BlogPost', blogPostSchema);
