import { Container, Image, Flex, Box, Heading, Text } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// If you want to use your own Selectors look up the Advancaed Story book examples
const ImageSlider = ({ slides }) => {
  return (
    <Carousel infiniteLoop>
      {slides.map((slide) => {
        // return <Image src={slide.image} height="auto" width="800px" />;
        console.log(slide.heading2);
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
