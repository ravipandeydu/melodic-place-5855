import { Box, Flex, Heading, Text, Button } from "@chakra-ui/react";
import Navbar from "./Navbar";
import Phone from "../Common/Phone";
import Prating from "../Common/Grating"

function Header() {
  return (
    <Box>
      <Navbar />
      <Flex>
        <Phone />
        <Box>
        <Heading
            as="h1"
            fontSize="50px"
            justifySelf="center"
            color="red"
          >
            Top Rated Weight Loss Plan
        </Heading>
        <Text fontSize="20px">
            Track the foods you love and lose weight
        </Text>
        <Button>
            Sign Up for Free
        </Button>
        <Prating />
        </Box>
      </Flex>
    </Box>
  );
}

export default Header;
