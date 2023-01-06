import React from "react";

import "./css/Tooltip.css";
function Tooltip({ x, y, visible, name, img, mail }) {
  return (
    <div>
      {visible && (
        <div className="tooltip" style={{ left: x, top: y }}>
          <div className="tooltip__name">{name}</div>
          <div className="tooltip__mail">{mail}</div>
          <div>
            <img className="avatar" src={img} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Tooltip;
