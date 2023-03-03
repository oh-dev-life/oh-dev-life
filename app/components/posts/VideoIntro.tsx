import { Box, Heading, Text } from "@chakra-ui/react";
import videoIntro from "~/img/video-intro.mp4";

const VideoIntro = () => {
  return (
    <Box w="100%" position="relative" className="video-intro">
      <video src={videoIntro} autoPlay loop />
      <Box position="absolute" textAlign="center" className="welcome-text" width="100%">
        <Text>WELCOME TO</Text>
        <Heading size="lg" display="flex" mt={4} justifyContent="center">
          An accurate list of tech i &nbsp; <Text color="orange.400"> used</Text>
        </Heading>
      </Box>
    </Box>
  );
};

export default VideoIntro;
