import React, { useState, useEffect } from 'react';
import snitch1 from './snitch1.png';
import snitch2 from './snitch2.png';

function ImageSlider() {
  const [currentImage, setCurrentImage] = useState(snitch1);
  const [showSlider, setShowSlider] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      // Toggle between the two images
      setCurrentImage((prevImage) =>
        prevImage === snitch1 ? snitch2 : snitch1
      );
    }, 290);

    // Use setTimeout to hide the slider after 3 seconds
    const hideTimeout = setTimeout(() => {
      setShowSlider(false);
    }, 2900);

    return () => {
      // Clear the interval and hideTimeout when the component unmounts
      clearInterval(interval);
      clearTimeout(hideTimeout);
    };
  }, []);

  return (
    <div>
      {showSlider && (
        <img src={currentImage} className="" alt="logo" />
      )}
    </div>
  );
}

export default ImageSlider;
