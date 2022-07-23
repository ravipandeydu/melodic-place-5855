import { Container, Box, Heading, Center, Image } from "@chakra-ui/react"

export default function GetStarted(){
    return(
        <Container backgroundColor="gray">
            <Heading>Get Started on Mobile</Heading>
            <Center>
                <Image 
                width="200px"
                src={
                  "https://assets.loseit.com/website/home/Download_Apple.svg"
                }
                />
                <Image 
                width="215px"
                src={
                  "https://assets.loseit.com/website/home/Download_GooglePlay.svg"
                }
                />
            </Center>
        </Container>
    )
}
