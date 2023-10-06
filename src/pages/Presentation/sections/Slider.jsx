import React from "react";
import FancyCarousel from "react-fancy-circular-carousel";
import "react-fancy-circular-carousel/FancyCarousel.css";
import builder from "assets/images/products/builder.webp";
import pro_tools from "assets/images/products/pro-tools.png";
const Slider = () => {
  const images = [builder, pro_tools];

  return (
    <div style={{ height: "50vh" }}>
      <div className="carousel" style={{ height: "50vh" }}>
        <FancyCarousel
          images={images}
          carouselRadius={400}
          peripheralImageRadius={100}
          centralImageRadius={200}
          focusElementStyling={{ border: "2px solid #ba4949" }}
          autoRotateTime={3}
          borderWidth={4}
          navigationButtonStyling={{ borderColor: "red" }}
          borderHexColor={"1c364f"}
        />
      </div>
    </div>
  );
};

export default Slider;
