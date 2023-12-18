import React from "react";
import { ring2 } from "ldrs";
import { zoomies } from "ldrs";
import { dotStream } from "ldrs";
import "./loading.css";

// Register the ring2 component
ring2.register();
zoomies.register();
dotStream.register();

const PageLoader = () => {
  return (
    <div className="loader-container">
      {/* The ring2 loader */}
      {/* <l-ring-2
        size="150"
        stroke="10"
        stroke-length="0.35"
        bg-opacity="0.16"
        speed="1.0"
        color="white"
      ></l-ring-2> */}

      {/* <l-zoomies
        size="150"
        stroke="10"
        bg-opacity="0.1"
        speed="1.4"
        color="white"
      ></l-zoomies> */}

      {/* <l-dot-stream size="150" speed="2.5" color="white"></l-dot-stream>
      <l-dot-stream size="150" speed="2.5" color="white"></l-dot-stream>
      <l-dot-stream size="150" speed="2.5" color="white"></l-dot-stream> */}
      {/* <div class="spinner"></div> */}
      <div class="loading-text">Your result is coming...</div>
      {/* <div class="circle"></div> */}
      {/* <div class="circle"></div> */}
      {/* <div class="circle"></div> */}
    </div>
  );
};

export default PageLoader;
