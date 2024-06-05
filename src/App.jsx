import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import AddPost from "./pages/AddPost.jsx";
import { useState } from "react";

function App() {
  const [posts, setPosts] = useState([]);

  const addPost = (post) => {
    setPosts([...posts, post]);
  };

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index posts={posts} />} />
        <Route path="/add-post" element={<AddPost addPost={addPost} />} />
      </Routes>
    </Router>
  );
}

export default App;
