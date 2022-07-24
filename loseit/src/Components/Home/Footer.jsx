import {
  Box,
  Table,
  Flex,
  Icon,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Image,
  Text,
  Center,
  Container
} from "@chakra-ui/react";
import BrandLogo2 from "../common/Logo2";

function Footer() {
  return (
    <Box bg="#183962" color="white" p="25px 25%" pb="1rem">
      <Center>
        <Flex>
          <Box m="0px 60px">
          <BrandLogo2 />
          </Box>
          <Box m="0px 60px">
            <Table size="sm">
              <Thead>
                <Tr>
                  <Th padding="0px 20px" color="white">Member Resources</Th>
                  <Th padding="0px 20px" color="white">Connect With Us</Th>
                  <Th padding="0px 20px" color="white">Our Team</Th>
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
      </Center>
      <Center padding="20px 0px 0px 0px">
        <Flex>
          <Box padding="0px 10px">
            <Image
              width="30px"
              src={
                "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/512px-2021_Facebook_icon.svg.png?20210818083032"
              }
            />
          </Box>
          <Box padding="0px 10px">
            <Image
              width="30px"
              src={
                "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/132px-Instagram_logo_2016.svg.png?20210403190622"
              }
            />
          </Box>
          <Box padding="0px 10px">
            <Image
              width="30px"
              src={
                "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/512px-Twitter-logo.svg.png?20211104142029"
              }
            />
          </Box>
          <Box padding="0px 10px">
            <Image
              width="30px"
              src={
                "https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png?20160129083321"
              }
            />
          </Box>
          <Box padding="0px 10px">
            <Image
              width="30px"
              src={
                "https://image.similarpng.com/very-thumbnail/2020/07/Linkedin-logo-on-transparent--background-PNG.png"
              }
            />
          </Box>
        </Flex>
      </Center>
        <Text fontSize="15.4px"
              textAlign="center"
              color="white">Copyright 2008-2021 FitNow, Inc, All Rights Reserved</Text>
        <Text fontSize="15.4px"
              textAlign="center"
              color="white">Privacy | Terms of Service</Text>
    </Box>
  );
}

export default Footer;
