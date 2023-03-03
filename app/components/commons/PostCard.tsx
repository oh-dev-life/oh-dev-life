import { Card, CardBody, Image, Text } from "@chakra-ui/react";
import type { TPost } from "./types";

const PostCard: React.FC<TPost> = ({ name, image, onClick }) => {
  return (
    <Card
      rounded="2xl"
      bg="transparent"
      boxShadow="none"
      color="#fff"
      cursor="pointer"
      onClick={onClick}
    >
      <CardBody p={0}>
        <Image rounded="2xl" src={image} w="100%" height="160px" />
        <Text textAlign="center" mt={2}>
          {name}
        </Text>
      </CardBody>
    </Card>
  );
};

export default PostCard;
