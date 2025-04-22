import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Tester = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <div style={{ padding: "50px" }}>
      <h2 style={{ textAlign: "center", color: "#fff" }}>Test Slider</h2>
      <Slider {...settings}>
        <div style={{ background: "#444", padding: 40, textAlign: "center" }}>
          <h3 style={{ color: "white" }}>Slide 1</h3>
        </div>
        <div style={{ background: "#666", padding: 40, textAlign: "center" }}>
          <h3 style={{ color: "white" }}>Slide 2</h3>
        </div>
        <div style={{ background: "#888", padding: 40, textAlign: "center" }}>
          <h3 style={{ color: "white" }}>Slide 3</h3>
        </div>
      </Slider>
    </div>
  );
};

export default Tester;
