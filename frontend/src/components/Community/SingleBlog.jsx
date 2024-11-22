import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './community.css';

const SingleBlog = () => {
  const { id } = useParams(); 
  const [blog, setBlog] = useState(null); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchSingleBlog = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/blogRoutes/${id}`);
        setBlog(response.data); 
        setLoading(false); 
      } catch (err) {
        setError('Error fetching blog post');
        setLoading(false); 
      }
    };

    fetchSingleBlog(); 
  }, [id]); 

  if (loading) return <p>Loading...</p>; 
  if (error) return <p style={{ color: 'red' }}>{error}</p>; 

  return (
    <div className="single-blog-container">
      {blog ? (
        <div>
          <h1 className="single-blog-title">{blog.title}</h1>
          <p className="single-blog-author">By {blog.author}</p>
          {blog.feature_image && (
            <img 
              src={blog.feature_image} 
              alt={blog.title} 
              className="single-blog-image" 
            />
          )}
          <div className="single-blog-content">
            <p>{blog.content}</p>
          </div>

          <h3 className="single-blog-comments-header">Comments</h3>
          <div className="single-blog-comments">
            {blog.comments.length > 0 ? (
              blog.comments.map((comment, index) => (
                <p key={index}>
                  <strong>{comment.user_id}</strong>: {comment.content}
                </p>
              ))
            ) : (
              <p>No comments yet.</p>
            )}
          </div>
        </div>
      ) : (
        <p className="single-blog-loading">Blog post not found.</p>
      )}
    </div>
  );
};

export default SingleBlog;
