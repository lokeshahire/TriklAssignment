import React, { useState } from "react";
import Draggable from "react-draggable";
import { Resizable } from "react-resizable";
import "./Display.css";

const TextOverlay = () => {
  const [text, setText] = useState("");
  const [textElements, setTextElements] = useState([]);

  const addTextOverlay = () => {
    if (text.trim() === "") return;

    const newTextElement = {
      id: Date.now(),
      text,
      x: 100,
      y: 100,
      width: 250,
      height: 250,
    };

    setTextElements([...textElements, newTextElement]);
    setText("");
  };

  const handleDrag = (id, e, ui) => {
    setTextElements((prevElements) =>
      prevElements.map((el) => {
        if (el.id === id) {
          const grid = 5;
          const newX = Math.round(ui.x / grid) * grid;
          const newY = Math.round(ui.y / grid) * grid;

          return { ...el, x: newX, y: newY };
        }
        return el;
      })
    );
  };

  const handleResize = (id, e, { size }) => {
    setTextElements((prevElements) =>
      prevElements.map((el) => {
        if (el.id === id) {
          return { ...el, width: size.width, height: size.height };
        }
        return el;
      })
    );
  };

  return (
    <div className="text-overlay">
      <div>
        <input
          type="text"
          placeholder="Enter text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <br />
        <button onClick={addTextOverlay}>Add Text</button>
      </div>
      {textElements.map((element) => (
        <Draggable
          key={element.id}
          onStop={(e, ui) => handleDrag(element.id, e, ui)}
        >
          <Resizable
            width={element.width}
            height={element.height}
            onResize={(e, data) => handleResize(element.id, e, data)}
          >
            <div
              className="text-box"
              style={{ left: element.x, top: element.y }}
            >
              {element.text}
            </div>
          </Resizable>
        </Draggable>
      ))}
    </div>
  );
};

export default TextOverlay;
