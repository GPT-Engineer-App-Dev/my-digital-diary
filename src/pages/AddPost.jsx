import { useState } from "react";
import { Container, VStack, Heading, Input, Textarea, Button, FormControl, FormLabel, useColorModeValue } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const AddPost = ({ addPost }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost({ title, content, imageUrl });
    navigate("/");
  };

  return (
    <Container centerContent maxW="container.md" py={10} bg={useColorModeValue("white", "gray.800")} borderRadius="md" boxShadow="lg">
    
      <VStack spacing={8} as="form" onSubmit={handleSubmit}>
        <Heading as="h1" size="2xl">Add New Blog Post</Heading>
        <FormControl id="title" isRequired>
          <FormLabel>Title</FormLabel>
          <Input 
            type="text" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            placeholder="Enter the title" 
          />
        </FormControl>
        <FormControl id="content" isRequired>
          <FormLabel>Content</FormLabel>
          <Textarea 
            value={content} 
            onChange={(e) => setContent(e.target.value)} 
            placeholder="Enter the content" 
            rows={6} 
          />
        </FormControl>
        <FormControl id="imageUrl">
          <FormLabel>Image URL</FormLabel>
          <Input 
            type="text" 
            value={imageUrl} 
            onChange={(e) => setImageUrl(e.target.value)} 
            placeholder="Enter the image URL" 
          />
        </FormControl>
        <Button type="submit" colorScheme="teal" size="lg">Add Post</Button>
      </VStack>
    </Container>
  );
};

export default AddPost;