import {
  Container,
  Box,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

function Steps() {
  return (
    <Container>
      <Heading>Weight Loss Made Easy</Heading>
      <Flex>
        <Box>
          <Heading>Weight Loss Made Easy</Heading>
          <Image
            width="200px"
            src={
              "https://assets.loseit.com/website/corporate/LoseIt_Logo_FullColor+(1).svg"
            }
          />
          <Text>Tell us what you want to acheive and receive personalized goals.</Text>
        </Box>
        <Box>
          <Heading>Weight Loss Made Easy</Heading>
          <Image
            width="200px"
            src={
              "https://assets.loseit.com/website/corporate/LoseIt_Logo_FullColor+(1).svg"
            }
          />
          <Text>Learn about the foods you’re eating and keep your calories within your daily budget.</Text>
        </Box>
        <Box>
          <Heading>Weight Loss Made Easy</Heading>
          <Image
            width="200px"
            src={
              "https://assets.loseit.com/website/corporate/LoseIt_Logo_FullColor+(1).svg"
            }
          />
          <Text>Reach your goals and continue to set new ones for a happier, healthier you!</Text>
        </Box>
      </Flex>
    </Container>
  );
}

export default Steps;
