import { Container, Box } from "@chakra-ui/react";
import Header from "./Header";
import Footer from "./Footer";
import Steps from "./Steps";
import Numbers from "./Numbers";
import Advice from "./Advice";
import GetStarted from "./GetStarted";

import ImageSlider from "./Slider";
import { SlideData } from "../Common1/carouselData";
import BlogSlider from "./BlogSlide";
import { BlogData } from "../Common1/BlogData";

export default function Home() {
  return (
    <Container>
      <Header />
      <Steps />
      <Box>
        <ImageSlider slides={SlideData} />
      </Box>
      <Numbers />
      <Advice />
      <Box>
        <BlogSlider slides={BlogData} />
      </Box>
      <GetStarted />
      <Footer />
    </Container>
  );
}
