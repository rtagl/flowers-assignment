import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Search from './components/Search';

function App() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    async function getPosts() {
      const response = await fetch('http://localhost:3001/posts');
      const data = await response.json();
      setPosts(data);
    }
    getPosts();
  }, []);

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <Navbar />
      <section className="container">
        <Search search={search} setSearch={setSearch} />
        {filteredPosts.map((post) => (
          <div key={post.id} className="post">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

export default App;
