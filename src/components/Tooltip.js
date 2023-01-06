import React from "react";

function Tooltip({ x, y, visible, name }) {
  return (
    <div>
      {visible && (
        <div style={{ left: x, top: y }} className="tooltip">
          {name}
        </div>
      )}
    </div>
  );
}

export default Tooltip;
