import { Container, Box } from "@chakra-ui/react";
import Header from "../Components/Home/Header";
import Footer from "../Components/Home/Footer";
import Steps from "../Components/Home/Steps";

import Numbers from "../Components/Home/Numbers";
import Advice from "../Components/Home/Advice";

import GetStarted from "../Components/Home/GetStarted";

import ImageSlider from "../Components/Home/Slider";
import {SlideData} from "../Components/common/carouselData";
import BlogSlider from "../Components/Home/BlogSlide";
import {BlogData} from "../Components/common/BlogData";

export default function Home() {
  return (
    <Box >
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
    </Box>
  );
}
