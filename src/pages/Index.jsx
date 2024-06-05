import { Container, Text, VStack, Heading, Box, Image, Link, SimpleGrid, useColorModeValue, Button, useDisclosure, AlertDialog, AlertDialogBody, AlertDialogFooter, AlertDialogHeader, AlertDialogContent, AlertDialogOverlay } from "@chakra-ui/react";
import { useRef, useState } from "react";

const Index = ({ posts, deletePost }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();
  const [postToDelete, setPostToDelete] = useState(null);

  const handleDeleteClick = (index) => {
    setPostToDelete(index);
    onOpen();
  };

  const confirmDelete = () => {
    deletePost(postToDelete);
    onClose();
  };

  return (
    <Container centerContent maxW="container.md" py={10} bg={useColorModeValue("white", "gray.800")} borderRadius="md" boxShadow="lg">
      <VStack spacing={8}>
        <Heading as="h1" size="2xl">Welcome to My Personal Blog</Heading>
        <Box boxSize="sm">
          <Image src="/images/blog-banner.jpg" alt="Blog Banner" borderRadius="md" />
        </Box>
        <Text fontSize="lg" textAlign="center">
          Hi there! I'm excited to share my thoughts, experiences, and stories with you. Stay tuned for more updates!
        </Text>
        <Link href="/add-post" color="teal.500" fontSize="lg">Add a new post</Link>
        <SimpleGrid columns={[1, null, 2]} spacing={10} mt={10}>
          {posts.map((post, index) => (
            <Box key={index} p={5} shadow="md" borderWidth="1px" borderRadius="md">
              <Heading fontSize="xl">{post.title}</Heading>
              {post.imageUrl && <Image src={post.imageUrl} alt={post.title} mt={4} />}
              <Text mt={4}>{post.content}</Text>
              <Button colorScheme="red" mt={4} onClick={() => handleDeleteClick(index)}>Delete</Button>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Post
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={confirmDelete} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </Container>
  );
};

export default Index;