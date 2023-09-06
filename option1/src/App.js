// src/App.js
import React from "react";
import "./App.css";
import ImageDisplay from "./components/ImageDisplay";
import TextOverlay from "./components/TextOverlay";

function App() {
  return (
    <div className="App">
      <h1>Text Overlay App</h1>
      <ImageDisplay />
      <TextOverlay />
    </div>
  );
}

export default App;
