// In your backend, in routes/blogRoutes.js or wherever you have the routes
const express = require('express');
const BlogPost = require('../models/BlogPost');
const router = express.Router();

// Get all blog posts
router.get('/', async (req, res) => {
  try {
    const posts = await BlogPost.find();  // Fetch all blog posts
    res.json(posts);  // Return the blog posts as JSON
  } catch (err) {
    console.error("Error fetching blog posts:", err);
    res.status(500).send({ message: 'Server error' });
  }
});
router.get('/:id', async (req, res) => {
    try {
      const blogPost = await BlogPost.findById(req.params.id).populate('comments'); // Populate comments field
      
      // Log the blog post to verify content is fetched correctly
      console.log(blogPost);
  
      if (!blogPost) {
        return res.status(404).send({ message: 'Blog post not found' });
      }
  
      res.json(blogPost);  // Return the full blog post data including comments
    } catch (err) {
      console.error("Error fetching blog post:", err);
      res.status(500).send({ message: 'Server error' });
    }
  });

module.exports = router;
