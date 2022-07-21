import {
  Box,
  Table,
  Flex,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Image,
  Text
} from "@chakra-ui/react";
import BrandLogo2 from "../Common/Logo2";

function Footer() {
  return (
    <div style={{textAlign:"center"}}>
    <Box bg="#183962" color="white" textAlign= "center">
      <Flex>
        <BrandLogo2 />
        <Box>
          <Table size="sm">
            <Thead>
              <Tr>
                <Th>Member Resources</Th>
                <Th>Connect With Us</Th>
                <Th>Our Team</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>How It Works</Td>
                <Td>Press & Media Kit</Td>
                <Td>About Us</Td>
              </Tr>
              <Tr>
                <Td>Premium</Td>
                <Td>Contact Us</Td>
                <Td>Careers</Td>
              </Tr>
              <Tr>
                <Td>Lose It! Blog</Td>
                <Td>Partners & API</Td>
                <Td>Diversity</Td>
              </Tr>
              <Tr>
                <Td>Help Center</Td>
                <Td>Share Your Story</Td>
                <Td> </Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>
      </Flex>
      <Flex>
        <Box>
          <Image
            width="200px"
            src={
              "https://assets.loseit.com/website/corporate/LoseIt_Logo_FullColor+(1).svg"
            }
          />
        </Box>
      </Flex>
      <Text>Copyright 2008-2021 FitNow, Inc, All Rights Reserved</Text>
      <Text>Privacy | Terms of Service</Text>
    </Box>
    </div>
  );
}

export default Footer;
