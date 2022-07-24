import {
  Image,
  Heading,
  Container,
  Flex,
  Box,
  Center,
  Grid,
  GridItem
} from "@chakra-ui/react";

export default function Numbers() {
  return (
      <Box p="0% 25%" pb="1rem">
        <Image
        display="block"
        ml="auto" 
        mr="auto"
          width="200px"
          src={"https://assets.loseit.com/website/home/Ticker_Celebratory.svg"}
        />
        <Heading
        as="h1"
        fontSize="91px"
        justifySelf="center"
        textAlign="center"
        color="#ff9400"
        mb="10px">121,505,296</Heading>
        <Heading
        as="h2"
        fontSize="28px"
        justifySelf="center"
        textAlign="center"
        color="#455555"
        mb="10px">POUNDS LOST</Heading>
        <Box m="0% 40%" pb="1rem" borderBottom='2px' borderColor='#ff9400'>
</Box>
        <Heading
        as="h3"
        fontSize="21px"
        textAlign="center"
        color="#183962"
        m="10px">AS SEEN ON</Heading>
        <Box m="0px 50px">
          <Flex>
            <Image
              padding="10px 15px"
              m="0px 22.5px"
              width="150px"
              src={
                "https://assets.loseit.com/website/home/Feature_TodayShow.png"
              }
            />
            <Image
              padding="10px 15px"
              m="0px 22.5px"
              width="150px"
              src={"https://assets.loseit.com/website/home/Feature_People.png"}
            />
            <Image
              padding="10px 15px"
              m="0px 22.5px"
              width="150px"
              src={
                "https://assets.loseit.com/website/home/Feature_GoodMorningAmerica.png"
              }
            />
            <Image
              padding="10px 15px"
              m="0px 22.5px"
              width="150px"
              src={
                "https://assets.loseit.com/website/home/Feature_WomensHealth.png"
              }
            />
          </Flex>
        </Box>
      </Box>
  );
}
