import React from 'react';
import './Post.css';

function Post({ post, handleShowForm }) {
  return (
    <div className="post" onClick={() => handleShowForm(post.id)}>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  );
}

export default Post;
