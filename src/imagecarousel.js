import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./imagecarousel.css"; // Your CSS file for styling
import image1 from "./images/campu_logo.png";
import image2 from "./images/calfigtbg.png";
import image3 from "./images/L4.png";
import image4 from "./images/esn_logo.png";

const ImageCarousel = () => {
  return (
    <div className="carousel-container">
{/*       Projects
 */}      <Carousel
        autoPlay
        showThumbs={false} // Hide thumbnail navigation
        showArrows={true} // Show navigation arrows
        // Set the autoplay interval (in milliseconds)
      >
        <div>
          <img src={image4} alt="Image 1" />
          <p className="">
            <b>Emergency Social Network</b>: A web application that facilitate
            information sharing, resource allocation, helping citizens prepare
            and respond effectively to floods using Node js, Websockets, Render,
            NoSQL, and Express.
          </p>
        </div>
        <div>
          <img src={image1} alt="Image 2" />
          <p className="">
            <b>CampuShare</b>: A carpooling, group food order and ride request
            web application built using Microservices and Java.
          </p>
        </div>
        <div>
          <img src={image2} alt="Image 3" />
          <p className="">
            <b>CalFit</b>: A diet and nutrition tracker mobile application built
            with FlutterFlow and Firebase.
          </p>
        </div>
        <div>
          <img src={image3} alt="Image 4" />
          <p className="">
            <b>L for Learning</b>: A fun and relatable podcast that shares life
            experiences, fostering connections through shared stories.{" "}
          </p>
        </div>
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
