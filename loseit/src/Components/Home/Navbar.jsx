import { Box, Button, Flex, Spacer } from "@chakra-ui/react";
import BrandLogo from "../common/Logo";
import { useNavigate } from "react-router-dom";

function Navbar() {
  let navigate = useNavigate();
  function handleLogin(){
    navigate("/login")
  }
  return (
    <Box p="0% 20%" pb="1rem">
      <Flex>
        <BrandLogo />
        <Spacer />
        <Box>
          <Button size="md" variant="solid" onClick={handleLogin}>
            Login
          </Button>
        </Box>
      </Flex>
    </Box>
  );
}

export default Navbar;
