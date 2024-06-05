import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Box, useColorMode, useColorModeValue, IconButton } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";
import Index from "./pages/Index.jsx";
import AddPost from "./pages/AddPost.jsx";
import { useState } from "react";

function App() {
  const [posts, setPosts] = useState([]);

  const addPost = (post) => {
    setPosts([...posts, post]);
  };

  const deletePost = (index) => {
    setPosts(posts.filter((_, i) => i !== index));
  };

  const ColorModeSwitcher = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const SwitchIcon = useColorModeValue(FaMoon, FaSun);

    return (
      <IconButton
        size="md"
        fontSize="lg"
        aria-label={`Switch to ${colorMode === "light" ? "dark" : "light"} mode`}
        variant="ghost"
        color="current"
        onClick={toggleColorMode}
        icon={<SwitchIcon />}
      />
    );
  };

  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} minH="100vh">
      <Router>
        <ColorModeSwitcher />
        <Routes>
          <Route exact path="/" element={<Index posts={posts} deletePost={deletePost} />} />
          <Route path="/add-post" element={<AddPost addPost={addPost} />} />
        </Routes>
      </Router>
    </Box>
  );
}

export default App;