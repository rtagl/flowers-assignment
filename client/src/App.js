import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Post from './components/Post';
import Form from './components/Form';

function App() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    async function getPosts() {
      const response = await fetch('http://localhost:3001/posts');
      const data = await response.json();
      setPosts(data);
    }
    getPosts();
  }, []);

  const handleShowForm = (postId) => {
    setShowForm(true);
    setSelectedPost(posts.find((post) => post.id === postId));
  };

  const handleClose = () => {
    setShowForm(false);
    setSelectedPost(null);
  };

  const handleSubmit = (event, id, title, body) => {
    event.preventDefault();
    let postToUpdate = posts.find((post) => post.id === id);
    postToUpdate = { ...postToUpdate, title, body };
    setPosts(
      posts.map((post) => {
        if (post.id === id) {
          return postToUpdate;
        }
        return post;
      })
    );
    setShowForm(false);
    setSelectedPost(null);
  };

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <Navbar />
      <section className="container">
        {!showForm ? (
          <>
            <Search search={search} setSearch={setSearch} />
            {filteredPosts.map((post) => (
              <Post key={post.id} post={post} handleShowForm={handleShowForm} />
            ))}
          </>
        ) : (
          <Form
            selectedPost={selectedPost}
            handleClose={handleClose}
            handleSubmit={handleSubmit}
          />
        )}
      </section>
    </div>
  );
}

export default App;
