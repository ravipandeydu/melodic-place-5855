import { Container, Box, Flex, Heading, Text, Button } from "@chakra-ui/react";
import Navbar from "./Navbar";
import Phone from "../common/Phone";
import Prating from "../common/Grating";

function Header() {
  return (
    <Box>
      <Navbar />
      <Box p="0% 29%" pb="1rem"
      backgroundImage="url('https://assets.loseit.com/website/home/Wave.png')">
        <Flex>
          <Phone />
          <Box m="0px 70px">
            <Heading
              as="h1"
              fontSize="50px"
              justifySelf="center"
              color="red"
              mb="10px"
            >
              Top Rated Weight Loss Plan
            </Heading>
            <Text fontSize="20px">
              Track the foods you love and lose weight
            </Text>
            <Button m="40px 0px">Sign Up for Free</Button>
            <Prating />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default Header;
