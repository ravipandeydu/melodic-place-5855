import { Container, Box, Heading, Center, Image } from "@chakra-ui/react";

export default function GetStarted() {
  return (
    <Box backgroundColor="gray" p="10px 25%" pb="1rem">
      <Heading
      as="h1"
      fontSize="21px"
      justifySelf="center"
      color="#ff9400"
      mb="10px"
      textAlign="center">Get Started on Mobile</Heading>
      <Center>
        <Box p="0px 10px">
        <Image
          width="200px"
          src={"https://assets.loseit.com/website/home/Download_Apple.svg"}
        />
        </Box>
        <Box p="0px 10px">
        <Image
          width="215px"
          src={"https://assets.loseit.com/website/home/Download_GooglePlay.svg"}
        />
        </Box>
      </Center>
    </Box>
  );
}
