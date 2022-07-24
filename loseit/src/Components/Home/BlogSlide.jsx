import { Container, Image, Flex, Box, Text, Button } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// If you want to use your own Selectors look up the Advancaed Story book examples
const BlogSlider = ({ slides }) => {
  return (
    <Container>
    <Carousel>
      {slides.map((slide) => {
        // return <Image src={slide.image} height="auto" width="800px" />;
        // console.log(slide.heading2);
        return (
          <Container>
            <Flex>
              <Box>
                <Image src={slide.image1} boxSize='266px' />
                <Text>{slide.text1}</Text>
              </Box>
              <Box>
                <Image boxSize='266px' src={slide.image2} />
                <Text>{slide.text2}</Text>
              </Box>
              <Box>
                <Image boxSize='266px' src={slide.image3} />
                <Text>{slide.text3}</Text>
              </Box>
            </Flex>
          </Container>
        );
      })}
    </Carousel>
    <Button>Get Weight Loss Tips</Button>
    </Container>
  );
};

export default BlogSlider;
