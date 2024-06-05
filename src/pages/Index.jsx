import { Container, Text, VStack, Heading, Box, Image, Link } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl">Welcome to My Personal Blog</Heading>
        <Box boxSize="sm">
          <Image src="/images/blog-banner.jpg" alt="Blog Banner" borderRadius="md" />
        </Box>
        <Text fontSize="lg" textAlign="center">
          Hi there! I'm excited to share my thoughts, experiences, and stories with you. Stay tuned for more updates!
        </Text>
        <Link href="/about" color="teal.500" fontSize="lg">Learn more about me</Link>
      </VStack>
    </Container>
  );
};

export default Index;