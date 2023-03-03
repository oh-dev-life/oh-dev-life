import { EmailIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Heading,
  Image,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { Link } from "@remix-run/react";
import {
  RiFacebookFill,
  RiInstagramFill,
  RiLinkedinFill,
  RiTwitterFill,
} from "react-icons/ri";
import Layout from "~/components/layout";
import avatar from "~/img/avatar.jpg";

const About = () => {
  return (
    <Layout>
      <Container>
        <Center
          bgColor="whiteAlpha.200"
          textAlign="center"
          rounded="lg"
          mt={14}
          mb={6}
          height={12}
        >
          Hello, I'm an web developer based in VietNam!
        </Center>
        <Flex alignItems="center" mb={4}>
          <Box>
            <Heading>Daniel Nguyen</Heading>
            <Text>Digital transformer (Developer, Designer)</Text>
          </Box>
          <Spacer />
          <Image src={avatar} rounded="50%" w={100} h={100} />
        </Flex>

        <Box mb={8}>
          <Heading
            width="fit-content"
            size="md"
            borderBottomWidth={4}
            pb={1}
            mb={2}
            borderColor="whiteAlpha.500"
          >
            Work
          </Heading>
          <Text textAlign="justify" textIndent="24px">
            Daniel is a full-stack developer based in Hanoi with a passion for
            building digital services. He has a knack for all things launching
            products, from planning and designing all the way to solving
            real-life problems with code.
          </Text>
        </Box>

        <Box mb={8}>
          <Heading
            width="fit-content"
            size="md"
            borderBottomWidth={4}
            pb={1}
            mb={2}
            borderColor="whiteAlpha.500"
          >
            Bio
          </Heading>
          <Flex alignItems="baseline">
            <Heading size="sm" mr={6}>
              1996
            </Heading>
            <Text>Born in Hanoi</Text>
          </Flex>
          <Flex alignItems="baseline">
            <Heading size="sm" mr={6}>
              2018
            </Heading>
            <Text>
              Finish Bachelor of Information Technology program at National
              Academy of Education Management(NAEM)
            </Text>
          </Flex>
          <Flex alignItems="baseline">
            <Heading size="sm" mr={6}>
              2018
            </Heading>
            <Text>Worked in Velacorp as a Full-stack Developer.</Text>
          </Flex>
          <Flex alignItems="baseline">
            <Heading size="sm" mr={6}>
              2020
            </Heading>
            <Text>Worked in Amela Technology as a Full-stack Developer.</Text>
          </Flex>
          <Flex alignItems="baseline">
            <Heading size="sm" mr={6}>
              2022 to present
            </Heading>
            <Text>Working in Sotatek JSC as a Senior Developer.</Text>
          </Flex>
        </Box>

        <Box mb={8}>
          <Heading
            width="fit-content"
            size="md"
            borderBottomWidth={4}
            pb={1}
            mb={2}
            borderColor="whiteAlpha.500"
          >
            I ♥
          </Heading>
          <Text textIndent="24px">Art, Book, Film, Design, Data science</Text>
        </Box>

        <Box mb={8}>
          <Heading
            width="fit-content"
            size="md"
            borderBottomWidth={4}
            pb={1}
            mb={2}
            borderColor="whiteAlpha.500"
          >
            On the web
          </Heading>
          <Link to="https://www.facebook.com/nddaiit">
            <Button
              leftIcon={<RiFacebookFill />}
              variant="ghost"
              color="teal.200"
              _hover={{ bgColor: "rgba(129, 230, 217, 0.12)" }}
            >
              @facebook
            </Button>
          </Link>
          <Link to="https://www.instagram.com/daidnguyen/">
            <Button
              leftIcon={<RiInstagramFill />}
              variant="ghost"
              color="teal.200"
              _hover={{ bgColor: "rgba(129, 230, 217, 0.12)" }}
            >
              @instagram
            </Button>
          </Link>
          <Link to="https://twitter.com/dai_d_nguyen">
            <Button
              leftIcon={<RiTwitterFill />}
              variant="ghost"
              color="teal.200"
              _hover={{ bgColor: "rgba(129, 230, 217, 0.12)" }}
            >
              @twitter
            </Button>
          </Link>
          <Link to="https://www.linkedin.com/in/dai-nguyen-dang-07b8b3180/">
            <Button
              leftIcon={<RiLinkedinFill />}
              variant="ghost"
              color="teal.200"
              _hover={{ bgColor: "rgba(129, 230, 217, 0.12)" }}
            >
              @linkedin
            </Button>
          </Link>
        </Box>

        <Box>
          <Heading
            width="fit-content"
            size="md"
            borderBottomWidth={4}
            pb={1}
            mb={2}
            borderColor="whiteAlpha.500"
          >
            Newsletter
          </Heading>
          <Text textIndent="24px" textAlign="justify">
            Join me on a behind-the-scenes coding journey. Weekly updates on
            projects and knowledge
          </Text>
          <Box textAlign="center" my={4}>
            <Button
              leftIcon={<EmailIcon />}
              color="#000"
              bgColor="teal.300"
              _hover={{ backgroundColor: "teal.200" }}
            >
              Sign up my newsletter here
            </Button>
          </Box>
        </Box>
      </Container>
    </Layout>
  );
};

export default About;
