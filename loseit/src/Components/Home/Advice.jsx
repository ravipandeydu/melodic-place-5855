import {
  Container,
  Box,
  Flex,
  Button,
  Image,
  Heading,
  Text,
  Center
} from "@chakra-ui/react";

export default function Advice() {
  return (
    <Box bg="#183962" color="white" p="20px 25%" pb="1rem">
      <Heading
        as="h2"
        fontSize="28px"
        justifySelf="center"
        textAlign="center"
        color="white"
        mb="10px"
      >
        Advice from Successful Members
      </Heading>
      <Center>
        <Flex>
          <Box p="10px 20px">
            <Image
              display="block"
              ml="auto"
              mr="auto"
              width="200px"
              src={"https://assets.loseit.com/website/home/Advice_Carla.png"}
            />
            <Text fontSize="15.4px" textAlign="center" color="#ffa600">
              Track every single bite you take. You need to know how you’re
              doing before dinner. If you don’t, things can get away from you
              fast."
            </Text>
            <Text fontSize="11.2px" textAlign="center" color="white">
              - Carla, 65 lbs lost without giving up pizza.
            </Text>
          </Box>
          <Box p="10px 20px">
            <Image
              display="block"
              ml="auto"
              mr="auto"
              width="200px"
              src={"https://assets.loseit.com/website/home/Advice_Alex.png"}
            />
            <Text fontSize="15.4px" textAlign="center" color="#ffa600">
              Everyday is a battle, and you have to make the choice each morning
              to fight for your health and wellness"
            </Text>
            <Text fontSize="11.2px" textAlign="center" color="white">
              - Alex, lost 85 lbs for his wedding.
            </Text>
          </Box>
        </Flex>
      </Center>
      <Button display="block" ml="auto" mr="auto">
        Share Your Story
      </Button>
    </Box>
  );
}
