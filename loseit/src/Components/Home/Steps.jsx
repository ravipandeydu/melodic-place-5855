import { Container, Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

function Steps() {
  return (
    <Box p="0% 28%" pb="1rem">
      <Heading as="h1"
              fontSize="28px"
              justifySelf="center"
              color="#183962"
              mb="10px"
              textAlign="center">Weight Loss Made Easy</Heading>
      <Flex>
        <Box m="0px 10px">
          <Heading as="h1"
              fontSize="21px"
              justifySelf="center"
              textAlign="center"
              color="#ff9400"
              mb="10px">Set Your Goals</Heading>
          <Image
          display="block"
          ml="auto" 
          mr="auto"
            width="140px"
            src={"https://assets.loseit.com/website/home/Home_SetGoal.svg"}
          />
          <Text fontSize="15.4px"
              textAlign="center"
              color="#808284">
            Tell us what you want to acheive and receive personalized goals.
          </Text>
        </Box>
        <Box m="0px 10px">
          <Heading as="h1"
              fontSize="21px"
              justifySelf="center"
              textAlign="center"
              color="#ff9400"
              mb="10px">Track Your Food</Heading>
          <Image
          display="block"
          ml="auto" 
          mr="auto"
            width="140px"
            src={"https://assets.loseit.com/website/home/Home_TrackFoods.svg"}
          />
          <Text fontSize="15.4px"
              textAlign="center"
              color="#808284">
            Learn about the foods you’re eating and keep your calories within
            your daily budget.
          </Text>
        </Box>
        <Box m="0px 10px">
          <Heading as="h1"
              fontSize="21px"
              justifySelf="center"
              textAlign="center"
              color="#ff9400"
              mb="10px">Lose Weight</Heading>
          <Image
          display="block"
          ml="auto" 
          mr="auto"
            width="140px"
            src={"https://assets.loseit.com/website/home/Home_LoseWeight.svg"}
          />
          <Text fontSize="15.4px"
              textAlign="center"
              color="#808284">
            Reach your goals and continue to set new ones for a happier,
            healthier you!
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}

export default Steps;
