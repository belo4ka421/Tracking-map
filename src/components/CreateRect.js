import React from "react";

function CreateRect({ mouseEnter, mouseLeave, mouseMove }) {
  const rects = [
    { width: "17", height: "8", x: "54", y: "97", fill: "yellow" },
    { width: "8", height: "17", x: "54", y: "80", fill: "yellow" },
  ];

  return (
    <div>
      <svg viewBox="0 0 297 210">
        {rects.map((obj, index) => (
          <rect
            onMouseMove={mouseMove}
            onMouseLeave={mouseLeave}
            onMouseEnter={mouseEnter}
            id={index + 1}
            key={index}
            width={obj.width}
            height={obj.height}
            x={obj.x}
            y={obj.y}
            fill={obj.fill}
          ></rect>
        ))}
      </svg>
      <img alt="map" src="map.svg"></img>
    </div>
  );
}
export default CreateRect;
