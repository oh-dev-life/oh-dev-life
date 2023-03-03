import { Container, GridItem, Heading, SimpleGrid } from "@chakra-ui/react";
import { useNavigate } from "@remix-run/react";
import { data } from "~/utils/data";
import PostCard from "../commons/PostCard";

const Posts = () => {
  const navigate = useNavigate();
  return (
    <Container
      transition="all 0.3s ease"
    >
      <Heading as="h3" size="md" my={4}>
        Popular Posts
      </Heading>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 2 }} gap={6}>
        {data.map((item) => (
          <GridItem key={item.id}>
            <PostCard
              name={item.name}
              image={item.image}
              onClick={() => navigate(`/posts/${item.id}`)}
            />
          </GridItem>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Posts;
