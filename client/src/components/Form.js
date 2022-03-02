import React from 'react';
import './Form.css';

function Form({
  selectedPost,
  handleClose,
  handleContentChange,
  handleTitleChange,
}) {
  return (
    <div className="form">
      <div className="close-btn" onClick={handleClose}>
        x
      </div>
      <form className="form-fields">
        <label id="title">Title:</label>
        <textarea
          type="text"
          for="title"
          spellCheck="false"
          value={selectedPost.title}
          style={{ height: '50px' }}
          onChange={handleTitleChange}
        />
        <label id="content">Post:</label>
        <textarea
          type="text"
          for="content"
          spellCheck="false"
          value={selectedPost.body}
          style={{ height: '150px' }}
          onChange={handleContentChange}
        />
      </form>
    </div>
  );
}

export default Form;
