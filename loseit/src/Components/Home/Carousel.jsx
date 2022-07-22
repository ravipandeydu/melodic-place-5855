import {Container, Box, Flex, Image, Heading, Text} from "@chakra-ui/react";

function Carousel(){
    return(
        <Container>
            <Flex>
                <Box>
                    <Image 
                    width="30px"
                    src={
                      "https://assets.loseit.com/website/home/Features_WaterTracking.svg"
                    }
                    />
                    <Heading>Water Tracking</Heading>
                    <Text>Track your water intake to make sure you're getting the recommended amount daily.</Text>
                </Box>
                <Box>
                    <Image 
                    width="30px"
                    src={
                      "https://assets.loseit.com/website/home/Features_Macros.svg"
                    }
                    />
                    <Heading>Macro Tracking</Heading>
                    <Text>Set personalized macronutrient goals to ensure you’re getting enough protein, carbs, and more.</Text>
                </Box>
            </Flex>
            <Flex>
                <Box>
                    <Image 
                    width="30px"
                    src={
                      "https://assets.loseit.com/website/home/Features_DeviceIntegration.svg"
                    }
                    />
                    <Heading>Device Integration</Heading>
                    <Text>Connect Apple Health and Google Fit for easy exercise tracking.</Text>
                </Box>
                <Box>
                    <Image 
                    width="30px"
                    src={
                      "https://assets.loseit.com/website/home/Features_PatternsReports.svg"
                    }
                    />
                    <Heading>Patterns & Reports</Heading>
                    <Text>Get reports on your behaviors and progress straight to your inbox.</Text>
                </Box>
            </Flex>
            <Flex>
                <Box>
                    <Image 
                    width="30px"
                    src={
                      "https://assets.loseit.com/website/home/Features_Barcode.svg"
                    }
                    />
                    <Heading>Scanner Feature</Heading>
                    <Text>Use your camera to scan package barcodes for quick tracking or create new foods with the nutrition label auto-fill.</Text>
                </Box>
                <Box>
                    <Image 
                    width="30px"
                    src={
                      "https://assets.loseit.com/website/home/Features_SnapIt.svg"
                    }
                    />
                    <Heading>Smart Camera</Heading>
                    <Text>Use your camera to take a picture of your food and allow Lose It! technology to help you log it.</Text>
                </Box>
            </Flex>
        </Container>
    )
}

export default Carousel