import { Box, Button, Flex, Spacer } from "@chakra-ui/react";
import BrandLogo from "../Common/Logo";

function Navbar() {
  return (
    <Box>
      <Flex gap="1rem" p="1rem" borderBottom="1px" borderColor="gray.200">
        <BrandLogo />
        <Spacer />
        <Box>
        <Button colorScheme="blue">Login</Button>
        </Box>
        
      </Flex>
    </Box>
  );
}

export default Navbar;
