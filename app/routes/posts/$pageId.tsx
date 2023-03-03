import { Box, Container, Divider, Heading, Image } from "@chakra-ui/react";
import { useParams } from "@remix-run/react";
import { useEffect, useState } from "react";
import Layout from "~/components/layout";
import { data } from "~/utils/data";

type TPost = {
  image: string;
  content: string;
  name: string;
};

const Post = () => {
  const params = useParams();
  const [article, setArticle] = useState<TPost>();

  useEffect(() => {
    const result = data.find((item) => item.id.toString() === params.pageId);
    if (result) setArticle(result);
  }, [params.pageId]);

  return (
    <Layout>
      <Container w={{ base: "initial", sm: "60%" }} py={14}>
        <Box overflow="hidden" rounded="lg">
          <Image src={article?.image} w="100%" maxH="500px" />
        </Box>
        <Heading mt={4}>{article?.name}</Heading>
        <Divider my={4} />
        <Box dangerouslySetInnerHTML={{ __html: article?.content || "" }} />
      </Container>
    </Layout>
  );
};

export default Post;
