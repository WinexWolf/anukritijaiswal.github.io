import React, { useState, useEffect } from 'react';
import ImageSlider from './imageslider';
import Navbar from './navbar';
import ComingUp from './comingup';
import './App.css';

function App() {
  const [showHeader, setShowHeader] = useState(true);
  const [expandNavbar, setExpandNavbar] = useState(false);

  useEffect(() => {
    // Use setTimeout to hide the header after 3 seconds
    const hideHeaderTimeout = setTimeout(() => {
      setShowHeader(false); // Hide the header after 3 seconds
      setExpandNavbar(true); // Expand the Navbar and White Page
    }, 3000);

    return () => {
      // Clear the timeout when the component unmounts
      clearTimeout(hideHeaderTimeout);
    };
  }, []);

  return (
    <div className="App">
      {showHeader && (
        <div className="App-header">
          <ImageSlider />
          <p>
            <code></code>
          </p>
        </div>
      )}
      {!showHeader && (
        <div className={`Navbar ${expandNavbar ? 'expand' : ''}`}>
          <Navbar />
          <ComingUp/>
        </div>
      )}
      {!showHeader && (
        <div className={`White-page ${expandNavbar ? 'expand' : ''}`}>
        </div>
      )}
    </div>
  );
}

export default App;
