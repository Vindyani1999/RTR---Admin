import React, { useState } from "react";
import Slider from "react-slick";
import { Box } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface CarouselProps {
  children: React.ReactNode;
}

const SliderImage: React.FC<CarouselProps> = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    arrows: false,
    beforeChange: (current: number, next: number) => {
      setCurrentIndex(next);
    },
  };

  return (
    <Slider {...settings}>
      {React.Children.map(children, (child, index) => (
        <Box
          key={index}
          sx={{
            position: "relative",
            transition: "transform 8s ease-in-out",
            transform: index === currentIndex ? "scale(1.1)" : "scale(1.0)",
          }}
        >
          {child}
        </Box>
      ))}
    </Slider>
  );
};

export default SliderImage;
