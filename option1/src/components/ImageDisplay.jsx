import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Display.css";

const ImageDisplay = () => {
  const [imageData, setImageData] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await axios.get(
          "https://api.unsplash.com/photos/random?client_id=sAQKd0Dxyo9W_08-ziEzBKNjlGLHAHkHyurqv3Q1Ocg"
        );
        setImageData(response.data);
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };

    fetchImage();
  }, []);

  return (
    <div className="image-display">
      {imageData && (
        <img
          src={imageData.urls.regular}
          alt={imageData.description || "Image"}
        />
      )}
    </div>
  );
};

export default ImageDisplay;
