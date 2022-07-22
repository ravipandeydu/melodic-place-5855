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

export default function Blog(){
    return(
        <Container>
            
                <Heading>A Balanced Approach to Weight Loss</Heading>
                <Text>Get motivated with these nutrition and wellness tips and user success stories!</Text>
                <Center>
                <Flex>
                    <Box>
                        <Image 
                        width="266px"
                        src={
                          "https://i1.wp.com/loseitblog.com/wp-content/uploads/2019/09/Untitled-design-119.png?w=1010&ssl=1"
                        }
                        />
                        <Text>Setting Macronutrient Goals: How Many Macros do You Need?</Text>
                    </Box>
                    <Box>
                        <Image 
                        width="266px"
                        src={
                          "https://i2.wp.com/loseitblog.com/wp-content/uploads/2019/02/Quick-tips-to-make-healthier-choices.png?w=1010&ssl=1"
                        }
                        />
                        <Text>Quick Tips to Make Healthier Decisions</Text>
                    </Box>
                    <Box>
                        <Image 
                        width="266px"
                        src={
                          "https://i1.wp.com/loseitblog.com/wp-content/uploads/2019/09/Untitled-design-132.png?w=1010&ssl=1"
                        }
                        />
                        <Text>12 Protein-Packed Snacks to Curb Hanger Quick</Text>
                    </Box>
                    <Box>
                        <Image 
                        width="266px"
                        src={
                          "https://i0.wp.com/loseitblog.com/wp-content/uploads/2019/01/health-benefits-of-seltzer-water.png?w=1010&ssl=1"
                        }
                        />
                        <Text>Is Drinking Seltzer Actually Healthy?</Text>
                    </Box>
                    <Box>
                        <Image 
                        width="266px"
                        src={
                          "https://i2.wp.com/loseitblog.com/wp-content/uploads/2019/09/Untitled-design-135.png?w=1010&ssl=1"
                        }
                        />
                        <Text>Fun 20-Minute Treadmill Workouts</Text>
                    </Box>
                    <Box>
                        <Image 
                        width="266px"
                        src={
                          "https://i1.wp.com/loseitblog.com/wp-content/uploads/2019/01/Seven-benefits-of-sleep.png?w=1010&ssl=1"
                        }
                        />
                        <Text>Seven Strategies for a Better Nights Sleep</Text>
                    </Box>
                    <Box>
                        <Image 
                        width="266px"
                        src={
                          "https://i0.wp.com/loseitblog.com/wp-content/uploads/2019/01/Intuitive-Eating.png?w=1010&ssl=1"
                        }
                        />
                        <Text>The Secret Behind Intuitive Eating</Text>
                    </Box>
                    <Box>
                        <Image 
                        width="266px"
                        src={
                          "https://i0.wp.com/loseitblog.com/wp-content/uploads/2019/08/Untitled-design-83.png?w=1010&ssl=1"
                        }
                        />
                        <Text>5 Ways You’re Sabotaging Your Weight Loss</Text>
                    </Box>
                    <Box>
                        <Image 
                        width="266px"
                        src={
                          "https://i0.wp.com/loseitblog.com/wp-content/uploads/2019/09/Untitled-design-126.png?w=1010&ssl=1"
                        }
                        />
                        <Text>10 Tips For Making Healthier Choices When Dining Out</Text>
                    </Box>
                </Flex>
                
            </Center>
            <Button>Get Weight Loss Tips</Button>
        </Container>
    )
}