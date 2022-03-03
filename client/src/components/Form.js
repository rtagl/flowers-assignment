import { useState } from 'react';
import './Form.css';

function Form({ selectedPost, handleClose, handleSubmit }) {
  const [title, setTitle] = useState(selectedPost.title);
  const [body, setBody] = useState(selectedPost.body);

  return (
    <div className="form">
      <div className="close-btn" onClick={handleClose}>
        x
      </div>
      <form className="form-fields">
        <label id="title">Title:</label>
        <input
          type="text"
          spellCheck="false"
          value={title}
          style={{ height: '50px' }}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label id="content">Content:</label>
        <textarea
          type="text"
          spellCheck="false"
          value={body}
          style={{ height: '150px' }}
          onChange={(e) => setBody(e.target.value)}
        />
        <button
          className="submit-btn"
          onClick={(event) =>
            handleSubmit(event, selectedPost.id, title, body)
          }>
          Save
        </button>
      </form>
    </div>
  );
}

export default Form;
