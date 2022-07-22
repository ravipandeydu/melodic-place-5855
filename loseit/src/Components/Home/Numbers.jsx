import {
  Image,
  Heading,
  Container,
  Flex,
  Box,
  Center,
  Grid,
  GridItem,
} from "@chakra-ui/react";

export default function Numbers() {
  return (
    <Container>
      
      <Box>
      <Image 
      width="200px"
      src={
        "https://assets.loseit.com/website/home/Ticker_Celebratory.svg"
      }
      />
      <Heading>121,505,296</Heading>
      <Heading>POUNDS LOST</Heading>
      <Center>
      <Box width="60px">
        <Grid templateColumns='repeat(1, 1fr)'>
            <GridItem colSpan={1} h='10' bg='tomato' />
        </Grid>
    </Box>
    </Center>
        <Heading>AS SEEN ON</Heading>
        <Center>
        <Flex>
        <Image
        padding="20px"
      width="150px"
      src={
        "https://assets.loseit.com/website/home/Feature_TodayShow.png"
      }
    />
    <Image
    padding="20px"
      width="150px"
      src={
        "https://assets.loseit.com/website/home/Feature_People.png"
      }
    />
    <Image
    padding="20px"
      width="150px"
      src={
        "https://assets.loseit.com/website/home/Feature_GoodMorningAmerica.png"
      }
    />
    <Image
    padding="20px"
      width="150px"
      src={
        "https://assets.loseit.com/website/home/Feature_WomensHealth.png"
      }
    />
        </Flex>
        </Center>
      </Box>
    </Container>
  );
}
