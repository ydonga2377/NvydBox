import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './community.css';

const SingleBlog = () => {
  const { id } = useParams();  // Get the blog post ID from the URL
  const [blog, setBlog] = useState(null);  // State to hold the single blog post data
  const [loading, setLoading] = useState(true);  // Loading state for async operation
  const [error, setError] = useState(null);  // Error state

  useEffect(() => {
    const fetchSingleBlog = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/blogRoutes/${id}`);  // Fetch the blog post by ID
        setBlog(response.data);  // Set the fetched blog data
        setLoading(false);  // Set loading to false after data is fetched
      } catch (err) {
        console.error('Error fetching blog post:', err);
        setError('Error fetching blog post');  // Set error message if request fails
        setLoading(false);  // Set loading to false if there's an error
      }
    };

    fetchSingleBlog();  // Call the function to fetch the single blog post
  }, [id]);  // Dependency on `id`, so re-fetch if the ID changes

  if (loading) return <p>Loading...</p>;  // Display loading message
  if (error) return <p style={{ color: 'red' }}>{error}</p>;  // Display error message

  return (
    <div className="single-blog-container">
      {blog ? (
        <div>
          <h1 className="single-blog-title">{blog.title}</h1>
          <p className="single-blog-author">By {blog.author}</p>
          <img 
            src={blog.feature_image} 
            alt={blog.title} 
            className="single-blog-image" 
          />
          <div className="single-blog-content">
            {/* Ensure full content is being rendered */}
            <p>{blog.content}</p>
          </div>

          <h3 className="single-blog-comments-header">Comments</h3>
          {blog.comments && blog.comments.length > 0 ? (
            blog.comments.map((comment) => (
              <div key={comment._id} className="single-blog-comment">
                <p><strong>{comment.user_id}</strong>: {comment.content}</p>
              </div>
            ))
          ) : (
            <p>No comments yet.</p>
          )}
        </div>
      ) : (
        <p className="single-blog-loading">Blog post not found.</p>
      )}
    </div>
  );
};

export default SingleBlog;
