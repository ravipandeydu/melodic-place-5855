import { Container, Image, Flex, Box, Heading, Text } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageSlider = ({ slides }) => {
  return (
    <Carousel>
      {slides.map((slide) => {
        
        return (
          <Container>
            <Flex>
              <Box>
                <Image src={slide.image1} boxSize='100px' />
                <Heading>{slide.heading1}</Heading>
                <Text>{slide.text1}</Text>
              </Box>
              <Box>
                <Image boxSize='100px' src={slide.image2} />
                <Heading>{slide.heading2}</Heading>
                <Text>{slide.text1}</Text>
              </Box>
            </Flex>
          </Container>
        );
      })}
    </Carousel>
  );
};

export default ImageSlider;
