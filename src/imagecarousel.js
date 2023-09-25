import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./imagecarousel.css"; // Your CSS file for styling
import image1 from "./images/cmu.png";
import image2 from "./images/calfigtbg.png";
import image3 from "./images/L4.png";

const ImageCarousel = () => {
  return (
    <div className="carousel-container">
      <Carousel
        autoPlay
        showThumbs={false} // Hide thumbnail navigation
        showArrows={true} // Show navigation arrows
        // Set the autoplay interval (in milliseconds)
      >
        <div>
          <img src={image1} alt="Image 1" />
          <p className="">Description for Image 2</p>
        </div>
        <div>
          <img src={image2} alt="Image 2" />
          <p className="">Description for Image 2</p>
        </div>
        <div>
          <img src={image3} alt="Image 3" />
          <p className="">Description for Image 3</p>
        </div>
        <div>
          <img src={image3} alt="Image 4" />
          <p className="">Description for Image 4</p>
        </div>
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
