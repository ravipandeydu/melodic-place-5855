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

export default function Advice(){
    return(
        <Container bg="#183962" color="white" padding="50px">
            
                <Heading>Advice from Successful Members</Heading>
                <Center>
                <Flex>
                    <Box>
                        <Image 
                        width="200px"
                        src={
                          "https://assets.loseit.com/website/home/Advice_Carla.png"
                        }
                        />
                        <Text>Track every single bite you take. You need to know how you’re doing before dinner. If you don’t, things can get away from you fast."</Text>
                        <Text>- Carla, 65 lbs lost without giving up pizza.</Text>
                    </Box>
                    <Box>
                        <Image 
                        width="200px"
                        src={
                          "https://assets.loseit.com/website/home/Advice_Alex.png"
                        }
                        />
                        <Text>Everyday is a battle, and you have to make the choice each morning to fight for your health and wellness"</Text>
                        <Text>- Alex, lost 85 lbs for his wedding.</Text>
                    </Box>
                </Flex>
                </Center>
                <Button>Share Your Story</Button>
            
        </Container>
    )
}